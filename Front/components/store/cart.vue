<template>
  <div
    class="fixed md:relative bottom-4 right-4 md:bottom-auto md:right-auto z-50"
    ref="cartContainer">
    <div
      class="flex flex-row gap-2 items-center bg-white shadow-md px-2 py-1 rounded-xl cursor-pointer hover:bg-slate-200 transition-all duration-300"
      @click.stop="openCart">
      <Icon name="heroicons:shopping-cart" class="w-6 h-6" />
      <div class="text-sm font-normal font-['Inter']">
        {{ cart.length }} : {{ total }} €
      </div>
    </div>
    <div
      v-if="opened === true"
      class="fixed md:absolute bottom-5 left-5 md:left-auto md:top-0 right-5 w-[calc(100%-40px)] md:w-auto md:min-w-[300px] h-fit bg-white rounded-md shadow-md px-4 py-2">
      <div class="text-sm font-normal font-['Inter'] w-full text-center">
        Mon Panier
      </div>
      <hr class="my-2 border-gray-200" />
      <div class="flex flex-col gap-2">
        <div
          v-if="cart.length === 0"
          class="text-sm font-normal font-['Inter'] w-full text-center">
          Votre panier est vide
        </div>
        <div v-for="item in cart" :key="item.id" v-if="cart.length > 0">
          <div class="flex flex-row gap-2 items-center">
            <div
              class="w-6 h-6 bg-gray-200 rounded-full bg-cover bg-center"
              :style="{backgroundImage: `url(${item.product.image})`}" />
            <div class="text-sm font-normal font-['Inter']">
              {{ item.quantity }}x
            </div>
            <div class="text-sm font-normal font-['Inter']">
              {{ item.product.name }}
            </div>
            <div class="text-sm font-normal font-['Inter']">
              {{ item.product.price * item.quantity }} €
            </div>
          </div>
        </div>
        <hr class="my-2 border-gray-200" v-if="cart.length > 0" />
        <div
          class="flex flex-row gap-2 items-center justify-between"
          v-if="cart.length > 0">
          <div class="text-sm font-normal font-['Inter']">
            Total : {{ total }} €
          </div>
          <div
            class="text-sm font-normal font-['Inter'] bg-slate-100 px-2 py-1 rounded-xl cursor-pointer hover:bg-slate-200 transition-all duration-300">
            Valider le panier
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {useCartStore} from "~/store/cart.store";

  const opened = ref(false);
  const cartContainer = ref(null);

  const {cart} = useCartStore();
  const total = computed(() => {
    return cart.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  });

  const handleClickOutside = (event) => {
    if (
      cartContainer.value &&
      !cartContainer.value.contains(event.target) &&
      opened.value === true
    ) {
      console.log("close cart");
      opened.value = false;
    }
  };

  const openCart = (event) => {
    console.log("open cart", opened.value);
    opened.value = true;
  };

  onMounted(() => {
    document.addEventListener("click", handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
  });
</script>
