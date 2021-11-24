<template>
  <div class="relative">
    <div class="absolute w-full flex justify-end gap-x-4 lg:mb-9 z-20">
      <button class="prevEl">
        <IconArrowButton class="fill-current text-primary" />
      </button>
      <button class="nextEl">
        <IconArrowButton
          class="fill-current text-primary transform rotate-180"
        />
      </button>
    </div>
    <swiper
      :navigation="{
        prevEl: '.prevEl',
        nextEl: '.nextEl',
      }"
      :slidesPerView="1"
      :spaceBetween="15"
      :initial-slide="1"
      :centered-slides="true"
      :breakpoints="{
        639: {
          slidesPerView: 1.5,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 70,
        },
        1536: {
          slidesPerView: 3,
        },
      }"
      class="relative"
    >
      <swiper-slide v-for="(item, idx) in 20" :key="idx">
        <div class="lg:(h-[300px] pt-20) pt-16 w-full relative">
          <div
            class="dark:bg-[#405561] light:bg-[#E6F3FA] w-full h-54 rounded-xl"
          ></div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="text-center mt-5">
      <h5 class="font-bold text-[1.75rem] mb-4">Social Media Management</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Leo duis ut diam
        quam nulla porttitor massa id.
      </p>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style scoped>
.swiper-slide > div {
  @apply transition-all transition duration-300;
}

.swiper-slide.swiper-slide-active > div {
  @apply lg:(absolute z-10 transform origin-bottom scale-125 mt-1);
}
</style>
