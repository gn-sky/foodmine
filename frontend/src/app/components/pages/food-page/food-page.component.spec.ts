import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPageComponent } from './food-page.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Food } from 'src/app/shared/models/food';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';

describe('FoodPageComponent', () => {
  let component: FoodPageComponent;
  let fixture: ComponentFixture<FoodPageComponent>;
  let food: Partial<Food> = { imageUrl: 'mock.jpg' };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodPageComponent, NotFoundComponent],
      imports: [AppRoutingModule],
    });
    fixture = TestBed.createComponent(FoodPageComponent);
    component = fixture.componentInstance;
    component.food = food as Food;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
