import {defineStore} from "pinia";
import {Product} from "~/classes/product";

interface CartItem {
  product: Product;
  quantity: number;
}

export const useCartStore = defineStore("cart", () => {
  const cart = ref<CartItem[]>([]);

  const pushToCart = (item: Product) => {
    const existingItem = cart.value.find(
      (cartItem) => cartItem.product.id === item.id
    );
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.value.push({product: item, quantity: 1});
    }
  };

  const removeFromCart = (item: Product) => {
    const existingItem = cart.value.find(
      (cartItem) => cartItem.product.id === item.id
    );
    if (existingItem) {
      existingItem.quantity--;
      if (existingItem.quantity === 0) {
        cart.value = cart.value.filter(
          (cartItem) => cartItem.product.id !== item.id
        );
      }
    }
  };

  return {cart, pushToCart, removeFromCart};
});
