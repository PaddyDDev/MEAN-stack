export class User
{
 constructor(public email:string,
             public password:string,
             public firstName?: string,
             //question mark (?) means the properties can be undefined
             //dont have to be entered by the user.
             public lastName?: string){}
}