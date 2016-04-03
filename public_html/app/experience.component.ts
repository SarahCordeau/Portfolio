/*
 *    Version:	1.0.0
 *    Date:		23 mars 2016 11:30:18
 *    Author:	simplon-sco 
 *
 *    Coded with Netbeans!
 */

import {Component, OnInit} from 'angular2/core';

import {Experience} from './experience';
import {ExperienceService} from './experience.service';

@Component({
selector: 'my-experience',
template: `
<div class='row'>
   <div class="col-sm-12 col-md-offset-1 col-md-10">
      <h4 class="text-center"> Expériences professionnelles </h4>
      <div class="col-sm-12 col-md-offset-1 col-md-5 experience" *ngFor="#experience of experiences">
           <p class="color3"><strong>{{experience.date}}</strong> 
            <i class="fa fa-star-half-o fa-lg"></i>
            <strong>{{experience.name}} </strong>
            <i class="fa fa-star-half-o fa-lg"></i>
            {{experience.status}}
         </p>
         <p><strong>{{experience.entitled}}</strong></p>
         <p><cite>{{experience.description}}</cite></p>
         <ul>
            <li *ngFor="#task of experience.tasks">{{task}}</li> 
         </ul>
      </div>
   </div>
</div>
`,
styles: [`

@media screen and (min-width:768px) {
   .experience {
       min-height: 20vh!important;
   }
}

@media screen and (min-width:992px) {
   .experience {
       min-height: 25vh!important;
   }
}

@media screen and (min-width:1200px) {
   .experience {
       min-height: 30vh!important;
   }
}

@media screen and (min-width:1920px) {
   .experience {
       min-height: 20vh!important;
   }
}

.row { margin: 4vh 0!important; }
h4 { color: #006BFF; }
.experience { 
margin-top: 4vh; 
}
strong { font-weight: bold; }
`]
})

export class ExperienceComponent implements OnInit{
   public experiences: Experiences[];

   constructor(private _experienceService: ExperienceService){}

getExperiences(){
this._experienceService.getExperiences().then(experiences => this.experiences = experiences);
}

ngOnInit(){
this.getExperiences();
}
}
