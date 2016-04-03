/*
 *    Version:	1.0.0
 *    Date:		28 mars 2016 10:23:37
 *    Author:	sarah
 *
 *    Coded with Netbeans!
 */
System.register(['angular2/core', './about.service'], function(exports_1, context_1) {
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
    var core_1, about_service_1;
    var AboutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (about_service_1_1) {
                about_service_1 = about_service_1_1;
            }],
        execute: function() {
            AboutComponent = (function () {
                function AboutComponent(_aboutService) {
                    this._aboutService = _aboutService;
                }
                AboutComponent.prototype.getAbouts = function () {
                    var _this = this;
                    this._aboutService.getAbouts().then(function (abouts) { return _this.abouts = abouts; });
                };
                AboutComponent.prototype.ngOnInit = function () {
                    this.getAbouts();
                };
                AboutComponent = __decorate([
                    core_1.Component({
                        selector: 'my-about',
                        template: "\n<div class='row'>\n   <div class=\"col-sm-12 col-md-offset-1 col-md-10\">\n      <h4 class=\"text-center\"> Ma pr\u00E9sentation </h4>\n      <div class=\"about text-center\" *ngFor=\"#about of abouts\">\n           <p>Pr\u00E9nom, Nom: <strong>{{about.firstName}}</strong> - <strong>{{about.lastName}}</strong></p>\n         <p>Date de naissance, lieux de naissance: <strong>{{about.birthday}}</strong> - <strong>{{about.placeOfBirth}}</strong></p>\n         <p>T\u00E9l\u00E9phone: <strong>{{about.phone}}</strong></p>\n         <p>Mail: <strong>{{about.mail}}</strong></p>\n      </div>\n   </div>\n</div>\n",
                        styles: ["\n.row { margin: 4vh 0!important; }\nh4 { color: #006BFF; }\n.about { margin-top: 4vh; }\nstrong { font-weight: bold; }\n"]
                    }), 
                    __metadata('design:paramtypes', [about_service_1.AboutService])
                ], AboutComponent);
                return AboutComponent;
            }());
            exports_1("AboutComponent", AboutComponent);
        }
    }
});
//# sourceMappingURL=about.component.js.map