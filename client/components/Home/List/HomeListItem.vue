<template>
  <div class="border-b-3 border-[#E5E3E3]">
    <h3 class="font-bold text-2xl mb-4">Website Coding</h3>
    <p class="text-lg mb-4">
      We provide website coding services from scratch. No templates, drag and
      drop, or even third party services.
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
