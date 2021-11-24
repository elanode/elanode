<template>
  <div class="container">
    <div
      class="
        bg-black
        dark:bg-[#282828]
        min-h-[18.75rem]
        rounded-[0.625rem]
        pt-10
        pb-9
        px-13
        text-white text-sm
      "
    >
      <div class="flex flex-col items-center border-b mb-6">
        <div class="flex gap-x-4 items-center mb-8">
          <IconLogo class="fill-current text-white" />
          <span class="font-bold text-2xl">Elanode</span>
        </div>
        <span class="mb-3"
          >The Tall Tower 29th Floor, South Jakarta, Indonesia 14100</span
        >
        <div class="flex mb-10 gap-x-10">
          <span>hello@elanode.com</span>
          <span>(+62) 812 1200 9988</span>
        </div>
        <div class="flex gap-x-12 mb-6">
          <NuxtLink
            to="/"
            class="
              px-2
              py-1
              rounded-md
              dark:hover:bg-gray-700
              hover:bg-gray-100
              transition-colors
            "
            >Home</NuxtLink
          >
          <NuxtLink
            to="/"
            class="
              px-2
              py-1
              rounded-md
              dark:hover:bg-gray-700
              hover:bg-gray-100
              transition-colors
            "
            >About Us</NuxtLink
          >
          <NuxtLink
            to="/"
            class="
              px-2
              py-1
              rounded-md
              dark:hover:bg-gray-700
              hover:bg-gray-100
              transition-colors
            "
            >Our Services</NuxtLink
          >
          <NuxtLink
            to="/"
            class="
              px-2
              py-1
              rounded-md
              dark:hover:bg-gray-700
              hover:bg-gray-100
              transition-colors
            "
            >Contact</NuxtLink
          >
        </div>
      </div>
      <div class="flex justify-between items-center">
        <span>© Elanode 2021 All Rights Reserved.</span>
        <div class="flex items-center">
          <span class="mr-9"> Follow Us </span>
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
