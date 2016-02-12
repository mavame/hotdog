var gulp = require('gulp');
var sass = require('gulp-sass');

// toggle to change sass output style
var env = 'dev';

var sassOptions = {
	outputStyle : env === 'dev' ? 'expanded' : 'compressed'
}

// Compile SASS
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

// Watch
gulp.task('watch', function() {
	return gulp.watch('./sass/**/*.scss', ['sass'])
		.on('change', function(event) {
			console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
		});
});

// Default
gulp.task('default', ['sass', 'watch']);