import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  foods$: Observable<Food[]> = this.activatedRoute.params.pipe(
    switchMap((params) => {
      if (params.searchTerm) {
        return this.foodService.getAllBySearchTerm(params.searchTerm);
      } else if (params.tag) {
        return this.foodService.getAllFoodsByTag(params.tag);
      } else {
        return this.foodService.getAll();
      }
    })
  );

  constructor(
    private foodService: FoodService,
    private activatedRoute: ActivatedRoute
  ) {}
}
