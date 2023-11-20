import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputValidationComponent } from './input-validation.component';
import { FormControl } from '@angular/forms';

describe('InputValidationComponent', () => {
  let component: InputValidationComponent;
  let fixture: ComponentFixture<InputValidationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputValidationComponent]
    });
    const mockControl = new FormControl();

    fixture = TestBed.createComponent(InputValidationComponent);
    component = fixture.componentInstance;
    component.control = mockControl;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
