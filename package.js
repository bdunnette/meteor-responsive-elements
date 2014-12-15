Package.describe({
  name: 'bdunnette:responsive-elements',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: 'https://github.com/bdunnette/meteor-responsive-elements'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.1');
  api.use('jquery');
  api.addFiles('responsive-elements.js', 'client');
});