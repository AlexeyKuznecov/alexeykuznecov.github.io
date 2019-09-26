const 	gulp = require('gulp'),
		sass = require('gulp-sass'),
		sourcemaps = require('gulp-sourcemaps'),
		autoprefixer = require('gulp-autoprefixer'),
		browserSync = require('browser-sync').create(),
		tinypng = require('gulp-tinypng-compress');

gulp.task('scss', function() {
	return gulp.src('src/scss/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(autoprefixer({
		browers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./public/css'))
	.pipe(browserSync.stream());
});
gulp.task('tinypng', function (done) {
    return gulp.src('src/img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'MnSxThojIQVJ3r59bURj0F6wYKMwfPp7',
            sigFile: 'src/tiny/.tinypng-sigs',
            summarize: true,
            log: true
        }).on('error', function(err) {
            console.log(err.message);}))
        .pipe(gulp.dest('public/img'));
        done();
});
gulp.watch('public/img/**/*.{png,jpg,jpeg}', gulp.series('tinypng'));

gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: '../AlexeyKuznecov.github.io/'
		}
	});
	gulp.watch('src/scss/**/*.scss', gulp.series('scss'));
	gulp.watch(['./**/*.html', './public/js/*.js']).on('change', browserSync.reload);
});
gulp.task('default', gulp.series('scss', 'tinypng', 'serve'));

 