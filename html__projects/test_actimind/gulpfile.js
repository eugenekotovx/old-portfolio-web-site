

const
gulp = require('gulp'),
watch = require('gulp-watch'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
browserSync = require('browser-sync').create(),
imagemin = require('gulp-imagemin'),
sourcemaps = require('gulp-sourcemaps'),
plumber = require('gulp-plumber'),
rigger = require('gulp-rigger'),
uglify = require('gulp-uglify'),
cleanCSS = require('gulp-clean-css'),
concat = require('gulp-concat'),
rename = require('gulp-rename')



function htmlBuild () {
return gulp.src(['app/*.html'])
    .pipe(plumber())
    .pipe(rigger())
    .pipe(gulp.dest(['app']))
    .pipe(gulp.dest(['build']))
    .pipe(browserSync.reload({stream: true}))
}

exports.htmlBuild = htmlBuild;
gulp.task(htmlBuild)


function fonts () {
return gulp.src(["app/css/fonts/*"])
    .pipe(gulp.dest('build/css/fonts'))
}
exports.fonts = fonts
gulp.task(fonts)


// js dev //

function scripts () {
return gulp.src(['app/js/lib/*.js'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest(['app/js']))
}

exports.scripts = scripts;
gulp.task(scripts)


// js build //

function jsBuild () {
return gulp.src(["app/js/main.js"])
    .pipe(plumber())
    .pipe(rigger())
    .pipe(gulp.dest(['build/js'], ['app/js']))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest(['build/js']))
    .pipe(browserSync.reload({ stream: true }));
}
exports.jsBuild = jsBuild;
gulp.task(jsBuild)


// build sass //

function gulpSass () { 
return gulp.src(['app/sass/**/style.sass', 'app/scss/style.scss'])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest(['build/css']))
    .pipe(gulp.dest(['app/css']))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(['app/css']))
    .pipe(gulp.dest(['build/css']))
    .pipe(browserSync.stream());

}

exports.gulpSass = gulpSass;
gulp.task(gulpSass)

// image min //

function imgmin() {
return gulp.src(['app/img/*'])
    .pipe(imagemin())
    .pipe(gulp.dest(['build/img']))
}

exports.imgmin = imgmin;
gulp.task(imgmin)

// browserSync config //
function webserver() {

browserSync.init({
    baseDir: "./app",
    server: "./app"
});

};

exports.webserver = webserver;
gulp.task(webserver);

function buildserver() {
    browserSync.init({
        baseDir: "./build",
        server: "./build"
    })
}

exports.buildserver = buildserver;
gulp.task(buildserver)


// gulp-watch plugin //



function gulpWatch() {
gulp.watch('./app/scss/**/*.scss', gulp.series('gulpSass'));
gulp.watch('./build/css/*.css')
gulp.watch('./app/css/*.css')
gulp.watch('./app/css/img/*.*', browserSync.reload);
gulp.watch('./*.html', browserSync.reload)

};

exports.gulpWatch = gulpWatch;
gulp.task(gulpWatch)






gulp.task('dev', gulp.parallel(gulpWatch, webserver, scripts, gulpSass));
gulp.task('build', gulp.parallel(htmlBuild,fonts, gulpSass, jsBuild, imgmin, buildserver))