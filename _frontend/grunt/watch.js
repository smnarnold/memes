module.exports = {
    sass: {
        files: ["<%= cssSrc %>/**/*.scss"],
        tasks: ['build:css:dev']
    },
    options: {
        spawn: false
    }
};
