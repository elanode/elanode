<template>
  <div>
    <h2 class="font-bold text-2xl mb-10">{{ title }}</h2>
    <div
      class="bg-[#444444] rounded-2xl pl-[3.313rem] pr-[2.563rem] pt-9 pb-10"
    >
      <h3 class="font-bold text-2xl mb-14">{{ title }}</h3>
      <div class="flex">
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Price Estimation',
    },
  },
};
</script>

<style></style>
