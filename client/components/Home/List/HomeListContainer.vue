<template>
  <div class="flex flex-col gap-6">
    <template v-for="(item, idx) in list" :key="idx">
      <HomeListItem :list-item="item" />
    </template>
    <BaseLink link="/" text="View Our Full Services" />
  </div>
</template>

<script>
export default {
  name: 'HomeListContainer',
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
