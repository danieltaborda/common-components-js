'use sctict'

import ComponentController from './filter-input.component';
import template from './filter-input.component.tpl.html';

angular
    .module('commonResources.components')
    .component('comFilterInput', {

        transclude: true,

        bindings: {
            placeholderText: '@',
            apiOnFilterInputEnter: '&',
            apiOnFilterInputClear: '&'
        },
        controller: ComponentController,
        controllerAs: '$ctrl',
        template
    });