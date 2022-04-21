<template>
  <header class="container h-4rem flex flex-row items-center justify-between">
    <div class="hidden sm:block">
      <NuxtLink v-if="!isDark" to="/" exact-active-class="">
        <img src="/elanode-logo-blue.png" alt="elanode logo" width="100" />
      </NuxtLink>
      <NuxtLink v-else to="/" exact-active-class="">
        <img src="/elanode-logo-white.png" alt="elanode logo" width="100" />
      </NuxtLink>
    </div>
    <div class="block sm:hidden">
      <NuxtLink v-if="!isDark" to="/" exact-active-class="">
        <img
          src="/elanode-header-icon-blue.png"
          alt="elanode logo"
          width="50"
        />
      </NuxtLink>
      <NuxtLink v-else to="/" exact-active-class="">
        <img
          src="/elanode-header-icon-white.png"
          alt="elanode logo"
          width="50"
        />
      </NuxtLink>
    </div>
    <nav class="flex items-center text-sm justify-center gap-x-1 sm:gap-x-8">
      <NuxtLink
        to="/"
        class="px-4 py-2 rounded-md dark:hover:bg-gray-700 hover:bg-gray-100 font-bold transition-colors text-xs sm:text-base"
        >Home</NuxtLink
      >
      <NuxtLink
        to="/about-us"
        class="px-4 py-2 rounded-md dark:hover:bg-gray-700 hover:bg-gray-100 font-bold transition-colors text-xs sm:text-base"
        >About Us</NuxtLink
      >
      <!-- <NuxtLink
        to="/services"
        class="px-4 py-2 rounded-md dark:hover:bg-gray-700 hover:bg-gray-100 font-bold transition-colors text-xs sm:text-base"
        >Our Services</NuxtLink
      > -->
      <NuxtLink
        to="/contact-us"
        class="px-4 py-2 rounded-md dark:hover:bg-gray-700 hover:bg-gray-100 font-bold transition-colors text-xs sm:text-base"
        >Contact</NuxtLink
      >
    </nav>
    <TheModeToggler :checkbox.sync="checkbox" />
    <!-- <input id="checkbox" v-model="checkbox" type="checkbox" name="" /> -->
  </header>
</template>

<script>
export default {
  name: "TheNavbar",
  data() {
    return {
      checkbox: false,
      html: null,
    };
  },
  computed: {
    isDark() {
      return this.checkbox;
    },
  },
  watch: {
    checkbox(val) {
      this.toggleMode(val);
    },
  },
  mounted() {
    this.html = document.querySelector("html");
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    this.checkbox = isDark;

    this.toggleMode(isDark);
  },
  methods: {
    toggleMode(bool) {
      if (bool) {
        this.html.classList.add("dark");
        this.html.classList.remove("light");
        localStorage.theme = "dark";
      } else {
        this.html.classList.add("light");
        this.html.classList.remove("dark");
        localStorage.theme = "light";
      }
    },
  },
};
</script>
