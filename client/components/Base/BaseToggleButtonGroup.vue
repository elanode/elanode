<template>
  <div class="flex flex-wrap gap-x-4">
    <template v-for="{ id, value, title } in buttons">
      <button
        class="px-3 py-1 min-w-[9.5rem] border rounded-[3px] font-bold !focus:ring-4 !focus:outline-none !focus:ring-opacity-30 )"
        :class="[
          normalizedSelected[value]
            ? 'border-primary text-primary !focus:ring-blue-500 '
            : ' dark:(border-[#636363] text-[#636363]) light:(text-[#E3E3E3] border-[#E3E3E3]) !focus:ring-gray-500',
        ]"
        @click="onClickHandler(value)"
        :key="id"
      >
        {{ title }}
      </button>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: [String, Array],
    buttons: {
      type: Array,
      required: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      normalizedSelected: {},
    };
  },
  methods: {
    onClickHandler(value) {
      if (props.multiple) {
        const clonedArr = props.modelValue ? [...props.modelValue] : [];

        if (!clonedArr.includes(value)) {
          clonedArr.push(value);
        } else {
          clonedArr.splice(clonedArr.indexOf(value), 1);
        }

        normalizedSelected = clonedArr.reduce((acc, val) => {
          acc[val] = true;
          return acc;
        }, {});

        return emit('update:modelValue', clonedArr);
      }
      normalizedSelected = { [value]: true };
      return emit('update:modelValue', value);
    },
  },
};
</script>
