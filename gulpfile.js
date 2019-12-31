var gulp    = require('gulp'),
    pug     = require('gulp-pug'),
    sass    = require('gulp-sass'),
    prefix  = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    concat  = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    notify  = require('gulp-notify');


// Task Html
gulp.task('html', function(done) {
  done();
  return gulp.src('project/index.pug')
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('dist'))
    .pipe(notify('Html In Done'))
    .pipe(livereload());
});

// Task Css
gulp.task('css', function(done) {
  done();
  return gulp.src('project/css/website.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(prefix('last 2 versions'))
    .pipe(concat('main.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
    .pipe(notify('Css In Done'))
    .pipe(livereload());
});

// Task Javascript

gulp.task('js', function (done) {
  done();
  return gulp.src('project/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(notify('JS In Done'))
    .pipe(livereload());
});

// Watch Task
gulp.task('watch', function() {
  require('./server.js');
  livereload.listen();
  gulp.watch('project/index.pug', gulp.series('html'));
  gulp.watch('project/css/**/*.scss', gulp.series('css'));
  gulp.watch('project/js/*.js', gulp.series('js'));

});