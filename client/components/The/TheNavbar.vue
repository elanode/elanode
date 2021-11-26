<template>
  <header class="container h-4rem flex flex-row items-center justify-between">
    <NuxtLink to="/">
      <img src="/logo.svg" alt="elanode logo" />
    </NuxtLink>
    <nav class="flex items-center text-sm justify-center gap-x-8">
      <NuxtLink
        to="/"
        class="
          px-4
          py-2
          rounded-md
          dark:hover:bg-gray-700
          hover:bg-gray-100
          font-bold
          transition-colors
        "
        >Home</NuxtLink
      >
      <NuxtLink
        to="/about-us"
        class="
          px-4
          py-2
          rounded-md
          dark:hover:bg-gray-700
          hover:bg-gray-100
          font-bold
          transition-colors
        "
        >About Us</NuxtLink
      >
      <NuxtLink
        to="/services"
        class="
          px-4
          py-2
          rounded-md
          dark:hover:bg-gray-700
          hover:bg-gray-100
          font-bold
          transition-colors
        "
        >Our Services</NuxtLink
      >
      <NuxtLink
        to="/contact-us"
        class="
          px-4
          py-2
          rounded-md
          dark:hover:bg-gray-700
          hover:bg-gray-100
          font-bold
          transition-colors
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
      const isDark =
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches);
      checkbox.value = isDark;

      toggleMode(isDark);
    });

    watch(checkbox, (newValues) => {
      toggleMode(newValues);
    });

    const toggleMode = (bool) => {
      if (bool) {
        html.value.classList.add('dark');
        html.value.classList.remove('light');
        localStorage.theme = 'dark';
      } else {
        html.value.classList.add('light');
        html.value.classList.remove('dark');
        localStorage.theme = 'light';
      }
    };

    return {
      checkbox,
    };
  },
};
</script>
