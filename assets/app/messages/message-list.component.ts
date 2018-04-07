import {Component, OnInit} from "@angular/core";
import {Message} from "./message.model";
import {MessageService} from "./message.service";
@Component
({
    selector: 'app-message-list',
    //inline template used as it wants to be stored in this file
    template:
            `
                <div class="col-md-8 col-md-offset-2">
                    <app-message 
                            [message]="message"
                            *ngFor="let message of messages">

                    </app-message>
                </div>      
            `
    //removed here and in message-input component as want to get it to all components
    //and not just one. As such placed in the app.component.ts file
    //providers: [MessageService]
})

export class MessageListComponent implements OnInit
{
    messages: Message[] = [];

    constructor(private messageService: MessageService)
    {

    }
    ngOnInit()
    {
        this.messageService.getMessages()
            .subscribe(
                (messages:Message[]) =>
                {
                    this.messages = messages;
                }

            );
    }
}