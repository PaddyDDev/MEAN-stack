"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SigninComponent = /** @class */ (function () {
    function SigninComponent() {
    }
    //could use formBuilder
    SigninComponent.prototype.onSubmit = function () {
        console.log(this.myForm);
        this.myForm.reset();
    };
    SigninComponent.prototype.ngOnInit = function () {
        //throw new Error("Method not implemented.");
        this.myForm = new forms_1.FormGroup({
            /*firstname: new FormControl(null, Validators.required),
            lastname: new FormControl(null, Validators.required),*/
            email: new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.email]),
            password: new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.minLength(8)])
        });
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'app-signin',
            templateUrl: './signin.component.html'
        })
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
