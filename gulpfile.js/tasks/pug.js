'use strict';

const { paths: { source, desination } } = require('../settings');
const { src, dest } = require('gulp');
const pugc = require('gulp-pug');

const pug = () => {
  return src(`${source.root}*.pug`)
    .pipe(pugc())
    .pipe(dest(desination.root));
};

module.exports = pug;
