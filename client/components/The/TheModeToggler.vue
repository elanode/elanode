<template>
  <div>
    <span
      role="checkbox"
      tabindex="0"
      :aria-checkbox="checkbox"
      class="relative inline-flex flex-shrink-0 rounded-full border-[0.0625rem] bg-transparent cursor-pointer transition-colors ease-in-out duration-200 border-gray-700 dark:border-white focus:ring-2 focus:ring-primary focus:outline-none focus:ring-opacity-50"
      @click="$emit('update:checkbox', !checkbox)"
    >
      <input type="hidden" :value="checkbox" />
      <span
        aria-hidden="true"
        class="inline-block rounded-full w-5 h-5 items-center justify-center"
      />
      <span
        aria-hidden="true"
        class="inline-block rounded-full w-5 h-5 items-center justify-center"
      />
      <span
        aria-hidden="true"
        class="inline-block absolute transform -translate-y-1/2 top-1/2 ease-in-out duration-200 h-4 w-4 rounded-full bg-gray-700 dark:bg-white shadow items-center justify-center transition-all z-10"
        :class="[checkbox ? 'translate-x-[135%]' : 'translate-x-0 left-0.5']"
      />
      <IconMoon class="absolute right-1 -translate-y-1/2 top-[15%]" />
      <IconSun class="absolute left-1 -translate-y-1/2 top-[15%]" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'TheModeToggler',
  props: {
    checkbox: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style></style>
