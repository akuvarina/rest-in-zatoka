const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

function imgSquash() {
    return gulp .src("./img/**/*.*")
        .pipe(imagemin())
        .pipe(gulp.dest("./public/img"));
}

gulp.task("imgSquash", imgSquash);
gulp.task("watch", () => {
    gulp.watch("./img/*", imgSquash);
});

gulp.task("default", gulp.series("imgSquash", "watch"));
