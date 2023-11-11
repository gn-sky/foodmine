import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
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
  private foodSubscription!: Subscription;

  constructor(
    activatedRoute: ActivatedRoute,
    foodService: FoodService,
    private cartService: CartService,
    private router: Router
  ) {
    this.routeSubscription = activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.foodSubscription = foodService
          .getById(params.id)
          .subscribe((serverFood) => {
            this.food = serverFood;
          });
      }
    });
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
    if (this.foodSubscription) {
      this.foodSubscription.unsubscribe();
    }
  }
}
