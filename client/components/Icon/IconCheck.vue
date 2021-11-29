<template>
  <svg
    v-if="size === 'default'"
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="fill-current"
    :class="[
      active
        ? 'light:text-black dark:text-white'
        : 'light:text-[#ECECEC] dark:text-[#666666]',
    ]"
  >
    <path
      d="M8.5 0C3.80588 0 0 3.80588 0 8.5C0 13.1941 3.80588 17 8.5 17C13.1941 17 17 13.1941 17 8.5C17 3.80588 13.1941 0 8.5 0ZM7.79167 12.0417L4.25 8.28821L5.24096 7.27529L7.77254 9.92163L12.4277 4.95833L13.4583 5.95212L7.79167 12.0417Z"
    />
  </svg>
  <svg
    v-else
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="fill-current"
  >
    <path
      d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM11 17L6 11.701L7.399 10.271L10.973 14.007L17.545 7L19 8.403L11 17Z"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconCheck',
  props: {
    active: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: 'default',
    },
  },
};
</script>

<style></style>
