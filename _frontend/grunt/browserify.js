module.exports = {
    files: {
        expand: true,
        flatten: true,
        src: '<%= jsSrc %>/main.js',
        dest: '<%= jsDest %>'
    },
    options: {
        plugin: [['minifyify', {
            map: 'main.map',
            output: '<%= jsDest %>/main.map'
        }]],
        transform: [
            ["babelify", {
                "presets": ["es2015"] }],
            'browserify-shim'
        ],
        watch: true,
        browserifyOptions: {
            debug: true
        }
    }
};
