import { Component, OnInit, OnDestroy, OnChanges } from "@angular/core";
import { loginmodel } from "../models/login.model";
import { Router } from "@angular/router";
import { UsersService } from "../services/users.service";

@Component({
  selector: "note-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnDestroy, OnInit, OnChanges {
  _login: loginmodel = new loginmodel();
  _loginUI: loginmodel = new loginmodel();
  public userList: loginmodel[];

  constructor(private _usersService: UsersService, private route: Router) {
    this._login = {
      id: 1,
      email: "vinoda@gmail.com",
      password: "manage",
      name: "Vinoda",
    };
    this._usersService.get().subscribe((data) => this.loadUserData(data));
  }

  loadUserData(data: loginmodel[]) {
    this.userList = data;
  }

  login(data: loginmodel) {
    this.userList.forEach((element) => {
      if (element.email == data.email && element.password == data.password) {
        this.route.navigateByUrl("/dashboard/0/notes");
      }
    });
  }

  ngOnChanges(): void {
    console.log("Login ngOnChanges Called");
  }

  ngOnInit(): void {
    console.log("Login ngOnInit Called");
  }

  ngOnDestroy(): void {
    console.log("Login ngOnDestroy Called");
  }
}
