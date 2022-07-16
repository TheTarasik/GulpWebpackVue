import gulp from 'gulp';
import gulpIf from 'gulp-if';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import imagemin from 'gulp-imagemin';

import settings from '../settings.json';

const images = () => {
    return gulp.src(`./${settings.path.source}/${settings.dev.files.images.folder}/${settings.dev.files.images.entry}`)
        .pipe(plumber({
            errorHandler: notify.onError((e) => ({
                title: 'Images',
                message: e.message
            }))
        }))
        .pipe(gulpIf(!global.isDevelopment, imagemin()))
        .pipe(gulp.dest(`./${settings.path.build}/${settings.build.files.images.output}`));
};

export default images;