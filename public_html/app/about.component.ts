/*
 *    Version:	1.0.0
 *    Date:		28 mars 2016 10:23:37
 *    Author:	sarah 
 *
 *    Coded with Netbeans!
 */

import {Component, OnInit} from 'angular2/core';

import {AboutService} from './about.service';
import {About} from './about';

@Component({
selector: 'my-about',
template: `
<div class='row'>
   <div class="col-sm-12 col-md-offset-1 col-md-10">
      <h4 class="text-center"> Ma présentation </h4>
      <div class="about text-center" *ngFor="#about of abouts">
           <p>Prénom, Nom: <strong>{{about.firstName}}</strong> - <strong>{{about.lastName}}</strong></p>
         <p>Date de naissance, lieux de naissance: <strong>{{about.birthday}}</strong> - <strong>{{about.placeOfBirth}}</strong></p>
         <p>Téléphone: <strong>{{about.phone}}</strong></p>
         <p>Mail: <strong>{{about.mail}}</strong></p>
      </div>
   </div>
</div>
`,
styles: [`
.row { margin: 4vh 0!important; }
h4 { color: #006BFF; }
.about { margin-top: 4vh; }
strong { font-weight: bold; }
`]
})

export class AboutComponent implements OnInit {
   public abouts: About[];

   constructor(private _aboutService: AboutService){}

getAbouts(){
this._aboutService.getAbouts().then(abouts => this.abouts = abouts);
}

ngOnInit(){
this.getAbouts();
}
}