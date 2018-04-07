"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var messages_component_1 = require("./messages/messages.component");
var authentication_component_1 = require("./auth/authentication.component");
var auth_routes_1 = require("./auth/auth.routes");
//Routes, expects an array of routes, where each route is represented by a JS object {}
//with each route having a path, the part in the url after the slash (/)
var APP_ROUTES = [
    //need slash in first path
    //pathMatch is required as Angular will try to match any part of the path
    //with the path set up with in the ''. In this case nothing,
    //as such all paths have an empty space between the domain and the path
    //Thus, only react to this path '' if that is the full path
    { path: '', redirectTo: '/messages', pathMatch: 'full' },
    { path: 'messages', component: messages_component_1.MessagesComponent },
    /*the children: AUTH_ROUTES registers the child routes for the /auth path
        and explains why angular will load them in the authentication.component file
        in the <router-outlet>
    */
    { path: 'auth', component: authentication_component_1.AuthenticationComponent, children: auth_routes_1.AUTH_ROUTES }
    //{path: 'rooms', component: RoomComponent}
];
//the below registers the routes in the Angular application
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
