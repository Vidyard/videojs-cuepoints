module.exports = function(grunt) {
  var pkg, version, verParts;
  pkg = grunt.file.readJSON('package.json');
  verParts = pkg.version.split('.');
  version = {
    full: pkg.version,
    major: verParts[0],
    minor: verParts[1],
    patch: verParts[2]
  };
  version.majorMinor = version.major + '.' + version.minor;
  // Project configuration.
  grunt.initConfig({
    pkg: pkg,
    jshint: {
      src: {
        src: ['src/*.js'],
        options: {
          jshintrc: '.jshintrc'
        }
      }
    },
    concat: {
      build: {
        src: ['src/cuepoint.js','src/core.js'],
        dest:'build/videojs.<%= pkg.name %>.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Default task(s).
  grunt.registerTask('default', ['jshint', 'concat:build']);
};
