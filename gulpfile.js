const { src, dest, parallel } = require('gulp');
const minifyCSS = require('gulp-csso');
const imagemin = require('gulp-imagemin');
const minify = require('gulp-minify');

function html() {
  return src('html/*.html')
    .pipe(dest('docs/html'))
}

function css() {
  return src('css/*.css')
    .pipe(minifyCSS())
    .pipe(dest('docs/css'))
}

function js() {
  return src('js/*.js', { sourcemaps: true })
    .pipe(minify())
    .pipe(dest('docs/js', { sourcemaps: true }))
}

function assets() {
    return src('assets/**')
      .pipe(imagemin())
      .pipe(dest('docs/assets'))
}

exports.js = js;
exports.css = css;
exports.html = html;
exports.assets = assets;
exports.default = parallel(html, css, js, assets);