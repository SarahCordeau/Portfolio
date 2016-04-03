/*
 *    Version:	1.0.0
 *    Date:		20 mars 2016 16:33:17
 *    Author:	Sarah
 *
 *    Coded with Netbeans!
 */
System.register(['angular2/core', './competence.service'], function(exports_1, context_1) {
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
    var core_1, competence_service_1;
    var CompetenceComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (competence_service_1_1) {
                competence_service_1 = competence_service_1_1;
            }],
        execute: function() {
            CompetenceComponent = (function () {
                function CompetenceComponent(_competenceService) {
                    this._competenceService = _competenceService;
                }
                CompetenceComponent.prototype.getLanguages = function () {
                    var _this = this;
                    this._competenceService.getLanguages().then(function (languages) { return _this.languages = languages; });
                };
                CompetenceComponent.prototype.getGestions = function () {
                    var _this = this;
                    this._competenceService.getGestions().then(function (gestions) { return _this.gestions = gestions; });
                };
                CompetenceComponent.prototype.ngOnInit = function () {
                    this.getLanguages();
                    this.getGestions();
                };
                CompetenceComponent = __decorate([
                    core_1.Component({
                        selector: 'my-competence',
                        template: "\n<div class='row'>\n   <div class=\"col-md-offset-1 col-md-5\">\n      <h4> Langages et outils informatiques </h4>\n      <ul>\n         <li *ngFor=\"#language of languages\">{{language.name}} <span>{{language.levels}}</span> <rating></rating> </li>\n      </ul>\n   </div>\n   <div class=\"col-md-5\">\n      <h4> Gestion de projet </h4>\n      <ul>\n         <li *ngFor=\"#gestion of gestions\">{{gestion.name}} \n            <span>{{gestion.levels}}</span>\n         </li>\n      </ul>\n   </div>\n</div>\n\n<div class=\"row\">\n   <div class='col-md-12'>\n      <p class='text-center'><span>* </span>: D\u00E9butant, <span>** </span>: Interm\u00E9diaire, <span>*** </span>: Avanc\u00E9, <span>**** </span>: Expert.</p>\n   </div>\n</div>\n",
                        styles: ["\n.row { margin: 4vh 0!important; }\nh4 { color: #006BFF; }\np { margin: 2vh 0px; padding: 2vh 0px; }\nspan { color: #006BFF!important; font-size: 1.2em; }\n"]
                    }), 
                    __metadata('design:paramtypes', [competence_service_1.CompetenceService])
                ], CompetenceComponent);
                return CompetenceComponent;
            }());
            exports_1("CompetenceComponent", CompetenceComponent);
        }
    }
});
//# sourceMappingURL=competence.component.js.map