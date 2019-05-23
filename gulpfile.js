/*jshint esversion: 9 */

const { series, parallel, src, dest } = require('gulp');
const del = require('delete');
const cleanCSS = require('gulp-clean-css');
const cleanJS = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const rev = require('gulp-rev');
const revRewrite = require('gulp-rev-rewrite');


function clean(cb) {
    del(['dist/*']);
    del(['build/*']);
    cb();
}

function minimiseCSS() {
    return src('src/css/*.css')
        .pipe(concat('style.css'))
        .pipe(cleanCSS())
        .pipe(rename('style.min.css'))
        .pipe(dest('build/css/'));
}

function minimiseJS() {
    return src('src/js/*.js')
        .pipe(cleanJS())
        .pipe(rename({
            suffix: '-min'
        }))
        .pipe(dest('build/js/'));
}

function revision() {
        return src('build/**/*.*')
        .pipe(rev())
        .pipe(dest('dist/'))
        .pipe(rev.manifest())
        .pipe(dest('build/'));

}

function revisionRewrite(){
    const manifest = src('build/rev-manifest.json');
    
    return src('src/index.html')
    .pipe(revRewrite({manifest}))
    .pipe(dest('dist/'));

}

function copy() {
    return src('./src/images/*')
        .pipe(dest('dist/images/'));
}


exports.build = series(clean, minimiseCSS, minimiseJS, revision, revisionRewrite, copy);