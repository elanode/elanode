<template>
  <div class="mb-24">
    <TheLinesBg2 class="top-[7%] sm:top-[5%]" />
    <section class="container mb-38">
      <div class="grid lg:grid-cols-2 gap-x-[4.875rem] mt-16 items-center">
        <div>
          <span class="text-primary font-bold mb-6px">Digital Agency</span>
          <h1 class="text-[4rem] mb-[1.625rem] font-bold">Elanode</h1>
          <p class="text-xl">
            Elanode is a creative digital agency based in Tangerang, Indonesia
            which aims to empower people and their businesses with digital
            solutions.
          </p>
          <!-- <div class="grid grid-cols-2 gap-x-19 mt-[5.375rem]">
            <div class="flex flex-col justify-between">
              <p class="mb-4">
                Digital agency that increase your product valued
              </p>
              <BaseLink link="/" text="Our Work" />
            </div>
            <div class="flex flex-col justify-between">
              <p class="mb-4">More than digital solution for your brand</p>
              <BaseLink link="/" text="Our Services" />
            </div>
          </div> -->
        </div>
        <HomePolygons />
      </div>
    </section>

    <!-- <section class="container mb-21">
      <h2 class="header">
        A Creative Agency You <br class="hidden sm:block" />Can Trust
      </h2>
      <div class="md:(grid grid-cols-6) items-start">
        <div class="col-span-2">
          <BaseLink link="/contact-us" text="Let's Talk" class="mt-3 md:mt-5" />
        </div>
        <p class="col-span-4 mt-5 md:mt-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo duis
          ut diam quam nulla porttitor massa id. Posuere morbi leo urna molestie
          at elementum. Enim sed faucibus turpis in. Feugiat pretium nibh ipsum
          consequat.
        </p>
      </div>
    </section> -->

    <!-- <section class="container mb-21">
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
    </section> -->

    <section class="container mb-21">
      <h2 class="header lg:mb-16">
        Delivering First Class<br />Digital Services
      </h2>
      <div
        class="flex flex-col lg:grid lg:grid-cols-2 gap-x-6 xl:gap-x-20 2xl:gap-x-32"
      >
        <div class="order-2 lg:order-1 flex flex-col gap-6">
          <template v-for="(item, idx) in digitalServicesList">
            <HomeListItem :key="idx" :list-item="item" />
          </template>
          <!-- <BaseLink link="/" text="View Our Full Services" /> -->
        </div>
        <img
          class="order-1 lg:order-2"
          src="~assets/images/polygons_index_2.png"
          alt=""
        />
      </div>
    </section>

    <!-- <section class="container">
      <h2 class="header mb-9">Our Past Work</h2>
      <HomeCarousel />
    </section> -->
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      digitalServicesList: [
        {
          title: "Technology Development",
          desc: "We provide application development, website building, and others. We build with the latest technology and best practices in mind.",
        },
        {
          title: "Graphic Design",
          desc: "As your brand is the most important investment you need in your business, we could help you build a consistent and strategic branding for it.",
        },
        {
          title: "Social Media Management",
          desc: "Social media management is the curation of your brand's social media activities to attract and engage audiences.",
        },
      ],
    };
  },
};
</script>
