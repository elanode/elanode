<template>
  <div>
    <div class="flex flex-wrap gap-x-4">
      <template v-for="{ id, title } in tabs" :key="id">
        <button
          class="
            px-3
            py-1
            min-w-[9.5rem]
            border
            dark:border-[#636363]
            rounded-[3px]
          "
          @click="$emit('update:modelValue', id)"
        >
          {{ title }}
        </button>
      </template>
      <template v-for="{ id } in tabs" :key="id">
        <div v-show="modelValue === id">
          <slot :name="id" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  props: {
    modelValue: String,
  },
  setup() {
    const tabs = ref([
      {
        id: 'website',
        title: 'Website',
      },
      {
        id: 'socialMedia',
        title: 'Social Media',
      },
      {
        id: 'photography',
        title: 'Photography',
      },
      {
        id: 'others',
        title: 'Others',
      },
    ]);
    return {
      tabs,
    };
  },
};
</script>

<style></style>
