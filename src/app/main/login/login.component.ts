import { Component, OnInit } from "@angular/core";
import { loginmodel } from "../models/login.model";
import { Router } from "@angular/router";
import { UsersService } from '../services/users.service';

@Component({
  selector: "note-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  _login: loginmodel = new loginmodel();
  _loginUI: loginmodel = new loginmodel();
  public userList : loginmodel[];

  constructor(private _usersService : UsersService, private route: Router) {
    this._login = {
      id: 1,
      email: "vinoda@gmail.com",
      password: "manage",
      name: "Vinoda",
    };
    this._usersService.get().subscribe(data => this.loadUserData(data));
  }

  loadUserData(data : loginmodel[]) {
    this.userList = data;

  }
  login(data: loginmodel) {
    //Todo: Email & Password to redirect to dashboard

    this.userList.forEach((element) => {
      if (element.email == data.email && element.password == data.password) {
        this.route.navigateByUrl("/dashboard");
      };
    });

  }
}
