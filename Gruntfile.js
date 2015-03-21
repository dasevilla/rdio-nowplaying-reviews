/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      app: {
        files: [
          {
            cwd: 'src/',
            src: ['*.html'],
            dest: 'dist/',
            expand: true
          }
        ]
      },
      bootstrap: {
        files: [
          {
            cwd: 'node_modules/bootstrap/dist/css/',
            src: ['*'],
            dest: 'dist/css/',
            expand: true
          },
          {
            cwd: 'node_modules/bootstrap/dist/fonts/',
            src: ['*'],
            dest: 'dist/fonts/',
            expand: true
          },
        ]
      }
    },
    browserify: {
      options: {
        debug: true,
        transform: [
          require('grunt-react').browserify
        ]
      },
      app: {
        src: 'src/js/main.js',
        dest: 'dist/js/bundle.js'
      }
    },
    'gh-pages': {
      options: {
        base: 'dist'
      },
      src: ['**']
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('build', ['browserify', 'copy']);
  grunt.registerTask('default', ['build']);
  grunt.registerTask('upload', ['build', 'gh-pages']);

};
