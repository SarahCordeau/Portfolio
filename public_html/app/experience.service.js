/*
 *    Version:	1.0.0
 *    Date:		23 mars 2016 11:27:50
 *    Author:	simplon-sco
 *
 *    Coded with Netbeans!
 */
System.register(['angular2/core', './mock-experiences'], function(exports_1, context_1) {
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
    var core_1, mock_experiences_1;
    var ExperienceService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_experiences_1_1) {
                mock_experiences_1 = mock_experiences_1_1;
            }],
        execute: function() {
            ExperienceService = (function () {
                function ExperienceService() {
                }
                ExperienceService.prototype.getExperiences = function () {
                    return Promise.resolve(mock_experiences_1.EXPERIENCES);
                };
                ExperienceService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ExperienceService);
                return ExperienceService;
            }());
            exports_1("ExperienceService", ExperienceService);
        }
    }
});
//# sourceMappingURL=experience.service.js.map