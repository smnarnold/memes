module.exports = {
    dynamic_mappings: {
        expand: true,
        src: [
            "<%= cssSrc %>/**/*.scss",
            "!<%= cssSrc %>/bootstrap/**/*.scss",
            "!<%= cssSrc %>/helpers/**/*.scss",
            "!<%= cssSrc %>/vendor/**/*.scss",
        ]
    },
    options: {
        config: "csscomb.json"
    }
};
