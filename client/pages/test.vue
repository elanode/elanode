<template>
  <!-- <div>
    <button @click="isPopUpOpen = true">Remove user</button>
    <portal target="#portal-target">
      <div v-show="isPopUpOpen">
        <p>Are you sure?</p>
        <button>Yes</button>
        <button @click="isPopUpOpen = false">No</button>
      </div>
    </portal>
  </div> -->
  <div>
    <button @click="showModal = true">open modal</button>
    <BaseModal v-model="showModal">
      <template #title>
        What is your digital transformation problem ?
      </template>
      <template #content>
        <div>
          <h1>This is a modal</h1>
          <p>Modal Messageee ..... .. ...</p>
        </div>
      </template>
    </BaseModal>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const showModal = ref(false);

    return {
      showModal,
    };
  },
};
</script>

<style></style>
