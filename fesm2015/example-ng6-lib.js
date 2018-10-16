import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ExampleNg6LibService {
    constructor() { }
}
ExampleNg6LibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ExampleNg6LibService.ctorParameters = () => [];
/** @nocollapse */ ExampleNg6LibService.ngInjectableDef = defineInjectable({ factory: function ExampleNg6LibService_Factory() { return new ExampleNg6LibService(); }, token: ExampleNg6LibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ExampleNg6LibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ExampleNg6LibComponent.decorators = [
    { type: Component, args: [{
                selector: 'enl-example-ng6-lib',
                template: `
    <p>
      example-ng6-lib works!
    </p>
  `
            }] }
];
/** @nocollapse */
ExampleNg6LibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FooComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
FooComponent.decorators = [
    { type: Component, args: [{
                selector: 'enl-foo',
                template: "<p>\n  foo works!\n</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
FooComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ExampleNg6LibModule {
}
ExampleNg6LibModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [ExampleNg6LibComponent, FooComponent],
                exports: [ExampleNg6LibComponent, FooComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { ExampleNg6LibService, ExampleNg6LibComponent, ExampleNg6LibModule, FooComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1uZzYtbGliLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9leGFtcGxlLW5nNi1saWIvbGliL2V4YW1wbGUtbmc2LWxpYi5zZXJ2aWNlLnRzIiwibmc6Ly9leGFtcGxlLW5nNi1saWIvbGliL2V4YW1wbGUtbmc2LWxpYi5jb21wb25lbnQudHMiLCJuZzovL2V4YW1wbGUtbmc2LWxpYi9saWIvZm9vL2Zvby5jb21wb25lbnQudHMiLCJuZzovL2V4YW1wbGUtbmc2LWxpYi9saWIvZXhhbXBsZS1uZzYtbGliLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEV4YW1wbGVOZzZMaWJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW5sLWV4YW1wbGUtbmc2LWxpYicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBleGFtcGxlLW5nNi1saWIgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEV4YW1wbGVOZzZMaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW5sLWZvbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb28uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mb28uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXhhbXBsZU5nNkxpYkNvbXBvbmVudCB9IGZyb20gJy4vZXhhbXBsZS1uZzYtbGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb29Db21wb25lbnQgfSBmcm9tICcuL2Zvby9mb28uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogW0V4YW1wbGVOZzZMaWJDb21wb25lbnQsIEZvb0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtFeGFtcGxlTmc2TGliQ29tcG9uZW50LCBGb29Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEV4YW1wbGVOZzZMaWJNb2R1bGUge31cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtJQU9FLGlCQUFpQjs7O1lBTGxCLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztBQ0pEO0lBYUUsaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRTs7OztHQUlUO2FBRUY7Ozs7Ozs7OztBQ1ZEO0lBU0UsaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixxQ0FBbUM7O2FBRXBDOzs7Ozs7Ozs7QUNORDs7O1lBSUMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxFQUFFO2dCQUNYLFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLFlBQVksQ0FBQztnQkFDcEQsT0FBTyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsWUFBWSxDQUFDO2FBQ2hEOzs7Ozs7Ozs7Ozs7Ozs7In0=