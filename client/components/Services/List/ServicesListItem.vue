<template>
  <div>
    <h3 class="font-bold text-2xl mb-4">{{ title }}</h3>
    <p class="text-lg mb-4">
      {{ desc }}
    </p>
    <BaseLink text="Learn More" :link="link" />
  </div>
</template>

<script>
export default {
  name: 'ServicesListItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
