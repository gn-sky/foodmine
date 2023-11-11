import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/app/shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnDestroy {
  private tagSubscription: Subscription;
  tags?: Tag[];

  constructor(foodService: FoodService) {
    this.tagSubscription = foodService.getAllTags().subscribe((serverTags) => {
      this.tags = serverTags;
    });
  }

  ngOnDestroy(): void {
    if (this.tagSubscription) {
      this.tagSubscription.unsubscribe();
    }
  }
}
