Package.describe({
  name: 'billyvg:core-js',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Core-js shims - except for Number constructor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Opstarts/meteor-core-js',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'core-js': '1.2.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.addFiles('core-js.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('billyvg:core-js');
  api.addFiles('core-js-tests.js');
});
