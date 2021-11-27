<template>
  <div class="flex flex-col">
    <Field
      v-slot="{ field, errors, value }"
      :type="type"
      :name="name"
      :id="id"
      class="transition-colors"
    >
      <label
        v-if="!disableLabel"
        :for="id"
        class="font-bold text-sm mb-1"
        :class="{ 'text-danger': errors.length > 0 }"
        >{{ label }}{{ required && '*' }}</label
      >
      <input
        :id="id"
        :placeholder="placeholder"
        class="
          dark:text-white
          bg-transparent
          border-t-none border-x-none
          focus:ring-primary
          !focus:ring-4 !focus:outline-none !focus:ring-opacity-60
          placeholder-[#636363]
          font-bold
          text-lg
          border-b-2
          focus:border-b-none
          py-1
        "
        :class="{
          'border-danger': errors.length > 0,
          'border-primary': errors.length < 1 && value,
          'px-3': !disableLabel,
        }"
        v-bind="field"
      />
    </Field>
    <ErrorMessage :name="name" class="text-danger font-bold mt-1 opacity-80" />
  </div>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';

export default {
  components: {
    Field,
    ErrorMessage,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    disableLabel: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const id = computed(() => `${props.label}-${props.name}`);
    return { id };
  },
};
</script>

<style></style>
