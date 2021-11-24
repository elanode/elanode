<template>
  <div>
    <section class="container mb-38">
      <div class="grid grid-cols-2 mt-16">
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
      <h2 class="header">A Creative Agency You<br />Can Trust</h2>
      <div class="grid grid-cols-6">
        <BaseLink link="/" text="Let's Talk" class="col-span-2" />
        <p class="col-span-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo duis
          ut diam quam nulla porttitor massa id. Posuere morbi leo urna molestie
          at elementum. Enim sed faucibus turpis in. Feugiat pretium nibh ipsum
          consequat.
        </p>
      </div>
    </section>
    <section class="container">
      <h2 class="header mb-11">Elanode Expertise</h2>
      <div class="grid grid-cols-3 gap-10 min-h-53">
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
            <IconStar />
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
  </div>
</template>
