module.exports = function (grunt) {
  // load plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.initConfig({

    // define source files and their destinations
    uglify: {
      my_target: {
        files: {
          'lib/htmllint.js': 'src/**/*.js'
        }
      }
    },
    watch: {
        js:  { files: 'src/**/*.js', tasks: [ 'uglify' ] },
    }
});


// register at least this one task
grunt.registerTask('default', [ 'uglify' ]);

};
