import {Routes} from "@angular/router";
import {SignupComponent} from "./signup.component";
import {SigninComponent} from "./signin.component";
import {LoggoutComponent} from "./loggout.component";

export const AUTH_ROUTES: Routes =
    [
        {path: '', redirectTo: 'signup', pathMatch: 'full'},
        //three child routes for example
        //domain/auth/signup where its everything after the second forward slash/
        {path: 'signup', component: SignupComponent},
        {path: 'signin', component: SigninComponent},
        {path: 'logout', component: LoggoutComponent}

    ];