var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var reload = browserSync.reload;
var rename = require('gulp-rename');
var cssmin = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('sass', function () {
    return gulp.src("./src/scss/*.scss")
        .pipe(sass({
            sourceMap: false,
            errLogToConsole: true,
            includePaths: ['node_modules']
        }))
        .pipe(cssmin())
        .pipe(postcss(
            [autoprefixer({
                remove: false
            })
            ]
        ))
        .pipe(gulp.dest("./src/"))
        .pipe(browserSync.stream())
});


// gulp.task('prefixM', function() {
//   return gulp.src("./node_modules/materialize-css/dist/css/materialize.css")
//     .pipe(rename({ suffix: '.min' }))
//     .pipe(gulp.dest("./node_modules/materialize-css/dist/css/"));
// });

// gulp.task('sassM', function() {
//     return gulp.src("./node_modules/materialize-css/sass/*.scss")
//          .pipe(sass({
//             sourceMap: false,
//             errLogToConsole: true,
//             includePaths: ['node_modules']
//         })) 
//         .pipe(cssmin())
//         .pipe(postcss(
//             [autoprefixer({
//                 remove:false
//                 })
//             ]
//         ))
//         .pipe(gulp.dest("./node_modules/materialize-css/dist/css/"))
//         .pipe(browserSync.stream())
// });

// Static server
gulp.task('server', function () {

    browserSync.init({
        server: {
            baseDir: "./../my-app"
        }
    });
    gulp.watch("./src/**/*.scss").on("change", gulp.series('sass'));
    // gulp.watch("./node_modules/materialize-css/sass/**/*.scss").on("change", gulp.series('sassM'));
    // gulp.watch("./node_modules/materialize-css/sass/**/*.scss").on("change", gulp.series('prefixM'));
});









