<template>
  <header class="container h-4rem flex flex-row items-center justify-between">
    <img src="/logo.svg" />
    <nav class="flex items-center text-sm justify-center gap-x-8">
      <NuxtLink
        to=""
        class="
          px-4
          py-2
          rounded-md
          dark:hover:bg-gray-700
          hover:bg-gray-100
          font-bold
        "
        >Home</NuxtLink
      >
      <NuxtLink
        to=""
        class="
          px-4
          py-2
          rounded-md
          dark:hover:bg-gray-700
          hover:bg-gray-100
          font-bold
        "
        >About Us</NuxtLink
      >
      <NuxtLink
        to=""
        class="
          px-4
          py-2
          rounded-md
          dark:hover:bg-gray-700
          hover:bg-gray-100
          font-bold
        "
        >Our Services</NuxtLink
      >
      <NuxtLink
        to=""
        class="
          px-4
          py-2
          rounded-md
          dark:hover:bg-gray-700
          hover:bg-gray-100
          font-bold
        "
        >Contact</NuxtLink
      >
    </nav>
    <input type="checkbox" name="" v-model="checkbox" id="checkbox" />
  </header>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
export default {
  name: 'TheNavbar',
  setup() {
    const checkbox = ref(false);
    const html = ref(null);

    onMounted(() => {
      html.value = document.querySelector('html');
      checkbox.value =
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches);
    });

    watch(checkbox, (newValues) => {
      if (newValues) {
        html.value.classList.add('dark');
        html.value.classList.remove('light');
        localStorage.theme = 'dark';
      } else {
        html.value.classList.add('light');
        html.value.classList.remove('dark');
        localStorage.theme = 'light';
      }
    });

    return {
      checkbox,
    };
  },
};
</script>
