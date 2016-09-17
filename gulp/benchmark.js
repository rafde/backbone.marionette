import gulp from 'gulp';
import benchmark from 'gulp-benchmark';

require('../global/jsdom');
require('../global/libraries');

global.MarionetteCurrent = require('../lib/backbone.marionette');

function _benchmark() {
  return gulp.src(
    [
      //setupFile,
      'benchmark/suite/**/**.js'
    ],
    {read: false}
  )
  .pipe(benchmark());
}

gulp.task('benchmark', _benchmark);
