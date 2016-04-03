/*
 *    Version:	1.0.0
 *    Date:		20 mars 2016 16:33:17
 *    Author:	Sarah 
 *
 *    Coded with Netbeans!
 */

import {Component, OnInit} from 'angular2/core';

import {CompetenceService} from './competence.service';
import {Language} from './language';
import {Gestion} from './gestion';


@Component({
selector: 'my-competence',
template: `
<div class='row'>
   <div class="col-md-offset-1 col-md-5">
      <h4> Langages et outils informatiques </h4>
      <ul>
         <li *ngFor="#language of languages">{{language.name}} <span>{{language.levels}}</span> <rating></rating> </li>
      </ul>
   </div>
   <div class="col-md-5">
      <h4> Gestion de projet </h4>
      <ul>
         <li *ngFor="#gestion of gestions">{{gestion.name}} 
            <span>{{gestion.levels}}</span>
         </li>
      </ul>
   </div>
</div>

<div class="row">
   <div class='col-md-12'>
      <p class='text-center'><span>* </span>: Débutant, <span>** </span>: Intermédiaire, <span>*** </span>: Avancé, <span>**** </span>: Expert.</p>
   </div>
</div>
`,
styles: [`
.row { margin: 4vh 0!important; }
h4 { color: #006BFF; }
p { margin: 2vh 0px; padding: 2vh 0px; }
span { color: #006BFF!important; font-size: 1.2em; }
`]
})

export class CompetenceComponent implements OnInit{
   public languages: Languages[];
   public gestions: Gestions[];

   constructor(private _competenceService: CompetenceService){ }

getLanguages(){
this._competenceService.getLanguages().then(languages => this.languages = languages);
}

getGestions(){
this._competenceService.getGestions().then(gestions => this.gestions = gestions);
}

ngOnInit(){
this.getLanguages();
this.getGestions();
}

}

