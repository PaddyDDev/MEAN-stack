"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, password, firstName, 
    //question mark (?) means the properties can be undefined
    //dont have to be entered by the user.
    lastName) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());
exports.User = User;
