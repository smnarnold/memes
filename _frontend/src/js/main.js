import td from 'throttle-debounce';

class Meme {
	constructor() {
        this.dom = {
        	top: document.querySelector('.text.top'),
            bottom: document.querySelector('.text.bottom')
        };

        this.name = document.body.getAttribute('data-name');
        this.top = document.body.getAttribute('data-top');
        this.bottom = document.body.getAttribute('data-bottom');
    }

    /**
     * Methods
     */
    init() {
    	this.bindEvents();
    }

    bindEvents() {
        this.dom.top.addEventListener('keyup', td.debounce(500, () => this.updateUrl()));
        this.dom.bottom.addEventListener('keyup', td.debounce(500, () => this.updateUrl()));
    }

    updateUrl() {
        this.top = this.escapeStr( this.dom.top.textContent );
        this.bottom = this.escapeStr( this.dom.bottom.textContent );

        history.pushState(
            null,
            null,
            `/${this.name}/${this.top}/${this.bottom}`
        );
    }

    escapeStr(str) {
    	return encodeURIComponent( str.trim() ).replace(/%20/g, '+');
    }
}

var meme = new Meme();
meme.init();