'use strict';

import gulp     from 'gulp';
import webpack  from 'webpack-stream';
import path     from 'path';
import sync     from 'run-sequence';
import serve    from 'browser-sync';
import rename   from 'gulp-rename';
import template from 'gulp-template';
import fs       from 'fs';
import yargs    from 'yargs';
import lodash   from 'lodash';
import historyApiFallback from 'connect-history-api-fallback';

let reload = () => serve.reload();
let root = 'client';

// helper method for resolving paths
let resolveToApp = (glob) => {
  glob = glob || '';
  return path.join(root, 'app', glob); // app/{glob}
};

let resolveToComponents = (glob) => {
  glob = glob || '';
  return path.join(root, 'app/components', glob); // app/components/{glob}
};

let resolveToFactories = (glob) => {
  glob = glob || '';
  return path.join(root, 'app/common/factories', glob); // app/factories/{glob}
};

let resolveToServices = (glob) => {
  glob = glob || '';
  return path.join(root, 'app/common/services', glob); // app/services/{glob}
};

let resolveToFilters = (glob) => {
  glob = glob || '';
  return path.join(root, 'app/common/filters', glob); // app/services/{glob}
};

let cap = (val) => {
  return val.charAt(0).toUpperCase() + val.slice(1);
};

let injectIntoTemplates = (blankTemplates, name, destPath) => {
  return gulp.src(blankTemplates)
    .pipe(template({
      name: name,
      upCaseName: cap(name)
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
};

// map of all paths
let paths = {
  js: [
    resolveToComponents('**/*!(.spec.js).js'),
    resolveToFilters('**/*!(.spec.js).js')
  ], // exclude spec files
  // styl: resolveToApp('**/*.styl'), // stylesheets
  styl: path.join(root, '**/*.styl'),
  html: [
    resolveToApp('**/*.html'),
    path.join(root, 'index.html')
  ],
  entry: path.join(root, 'app/app.js'),
  output: root,
  blankComponentTemplates: path.join(__dirname, 'generator', 'component/**/*.**'),
  blankFactoryTemplates: path.join(__dirname, 'generator', 'factory/**/*.**'),
  blankServiceTemplates: path.join(__dirname, 'generator', 'service/**/*.**'),
  blankFilterTemplates: path.join(__dirname, 'generator', 'filter/**/*.**')
};

// use webpack.config.js to build modules
gulp.task('webpack', () => {
  return gulp.src(paths.entry)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.output));
});

gulp.task('serve', () => {
  serve({
    port: process.env.PORT || 4000,
    open: false,
    middleware: [historyApiFallback()],
    server: { baseDir: root }
  });
});

gulp.task('watch', () => {
  let allPaths = [].concat([paths.js], paths.html, [paths.styl]);
  gulp.watch(allPaths, ['webpack', reload]);
});

gulp.task('component', () => {
  let name = yargs.argv.name;
  let parentPath = yargs.argv.parent || '';
  let destPath = path.join(resolveToComponents(), parentPath, name);
  injectIntoTemplates(paths.blankComponentTemplates, name, destPath);
});

gulp.task('factory', () => {
  let name = yargs.argv.name;
  let parentPath = yargs.argv.parent || '';
  let destPath = path.join(resolveToFactories(), parentPath, name);
  injectIntoTemplates(paths.blankFactoryTemplates, name, destPath);
});

gulp.task('service', () => {
  let name = yargs.argv.name;
  let parentPath = yargs.argv.parent || '';
  let destPath = path.join(resolveToServices(), parentPath, name);
  injectIntoTemplates(paths.blankServiceTemplates, name, destPath);
});

gulp.task('filter', () => {
  let name = yargs.argv.name;
  let parentPath = yargs.argv.parent || '';
  let destPath = path.join(resolveToFilters(), parentPath, name);
  injectIntoTemplates(paths.blankFilterTemplates, name, destPath);
});

gulp.task('default', (done) => {
  sync('webpack', 'serve', 'watch', done);
});
