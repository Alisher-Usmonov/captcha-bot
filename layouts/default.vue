<template>
  <div class="container mx-auto">
    <header
      class="flex justify-between items-center min-h-[70px] border-b-2 border-b-gray-300 mb-5"
    >
      <h2 class="text-[#00DC82] font-bold text-3xl">Nuxt</h2>
      <nav class="">
        <ul class="flex items-center gap-x-3 text-lg">
          <li class="font-semibold text-gray-800">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li class="font-semibold text-gray-800">
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li class="font-semibold text-gray-800">
            <NuxtLink to="/products">Products</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <div>
      <slot />
    </div>
  </div>
</template>

<style>
.router-link-exact-active {
  color: #00dc82;
}
</style>
