'use strict';
var gulp  = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('gulp-browatchify');
var reactify = require('6to5ify') // reactify transform

gulp.task('browserify', function () {
  gulp.src('./app/src/main.js')
    .pipe(browserify({
      debug: !process.env.production,
      transforms:[reactify]
    }))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./app/dist'))
})
gulp.watch('./app/src/**/*.js', ['browserify']);


gulp.task('default', ['browserify']);