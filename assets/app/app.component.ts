import { Component } from '@angular/core';
import {MessageService} from "./messages/message.service";
//import {Message} from "./messages/message.model";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessageService]
})
export class AppComponent
{
    //content = 'Some Temperature Data'

    //use constructor to create new message
    /*messages: Message[] =
            [
                new Message('Some Message', 'Paddy'),
                new Message('3rd Message', 'Paddy'),
                new Message('4th Message', 'Paddy'),
                new Message('Second message', 'Rhonda')
            ]*/
       /* {
            content: 'Welcome to the TempApature application',
            author: 'Paddy'
        };*/
}