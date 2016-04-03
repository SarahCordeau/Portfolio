/*
 *    Version:	1.0.0
 *    Date:		20 mars 2016 17:11:18
 *    Author:	Sarah 
 *
 *    Coded with Netbeans!
 */

import {Injectable} from 'angular2/core';

import {Language} from './language';
import {LANGUAGES} from './mock-languages';
import {Gestion} from './gestion';
import {GESTIONS} from './mock-gestions';

@Injectable()

export class CompetenceService {
  getLanguages() {
    return Promise.resolve(LANGUAGES);
  }
  
  getGestions() {
    return Promise.resolve(GESTIONS);
  }
}