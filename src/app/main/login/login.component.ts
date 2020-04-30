import { Component, OnInit } from "@angular/core";
import { loginmodel } from "../models/login.model";
import { Router } from "@angular/router";

@Component({
  selector: "note-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  _login: loginmodel = new loginmodel();
  _loginUI: loginmodel = new loginmodel();

  constructor(private route: Router) {
    this._login = {
      id: 1,
      email: "vinoda@gmail.com",
      password: "manage",
      name: "Vinoda",
    };
  }

  login(data: loginmodel) {
    //Todo: Email & Password to redirect to dashboard
    if (
      this._login.email == data.email &&
      this._login.password == data.password
    ) {
      this.route.navigateByUrl("/dashboard");
    }
  }
}
