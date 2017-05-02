var gulp = require('gulp');
	watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function(){ 
	gulp.watch('./src/sass/*.scss', ['sass']);
});