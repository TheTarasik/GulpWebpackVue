import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

import settings from '../settings.json';

const fonts = () => {
    return gulp.src(`./${settings.path.source}/${settings.dev.files.fonts.folder}/${settings.dev.files.fonts.entry}`)
        .pipe(plumber({
            errorHandler: notify.onError((e) => ({
                title: 'Fonts',
                message: e.message
            }))
        }))
        .pipe(gulp.dest(`./${settings.path.build}/${settings.build.files.fonts.output}`));
};

export default fonts;