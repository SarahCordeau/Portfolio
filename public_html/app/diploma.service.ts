/*
 *    Version:	1.0.0
 *    Date:		23 mars 2016 11:27:50
 *    Author:	simplon-sco 
 *
 *    Coded with Netbeans!
 */

import {Injectable} from 'angular2/core';

import {Diploma} from './diploma';
import {DIPLOMA} from './mock-diploma';
import {Certificate} from './certificate';
import {CERTIFICATES} from './mock-certificate';

@Injectable()

export class DiplomaService {
  getDiploma() {
    return Promise.resolve(DIPLOMA);
  }
  
  getCertificates() {
    return Promise.resolve(CERTIFICATES);
  }
}