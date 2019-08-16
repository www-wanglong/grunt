module.exports = function(grunt) {

  // Project configuration.任务配置代码(调用插件配置一下要执行的任务和实现的功能)
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  //Load the plugin that provides the "uglify" task. 插件加载代码（把需要用到的插件加载进来）
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).任务注册代码（注册一个task 里面包含刚在钱吗编写的任务配置代码）
  grunt.registerTask('default', ['uglify']);

};