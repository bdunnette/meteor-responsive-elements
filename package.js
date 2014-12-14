Package.describe({
  name: 'bdunnette:responsive-elements',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.use('jquery');
  api.addFiles('responsive-elements.js','client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('bdunnette:responsive-elements');
  api.addFiles('bdunnette:responsive-elements-tests.js');
});
