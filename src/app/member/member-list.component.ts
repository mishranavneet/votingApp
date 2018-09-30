import { Component } from "@angular/core";
import { MemberListService } from "./member-list.service";
import { RootObject } from './json.model';
// import { Teamdetails } from './json.model';
import { Memberdetail } from './json.model';
import { member } from '../models/member';
import {CommonService} from '../common.service';
import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from "@angular/platform-browser-dynamic/src/platform_providers";

@Component({
    selector: 'member-list',
    templateUrl: 'member-list.component.html',
    styleUrls: ['./member-list.component.css']
})
export class MemberListComponent {
    /**
     *
     */
    members: any;
    sprintNo: any[] = [
        { "sprintNo": 19 },
        { "sprintNo": 20 },
        { "sprintNo": 21 },
        { "sprintNo": 22 },
    ];
    error: string;

    topazNames: any[] = [
        { "name": "--Select--"},
        { "name": "Krishna Kumar"},
        { "name": "Ankur Bhojak"},
        { "name": "Sandeep Dasari"},
        { "name": "Anjali Gupta"},
        { "name": "Pooja Keshari"},
        { "name": "Biro"},
        {"name": "Arja"},
        { "name": "Ashish Bobade"},
        { "name": "Ashish Dandekar"}
    ];
    blueTopazNames: any [] = [
        { "name": "--Select--"},
        { "name": "Navneet Mishra"},
        { "name": "Vipul Malani"},
        { "name": "Apoorva Manjunath"},
        { "name": "Anugrah Nair"},
        { "name": "Vanaja Nalam"}
    ];
    fnaticNames: any[] = [
        { "name": 'yz1' },
        { "name": '234' },
        { "name": '567' },
        { "name": '890' }
    ];
    teamNames: any[] = [
        { "name": 'Topaz' },
        { "name": 'Blue Topaz' },
        { "name": "Fnatic"}
    ];
    submitted = false;

    constructor(private newService :CommonService,) { }
        Repdata;  
        valbutton ="Save";
    

    ngOnInit() {
        this.newService.GetUser().subscribe(data =>  this.Repdata = data)

    }

    onSave = function(user,isValid: boolean) {    
        user.mode= this.valbutton;  
         this.newService.saveUser(user)  
         .subscribe(data =>  {  alert(data.data);  
              
           this.ngOnInit();    
         }   
         , error => this.errorMessage = error )  
           
    }

    edit = function(kk) {  
        this.id = kk._id;
        this.sprintNo= kk.sprintNo;  
        this.teamName= kk.teamName;
        this.memberName= kk.memberName;  
        this.comment= kk.comment;  
        this.valbutton ="Update";  
    }
    
    delete = function(id) {  
        this.newService.deleteUser(id)  
        .subscribe(data =>   { alert(data.data) ; this.ngOnInit();}, error => this.errorMessage = error )   
        }

    model = new member;

    // onbuttonclick() {
    //     const SucessMsg: string = 'Thanks for voting';
    //     var myWindow = window.open(SucessMsg);
    //     myWindow.document.write(SucessMsg);
    //     console.log(this.model.teamName);
    //     console.log(this.model.teamName);

    // }
    onSubmit() {
        this.submitted = true;
    }
    dropdownchange() {
        let isSeleacted = false;
        if (this.model.teamName = 'Pheonix') {
            return isSeleacted = false;

        } else if (this.model.teamName = '') {
            return isSeleacted = true;
        }
    }
}