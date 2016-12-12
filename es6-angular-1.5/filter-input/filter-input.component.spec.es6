'use strict';
class ComponentController {

    /*@ngInject*/
    constructor() {
        this.queryParams = '';
        this.minSearchLength = 1;
    }

    // do filter if enter
    onFilterInputEnter() {
        this.onFilterEnter({ queryParams: this.queryParams });
    }

    // reset data when button pressed
    resetButton() {
        this.queryParams = '';
        this.apiOnFilterInputClear();
    }

    // on key press do something and expose event
    keyPressed(event) {
        var keyCode = event.which || event.keyCode;
        if (keyCode === 13 && this.queryParams.length >= this.minSearchLength) {
            this.apiOnFilterInputEnter();
        }
    }

    // true if anything to reset
    isResetFilterActive() {
        return this.queryParams && this.queryParams.legth >= this.minSearchLength;
    }

}