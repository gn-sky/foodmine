import { Component, Input } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title = '';

  cartQuantity$: Observable<number> = this.cartService
    .getCartObservable()
    .pipe(map((cart) => cart.totalNumber));

  user$: Observable<User> = this.userService.userObservable;

  constructor(
    private cartService: CartService,
    private userService: UserService
  ) {}

  logout() {
    this.userService.logout();
  }
}
