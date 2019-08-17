module.exports = function(grunt) {

  //任务配置代码(调用插件配置一下要执行的任务和实现的功能)
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: './style.scss'
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['./src/plugin.js', './src/pligin2.js'],
        dest: './global.js',
      }
    },
    uglify: {
      compressjs: {
        files: {
          './global.min.js': ['./global.js']
        }
      }
    },
    jshint: {
      all: ['./global.js']
    },
    watch: {
      scripts: {
        files: ['./src/plugin.js', './src/plugin2.js'],
        tasks: ['concat','jshint','uglify']
      },
      sass: {
        files: ['./scss/style.scss'],
        tasks: ['sass']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          'index.html',
          'style.css',
          'js/global.min.js'
          ]  
      }
    },
    connect: {
      options: {
        port: 9000,
        oprn: true,
        livereload: 35729,
        hostname: 'localhost'
      },
      server: {
        options: {
          port: 9001,
          base: './',
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-connect')

  grunt.registerTask('outputsass', ['sass'])
  grunt.registerTask('outputjs', ['concat'])
  grunt.registerTask('compressjs',['concat', 'jshint', 'uglify'])
  grunt.registerTask('watchit', ['sass','concat','jshint','uglify','connect','watch'])
  grunt.registerTask('default')

}