const gulp = require('gulp');
const imageMin = require('gulp-imagemin');

function imgCompress() {
  return gulp
    .src("./src/assets/img/**/**/*")
    .pipe(imageMin())
    .pipe(gulp.dest("./src/assets/minimg"));
}

gulp.task("imgCompress", imgCompress);

gulp.task("watch", () => {
  gulp.watch("./src/assets/img/*", imgCompress);
});

gulp.task("default", gulp.series('imgCompress', 'watch'));
