module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            bundle: {
                src: 'index.js',
                dest: 'bundle.min.js'
            },
            options: {
                browserifyOptions: {
                    debug: true
                },
                transform: [
                    ['vueify']
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('build', function() {
      grunt.task.run('browserify');
    });
}