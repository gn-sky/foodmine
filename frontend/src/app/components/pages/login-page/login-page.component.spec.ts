import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleComponent } from '../../partials/title/title.component';
import { UserService } from 'src/app/services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { of } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { InputContainerComponent } from '../../partials/input-container/input-container.component';
import { InputValidationComponent } from '../../partials/input-validation/input-validation.component';
import { TextInputComponent } from '../../partials/text-input/text-input.component';
import { DefaultButtonComponent } from '../../partials/default-button/default-button.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginPageComponent,
        TitleComponent,
        InputContainerComponent,
        InputValidationComponent,
        TextInputComponent,
        DefaultButtonComponent
      ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        AppRoutingModule,
      ],
      providers: [UserService],
    });
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid initially', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should be valid with correct input', () => {
    const email = component.fc.email;
    const password = component.fc.password;

    email.setValue('test@example.com');
    password.setValue('password');

    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should call userService.login on form submission', fakeAsync(() => {
    const email = component.fc.email;
    const password = component.fc.password;

    const loginSpy = spyOn(userService, 'login').and.returnValue(
      of({} as User)
    );

    email.setValue('test@example.com');
    password.setValue('password');

    component.submit();

    tick();

    expect(loginSpy).toHaveBeenCalledOnceWith({
      email: 'test@example.com',
      password: 'password',
    });
  }));
});
