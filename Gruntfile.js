module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //concat JS and CSS files

        // //minify CSS files
        // cssmin: {
        //     build: {
        //         files: {
        //             'build/main.min.css': ['css/main.css']
        //         }
        //     }
        // },

        watch: {
            options: {
                livereload: true,
            },
            scripts: {
                files: ['app.js', 'js/*.js', 'css/*.css', 'index.html'],
                // tasks: ['concat', 'uglify', 'cssmin'],
                options: {
                    spawn: false,
                }
            }
        },

       


    });
    //Plugins to use
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
   
    //Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['watch']);

    
    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run(['watch']);
    });
};