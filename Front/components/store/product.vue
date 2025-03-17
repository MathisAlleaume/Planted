<template>
  <div
    class="flex flex-col gap-4 bg-white rounded-lg p-4"
    :id="`product-${props.product.id}`">
    <div
      :style="{backgroundImage: `url(${props.product.image})`}"
      class="w-full min-h-[400px] bg-cover bg-center rounded-md" />
    <div class="flex flex-row gap-4">
      <div class="flex flex-col gap-2">
        <div class="flex flex-row gap-2 justify-between items-center">
          <h1 class="text-2xl font-bold">{{ props.product.name }}</h1>
          <p
            class="text-sm text-gray-500 font-bold bg-slate-100 px-2 rounded-xl">
            {{ props.product.price }} €
          </p>
        </div>
        <p class="text-sm text-gray-500">{{ props.product.description }}</p>
        <div class="flex flex-row gap-2 justify-end">
          <div
            class="bg-slate-100 px-2 py-1 rounded-xl cursor-pointer hover:bg-slate-200 transition-all duration-300">
            Voir le produit
          </div>
          <div
            class="bg-slate-100 px-2 py-1 rounded-xl cursor-pointer hover:bg-slate-200 transition-all duration-300"
            @click="addToCart()"
            v-if="cartQuantity === 0">
            <Icon name="heroicons:shopping-cart" class="w-4 h-4" />
          </div>
          <div class="flex flex-row gap-2 items-center" v-else>
            <div
              class="bg-slate-100 px-2 py-1 rounded-xl cursor-pointer hover:bg-slate-200 transition-all duration-300"
              @click="removeFromCart()">
              <Icon name="heroicons:minus" class="w-4 h-4" />
            </div>
            <span class="text-sm">{{ cartQuantity }}</span>
            <div
              class="bg-slate-100 px-2 py-1 rounded-xl cursor-pointer hover:bg-slate-200 transition-all duration-300"
              @click="addToCart()">
              <Icon name="heroicons:plus" class="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {Product} from "~/classes/product";
  import {useCartStore} from "~/store/cart.store";

  const props = defineProps({
    product: {
      type: Object as () => Product,
      required: true,
    },
  });

  const cartQuantity = computed(() => {
    let quantity = useCartStore().cart.find(
      (item) => item.product.id === props.product.id
    )?.quantity;
    return quantity ? quantity : 0;
  });

  const addToCart = () => {
    useCartStore().pushToCart(props.product);
  };

  const removeFromCart = () => {
    useCartStore().removeFromCart(props.product);
  };
</script>
