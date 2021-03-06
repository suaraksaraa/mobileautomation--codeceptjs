exports.config = {
  output: './output',
  helpers: {
    Appium: {
      host: 'localhost',
      port: 4723,
      app: 'http://dl.apk-cloud.com/dl5/apk/2020/12/20/io.flutter.demo.gallery_20801.apk?f=Flutter%20Gallery_2.8.1_apk-dl.com.apk&id=io.flutter.demo.gallery&dl=2',
      platform: 'Android',
      desiredCapabilities: {
        platformName: 'Android',
        platformVersion: '9',
        deviceName: 'Mi A2 Lite',
        appActivity: 'io.flutter.demo.gallery.MainActivity'
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    }
  },
  tests: './step_definitions/steps.js',
  name: 'mobileautomation--codeceptjs'
}