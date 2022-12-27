<script setup></script>

<template>
  <div>
    <h1>Homepage</h1>
    <ol>
      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="`/products/${Math.floor(Math.random() * 5)}`"
          >Random product</NuxtLink
        >
      </li>
    </ol>
  </div>
</template>
