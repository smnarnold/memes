import Page from "../base/Page";
import td from "throttle-debounce";

export default class extends Page {
    constructor(el) {
        super(el);

        //-- Properties
        //--------------------------------------------------------------
        this.dom = $.extend({}, this.dom, {
            top: this.dom.el.find(".text.top"),
            bottom: this.dom.el.find(".text.bottom")
        });

        this.name = this.dom.el.data("name");
        this.top = this.dom.el.data("top");
        this.bottom = this.dom.el.data("bottom");
    }

    //-- Methods
    //--------------------------------------------------------------
    init() {
        super.init();
        this.bindEvents();

        console.log(this.dom.el.data("page"));
    }

    bindEvents() {
        super.bindEvents();

        this.dom.top.on("keyup", td.debounce(500, () => this.updateUrl()));
        this.dom.bottom.on("keyup", td.debounce(500, () => this.updateUrl()));
    }

    updateUrl() {
        this.top = encodeURI(this.dom.top.text().trim().split(" ").join("+"));
        this.bottom = encodeURI(
            this.dom.bottom.text().trim().split(" ").join("+")
        );

        history.pushState(
            null,
            null,
            `/${this.name}/${this.top}/${this.bottom.split(" ").join("+")}`
        );
    }
}