<template>
  <div
    class="fixed md:fixed top-4 right-4 md:top-4 md:right-4 z-50"
    ref="cartContainer">
    <div
      class="flex flex-row gap-2 items-center bg-white shadow-md px-2 py-1 rounded-xl cursor-pointer hover:bg-slate-200 transition-all duration-300"
      @click.stop="openCart">
      <Icon name="heroicons:shopping-cart" class="w-6 h-6" />
      <div class="text-sm font-normal font-['Inter']" v-if="cart.length > 0">
        {{ cart.length }} : {{ total }} €
      </div>
    </div>
    <div
      v-if="opened === true"
      class="fixed md:fixed mt-4 md:mt-4 md:right-0 md:mr-4 w-[calc(100%-40px)] md:w-auto md:min-w-[300px] h-fit bg-white rounded-md shadow-md px-4 py-2">
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
              {{ item.product.name }} ({{ item.product.price }} €) :
            </div>
            <div
              class="text-sm font-normal font-['Inter'] bg-slate-100 px-2 py-1 rounded-xl">
              {{ item.product.price * item.quantity }} €
            </div>
          </div>
        </div>
        <hr class="my-2 border-gray-200" v-if="cart.length > 0" />
        <div
          class="flex flex-row gap-2 items-center justify-between"
          v-if="cart.length > 0">
          <div
            class="text-sm font-normal font-['Inter'] bg-slate-100 px-2 py-1 rounded-xl">
            Total : {{ total }} €
          </div>
          <div
            class="text-sm font-normal font-['Inter'] bg-slate-100 px-2 py-1 rounded-xl cursor-pointer hover:bg-slate-200 transition-all duration-300"
            @click="validateCart">
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

  const cartStore = useCartStore();
  const cart = computed(() => {
    return cartStore.cart;
  });
  const total = computed(() => {
    return cartStore.total;
  });

  const handleClickOutside = (event) => {
    if (
      cartContainer.value &&
      !cartContainer.value.contains(event.target) &&
      opened.value === true
    ) {
      opened.value = false;
    }
  };

  const openCart = (event) => {
    opened.value = true;
  };

  const validateCart = () => {
    cartStore.validateCart();
  };

  onMounted(() => {
    document.addEventListener("click", handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
  });
</script>
