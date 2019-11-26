const gulp = require('gulp'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    imagemin = require('gulp-imagemin'),
    imgCompress = require('imagemin-jpeg-recompress'),
    del = require('del'),
    concat = require('gulp-concat')

    function css() {
        return gulp.src('app/scss/**/*.scss')
        .pipe(autoprefixer())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
    }

    function pugHTML() {
        let first =  gulp.src('app/pug/*.pug')
            .pipe(pug({
                pretty: true
            }))
            .pipe(gulp.dest('app'))
        let second = gulp.src('app/pug/pages/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('app/pages'))
        
          
            return first, second
            .pipe(browserSync.stream());
    }

    function watch() {
        browserSync.init({
            server: {
                baseDir: "app/"
            }
        });
        gulp.watch('app/scss/**/*.scss', css);
        gulp.watch('app/pug/**/*.pug', pugHTML);
        
    }

    function imageMin() {
        return gulp.src('app/img/**/*')
        .pipe(imagemin([
          imgCompress({
            loops: 4,
            min: 70,
            max: 80,
            quality: 'high'
          }),
          imagemin.gifsicle(),
          imagemin.optipng(),
          imagemin.svgo()
        ]))
        .pipe(gulp.dest('dist/img'));
    }

    function clean() {
        del.sync('dist')
        done();
    }

    function build(done) {
        gulp.src('app/css/**/*.css')
        .pipe(gulp.dest('dist/css'));

        gulp.src('app/index.html')
        .pipe(gulp.dest('dist/'));
       
        gulp.src('app/js/**/*.js')
        .pipe(gulp.dest('dist/js'));
       
        done();
    }

    gulp.task('watch', watch);
    gulp.task('imageMin', imageMin);
    gulp.task('build', build );