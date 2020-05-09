import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { LoginComponent } from "./login.component";
import { FormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { LoginService } from "../services/login.service";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.debugElement.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should compare loginname inside loginComponent and loginSerivce ", () => {
    let loginService = fixture.debugElement.injector.get(LoginService);
    fixture.detectChanges();
    expect(loginService.LoginName).toEqual(component._loginName);
  });
});
