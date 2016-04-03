/*
 *    Version:	1.0.0
 *    Date:		20 mars 2016 13:48:54
 *    Author:	Sarah 
 *
 *    Coded with Netbeans!
 */

import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {SlideService} from './slide.service';
import {CarouselComponent} from './carousel.component';
import {CompetenceService} from './competence.service';
import {CompetenceComponent} from './competence.component';
import {ExperienceService} from './experience.service';
import {ExperienceComponent} from './experience.component';
import {DiplomaService} from './diploma.service';
import {DiplomaComponent} from './diploma.component';
import {ProjectService} from './project.service';
import {ProjectComponent} from './project.component';
import {AboutService} from './about.service';
import {AboutComponent} from './about.component';

@Component({
   selector: 'my-app',
   templateUrl: 'app/app.component.html',
   styleUrls: ['app/app.component.css'],
   directives: [ROUTER_DIRECTIVES],
   providers: [
      ROUTER_PROVIDERS,
      SlideService,
      CompetenceService,
      ExperienceService,
      DiplomaService,
      ProjectService,
      AboutService
   ]
})

@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: CarouselComponent,
    useAsDefault: true
  },
  {
    path: '/Competences',
    name: 'Competences',
    component: CompetenceComponent
  },
  {
    path: '/Experiences',
    name: 'Experiences',
    component: ExperienceComponent
  },
  {
    path: '/Diplomes',
    name: 'Diplomes',
    component: DiplomaComponent
  },
  {
    path: '/Projets',
    name: 'Projects',
    component: ProjectComponent
  },
  {
    path: '/AboutMe',
    name: 'AboutMe',
    component: AboutComponent
  }
])

export class AppComponent {
   
}