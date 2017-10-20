module.exports = {
    scss_import_path: {
        src: ['<%= cssDest %>/*.scss'],
        overwrite: true,
        replacements: [
            {
                from: /\\/g,
                to: '/'
            }
        ]
    },
    cache_break: {
        src: ['<%= viewPath %>/*.<%= htmlFileExtension %>'],
        overwrite: true,
        replacements: [
            {
                from: /cacheBreak: \".*\"/g,
                to: 'cacheBreak: "<%= cacheBreaker %>"'
            },
            {
                from: /\.css.*?"/g,
                to: '.css?v=<%= cacheBreaker %>"'
            },
            {
                from: /\.js\?v=.*?"/g,
                to: '.js?v=<%= cacheBreaker %>"'
            },
            {
                from: /\.jpg.*?"/g,
                to: '.jpg?v=<%= cacheBreaker %>"'
            },
            {
                from: /\.png.*?"/g,
                to: '.png?v=<%= cacheBreaker %>"'
            },
            {
                from: /\.svg.*?"/g,
                to: '.svg?v=<%= cacheBreaker %>"'
            }
        ]
    }
};
