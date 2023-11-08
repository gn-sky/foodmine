import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  cartQuantity$: Observable<number> = this.cartService
    .getCartObservable()
    .pipe(map((cart) => cart.totalNumber));

  constructor(private cartService: CartService) {}
}
