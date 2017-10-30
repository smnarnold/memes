import td from 'throttle-debounce';
import ua from 'ua-parser-js';

export default class Page {
    constructor(el) {

        //-- Properties
        //--------------------------------------------------------------
        this.dom = $.extend({}, window.dom, {
            el: el
        });

        this.ua = new ua().getResult();
    }

    init() {
        this.setDeviceType();
    }

    setDeviceType() {
        this.dom.html.addClass(this.ua.os.name + " " + this.ua.browser.name);
    }

    bindEvents() {

    }
}
