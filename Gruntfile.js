'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: require('./bower.json'),
    release: {
      options: {
        npm: false,
        file: 'bower.json'
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: process.env.CI
      }
    },
    concat: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      dist: {
        src: ['src/file-type.js'],
        dest: 'dist/file-type.js'
      }
    },
    uglify: {
      options: {
        preserveComments: 'some'
      },
      dist: {
        files: {
          'dist/file-type.min.js': 'dist/file-type.js'
        }
      }
    }
  });

  grunt.registerTask('test', [
    'karma:unit'
  ]);

  grunt.registerTask('build', [
    'concat',
    'uglify'
  ]);

  grunt.registerTask('default', [
    'test'
  ]);
};
