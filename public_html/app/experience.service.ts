/*
 *    Version:	1.0.0
 *    Date:		23 mars 2016 11:27:50
 *    Author:	simplon-sco 
 *
 *    Coded with Netbeans!
 */

import {Injectable} from 'angular2/core';

import {Experience} from './experience';
import {EXPERIENCES} from './mock-experiences';

@Injectable()

export class ExperienceService {
  getExperiences() {
    return Promise.resolve(EXPERIENCES);
  }
}