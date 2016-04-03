/*
 *    Version:	1.0.0
 *    Date:		18 mars 2016 21:59:57
 *    Author:	Sarah 
 *
 *    Coded with Netbeans!
 */

import {Injectable} from 'angular2/core';

import {Slide} from './slide';
import {SLIDES} from './mock-slides';

@Injectable()

export class SlideService {
  getSlides() {
    return Promise.resolve(SLIDES);
  }
}
