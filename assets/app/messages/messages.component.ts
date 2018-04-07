import {Component} from "@angular/core";

@Component
({
    selector: 'app-messages',
    //inline template due to backticks, allows for the insertion of HTML directly
    template:
        `
        <div class="row">
            <app-message-input></app-message-input>
        </div>
        <div class="row">
            <app-message-list></app-message-list>
        </div>        
        `
})

export class MessagesComponent
{

}