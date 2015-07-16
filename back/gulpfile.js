var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');

var jsFiles = ['/js/**/*.*'];

gulp.task('minify',function(){
  gulp.src(jsFiles)
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('js/'));
});

gulp.task('sass',function(){
  //TODO implementar funcionalidade com gulp-sass
});

gulp.task('default',['minify']);
