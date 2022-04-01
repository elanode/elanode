<template>
  <div class="border-b-3 border-[#E5E3E3]">
    <h3 class="font-bold text-2xl mb-4">{{ listItem.title }}</h3>
    <p class="text-lg mb-4">
      {{ listItem.desc }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomeListItem',
  props: {
    listItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
