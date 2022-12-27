<script setup lang="ts">
const { product } = defineProps(["product"]);
</script>

<template>
  <div class="card text-center bg-gray-100 p-2">
    <img
      :src="product.image"
      alt="product thumb"
      class="max-h-[120px] max-w-[70%] my-0 mx-auto"
    />
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn my-4">View Details</p>
    </NuxtLink>
  </div>
</template>
