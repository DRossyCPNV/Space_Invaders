module.exports = function(grunt) {

	//Project configurations
	grunt.initConfig({

		concat : {
			dist : {
				src : ["source/*.js"],
				dest : "target/script.js"
			}
		}

	});

	// Project configuration.
	grunt.initConfig({
		concat: {
			options: {
				separator: '',
			},
			dist: {
				src: ['source/constants.js', 'source/class/Projectiles.js', 'source/class/Vessels.js', 'source/main.js', 'source/display.js'],
				dest: 'target/script.js',
			},
		},
	});

	//Load concat plugin
	grunt.loadNpmTasks('grunt-contrib-concat');

	//Create default task
	grunt.registerTask("default", ["concat"]);

};