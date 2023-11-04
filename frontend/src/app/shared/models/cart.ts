import { CartItem } from "./cart-item";

export class Cart {
    items: CartItem[] = [];
    totalPrice: number = 0;
    totalNumber: number = 0;
}
