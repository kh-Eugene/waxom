'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var swig = require('gulp-swig');

gulp.task('sass', function () {
    gulp.src('./src/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build'));
});

gulp.task('swig', function() {
    gulp.src('./src/index.html')
        .pipe(swig({defaults: { cache: false }}))
        .pipe(gulp.dest('build/'));
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.scss', ['sass', 'swig']);
});

gulp.task('default', ['watch', 'sass', 'swig']);