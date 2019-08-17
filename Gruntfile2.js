module.exports = function(grunt) {

  //任务配置代码 -- 调用插件配置一下要执行额代码和实现的功能
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      output: {
        options: {
          style: "expanded"
        },
        files: {
          './style.css': './scss/style.scss'
        }
      }
    }
  })

  //插件加载代码 -- 把需要的插件加载进来
  grunt.loadNpmTasks('grunt-contrib-sass')

  //任务注册代码 -- 注册一个task 包含前面编写额任务配置代码
  grunt.registerTask('outputcss', ['sass'])
  grunt.registerTask('default')
}