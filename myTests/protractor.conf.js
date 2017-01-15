//jshint strict: false
exports.config = {
  framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/',
    allScriptsTimeout: 11000,


  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};
