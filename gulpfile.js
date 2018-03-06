const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const rename = require('gulp-rename')
const cssnano = require('gulp-cssnano')
const sizereport = require('gulp-sizereport')
const notify = require('gulp-notify')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const flexbugsFixes = require('postcss-flexbugs-fixes')
const browserSync = require('browser-sync').create()
const nunjucksRender = require('gulp-nunjucks-md')

const postCssOpts = [
  autoprefixer({ browsers: [
    'Chrome >= 35',
    'Firefox >= 38',
    'Edge >= 12',
    'Explorer >= 10',
    'iOS >= 8',
    'Safari >= 8',
    'Android >= 4',
    'Opera >= 12'
  ]}),
  flexbugsFixes
]

nunjucksRender.setDefaults({
  marked: {
    highlight: function (code) {
      return require('highlight.js').highlightAuto(code).value
    }
  }
})

/**
 * Build
 */
gulp.task('build', function () {

  return gulp.src('./point.scss')
    .pipe(sass({
      outputStyle: 'expanded',
      precision: 8
    }).on('error', sass.logError))
    .pipe(postcss(postCssOpts))
    .pipe(gulp.dest('./dist'))
    .pipe(gulp.dest('./site/css'))
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist'))
    .pipe(notify('Point build successfully.'))
})

/**
 * Size Report
 */
gulp.task('report', function () {
  return gulp.src('./dist/*')
    .pipe(sizereport({
      gzip: true
    }))
})

// Docs Tasks
gulp.task('docs:scss', function () {
  return gulp.src('./docs/scss/docs.scss')
    .pipe(sass({
      outputStyle: 'expanded',
      precision: 8
    }).on('error', sass.logError))
    .pipe(postcss(postCssOpts))
    .pipe(gulp.dest('./site/css'))
    .pipe(browserSync.stream())
})

gulp.task('serve', function (done) {
  browserSync.init({
    "server": {
      "baseDir": "./site"
    }
  })
  done()
})

gulp.task('docs:nunjucks', function () {
  return gulp.src([
      'docs/index.html',
      'docs/**/*.md'
    ])
    .pipe(nunjucksRender({
      "path": ["./docs/_templates"],
      data: 'docs/data.json'
    }))
    .pipe(gulp.dest('./site'))
    .on('end', browserSync.reload)
})

gulp.task('docs:assets', function () {
  return gulp.src('./docs/assets/**/*')
      .pipe(gulp.dest('./site'))
})

/**
 * Watcher
 */
gulp.task('watch', function () {
  gulp.watch([
    './point.scss',
    './scss/**/*.scss'
  ], gulp.series('build'))

  gulp.watch('./docs/scss/*.scss', gulp.series('docs:scss'))

  gulp.watch([
    './docs/index.html',
    './docs/_templates/*',
    './docs/**/*.md'
  ], gulp.series('docs:nunjucks'))
  
  gulp.watch(['./docs/assets/**/*'], gulp.series('docs:assets'))
})

/**
 * Scripts
 */
gulp.task('docs', gulp.series('docs:scss', 'docs:assets', 'docs:nunjucks'))
gulp.task('dev', gulp.series('build', 'docs', 'serve', 'watch'))
gulp.task('default', gulp.series('build', 'docs', 'report'))
