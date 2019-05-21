/*jshint esversion: 9 */

let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
    // Folder with files to minify
    return gulp.src('src/css/*.css')
    //The method pipe() allow you to chain multiple tasks together 
    //I execute the task to minify the files
   .pipe(cleanCSS())
   //I define the destination of the minified files with the method dest
   .pipe(gulp.dest('dist'));
});