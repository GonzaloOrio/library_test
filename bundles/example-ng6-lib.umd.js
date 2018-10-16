(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('example-ng6-lib', ['exports', '@angular/core'], factory) :
    (factory((global['example-ng6-lib'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ExampleNg6LibService = /** @class */ (function () {
        function ExampleNg6LibService() {
        }
        ExampleNg6LibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ExampleNg6LibService.ctorParameters = function () { return []; };
        /** @nocollapse */ ExampleNg6LibService.ngInjectableDef = i0.defineInjectable({ factory: function ExampleNg6LibService_Factory() { return new ExampleNg6LibService(); }, token: ExampleNg6LibService, providedIn: "root" });
        return ExampleNg6LibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ExampleNg6LibComponent = /** @class */ (function () {
        function ExampleNg6LibComponent() {
        }
        /**
         * @return {?}
         */
        ExampleNg6LibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ExampleNg6LibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'enl-example-ng6-lib',
                        template: "\n    <p>\n      example-ng6-lib works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        ExampleNg6LibComponent.ctorParameters = function () { return []; };
        return ExampleNg6LibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FooComponent = /** @class */ (function () {
        function FooComponent() {
        }
        /**
         * @return {?}
         */
        FooComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        FooComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'enl-foo',
                        template: "<p>\n  foo works!\n</p>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        FooComponent.ctorParameters = function () { return []; };
        return FooComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ExampleNg6LibModule = /** @class */ (function () {
        function ExampleNg6LibModule() {
        }
        ExampleNg6LibModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [ExampleNg6LibComponent, FooComponent],
                        exports: [ExampleNg6LibComponent, FooComponent]
                    },] }
        ];
        return ExampleNg6LibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.ExampleNg6LibService = ExampleNg6LibService;
    exports.ExampleNg6LibComponent = ExampleNg6LibComponent;
    exports.ExampleNg6LibModule = ExampleNg6LibModule;
    exports.FooComponent = FooComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1uZzYtbGliLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vZXhhbXBsZS1uZzYtbGliL2xpYi9leGFtcGxlLW5nNi1saWIuc2VydmljZS50cyIsIm5nOi8vZXhhbXBsZS1uZzYtbGliL2xpYi9leGFtcGxlLW5nNi1saWIuY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5nNi1saWIvbGliL2Zvby9mb28uY29tcG9uZW50LnRzIiwibmc6Ly9leGFtcGxlLW5nNi1saWIvbGliL2V4YW1wbGUtbmc2LWxpYi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFeGFtcGxlTmc2TGliU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VubC1leGFtcGxlLW5nNi1saWInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgZXhhbXBsZS1uZzYtbGliIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBFeGFtcGxlTmc2TGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VubC1mb28nLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9vLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZm9vLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb29Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV4YW1wbGVOZzZMaWJDb21wb25lbnQgfSBmcm9tICcuL2V4YW1wbGUtbmc2LWxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9vQ29tcG9uZW50IH0gZnJvbSAnLi9mb28vZm9vLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBkZWNsYXJhdGlvbnM6IFtFeGFtcGxlTmc2TGliQ29tcG9uZW50LCBGb29Db21wb25lbnRdLFxuICBleHBvcnRzOiBbRXhhbXBsZU5nNkxpYkNvbXBvbmVudCwgRm9vQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBFeGFtcGxlTmc2TGliTW9kdWxlIHt9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OzttQ0FKRDs7Ozs7OztBQ0FBO1FBYUU7U0FBaUI7Ozs7UUFFakIseUNBQVE7OztZQUFSO2FBQ0M7O29CQWRGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjt3QkFDL0IsUUFBUSxFQUFFLHVEQUlUO3FCQUVGOzs7O3FDQVZEOzs7Ozs7O0FDQUE7UUFTRTtTQUFpQjs7OztRQUVqQiwrQkFBUTs7O1lBQVI7YUFDQzs7b0JBVkZBLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsU0FBUzt3QkFDbkIscUNBQW1DOztxQkFFcEM7Ozs7MkJBTkQ7Ozs7Ozs7QUNBQTs7OztvQkFJQ0MsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3dCQUNYLFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLFlBQVksQ0FBQzt3QkFDcEQsT0FBTyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsWUFBWSxDQUFDO3FCQUNoRDs7a0NBUkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9