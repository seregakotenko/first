'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
//var uglifycss = require('gulp-uglifycss');
var cssnano = require('gulp-cssnano');
//var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

var gcmq = require('gulp-group-css-media-queries');

gulp.task('scss', function () {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['ie 10'],
            cascade: false
        }))
        .pipe(gcmq())
        //.pipe(uglifycss())
        //.pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css'));
});

// gulp.task('js', function () {
//   return gulp.src('./kotenko_core/cartridge/static/default/js/**/*.js')
//     //.pipe(sourcemaps.init())
//     .pipe(concat('app1.js'))
//     //.pipe(sourcemaps.write())
//     .pipe(gulp.dest('./kotenko_core/cartridge/static/default/js'));
// });

gulp.task('watch', function () {
    gulp.watch('./src/scss/**/*.scss', ['scss']);
});
