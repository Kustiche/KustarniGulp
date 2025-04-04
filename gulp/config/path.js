import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

export const buildFolder = `./build`;
export const srcFolder = `./src`;

export const path = {
	build: {
		html: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
		resources: `${buildFolder}/resources/`,
	},

	src: {
		html: `${srcFolder}/html/*.html`,
		scss: `${srcFolder}/scss/style.scss`,
		resources: `${srcFolder}/resources/**/*.*`,
	},

	watch: {
		html: `${srcFolder}/html/**/*.html`,
		scss: `${srcFolder}/scss/style.scss`,
	},

	clean: buildFolder,
	buildFolder: buildFolder,
};
