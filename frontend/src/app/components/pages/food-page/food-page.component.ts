import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss'],
})
export class FoodPageComponent implements OnDestroy {
  food!: Food;  
  private routeSubscription: Subscription;
  
  constructor(activatedRoute: ActivatedRoute, foodService: FoodService) {
    this.routeSubscription = activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.food = foodService.getById(params.id);        
      }
    })
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}
