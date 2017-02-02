var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
  //Point to the main JS file
  browserify('./src/js/main.js')
  .transform('reactify')
  .bundle()
  .pipe(source('main.js'))

  //This will create the folder automatically
  .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
  gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));

  //Target all files in the css folder
  gulp.src('src/css/*.*')
      .pipe(gulp.dest('dist/css'));
  gulp.src('src/js/vendors/*.*')
      .pipe(gulp.dest('dist/js'));
})

//Passing in array of tasks
gulp.task('default', ['browserify', 'copy'], function() {
  //Auto compile as changes are made
  return gulp.watch('src/**/*.*', ['browserify', 'copy']);
});