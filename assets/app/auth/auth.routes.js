"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var signup_component_1 = require("./signup.component");
var signin_component_1 = require("./signin.component");
var loggout_component_1 = require("./loggout.component");
exports.AUTH_ROUTES = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    //three child routes for example
    //domain/auth/signup where its everything after the second forward slash/
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'signin', component: signin_component_1.SigninComponent },
    { path: 'logout', component: loggout_component_1.LoggoutComponent }
];
