'use strict';
var gulp  = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('gulp-browatchify');
var reactify = require('6to5ify') // reactify transform

// gulp.task('browserify', function () {
//   gulp.src('./app/src/main.js')
//     .pipe(browserify({
//       debug: !process.env.production,
//       transforms:[reactify]
//     }))
//     .pipe(source('bundle.js'))
//     .pipe(gulp.dest('./app/dist'))
// })
// gulp.watch('./app/src/**/*.js', ['browserify']);

// var mocha = require('gulp-mocha');
 
// gulp.task('test', function () {
//     return gulp.src('./test/util.js', {read: false})
//         .pipe(mocha({reporter: 'nyan'}));
// });

var babel = require('gulp-babel');
 
gulp.task('default', function () {
    return gulp.src('app/src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist/src/'));
});

// gulp.task('default', ['browserify']);

// 'use strict';
// var gulp  = require('gulp');
// var babelify = require('babelify');
// var browserify = require('browserify');
// var source = require('vinyl-source-stream');

// gulp.task('browserify', function() {
//     browserify({
//     entries: './app/src/main.js',
//     debug: true
//     })
//     .transform(babelify)
//     .bundle()
//     .pipe(source('output.js'))
//     .pipe(gulp.dest('./dist'));
// });

// gulp.task('default', ['browserify']);