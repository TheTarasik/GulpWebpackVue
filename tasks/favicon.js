import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

import settings from '../settings.json';

const favicon = () => {
    return gulp.src(`./${settings.path.source}/${settings.dev.files.favicon.folder}/${settings.dev.files.favicon.entry}`)
        .pipe(plumber({
            errorHandler: notify.onError((e) => ({
                title: 'Favicon',
                message: e.message
            }))
        }))
        .pipe(gulp.dest(`./${settings.path.build}/${settings.build.files.favicon.output}`));
};

export default favicon;