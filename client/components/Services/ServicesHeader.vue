<template>
  <section class="container">
    <div class="flex gap-x-[3.813rem]">
      <div>
        <div class="w-[434px] h-[333px]">image here</div>
      </div>
      <div>
        <h1 class="header mb-8">{{ title }}</h1>
        <div class="all:mb-4 text-xl">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesHeader',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
