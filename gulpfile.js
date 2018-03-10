var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');


gulp.task("copyHtml", function (){
   gulp.src('src/*.php') 
    .pipe(gulp.dest('dist'));
});


gulp.task('sass', function(){
   gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function (){
   gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});


gulp.task('default', ['sass','copyHtml', 'scripts']);

gulp.task('watch', function(){
   gulp.watch('src/*.php', ['copyHtml'])
    gulp.watch('src/scss/*.scss', ['sass'])
    gulp.watch('src/js/*.js', ['scripts'])
});