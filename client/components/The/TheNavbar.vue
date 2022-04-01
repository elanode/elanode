<template>
  <header class="container h-4rem flex flex-row items-center justify-between">
    <NuxtLink to="/">
      <img src="/logo.svg" alt="elanode logo" />
    </NuxtLink>
    <nav class="flex items-center text-sm justify-center gap-x-8">
      <NuxtLink
        to="/"
        class="px-4 py-2 rounded-md dark:hover:bg-gray-700 hover:bg-gray-100 font-bold transition-colors"
        >Home</NuxtLink
      >
      <NuxtLink
        to="/about-us"
        class="px-4 py-2 rounded-md dark:hover:bg-gray-700 hover:bg-gray-100 font-bold transition-colors"
        >About Us</NuxtLink
      >
      <!-- <NuxtLink
        to="/services"
        class="px-4 py-2 rounded-md dark:hover:bg-gray-700 hover:bg-gray-100 font-bold transition-colors"
        >Our Services</NuxtLink
      > -->
      <NuxtLink
        to="/contact-us"
        class="px-4 py-2 rounded-md dark:hover:bg-gray-700 hover:bg-gray-100 font-bold transition-colors"
        >Contact</NuxtLink
      >
    </nav>
    <input id="checkbox" v-model="checkbox" type="checkbox" name="" />
  </header>
</template>

<script>
export default {
  name: 'TheNavbar',
  data() {
    return {
      checkbox: false,
      html: null,
    };
  },
  watch: {
    checkbox(val) {
      this.toggleMode(val);
    },
  },
  mounted() {
    this.html = document.querySelector('html');
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    this.checkbox = isDark;

    this.toggleMode(isDark);
  },
  methods: {
    toggleMode(bool) {
      if (bool) {
        this.html.classList.add('dark');
        this.html.classList.remove('light');
        localStorage.theme = 'dark';
      } else {
        this.html.classList.add('light');
        this.html.classList.remove('dark');
        localStorage.theme = 'light';
      }
    },
  },
};
</script>
