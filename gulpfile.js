var gulp = require('gulp');
var	jade = require('gulp-jade');
var browserify = require('gulp-browserify');


// jade
gulp.task('jade', function() {
	// usando jade()	
	gulp.src('node_modules/src/templates/**/*.jade')
	.pipe(jade())
	.pipe(gulp.dest('builds/development/views'));
});
//js
gulp.task('js', function() {
	
	gulp.src('node_modules/src/js/collections/entry.js')
	.pipe(browserify({ debug:true}))
	.pipe(gulp.dest('builds/development/js'));
});