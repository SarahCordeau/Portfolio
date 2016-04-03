/*
 *    Version:	1.0.0
 *    Date:		20 mars 2016 13:48:54
 *    Author:	Sarah
 *
 *    Coded with Netbeans!
 */
System.register(['angular2/core', 'angular2/router', './slide.service', './carousel.component', './competence.service', './competence.component', './experience.service', './experience.component', './diploma.service', './diploma.component', './project.service', './project.component', './about.service', './about.component'], function(exports_1, context_1) {
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
    var core_1, router_1, slide_service_1, carousel_component_1, competence_service_1, competence_component_1, experience_service_1, experience_component_1, diploma_service_1, diploma_component_1, project_service_1, project_component_1, about_service_1, about_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (slide_service_1_1) {
                slide_service_1 = slide_service_1_1;
            },
            function (carousel_component_1_1) {
                carousel_component_1 = carousel_component_1_1;
            },
            function (competence_service_1_1) {
                competence_service_1 = competence_service_1_1;
            },
            function (competence_component_1_1) {
                competence_component_1 = competence_component_1_1;
            },
            function (experience_service_1_1) {
                experience_service_1 = experience_service_1_1;
            },
            function (experience_component_1_1) {
                experience_component_1 = experience_component_1_1;
            },
            function (diploma_service_1_1) {
                diploma_service_1 = diploma_service_1_1;
            },
            function (diploma_component_1_1) {
                diploma_component_1 = diploma_component_1_1;
            },
            function (project_service_1_1) {
                project_service_1 = project_service_1_1;
            },
            function (project_component_1_1) {
                project_component_1 = project_component_1_1;
            },
            function (about_service_1_1) {
                about_service_1 = about_service_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            slide_service_1.SlideService,
                            competence_service_1.CompetenceService,
                            experience_service_1.ExperienceService,
                            diploma_service_1.DiplomaService,
                            project_service_1.ProjectService,
                            about_service_1.AboutService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Home',
                            component: carousel_component_1.CarouselComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/Competences',
                            name: 'Competences',
                            component: competence_component_1.CompetenceComponent
                        },
                        {
                            path: '/Experiences',
                            name: 'Experiences',
                            component: experience_component_1.ExperienceComponent
                        },
                        {
                            path: '/Diplomes',
                            name: 'Diplomes',
                            component: diploma_component_1.DiplomaComponent
                        },
                        {
                            path: '/Projets',
                            name: 'Projects',
                            component: project_component_1.ProjectComponent
                        },
                        {
                            path: '/AboutMe',
                            name: 'AboutMe',
                            component: about_component_1.AboutComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map