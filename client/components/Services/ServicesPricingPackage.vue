<template>
  <div>
    <!-- <h2 class="header mb-10">{{ title }}</h2>
    <div class="grid lg:grid-cols-2 gap-x-9 gap-y-6">
      <div
        class="
          rounded-2xl
          dark:bg-[#444444]
          light:bg-[#F8F8F8]
          px-9
          py-px-11
          h-full
          order-2
          lg:order-1
        "
      >
        <ul class="space-y-3">
          <li
            v-for="(feature, idx) in selected.features"
            :key="idx"
            class="flex justify-between"
          >
            <span
              class="font-bold"
              :class="{
                'dark:text-[#666666] light:text-[#D2D2D2]': !feature.active,
              }"
              >{{ feature.title }}</span
            >
            <IconCheck :active="feature.active" />
          </li>
        </ul>
      </div>
      <RadioGroup v-model="selected" class="order-1 lg:order-2">
        <RadioGroupLabel class="sr-only">Package Type</RadioGroupLabel>
        <div class="space-y-5">
          <RadioGroupOption
            as="template"
            v-for="item in packages"
            :key="item.title"
            :value="item"
            v-slot="{ active, checked }"
          >
            <div
              :class="[
                active
                  ? 'ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60'
                  : '',
                checked ? 'bg-primary text-white ' : 'bg-transparent',
              ]"
              class="
                transition-colors
                relative
                min-h-[6.125rem]
                flex
                px-5
                py-4
                rounded-[1.25rem]
                shadow-md
                cursor-pointer
                focus:outline-none
              "
              style="box-shadow: 0px 0px 9px 1px #0584ccab"
            >
              <div class="flex items-center gap-x-8 w-full">
                <div class="text-white">
                  <IconCheck v-if="checked" class="text-white" size="large" />
                  <IconCircle v-else />
                </div>
                <div class="flex items-center">
                  <div class="text-sm">
                    <RadioGroupLabel
                      as="p"
                      :class="checked ? 'text-white' : 'text-primary'"
                      class="font-bold text-lg"
                    >
                      {{ item.title }}
                    </RadioGroupLabel>
                    <RadioGroupDescription
                      as="span"
                      class="flex mt-2"
                      v-if="item.label"
                    >
                      <div
                        class="
                          bg-[#427DA8]
                          font-bold
                          text-xs
                          flex
                          rounded-2xl
                          py-[7px]
                          px-6
                          text-white
                        "
                      >
                        {{ item.label }}
                      </div>
                    </RadioGroupDescription>
                  </div>
                </div>
                <div
                  class="flex-grow text-right font-bold text-[2rem]"
                  :class="checked ? 'text-white' : 'text-primary'"
                >
                  <span
                    ><sup class="text-xs align-top">IDR </sup>1299<span
                      class="text-xs"
                      >K</span
                    ></span
                  >
                </div>
              </div>
            </div>
          </RadioGroupOption>
        </div>
      </RadioGroup>
    </div> -->
  </div>
</template>

<script>
// import {
//   RadioGroup,
//   RadioGroupLabel,
//   RadioGroupDescription,
//   RadioGroupOption,
// } from '@headlessui/vue';

export default {
  name: 'ServicesPricingPackage',
  // props: {
  //   modelValue: {
  //     type: Object,
  //     required: true,
  //   },
  //   title: {
  //     type: String,
  //     default: 'Pricing Packages',
  //   },
  //   packages: {
  //     type: Array,
  //     required: true,
  //   },
  // },
  // components: {
  //   RadioGroup,
  //   RadioGroupLabel,
  //   RadioGroupDescription,
  //   RadioGroupOption,
  // },
  // setup(props, { emit }) {
  //   const selected = ref(props.packages[0]);

  //   onMounted(() => {
  //     emit('update:modelValue', props.packages[0]);
  //   });

  //   watch(selected, (value) => {
  //     emit('update:modelValue', value);
  //   });
  //   return {
  //     selected,
  //   };
  // },
};
</script>
