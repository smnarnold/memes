import Module from '../base/Module';

export default class ModuleBootstrapHelper extends Module {
    constructor(el) {
        super(el);

        //-- Properties
        //--------------------------------------------------------------
        this.breakpoints = ["xs", "sm", "md", "lg"];

        $.extend(this.dom, {
            b: window.document.body,
            temp: window.document.createElement("div")
        });
    }

    //-- Methods
    //--------------------------------------------------------------
    get breakpoint() {
        this.dom.b.appendChild(this.dom.temp);

        for (var i = this.breakpoints.length - 1; i >= 0; i--) {
            var env = this.breakpoints[i];

            this.dom.temp.className = "hidden-" + env;

            if ($(this.dom.temp).is(':hidden')) {
                this.dom.temp.parentNode.removeChild(this.dom.temp);
                return env;
            }
        }
        return "";
    }
}
