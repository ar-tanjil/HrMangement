import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Application, ApplicationTable } from 'src/app/model/application/application';
import { ApplicationDatasource } from 'src/app/model/application/application.datsource';
import { ApplicationModel } from 'src/app/model/application/application.model';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent{

  constructor(private appModel: ApplicationModel){
    
    
  }

  
  get applicants(){
    return this.appModel.getApplications(); 
  }



  

}
