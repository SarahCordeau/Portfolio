/*
 *    Project:	Portfolio - Portfolio
 *    Version:	1.0.0
 *    Date:		15 mars 2016 21:17:08
 *    Author:	Sarah
 *
 *    Coded with Netbeans!
 */
System.register(['angular2/core', 'angular2/common', 'ng2-bootstrap/ng2-bootstrap', './slide.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, ng2_bootstrap_1, slide_service_1;
    var CarouselComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (slide_service_1_1) {
                slide_service_1 = slide_service_1_1;
            }],
        execute: function() {
            CarouselComponent = (function () {
                function CarouselComponent(_slideService) {
                    this._slideService = _slideService;
                    this.myInterval = 2500;
                    this.noWrapSlides = false;
                }
                CarouselComponent.prototype.getSlides = function () {
                    var _this = this;
                    this._slideService.getSlides().then(function (slides) { return _this.slides = slides; });
                };
                CarouselComponent.prototype.ngOnInit = function () {
                    this.getSlides();
                };
                CarouselComponent = __decorate([
                    core_1.Component({
                        selector: 'my-carousel',
                        templateUrl: 'app/carousel.component.html',
                        styleUrls: ['app/carousel.component.css'],
                        directives: [ng2_bootstrap_1.CAROUSEL_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [slide_service_1.SlideService])
                ], CarouselComponent);
                return CarouselComponent;
            }());
            exports_1("CarouselComponent", CarouselComponent);
        }
    }
});
//# sourceMappingURL=carousel.component.js.map