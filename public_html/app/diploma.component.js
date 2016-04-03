/*
 *    Version:	1.0.0
 *    Date:		23 mars 2016 11:30:18
 *    Author:	simplon-sco
 *
 *    Coded with Netbeans!
 */
System.register(['angular2/core', './diploma.service'], function(exports_1, context_1) {
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
    var core_1, diploma_service_1;
    var DiplomaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (diploma_service_1_1) {
                diploma_service_1 = diploma_service_1_1;
            }],
        execute: function() {
            DiplomaComponent = (function () {
                function DiplomaComponent(_diplomaService) {
                    this._diplomaService = _diplomaService;
                }
                DiplomaComponent.prototype.getDiploma = function () {
                    var _this = this;
                    this._diplomaService.getDiploma().then(function (diplomas) { return _this.diplomas = diplomas; });
                };
                DiplomaComponent.prototype.getCertificates = function () {
                    var _this = this;
                    this._diplomaService.getCertificates().then(function (certificates) { return _this.certificates = certificates; });
                };
                DiplomaComponent.prototype.ngOnInit = function () {
                    this.getDiploma();
                    this.getCertificates();
                };
                DiplomaComponent = __decorate([
                    core_1.Component({
                        selector: 'my-diploma',
                        template: "\n<div class='row'>\n   <div class=\"col-sm-12 col-md-offset-1 col-md-5\">\n      <h4 class=\"text-center\"> Dipl\u00F4mes </h4>\n      <div class=\"diploma\" *ngFor=\"#diploma of diplomas\">\n           <p class=\"color3\"><strong>{{diploma.year}}</strong> \n            <i class=\"fa fa-star-half-o fa-lg\"></i>\n            <strong>{{diploma.level}} </strong>               \n         </p>\n         <p><strong>{{diploma.description}}</strong> - <strong>{{diploma.school}}</strong></p>\n      </div>\n   </div>\n\n   <div class=\"col-sm-12 col-md-offset-1 col-md-5\">\n      <h4 class=\"text-center\"> Certificats </h4>\n      <div class=\"diploma\" *ngFor=\"#certificate of certificates\">\n           <p class=\"color3\"><strong>{{certificate.year}}</strong> \n            <i class=\"fa fa-star-half-o fa-lg\"></i>\n         </p>\n         <p><strong>{{certificate.description}}</strong> - <strong>{{certificate.school}}</strong></p>\n      </div>\n   </div>\n</div>\n",
                        styles: ["\n.row { margin: 4vh 0!important; }\nh4 { color: #006BFF; }\n.diploma { margin-top: 4vh; }\nstrong { font-weight: bold; }\n"]
                    }), 
                    __metadata('design:paramtypes', [diploma_service_1.DiplomaService])
                ], DiplomaComponent);
                return DiplomaComponent;
            }());
            exports_1("DiplomaComponent", DiplomaComponent);
        }
    }
});
//# sourceMappingURL=diploma.component.js.map