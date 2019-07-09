const 	gulp = require('gulp'),
		sass = require('gulp-sass'),
		sourcemaps = require('gulp-sourcemaps'),
		autoprefixer = require('gulp-autoprefixer'),
		browserSync = require('browser-sync').create();

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
gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: './public'
		}
	});
	gulp.watch('src/scss/**/*.scss', gulp.series('scss'));
	gulp.watch(['./public/*.html', './public/js/*.js']).on('change', browserSync.reload);
});
gulp.task('default', gulp.series('scss', 'serve'));