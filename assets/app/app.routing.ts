import {RouterModule, Routes} from "@angular/router";
import {MessagesComponent} from "./messages/messages.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {AUTH_ROUTES} from "./auth/auth.routes";
//Routes, expects an array of routes, where each route is represented by a JS object {}
//with each route having a path, the part in the url after the slash (/)
const APP_ROUTES: Routes =
    [
        //need slash in first path
        //pathMatch is required as Angular will try to match any part of the path
        //with the path set up with in the ''. In this case nothing,
        //as such all paths have an empty space between the domain and the path
        //Thus, only react to this path '' if that is the full path
        {path: '', redirectTo: '/messages', pathMatch: 'full'},
        {path: 'messages', component: MessagesComponent},
        /*the children: AUTH_ROUTES registers the child routes for the /auth path
            and explains why angular will load them in the authentication.component file
            in the <router-outlet>
        */
        {path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES}
        //{path: 'rooms', component: RoomComponent}
    ];
//the below registers the routes in the Angular application
export const routing = RouterModule.forRoot(APP_ROUTES);