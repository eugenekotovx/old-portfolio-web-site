<<<<<<< HEAD
// dev requires //

const
    gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    imagemin = require('gulp-imagemin'),
    sourcemaps = require('gulp-sourcemaps')

// build plugins

var csso = require('gulp-csso');



// sass plugin //

function gulpSass(){ 
    return gulp.src(['app/sass/**/*.sass', 'app/scss/**/*.scss'])

        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.stream());

};

exports.gulpSass = gulpSass;
gulp.task(gulpSass)

function imgmin(){
    return gulp.src('app/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'));
}
exports.imgmin = imgmin;
gulp.task(imgmin)

// browserSync config //
function serve() {

    browserSync.init({
        baseDir: "./",
        server: "./"
    });

};
exports.serve = serve;
gulp.task(serve);




// csso minificator //

gulp.task('csso', function () {
    return gulp.src('./app/css/style.css', { allowEmpty: true })
        .pipe(csso())
        .pipe(gulp.dest('./build'));
});

gulp.task('csso-dev', function () {
    return gulp.src('./app/css/style.css', { allowEmpty: true })
        .pipe(csso({
            restructure: false,
            sourceMap: true,
            debug: true
        }))
        .pipe(gulp.dest('./build'));
});


 // gulp-watch plugin //
	


 function gulpWatch() {
    gulp.watch('./app/scss/**/*.scss', gulp.series('gulpSass'));
    gulp.watch('./app//css/img/*.png', browserSync.reload);
    gulp.watch('./*.html', browserSync.reload)

};

exports.gulpWatch = gulpWatch;
gulp.task(gulpWatch)

 gulp.task('start', gulp.parallel(gulpWatch, serve, imgmin));
 

=======
// dev requires //

const
    gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    imagemin = require('gulp-imagemin'),
    sourcemaps = require('gulp-sourcemaps')

// build plugins

var csso = require('gulp-csso');



// sass plugin //

function gulpSass(){ 
    return gulp.src(['app/sass/**/*.sass', 'app/scss/**/*.scss'])

        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.stream());

};

exports.gulpSass = gulpSass;
gulp.task(gulpSass)

function imgmin(){
    return gulp.src('app/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'));
}
exports.imgmin = imgmin;
gulp.task(imgmin)

// browserSync config //
function serve() {

    browserSync.init({
        baseDir: "./",
        server: "./"
    });

};
exports.serve = serve;
gulp.task(serve);




// csso minificator //

gulp.task('csso', function () {
    return gulp.src('./app/css/style.css', { allowEmpty: true })
        .pipe(csso())
        .pipe(gulp.dest('./build'));
});

gulp.task('csso-dev', function () {
    return gulp.src('./app/css/style.css', { allowEmpty: true })
        .pipe(csso({
            restructure: false,
            sourceMap: true,
            debug: true
        }))
        .pipe(gulp.dest('./build'));
});


 // gulp-watch plugin //
	


 function gulpWatch() {
    gulp.watch('./app/scss/**/*.scss', gulp.series('gulpSass'));
    gulp.watch('./app//css/img/*.png', browserSync.reload);
    gulp.watch('./*.html', browserSync.reload)

};

exports.gulpWatch = gulpWatch;
gulp.task(gulpWatch)

 gulp.task('start', gulp.parallel(gulpWatch, serve, imgmin));
 

>>>>>>> 1734e0107ab37e2b8e24dd9c22d797f3d6998e70
 