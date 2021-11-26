<template>
  <div class="mb-36">
    <section class="container mb-38">
      <div class="grid lg:grid-cols-2 mt-16">
        <div>
          <span class="text-primary font-bold mb-6px">Digital Agency</span>
          <h1 class="text-[4rem] mb-[1.625rem] font-bold">Elanode</h1>
          <p class="text-xl">
            Elanode is a creative digital agency based in Tangerang which aims
            to empower people and their businesses with digital solutions.
          </p>
          <div class="grid grid-cols-2 gap-x-19 mt-[5.375rem]">
            <div class="flex flex-col justify-between">
              <p class="mb-4">
                Digital agency that increase your product value
              </p>
              <BaseLink link="/" text="Our Work" />
            </div>
            <div class="flex flex-col justify-between">
              <p class="mb-4">More than digital solution for your brand</p>
              <BaseLink link="/" text="Our Services" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container mb-21">
      <h2 class="header">
        A Creative Agency You <br class="hidden sm:block" />Can Trust
      </h2>
      <div class="md:(grid grid-cols-6) items-start">
        <div class="col-span-2">
          <BaseLink link="/" text="Let's Talk" class="mt-3 md:mt-5" />
        </div>
        <p class="col-span-4 mt-5 md:mt-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo duis
          ut diam quam nulla porttitor massa id. Posuere morbi leo urna molestie
          at elementum. Enim sed faucibus turpis in. Feugiat pretium nibh ipsum
          consequat.
        </p>
      </div>
    </section>

    <section class="container mb-21">
      <h2 class="header mb-11">Elanode Expertise</h2>
      <div class="grid lg:grid-cols-3 gap-10 min-h-53">
        <HomeCard title="Reliable">
          <template #icon>
            <IconStar />
          </template>
          <template #desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </template>
        </HomeCard>
        <HomeCard title="Reliable">
          <template #icon>
            <IconNode />
          </template>
          <template #desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </template>
        </HomeCard>
        <HomeCard title="Reliable">
          <template #icon>
            <IconStar />
          </template>
          <template #desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </template>
        </HomeCard>
      </div>
    </section>

    <section class="container mb-21">
      <h2 class="header mb-16">Delivering First Class<br />Digital Services</h2>
      <div class="grid grid-cols-2">
        <div class="flex flex-col gap-6">
          <template v-for="(item, idx) in digitalServicesList" :key="idx">
            <HomeListItem :list-item="item" />
          </template>
          <BaseLink link="/" text="View Our Full Services" />
        </div>
      </div>
    </section>

    <section class="container">
      <h2 class="header mb-9">Our Past Work</h2>
      <HomeCarousel />
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'HomePage',
  setup() {
    const digitalServicesList = ref([
      {
        title: 'Website Coding',
        desc: 'We provide website coding services from scratch. No templates, drag and drop, or even third party services.',
      },
      {
        title: 'Graphic Design',
        desc: 'As your brand is the most important investment you need in your business, we could help you build a consistent and strategic branding for it.',
      },
      {
        title: 'Social Media Management',
        desc: 'Social media management is the curation of your brand’s social media activities to attract and engage audiences.',
      },
    ]);
    return {
      digitalServicesList,
    };
  },
};
</script>
