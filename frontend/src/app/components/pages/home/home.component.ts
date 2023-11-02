import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  private routeSubscription: Subscription;
  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    this.routeSubscription = activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.foods = this.foodService.getAllBySearchTerm(params.searchTerm);
      } else {
        this.foods = foodService.getAll();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}
