import { Component } from '@angular/core';

@Component({
    selector : 'note-login',
    templateUrl : './login.component.html',
    styleUrls:['./login.component.css']
})

export class LoginComponent {
    public PageTitle: string = "Welcome To New Component";

    LogIn = function () {
        this.PageTitle = "Login Form Is Loaded";
    }
}