/*
 *    Version:	1.0.0
 *    Date:		28 mars 2016 10:19:32
 *    Author:	sarah 
 *
 *    Coded with Netbeans!
 */

import {Component, OnInit} from 'angular2/core';

import {ProjectService} from './project.service';
import {Project} from './project';

@Component({
selector: 'my-project',
template: `
<div class='row'>
   <div class="col-sm-12 col-md-offset-1 col-md-10">
      <h4 class="text-center"> Mes projets informatiques </h4>
      <div class="project" *ngFor="#project of projects">
           <p class="color3"><strong>{{project.year}}</strong> 
            <i class="fa fa-star-half-o fa-lg"></i>
            <strong>{{project.language}} </strong>               
         </p>
         <p><strong>{{project.name}}</strong> - <strong>{{project.society}} </strong></p>
         <p><strong>{{project.description}}</strong></p>
      </div>
   </div>
</div>
`,
styles: [`
.row { margin: 4vh 0!important; }
h4 { color: #006BFF; }
.project { margin-top: 4vh; }
strong { font-weight: bold; }
`]
})

export class ProjectComponent implements OnInit {
   public projects: Project[];

   constructor(private _projectService: ProjectService){}

getProjects(){
this._projectService.getProjects().then(projects => this.projects = projects);
}

ngOnInit(){
this.getProjects();
}
}