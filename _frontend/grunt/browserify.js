module.exports = {
    files: {
        expand: true,
        flatten: true,
        src: '<%= jsSrc %>/boot.js',
        dest: '<%= jsDest %>'
    },
    options: {
        plugin: [['minifyify', {
            map: 'boot.map',
            output: '<%= jsDest %>/boot.map'
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
