path = require 'path'

gulp = require 'gulp'
plumber = require 'gulp-plumber'
mocha = require 'gulp-mocha'
istanbul = require 'gulp-istanbul'
coveralls = require 'gulp-coveralls'
jshint = require 'gulp-jshint'


gulp.task 'mocha', (cb) ->
  mochaErr = null
  
  gulp.src ['index.js', 'lib/**/*.js']
    .pipe istanbul( includeUntested: true )
    .pipe istanbul.hookRequire()
    .on 'finish', ->
      gulp.src 'test/**/*.js'
        .pipe plumber()
        .pipe mocha
          reporter: 'spec'
          timeout: 5000
        .on 'error', (err) ->
          mochaErr = err
        .pipe istanbul.writeReports()
        .on 'end', ->
          cb(mochaErr)
  
  undefined


gulp.task 'jshint', ->
  gulp.src ['index.js', 'lib/**/*.js']
    .pipe jshint()
    .pipe jshint.reporter('default')


gulp.task 'coveralls', ['mocha'], ->
  if process.env.CI
    gulp.src path.join(__dirname, 'coverage/lcov.info')
      .pipe coveralls()


gulp.task 'test', ['jshint', 'mocha']
gulp.task 'default', ['test', 'coveralls']