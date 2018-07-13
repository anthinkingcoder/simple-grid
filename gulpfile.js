const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('default', () => {
  gulp.src('static/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('static/'))
});

