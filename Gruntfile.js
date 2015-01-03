module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      dev: {
        options: {
          style: 'expanded'
        },
        cwd: 'scss',
        src: ['*.scss'],
        dest: 'css',
        expand: true,
        ext: '.css'
      }
    },
    watch: {
      files: ['scss/**/*.scss'],
      tasks: ['default']
    }
  });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  //grunt.registerTask('default', ['uglify']);
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['sass:dev']);

};