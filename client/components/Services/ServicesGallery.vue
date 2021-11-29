<template>
  <div>
    <h2 class="header mb-[3.125rem]">{{ title }}</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
      <div v-for="(image, idx) in 3" :key="idx">
        <div class="aspect-w-358 aspect-h-201">
          <img class="rounded-lg" src="~/assets/images/temp-img.png" alt="" />
        </div>
        <h3 class="text-center mt-5 font-bold text-xl">Travel Website</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesGallery',
  props: {
    title: {
      type: String,
      default: 'See Our Past Work',
    },
  },
};
</script>

<style></style>
