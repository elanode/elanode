<template>
  <div class="p-8 rounded-2xl dark:bg-[#405561] light:bg-[#F6F6F6]">
    <div class="flex mb-2">
      <span class="rounded-[5px] bg-white p-2 flex">
        <slot name="icon" />
      </span>
    </div>
    <h3 class="text-2xl font-bold mb-3">
      {{ title }}
    </h3>
    <p class="leading-[1.15rem]">
      <slot name="desc" />
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
