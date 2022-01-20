import {Component} from '@angular/core';

@Component({
    selector: 'app-success',
    templateUrl: './successalert.html',
    styleUrls: ['./successalert.css']
})

export class SuccessAlertComponent
{
    successMessage:string="";
    Clicked:boolean = false;
    OnClickSuccess()
    {
        this.Clicked = !this.Clicked;
        if(this.Clicked)
        {
            this.successMessage = "Hey its success alert";
        }
        else
        {
            this.successMessage = "";
        }


    }
}