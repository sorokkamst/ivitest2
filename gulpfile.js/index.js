'use strict';

const tasks = require('require-dir')('./tasks');
const { clean, fonts, pug, styles, scripts, images, webp, icons } = tasks;
const { zip, server, watcher, lintspaces } = tasks;

const { series, parallel } = require('gulp');

const build = series(
  clean,
  parallel(fonts, pug, styles, scripts, images, webp, icons)
);

exports.zip = series(zip);
exports.lintspaces = series(lintspaces);
exports.build = build;
exports.default = series(build, server, watcher);
