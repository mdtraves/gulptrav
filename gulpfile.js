var gulp = require('gulp');


gulp.task("copyHtml", function (){
   gulp.src('src/*.php') 
    .pipe(gulp.dest('dist'));
});

