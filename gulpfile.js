const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const cssnano = require('gulp-cssnano')
const uglify = require('gulp-uglify')
const sizereport = require('gulp-sizereport')
const notify = require('gulp-notify')
const postcss = require('gulp-postcss')
const header = require('gulp-header')
const del = require('del')
const autoprefixer = require('autoprefixer')
const flexbugsFixes = require('postcss-flexbugs-fixes')
const browserSync = require('browser-sync').create()
const marked = require('marked')
const nunjucksRender = require('gulp-nunjucks-md')
const pkg = require('./package.json')
let isProd = true;

const postCssOpts = [
  autoprefixer(),
  flexbugsFixes
]

const banner = ['/*!',
' * <%= pkg.name %>',
' * @version v<%= pkg.version %>',
' * @link <%= pkg.homepage %>',
' * @author <%= pkg.author %>',
' * @license <%= pkg.license %>',
' */',
''].join('\n');

const renderer = new marked.Renderer();
renderer.heading = function (text, level) {
  const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

  if (level === 1) {
    text = `<span>${text}</span>`
  } else if (level === 2) {
    text = `
    <a name="${escapedText}" class="anchor" href="#${escapedText}"></a>
    ${text}
    `
  }

  return `<h${level} id="${escapedText}">${text}</h${level}>`;
};

nunjucksRender.setDefaults({
  marked: {
    renderer
  }
})

/**
 * Build
 */
gulp.task('build:css', function () {

  return gulp.src('./point.scss')
    .pipe(sass({
      outputStyle: 'expanded',
      precision: 8
    }).on('error', sass.logError))
    .pipe(postcss(postCssOpts))
    .pipe(header(banner, { pkg : pkg }))
    .pipe(gulp.dest('./dist'))
    .pipe(gulp.dest('./docs/css'))
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist'))
    .pipe(notify('css build successfully.'))
})

gulp.task('build:js', function () {

  return gulp.src('./js/point.js')
    .pipe(header(banner, { pkg : pkg }))
    .pipe(gulp.dest('./dist'))
    .pipe(gulp.dest('./docs/js'))
    .pipe(uglify())
    .pipe(header(banner, { pkg : pkg }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist'))
    .pipe(notify('js build successfully.'))
})

gulp.task('docs:css', function () {
  return gulp.src('./docs/src/_scss/style.scss')
    .pipe(sass({
      outputStyle: 'expanded',
      precision: 8
    }).on('error', sass.logError))
    .pipe(postcss(postCssOpts))
    .pipe(gulp.dest('./docs/css'))
    .pipe(browserSync.stream())
})

gulp.task('docs:html', function () {
  return gulp.src([
      'docs/src/content/*.md'
    ])
    .pipe(nunjucksRender({
      "path": ["docs/src/_templates"],
      data: {
        project: {
          title: 'POINTCSS',
          description: pkg.description,
          url: isProd ? pkg.website : 'http://localhost:3000',
          github: pkg.homepage,
          version: pkg.version,
          keywords: pkg.keywords.join(','),
          download: pkg.homepage + '/releases',
          license: pkg.homepage + '/blob/master/LICENSE',
          hash: isProd ? Date.now() : false,
        }
      }
    }))
    .pipe(gulp.dest('./docs'))
    .on('end', browserSync.reload)
})

gulp.task('docs:assets', function () {
  return gulp.src('./docs/src/_assets/**/*')
    .pipe(gulp.dest('./docs'))
})

/**
 * Dev
 */
gulp.task('serve', function (done) {
  browserSync.init({
    "server": {
      "baseDir": "./docs"
    }
  })
  done()
})

gulp.task('watch', function () {
  gulp.watch([
    './point.scss',
    './scss/**/*.scss'
  ], gulp.series('build:css'))

  gulp.watch([
    './js/**/*.js'
  ], gulp.series('build:js'))

  gulp.watch([
    './docs/src/_templates/*',
    './docs/src/**/*.md'
  ], gulp.series('docs:html'))

  gulp.watch('./docs/src/_scss/**/*.scss', gulp.series('docs:css'))
  gulp.watch(['./docs/src/_assets/**/*'], gulp.series('docs:assets'))
})

/**
 * Common
 */
gulp.task('report', function () {
  return gulp.src('./dist/*')
    .pipe(sizereport({
      gzip: true
    }))
})

gulp.task('clean', function () {
  return del(['docs/**', '!docs/src']);
})

/**
 * Scripts
 */
gulp.task('build', gulp.series('build:css', 'build:js'))
gulp.task('docs', gulp.series('docs:css', 'docs:assets', 'docs:html'))
gulp.task('dev', gulp.series(
  function (done) {
    isProd = false
    done()
  },
  'build', 'docs', 'serve', 'watch'
))
gulp.task('default', gulp.series('clean', 'build', 'docs', 'report'))
