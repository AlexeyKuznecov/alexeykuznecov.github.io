const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

gulp.task('scss', function() {
	return gulp.src('src/scss/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./public/css'))
	.pipe(browserSync.stream());
});
gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: './public'
		}
	});
	gulp.watch('./src/scss/**/*.scss', gulp.series('scss'));
	gulp.watch(['./public/*.html', './public/js/*.js']).on('change', browserSync.reload);
});

gulp.task('default', gulp.series('scss', 'serve'));