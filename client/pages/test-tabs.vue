<template>
  <div class="container my-20">
    <BaseTabs v-model="currentTab">
      <template #website>
        <div>webbb</div>
      </template>
      <template #socialMedia>
        <div>sosmeeeed</div>
      </template>
    </BaseTabs>
    {{ currents }}
  </div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
  setup() {
    const currentTab = ref();
    return {
      currentTab,
    };
  },
  computed: {
    currents() {
      return this.currentTab;
    },
  },
};
</script>

<style></style>
