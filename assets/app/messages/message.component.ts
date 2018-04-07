import {Component, Input} from "@angular/core";
import {Message} from "./message.model";
import {MessageService} from "./message.service";

@Component
({
    selector: 'app-message',
    templateUrl: './message.component.html',
    /*styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]*/

})
export class MessageComponent
{
    @Input() message: Message;

    //as delete method is already create in messages.service
    //therefore can just use constructor for messageService
    constructor(private messageService: MessageService){}

    onEdit()
    {
        this.messageService.editMessage(this.message);
    }

    onDelete()
    {
        this.messageService.deleteMessage(this.message);
    }
}