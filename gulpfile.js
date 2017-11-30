var gulp = require("gulp"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify"),
    clean = require("gulp-clean");

gulp.task("compress", ["clean"], function() {
    return gulp.src("js/*.js")
        .pipe(uglify({mangle:true}))
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest("js"));
});

gulp.task("clean", function() {
    return gulp.src("js/*.min.js", {read: false})
        .pipe(clean());
});

gulp.task("default", ["clean", "compress"]);
