import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPageComponent } from './register-page.component';
import { TitleComponent } from '../../partials/title/title.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TextInputComponent } from '../../partials/text-input/text-input.component';
import { InputContainerComponent } from '../../partials/input-container/input-container.component';
import { InputValidationComponent } from '../../partials/input-validation/input-validation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DefaultButtonComponent } from '../../partials/default-button/default-button.component';

describe('RegisterPageComponent', () => {
  let component: RegisterPageComponent;
  let fixture: ComponentFixture<RegisterPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule,
      ],
      declarations: [
        RegisterPageComponent,
        TitleComponent,
        TextInputComponent,
        InputContainerComponent,
        InputValidationComponent,
        DefaultButtonComponent,
      ],
    });
    fixture = TestBed.createComponent(RegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
