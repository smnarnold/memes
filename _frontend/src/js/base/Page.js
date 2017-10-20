import td from 'throttle-debounce';
import ua from 'ua-parser-js';
import BootstrapHelper from '../modules/BootstrapHelper';

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
        this.initBootstrapHelper();
        this.setDeviceType();
    }

    initBootstrapHelper() {
        this.bootstrapHelper = new BootstrapHelper();
        this.breakpoint = this.bootstrapHelper.breakpoint;

        console.log('Bootstrap: ' + this.breakpoint);

        this.dom.window.on('resize', td.debounce(300, () => {
            this.breakpoint = this.bootstrapHelper.breakpoint;
            console.log('Bootstrap: ' + this.breakpoint);
        }));
    }

    setDeviceType() {
        this.dom.html.addClass(this.ua.os.name + " " + this.ua.browser.name);
    }

    bindEvents() {

    }
}
