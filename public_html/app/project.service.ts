/*
 *    Version:	1.0.0
 *    Date:		28 mars 2016 10:18:59
 *    Author:	sarah 
 *
 *    Coded with Netbeans!
 */

import {Injectable} from 'angular2/core';

import {ProjectComponent} from './project.component';
import {PROJECTS} from './mock-project';

@Injectable()

export class ProjectService {
  getProjects() {
    return Promise.resolve(PROJECTS);
  }

}