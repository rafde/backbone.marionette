if (!global.document || !global.window) {
  var jsdom = require('jsdom').jsdom;

  global.document = jsdom('<html><head><script></script></head><body></body></html>', {
    FetchExternalResources: ['script'],
    ProcessExternalResources: ['script']
  });

  global.window = document.defaultView;
  global.navigator = global.window.navigator;
}
