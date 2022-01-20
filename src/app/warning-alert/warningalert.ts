import {Component } from '@angular/core';


@Component({
    selector: 'app-warning',
    templateUrl:'./warningalert.html',
    styleUrls: ['./warningalert.css']

})

export class WarningAlertComponent
{    
    warningMessage:string="";
    Clicked:boolean = false;
    
    onClickWarning()
    {
        this.Clicked = !this.Clicked;
        if(this.Clicked)
        {
            this.warningMessage = "Hey its warning alert";
        }
        else
        {
            this.warningMessage = "";
        }
      
    }
}