'use strict';
const gulp = require('gulp');
const pkg = require('./package.json');
const $ = require('gulp-load-plugins')();
const gulpSequence = require('gulp-sequence');

gulp.task('clean', function () {
  return gulp.src(['.tmp', 'css'], {
    read: false
  }).pipe($.clean());
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe($.sass.sync().on('error', $.sass.logError))
    .pipe($.size())
    .pipe(gulp.dest('./css'));
});

gulp.task('autoprefixer', function () {
  return gulp.src('css/**/*.css')
    .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe($.size())
    .pipe(gulp.dest('css'));
});

gulp.task('css', function () {
  return gulp.src('css/**/*.css')
    .pipe($.sourcemaps.init())
    .pipe($.cssmin())
    .pipe($.concat(pkg.name + '.css'))
    .pipe($.sourcemaps.write('.'))
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe($.size())
    .pipe(gulp.dest('css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('autoprefixer:watch', function () {
  gulp.watch('./css/**/*.css', ['autoprefixer']);
});

gulp.task('watch', ['sass:watch', 'autoprefixer:watch']);
gulp.task('default', gulpSequence('clean', 'sass', 'autoprefixer', 'css'));
