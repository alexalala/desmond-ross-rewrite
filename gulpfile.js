var gulp = require('gulp');

var	watch = require('gulp-watch');
var sass = require('gulp-sass');
var minify = require('gulp-minify');


gulp.task('sass', function () {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('compress', function() {
  gulp.src('./src/js/*.js')
    .pipe(minify({
        ext:{
            min:'.js'
        },
    }))
    .pipe(gulp.dest('./dist/js/'))
});

gulp.task('watch', function() { 
	gulp.watch('./src/sass/*.scss', ['sass']);
	gulp.watch('./src/js/*.js', ['compress']);
});