var gulp = require('gulp'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  notify = require("gulp-notify"),
  uglify = require('gulp-uglify'),
  connect = require('gulp-connect');


gulp.task('styles:dev', function () {
  return gulp.src([
      'src/sass/style.scss'
    ])
    .pipe(sourcemaps.init())
    .pipe(sass({
      style: 'expanded'
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css/'))
    .pipe(notify({
      message: 'styles task complete'
    }));
});

gulp.task('styles:dist', function () {
  return gulp.src([
      'src/sass/style.scss'
    ])
    .pipe(sass({
      outputstyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('css/'))
    .pipe(notify({
      message: 'styles build task complete'
    }));
});


gulp.task('scripts:dev', function () {
  console.log('called scripts-compile');
  return gulp.src(['src/js/**/*.js'
    ])
    .pipe(concat('script.js'))
    .pipe(gulp.dest('js/'))
    .pipe(notify({
      message: "scripts done!",
      onlast: true
    }));
});
gulp.task('scripts:dist', function () {
  console.log('called scripts-compile');
  return gulp.src(['src/js/**/*.js'
    ])
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
    .pipe(notify({
      message: "scripts done!",
      onlast: true
    }));
});


// when you run npm run dev
gulp.task('dev', ['scripts:dev', 'styles:dev']);

// when you run npm run dist
gulp.task('dist', ['scripts:dist', 'styles:dist']);

// when you run npm run watch
gulp.task('default', ['dev'], function () {

  gulp.watch('src/sass/**/*.scss', function () {
    setTimeout(function () {
      gulp.start('styles:dev')
    }, 100)
  });

  gulp.watch('src/js/**/*.js', function () {
    setTimeout(function () {
      gulp.start('scripts:dev')
    }, 100)
  });


});
