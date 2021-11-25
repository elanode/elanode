<template>
  <teleport to="#teleport-target">
    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200 transform"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        ref="modal-backdrop"
        class="fixed z-10 inset-0 w-screen h-screen bg-black bg-opacity-50"
        v-show="modelValue"
        @click="$emit('update:modelValue', false)"
      >
        <div
          @click.stop.prevent
          class="
            absolute
            transform
            -translate-x-1/2 -translate-y-1/2
            top-1/2
            left-1/2
            text-center
          "
        >
          <transition
            enter-active-class="transition ease-out duration-300 transform "
            enter-from-class="opacity-0 translate-y-10 scale-95"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0 scale-100"
            leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95"
          >
            <div
              class="
                relative
                bg-gray-800
                rounded-lg
                text-left
                overflow-hidden
                shadow-xl
                p-8
                w-[1084px]
              "
              role="dialog"
              ref="modal"
              aria-modal="true"
              v-show="modelValue"
              aria-labelledby="modal-headline"
            >
              <button class="" @click="$emit('update:modelValue', false)">
                x
              </button>
              <slot>I'm empty inside</slot>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: {
    modelValue: Boolean,
  },
};
</script>
