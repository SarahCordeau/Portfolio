/*
 *    Version:	1.0.0
 *    Date:		28 mars 2016 10:19:32
 *    Author:	sarah
 *
 *    Coded with Netbeans!
 */
System.register(['angular2/core', './project.service'], function(exports_1, context_1) {
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
    var core_1, project_service_1;
    var ProjectComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (project_service_1_1) {
                project_service_1 = project_service_1_1;
            }],
        execute: function() {
            ProjectComponent = (function () {
                function ProjectComponent(_projectService) {
                    this._projectService = _projectService;
                }
                ProjectComponent.prototype.getProjects = function () {
                    var _this = this;
                    this._projectService.getProjects().then(function (projects) { return _this.projects = projects; });
                };
                ProjectComponent.prototype.ngOnInit = function () {
                    this.getProjects();
                };
                ProjectComponent = __decorate([
                    core_1.Component({
                        selector: 'my-project',
                        template: "\n<div class='row'>\n   <div class=\"col-sm-12 col-md-offset-1 col-md-10\">\n      <h4 class=\"text-center\"> Mes projets informatiques </h4>\n      <div class=\"project\" *ngFor=\"#project of projects\">\n           <p class=\"color3\"><strong>{{project.year}}</strong> \n            <i class=\"fa fa-star-half-o fa-lg\"></i>\n            <strong>{{project.language}} </strong>               \n         </p>\n         <p><strong>{{project.name}}</strong> - <strong>{{project.society}} </strong></p>\n         <p><strong>{{project.description}}</strong></p>\n      </div>\n   </div>\n</div>\n",
                        styles: ["\n.row { margin: 4vh 0!important; }\nh4 { color: #006BFF; }\n.project { margin-top: 4vh; }\nstrong { font-weight: bold; }\n"]
                    }), 
                    __metadata('design:paramtypes', [project_service_1.ProjectService])
                ], ProjectComponent);
                return ProjectComponent;
            }());
            exports_1("ProjectComponent", ProjectComponent);
        }
    }
});
//# sourceMappingURL=project.component.js.map