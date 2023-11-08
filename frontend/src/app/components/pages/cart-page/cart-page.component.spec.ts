import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPageComponent } from './cart-page.component';
import { TitleComponent } from '../../partials/title/title.component';

describe('CartPageComponent', () => {
  let component: CartPageComponent;
  let fixture: ComponentFixture<CartPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartPageComponent, TitleComponent]
    });
    fixture = TestBed.createComponent(CartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
