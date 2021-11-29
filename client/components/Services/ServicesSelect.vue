<template>
  <div>
    <h2 class="font-bold text-2xl mb-8">Select Website Type</h2>
    <Listbox v-model="selectedPerson" class="bg-transparent text-primary">
      <div class="relative mt-1">
        <ListboxButton
          class="
            bg-transparent
            relative
            w-full
            py-5
            pl-10
            pr-6
            text-left
            font-bold
            text-lg
            rounded-lg
            shadow-md
            cursor-default
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-opacity-75
            focus-visible:ring-white
            focus-visible:ring-offset-orange-300
            focus-visible:ring-offset-2
            focus-visible:border-indigo-500
            sm:text-sm
            mb-2
          "
          style="box-shadow: 0px 0px 9px 1px #0584cc66"
        >
          <span class="block truncate text-lg">{{
            selectedPerson.name ?? 'Company Profile'
          }}</span>
          <span
            class="
              absolute
              inset-y-0
              right-6
              flex
              items-center
              pr-2
              pointer-events-none
            "
          >
            <!-- <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" /> -->
            <IconCaret />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="
              absolute
              w-full
              py-1
              mt-1
              overflow-auto
              text-base text-gray-300
              dark:bg-[#444444]
              rounded-md
              shadow-lg
              max-h-60
              ring-1 ring-black ring-opacity-5
              focus:outline-none
              sm:text-sm
            "
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="person in people"
              :key="person.name"
              :value="person"
              as="template"
            >
              <li
                class="text-white"
                :class="[
                  active ? 'text-white bg-primary' : 'text-gray-300',
                  'cursor-default select-none relative py-2 pl-10 pr-4',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-bold text-white' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ person.name }}</span
                >
                <span
                  v-if="selected"
                  class="
                    absolute
                    inset-y-0
                    left-0
                    flex
                    items-center
                    pl-3
                    text-amber-600
                  "
                >
                  <IconCheck aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<script>
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';
// import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid';

export default {
  name: 'ServicesSelect',
  components: {
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  },
  setup() {
    const people = [
      { name: 'Wade Cooper' },
      { name: 'Arlene Mccoy' },
      { name: 'Devon Webb' },
      { name: 'Tom Cook' },
      { name: 'Tanya Fox' },
      { name: 'Hellen Schmidt' },
    ];
    const selectedPerson = ref({});

    return {
      people,
      selectedPerson,
    };
  },
};
</script>

<style></style>
