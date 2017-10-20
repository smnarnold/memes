module.exports = {
    bsFiles: {
        src: [
            "<%= cssDest %>/**/*.css",
            "<%= jsDest %>/**/*.js",
            "<%= basePath %>/**/*.php"
        ]
    },
    options: {
        open: false,
        //proxy: '<%= vhost %>',
        port: "3000",
        watchTask: true,
        server: {
            baseDir: "../"
        }
    }
};
