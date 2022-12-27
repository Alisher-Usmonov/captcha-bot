<script setup>
// fetch products
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<template>
  <div>
    <Head>
      <Title>Our products page</Title>
      <Meta name="description" content="changed" />
    </Head>
    <h1 class="text-4xl">Products</h1>
    <div class="grid grid-cols-4 gap-5 mt-2">
      <div v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>
