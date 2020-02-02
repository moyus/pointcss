const gulp = require('gulp')
const sass = require('gulp-sass')
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
  autoprefixer(),
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
    .pipe(notify('pointcss build successfully.'))
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

gulp.task('docs:scss', function () {
  return gulp.src('./docs/src/scss/style.scss')
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

gulp.task('docs:html', function () {
  return gulp.src([
      'docs/src/**/*.md'
    ])
    .pipe(nunjucksRender({
      "path": ["docs/src/_templates"],
      data: 'docs/src/data.json'
    }))
    .pipe(gulp.dest('./docs'))
    .on('end', browserSync.reload)
})

gulp.task('docs:assets', function () {
  return gulp.src('./docs/src/assets/**/*')
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

  gulp.watch('./docs/src/scss/*.scss', gulp.series('docs:scss'))

  gulp.watch([
    './docs/src/_templates/*',
    './docs/src/**/*.md'
  ], gulp.series('docs:html'))
  
  gulp.watch(['./docs/src/assets/**/*'], gulp.series('docs:assets'))
})

/**
 * Scripts
 */
gulp.task('docs', gulp.series('docs:scss', 'docs:assets', 'docs:html'))
gulp.task('dev', gulp.series('build', 'docs', 'serve', 'watch'))
gulp.task('default', gulp.series('build', 'report'))
