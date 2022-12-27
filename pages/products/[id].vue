<script setup>
const { id } = useRoute().params;

const uri = "https://fakestoreapi.com/products/" + id;

// fetch data
const { data: product } = await useFetch(uri);

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: "Product not found" });
}

useHead({
  title: "Productbek",
  meta: [
    {
      name: "description",
      content: product.description,
    },
  ],
});
</script>

<template>
  <div>
    <p>{{ product.title }}</p>
    <p>{{ product.price }}</p>
    <p>{{ product.id }}</p>
    <button class="btn flex">
      <i class="material-icons mr-2">add_shopping_cart</i>
    </button>
  </div>
</template>
