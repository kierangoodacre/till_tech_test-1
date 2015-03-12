var gruntConfig = {
  express: {
    options: {},
    test: {
      options: {
        script: './server.js',
      }
    }
  },
  mochacli: {
    options: {
      require: ['chai'],
      reporter: 'spec',
      timeout: 100000,
      bail: true
    },
    all: ['test/**/*.js', './spec/*.js', './features/*.js']
  },
  run: {
    selenium_server: {
      options: {
        wait: false
      },
      exec: 'selenium-standalone start &>/dev/null'
    }
  },
  watch: {
    files: [
    './public/*',
    './app/*',
    './views/*',
    './spec/*.js',
    './features/*.js'
    ],
    tasks: ['mochacli']
  }
};

module.exports = function(grunt) {

  grunt.initConfig(gruntConfig);

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-cli');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-run');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('test', ['mochacli']);
  grunt.registerTask('fulltest',
    ['express:test', 'run:selenium_server', 'mochacli', 'stop:selenium_server']);
};