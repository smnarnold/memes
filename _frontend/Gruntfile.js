module.exports = function (grunt) {
    require('time-grunt')(grunt);

    // --------------------------------------------------------------
    //   Check the /grunt folder to see all tasks (1 task per file)
    // --------------------------------------------------------------
    var config = {
        banner: '<%= pkg.name %> - <%= pkg.version %>\n' +
                '<%= pkg.author.name %> - <%= pkg.author.url %>\n' +
                'Copyright (c) <%= grunt.template.today("yyyy-mm-dd") %>',
        cacheBreaker: (new Date()).valueOf().toString(36) + Math.floor((Math.random() * 1000000) + 1).toString(36),
        pkg: grunt.file.readJSON('package.json'),

        basePath: 'src',
        distPath: '../assets',
        jsSrc: '<%= basePath %>/js',
        jsDest: '<%= distPath %>/js',
        cssSrc: '<%= basePath %>/scss',
        cssDest: '<%= distPath %>/css',
        htmlFileExtension: 'html',
        viewPath: '../'
    };

    require('load-grunt-config')(grunt, {
        data: config,
        loadGruntTasks: {
            config: require('./package.json'),
            pattern: 'grunt-*',
            scope: ['dependencies', 'devDependencies']
        }
    });

    grunt.registerTask('default', ['build:css:dev', 'build:js', 'browserSync', 'watch']);
    grunt.registerTask('deploy', ['build:css:prod', 'build:js' , 'replace:cache_break']);

    grunt.registerTask('build:css:dev', ['csscomb', 'sass_imports', 'replace:scss_import_path', 'sass:dev', 'postcss']);
    grunt.registerTask('build:css:prod', ['sass_imports', 'replace:scss_import_path', 'sass:prod', 'postcss']);
    grunt.registerTask('build:js', ['jshint', 'browserify']);
};
