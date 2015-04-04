var gulp  = require('gulp');
var babel = require('gulp-babel');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');

const SOURCE = ['app/src/**/*.js'];

gulp.task('babel', function () {
  return gulp.src(SOURCE)
    .pipe(babel())
    .pipe(gulp.dest('dist/src/'));
});

gulp.task('jscs', function () {
  return gulp.src(SOURCE)
    .pipe(jscs());
});
 
gulp.task('lint', function() {
  return gulp.src(SOURCE)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});