module.exports = {
    dev: {
        options: {
            sourceMap: true
        },
        files: {
            '<%= cssDest %>/main.css': '<%= cssDest %>/main.scss'
        }
    },
    prod: {
        options: {
            sourceMap: false
        },
        files: {
            '<%= cssDest %>/main.css': '<%= cssDest %>/main.scss'
        }
    }
};
