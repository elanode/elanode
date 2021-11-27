<template>
  <div class="flex flex-col">
    <label :for="id" class="font-bold text-sm mb-1">{{ label }}</label>
    <Field
      v-slot="{ field, meta }"
      :type="type"
      :name="name"
      :id="id"
      placeholder="test"
      ><input
        class="
          dark:text-white
          bg-transparent
          border-t-none border-x-none
          !focus:rounded-lg
          focus:ring-primary
          placeholder-[#636363]
          font-bold
          text-lg
          border-b-2
          focus:border-b-none
        "
        :class="{ 'border-danger': meta?.valid && meta?.dirty }"
        v-bind="field"
      />
      <pre>{{ meta }}</pre>
    </Field>
    <!-- <span class="text-danger font-bold mt-2">{{ errorMessage }}hello</span> -->
    <ErrorMessage :name="name" class="text-danger font-bold mt-2" />
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
  components: {
    Field,
    ErrorMessage,
  },
  props: {
    // modelValue: String,
    label: {
      type: String,
      required: true,
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
    errorMessage: {
      type: String,
      default: '',
    },
  },
  computed: {
    id() {
      return `${this.label}-${this.name}`;
    },
  },
  methods: {
    isValid(valid, touched) {
      console.log(
        '🚀 ~ file: BaseFormInput.vue ~ line 62 ~ isValid ~ touched',
        touched
      );
      console.log(
        '🚀 ~ file: BaseFormInput.vue ~ line 62 ~ isValid ~ valid',
        valid
      );
    },
  },
};
</script>

<style></style>
