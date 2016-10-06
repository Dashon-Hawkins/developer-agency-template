'use strict';

var gulp = require('gulp');

var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var htmlmin = require("gulp-htmlmin");
var sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function(){
    return gulp.src('assets/css/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('assets/css/dist'));
});

gulp.task('js', function(){
    return gulp.src('assets/js/*.js')
      .pipe(uglify())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('assets/js/dist'));
});

gulp.task('html', function(){
    return gulp.src('dev-index.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(rename({basename: 'index'}))
      .pipe(gulp.dest('/'));
});

gulp.task('watch', function(){
    gulp.watch('assets/css/*.scss', ['sass']);
    gulp.watch('assets/js/*.js', ['js']);
    gulp.watch('dev-index.html', ['html']);
});

gulp.task('default', ['watch']);