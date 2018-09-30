import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';   
  
import { HttpModule } from '@angular/http';  
import { FormsModule } from '@angular/forms';  
  
import { AppComponent } from './app.component';  
  
import {CommonService} from './common.service';  
import { MemberListComponent } from './member/member-list.component';
import { MemberListService } from './member/member-list.service';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
  
@NgModule({  
  declarations: [  
    AppComponent,
    MemberListComponent  
  ],  
  imports: [  
    BrowserModule,HttpModule,FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      // {path:'Report' , component:ReportComponent}, 
      {path:'Voting' , component:MemberListComponent}
      // {path: 'sprint-dashboard' , component:MemberListComponent}
      
    ])
  ],  
  providers: [CommonService,MemberListService],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  