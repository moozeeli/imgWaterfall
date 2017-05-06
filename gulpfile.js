
var gulp = require('gulp')
var uglify = require('gulp-uglify')
var connect   = require('gulp-connect')

gulp.task('default',['server','auto']);

// 压缩文件
gulp.task('jsUglify',function(){
	gulp.src('src/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist'))
	.pipe(gulp.dest('test/js'))
	.pipe(connect.reload())
	console.log("js代码压缩完成")
})

// 监听修改
gulp.task('auto',function(){
	// 源码有改动就进行压缩以及热刷新
	gulp.watch('src/*.js',['jsUglify'])
	gulp.watch('test/css/*',['reload'])
	gulp.watch('test/index.html',['reload'])
})

gulp.task('reload',function(){
	gulp.src('test/*')
		.pipe(connect.reload())
	console.log('html change')
})

// gulp服务
gulp.task('server',function(){
	connect.server({
		root:'test',
		livereload:true
	})
})



