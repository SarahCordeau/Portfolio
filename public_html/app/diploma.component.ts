/*
 *    Version:	1.0.0
 *    Date:		23 mars 2016 11:30:18
 *    Author:	simplon-sco 
 *
 *    Coded with Netbeans!
 */

import {Component, OnInit} from 'angular2/core';

import {DiplomaService} from './diploma.service';
import {Diploma} from './diploma';
import {Certificate} from './certificate';

@Component({
selector: 'my-diploma',
template: `
<div class='row'>
   <div class="col-sm-12 col-md-offset-1 col-md-5">
      <h4 class="text-center"> Diplômes </h4>
      <div class="diploma" *ngFor="#diploma of diplomas">
           <p class="color3"><strong>{{diploma.year}}</strong> 
            <i class="fa fa-star-half-o fa-lg"></i>
            <strong>{{diploma.level}} </strong>               
         </p>
         <p><strong>{{diploma.description}}</strong> - <strong>{{diploma.school}}</strong></p>
      </div>
   </div>

   <div class="col-sm-12 col-md-offset-1 col-md-5">
      <h4 class="text-center"> Certificats </h4>
      <div class="diploma" *ngFor="#certificate of certificates">
           <p class="color3"><strong>{{certificate.year}}</strong> 
            <i class="fa fa-star-half-o fa-lg"></i>
         </p>
         <p><strong>{{certificate.description}}</strong> - <strong>{{certificate.school}}</strong></p>
      </div>
   </div>
</div>
`,
styles: [`
.row { margin: 4vh 0!important; }
h4 { color: #006BFF; }
.diploma { margin-top: 4vh; }
strong { font-weight: bold; }
`]
})

export class DiplomaComponent implements OnInit {
   public diplomas: Diploma[];
   public certificates: Certificates[];

   constructor(private _diplomaService: DiplomaService){}

getDiploma(){
this._diplomaService.getDiploma().then(diplomas => this.diplomas = diplomas);
}

getCertificates(){
this._diplomaService.getCertificates().then(certificates => this.certificates = certificates);
}

ngOnInit(){
this.getDiploma();
this.getCertificates();
}
}
