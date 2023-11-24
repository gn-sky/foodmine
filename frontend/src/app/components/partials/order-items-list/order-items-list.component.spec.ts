import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderItemsListComponent } from './order-items-list.component';
import { Order } from 'src/app/shared/models/order';

describe('OrderItemsListComponent', () => {
  let component: OrderItemsListComponent;
  let fixture: ComponentFixture<OrderItemsListComponent>;
  let order: Partial<Order> = { totalPrice: 0 };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderItemsListComponent],
    });
    fixture = TestBed.createComponent(OrderItemsListComponent);
    component = fixture.componentInstance;
    component.order = order as Order;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
