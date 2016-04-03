/*
 *    Project:	Portfolio - Portfolio
 *    Version:	1.0.0
 *    Date:		15 mars 2016 21:17:08
 *    Author:	Sarah 
 *
 *    Coded with Netbeans!
 */

import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {CAROUSEL_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import {Slide} from './slide';
import {SlideService} from './slide.service';

@Component({
   selector: 'my-carousel',
   templateUrl: 'app/carousel.component.html',
   styleUrls: ['app/carousel.component.css'],
   directives: [CAROUSEL_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]   
})

export class CarouselComponent implements OnInit{
   private myInterval:number = 2500;
   private noWrapSlides:boolean = false;
   public slides: Slide[];

   constructor(private _slideService: SlideService){}
   
   getSlides(){
      this._slideService.getSlides().then(slides => this.slides = slides);
   }
   
   ngOnInit(){
      this.getSlides();
   }
}


