'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglifycss = require('gulp-uglifycss');
// var cssnano = require('gulp-cssnano');
//var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var gcmq = require('gulp-group-css-media-queries');
var criticalCss = require('gulp-penthouse');

var config = {
  styles: {
    src: './src/scss/**/*.scss',
    dest: './dist/css/'
  }
};

gulp.task('scss', function () {
  return gulp.src(config.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass(
      {
        unixNewlines: true,
        outputStyle: 'compressed'  // nested | compact | compressed | expanded}
      }).on('error', sass.logError))
    .pipe(gcmq())
    .pipe(autoprefixer({
      browsers: ['> 5%'],
      cascade: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.styles.dest));
});

gulp.task('critical-min', function () {
  return gulp.src(config.styles.dest + 'critical.css')
    .pipe(gcmq())
    .pipe(uglifycss())
    .pipe(gulp.dest(config.styles.dest));
});

// gulp.task('js', function () {
//   return gulp.src('./kotenko_core/cartridge/static/default/js/**/*.js')
//     //.pipe(sourcemaps.init())
//     .pipe(concat('app1.js'))
//     //.pipe(sourcemaps.write())
//     .pipe(gulp.dest('./kotenko_core/cartridge/static/default/js'));
// });

gulp.task('critical-css', function () {
  return gulp.src(config.styles.dest + 'style.css')
    .pipe(criticalCss({
      out: 'critical.css',
      url: 'http://localhost:63343/first/index.html?_ijt=v50j0sgft1u648785rsk6g4gia',
      width: 1300,
      height: 800,
      strict: true,
      userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
    }))
    .pipe(gulp.dest(config.styles.dest));
});

gulp.task('watch', function () {
  gulp.watch('./src/scss/**/*.scss', ['scss']);
});

/**
 * Invoke default tasks
 */
gulp.task('default', ['scss']);
