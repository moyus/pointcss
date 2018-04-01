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
    .pipe(gulp.dest('./docs/css'))
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

// Docs Site Tasks
gulp.task('site:scss', function () {
  return gulp.src('./site/scss/style.scss')
    .pipe(sass({
      outputStyle: 'expanded',
      precision: 8
    }).on('error', sass.logError))
    .pipe(postcss(postCssOpts))
    .pipe(gulp.dest('./docs/css'))
    .pipe(browserSync.stream())
})

gulp.task('serve', function (done) {
  browserSync.init({
    "server": {
      "baseDir": "./docs"
    }
  })
  done()
})

gulp.task('site:nunjucks', function () {
  return gulp.src([
      'site/index.html',
      'site/**/*.md'
    ])
    .pipe(nunjucksRender({
      "path": ["./site/_templates"],
      data: 'site/data.json'
    }))
    .pipe(gulp.dest('./docs'))
    .on('end', browserSync.reload)
})

gulp.task('site:assets', function () {
  return gulp.src('./site/assets/**/*')
      .pipe(gulp.dest('./docs'))
})

/**
 * Watcher
 */
gulp.task('watch', function () {
  gulp.watch([
    './point.scss',
    './scss/**/*.scss'
  ], gulp.series('build'))

  gulp.watch('./site/scss/*.scss', gulp.series('site:scss'))

  gulp.watch([
    './site/index.html',
    './site/_templates/*',
    './site/**/*.md'
  ], gulp.series('site:nunjucks'))
  
  gulp.watch(['./site/assets/**/*'], gulp.series('site:assets'))
})

/**
 * Scripts
 */
gulp.task('site', gulp.series('site:scss', 'site:assets', 'site:nunjucks'))
gulp.task('dev', gulp.series('build', 'site', 'serve', 'watch'))
gulp.task('default', gulp.series('build', 'site', 'report'))
