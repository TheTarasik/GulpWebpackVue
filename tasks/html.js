import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import fileinclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import size from 'gulp-size';

import settings from '../settings.json';

const html = () => {
    return gulp.src(`./${settings.path.source}/${settings.dev.files.html.folder}/${settings.dev.files.html.entry}`)
        .pipe(plumber({
            errorHandler: notify.onError((e) => ({
                title: 'HTML',
                message: e.message
            }))
        }))
        .pipe(fileinclude()) 
        .pipe(htmlmin(settings.plugins[global.isDevelopment ? 'dev' : 'build'].htmlmin.config))
        .pipe(size({ title: 'After compress' }))
        .pipe(gulp.dest(`./${settings.path.build}/${settings.build.files.html.output}`));
};

export default html;