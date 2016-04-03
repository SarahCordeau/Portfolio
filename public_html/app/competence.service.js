/*
 *    Version:	1.0.0
 *    Date:		20 mars 2016 17:11:18
 *    Author:	Sarah
 *
 *    Coded with Netbeans!
 */
System.register(['angular2/core', './mock-languages', './mock-gestions'], function(exports_1, context_1) {
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
    var core_1, mock_languages_1, mock_gestions_1;
    var CompetenceService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_languages_1_1) {
                mock_languages_1 = mock_languages_1_1;
            },
            function (mock_gestions_1_1) {
                mock_gestions_1 = mock_gestions_1_1;
            }],
        execute: function() {
            CompetenceService = (function () {
                function CompetenceService() {
                }
                CompetenceService.prototype.getLanguages = function () {
                    return Promise.resolve(mock_languages_1.LANGUAGES);
                };
                CompetenceService.prototype.getGestions = function () {
                    return Promise.resolve(mock_gestions_1.GESTIONS);
                };
                CompetenceService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CompetenceService);
                return CompetenceService;
            }());
            exports_1("CompetenceService", CompetenceService);
        }
    }
});
//# sourceMappingURL=competence.service.js.map