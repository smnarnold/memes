import "babel-polyfill";

var Modules = {};

var Pages = {
    Home: require("./pages/Home").default
};

$(function() {
    window.dom = {
        body: $("body"),
        document: $(document),
        html: $("html"),
        window: $(window)
    };

    initClasses(window.dom.body);
});

window.initClasses = function(context) {
    let pages = context[0].querySelectorAll("[data-page]");
    let modules = context[0].querySelectorAll("[data-module]");

    for (let el of pages) {
        let list = el.getAttribute("data-page").split(/\s+/);
        for (let name of list) {
            if (Pages[name] !== undefined) {
                new Pages[name]($(el)).init();
            }
        }
    }

    for (let el of modules) {
        let list = el.getAttribute("data-module").split(/\s+/);
        for (var name of list) {
            if (Modules[name] !== undefined) {
                new Modules[name]($(el)).init();
            }
        }
    }
};
