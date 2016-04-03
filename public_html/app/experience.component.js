/*
 *    Version:	1.0.0
 *    Date:		23 mars 2016 11:30:18
 *    Author:	simplon-sco
 *
 *    Coded with Netbeans!
 */
System.register(['angular2/core', './experience.service'], function(exports_1, context_1) {
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
    var core_1, experience_service_1;
    var ExperienceComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (experience_service_1_1) {
                experience_service_1 = experience_service_1_1;
            }],
        execute: function() {
            ExperienceComponent = (function () {
                function ExperienceComponent(_experienceService) {
                    this._experienceService = _experienceService;
                }
                ExperienceComponent.prototype.getExperiences = function () {
                    var _this = this;
                    this._experienceService.getExperiences().then(function (experiences) { return _this.experiences = experiences; });
                };
                ExperienceComponent.prototype.ngOnInit = function () {
                    this.getExperiences();
                };
                ExperienceComponent = __decorate([
                    core_1.Component({
                        selector: 'my-experience',
                        template: "\n<div class='row'>\n   <div class=\"col-sm-12 col-md-offset-1 col-md-10\">\n      <h4 class=\"text-center\"> Exp\u00E9riences professionnelles </h4>\n      <div class=\"col-sm-12 col-md-offset-1 col-md-5 experience\" *ngFor=\"#experience of experiences\">\n           <p class=\"color3\"><strong>{{experience.date}}</strong> \n            <i class=\"fa fa-star-half-o fa-lg\"></i>\n            <strong>{{experience.name}} </strong>\n            <i class=\"fa fa-star-half-o fa-lg\"></i>\n            {{experience.status}}\n         </p>\n         <p><strong>{{experience.entitled}}</strong></p>\n         <p><cite>{{experience.description}}</cite></p>\n         <ul>\n            <li *ngFor=\"#task of experience.tasks\">{{task}}</li> \n         </ul>\n      </div>\n   </div>\n</div>\n",
                        styles: ["\n\n@media screen and (min-width:768px) {\n   .experience {\n       min-height: 20vh!important;\n   }\n}\n\n@media screen and (min-width:992px) {\n   .experience {\n       min-height: 25vh!important;\n   }\n}\n\n@media screen and (min-width:1200px) {\n   .experience {\n       min-height: 30vh!important;\n   }\n}\n\n@media screen and (min-width:1920px) {\n   .experience {\n       min-height: 20vh!important;\n   }\n}\n\n.row { margin: 4vh 0!important; }\nh4 { color: #006BFF; }\n.experience { \nmargin-top: 4vh; \n}\nstrong { font-weight: bold; }\n"]
                    }), 
                    __metadata('design:paramtypes', [experience_service_1.ExperienceService])
                ], ExperienceComponent);
                return ExperienceComponent;
            }());
            exports_1("ExperienceComponent", ExperienceComponent);
        }
    }
});
//# sourceMappingURL=experience.component.js.map