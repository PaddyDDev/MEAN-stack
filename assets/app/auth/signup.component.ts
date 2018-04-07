import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
@Component
({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit
{
    myForm: FormGroup;
    //could use formBuilder

    onSubmit()
    {
        console.log(this.myForm);
        this.myForm.reset();
    }
    ngOnInit()
    {
        //throw new Error("Method not implemented.");
        this.myForm = new FormGroup
        ({
            firstname: new FormControl(null, Validators.required),
            lastname: new FormControl(null, Validators.required),
            email: new FormControl(null,
                [Validators.required, Validators.email]),
            password: new FormControl(null,
                [Validators.required, Validators.minLength(8)])
        })
    }
}