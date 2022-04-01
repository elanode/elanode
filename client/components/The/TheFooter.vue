<template>
  <div class="container">
    <div
      class="bg-black rounded-[0.625rem] text-white text-sm min-h-[18.75rem] px-13 pt-10 pb-9 dark:bg-[#282828]"
    >
      <div class="border-b flex flex-col mb-6 items-center">
        <div class="flex mb-8 gap-x-4 items-center">
          <IconLogo class="fill-current text-white" />
          <span class="font-bold text-2xl">Elanode</span>
        </div>
        <span class="text-center mb-3"
          >The Tall Tower 29th Floor, South Jakarta, Indonesia 14100</span
        >
        <div class="flex flex-col mb-10 gap-x-10 gap-y-1 sm:flex-row">
          <span>hello@elanode.com</span>
          <span>(+62) 812 1200 9988</span>
        </div>
        <div
          class="mb-6 text-center grid gap-x-12 grid-cols-1 sm:grid-cols-2 md:flex md:flex-row"
        >
          <NuxtLink
            to="/"
            class="rounded-md py-1 px-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
            >Home</NuxtLink
          >
          <NuxtLink
            to="/"
            class="rounded-md py-1 px-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
            >About Us</NuxtLink
          >
          <!-- <NuxtLink
            to="/"
            class="
              rounded-md
              py-1
              px-2
              transition-colors
              hover:bg-gray-100
              dark:hover:bg-gray-700
            "
            >Our Services</NuxtLink
          > -->
          <NuxtLink
            to="/"
            class="rounded-md py-1 px-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
            >Contact</NuxtLink
          >
        </div>
      </div>
      <div
        class="flex flex-col sm:flex-row gap-y-2 text-center justify-between items-center"
      >
        <span>© Elanode 2021 All Rights Reserved.</span>
        <div class="flex items-center">
          <span class="mr-5 sm:mr-9"> Follow Us </span>
          <a href="#">
            <IconFacebook class="mr-4" />
          </a>
          <a href="#">
            <IconInstagram />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
};
</script>
