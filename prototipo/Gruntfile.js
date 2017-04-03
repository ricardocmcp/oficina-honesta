module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			js: {
				src: [
					'lib/vendors/jquery/jquery-3.1.1.js',
					'lib/vendors/bootstrap/js/bootstrap.js'
				],
				dest: 'js/global.js'
			}
		},

		less: {
			development: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2
				},
				files: {
					"css/styles.css":"less/**/*.less"
				}
			}
		},
		watch: {
			//https://github.com/gruntjs/grunt-contrib-watch/blob/master/docs/watch-examples.md
			less: {
			  // We watch and compile sass files as normal but don't live reload here
			  files: ['less/**/*.less'],
			  tasks: ['less'],
			},
			livereload: {
			  // Here we watch the files the sass task will compile to
			  // These files are sent to the live reload server after sass compiles to them
			  options: { livereload: true },
			  files: ['dest/**/*'],
			},
		},
	});


    // Carregando os plugins
    // ---------------------------------------
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');


    // Registrando a tarefa
    // ---------------------------------------
	grunt.registerTask('default',['concat','watch','less']);
}