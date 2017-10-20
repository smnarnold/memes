module.exports = {
    imports: {
        src: [
            '<%= cssSrc %>/helpers/vars.scss',
            '<%= cssSrc %>/bootstrap/_variables.scss',
            '<%= cssSrc %>/bootstrap/mixins/*.scss',
            '<%= cssSrc %>/bootstrap/*.scss',
            '<%= cssSrc %>/helpers/*.scss',
            '<%= cssSrc %>/**/*.scss'
        ],
        dest: '<%= cssDest %>/main.scss'
    }
};
