import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPageComponent } from './checkout-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { TitleComponent } from '../../partials/title/title.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from '../../partials/text-input/text-input.component';
import { InputContainerComponent } from '../../partials/input-container/input-container.component';
import { InputValidationComponent } from '../../partials/input-validation/input-validation.component';
import { OrderItemsListComponent } from '../../partials/order-items-list/order-items-list.component';

describe('CheckoutPageComponent', () => {
  let component: CheckoutPageComponent;
  let fixture: ComponentFixture<CheckoutPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CheckoutPageComponent,
        TitleComponent,
        TextInputComponent,
        TextInputComponent,
        InputContainerComponent,
        InputValidationComponent,
        OrderItemsListComponent
      ],
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule,
      ],
    });
    fixture = TestBed.createComponent(CheckoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
