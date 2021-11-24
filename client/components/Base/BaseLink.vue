<template>
  <div class="flex items-center gap-x-[0.875rem]">
    <NuxtLink class="text-primary font-bold text-base" :to="link">{{
      text
    }}</NuxtLink>
    <IconArrow />
  </div>
</template>
<script>
export default {
  name: 'BaseLink',
  props: {
    link: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
