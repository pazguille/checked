'use strict';

/**
 * Dependencies.
 */
var mkdirp = require('mkdirp');
var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');

/**
 * Create directory
 */
mkdirp('./dist');
mkdirp('./build');

/**
 * build task
 */
gulp.task('build', function() {
  gulp.src('./styles/*.css')
    .pipe(concat('checked.css'))
    .pipe(gulp.dest('./build/'));
});

/**
 * dist task
 */
gulp.task('dist', function() {
  mkdirp('./dist');
  gulp.src('./styles/*.css')
    .pipe(concat('checked.css'))
    .pipe(minify())
    .pipe(gulp.dest('./dist/'));
});

/**
 * Build task
 */
gulp.task('default', ['build']);