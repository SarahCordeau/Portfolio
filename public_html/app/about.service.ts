/*
 *    Version:	1.0.0
 *    Date:		28 mars 2016 10:23:04
 *    Author:	sarah 
 *
 *    Coded with Netbeans!
 */

import {Injectable} from 'angular2/core';

import {AboutComponent} from './about.component';
import {ABOUTS} from './mock-about';

@Injectable()

export class AboutService {
  getAbouts() {
    return Promise.resolve(ABOUTS);
  }
}