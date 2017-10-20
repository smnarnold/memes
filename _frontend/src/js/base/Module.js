export default class Module {
    constructor(el) {

        //-- Properties
        //--------------------------------------------------------------
        this.dom = $.extend({}, window.dom, {
            el: el
        });
    }
}
