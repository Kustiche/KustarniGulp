import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';
import { clean } from './gulp/tasks/clean.js';
import { server } from './gulp/tasks/server.js';
import { copy } from './gulp/tasks/copy.js';
import { html } from './gulp/tasks/html.js';

global.app = {
	gulp: gulp,
	path: path,
	plugins: plugins,
};

const watchFiles = () => {
	gulp.watch(app.path.watch.html, html);
};

gulp.task('default', gulp.series(clean, gulp.parallel(server, copy, html, watchFiles)));
