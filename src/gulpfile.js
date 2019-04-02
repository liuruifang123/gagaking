const gulp=require('gulp');

function build(){
    console.log('构建整个项目');
    return Promise.resolve();
}
gulp.task('build',build);