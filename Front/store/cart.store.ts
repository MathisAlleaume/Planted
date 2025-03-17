import {defineStore} from "pinia";
import {Product} from "~/classes/product";

interface CartItem {
  product: Product;
  quantity: number;
}

export const useCartStore = defineStore("cart", () => {
  const cart = ref<CartItem[]>([]);

  const total = computed(() => {
    let total = 0;
    cart.value.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    return total;
  });

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

  const validateCart = async () => {
    await $fetch("http://localhost:3030/carts", {
      method: "POST",
      body: {
        userId: 1,
        content: cart.value,
        total: total.value,
        status: "pending",
      },
    });
  };

  return {cart, total, pushToCart, removeFromCart, validateCart};
});
