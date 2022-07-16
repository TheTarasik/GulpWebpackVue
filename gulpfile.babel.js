import gulp from 'gulp';
import browserSync from 'browser-sync';
import colors from 'colors';
import settings from './settings.json';
import clear from './tasks/clear';
import html from './tasks/html';
import fonts from './tasks/fonts';
import images from './tasks/images';
import webpack from './tasks/webpack';
import favicon from './tasks/favicon';

global.isDevelopment = process.env.NODE_ENV === 'development';

const server = () => {
	browserSync.init(settings.plugins.dev.browserSync);
};

const watcher = () => {
	gulp.watch(`${settings.path.source}/${settings.dev.files.html.folder}/${settings.dev.files.html.watch}.html`, html).on('all', browserSync.reload);
	
	gulp.watch(`${settings.path.source}/${settings.dev.files.styles.folder}/${settings.dev.files.styles.watch}.${settings.preprocessor}`, webpack).on('all', browserSync.reload);
	
	gulp.watch(`${settings.path.source}/${settings.dev.files.fonts.folder}/${settings.dev.files.fonts.watch}`, fonts).on('all', browserSync.reload);
	
	gulp.watch(`${settings.path.source}/${settings.dev.files.images.folder}/${settings.dev.files.images.watch}`, images).on('all', browserSync.reload);
	
	gulp.watch(`${settings.path.source}/${settings.dev.files.js.watch}`, webpack).on('all', browserSync.reload);

	gulp.watch(`${settings.path.source}/${settings.dev.files.favicon.folder}/${settings.dev.files.favicon.watch}`, favicon).on('all', browserSync.reload);
};

gulp.task(
	'default',
	gulp.series(html, fonts, images, webpack, favicon, gulp.parallel(server, watcher))
);

gulp.task(
	'build',
	gulp.series(clear, html, fonts, images, webpack, favicon)
);