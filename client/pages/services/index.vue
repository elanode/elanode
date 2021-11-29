<template>
  <div class="mt-10 mb-20">
    <div class="container mb-20">
      <h1 class="text-2xl font-bold text-primary col-span-3">What we do</h1>
      <h2 class="header col-span-5">Elanode Services</h2>
      <!-- <div class="flex justify-end mt-3">
        <p class="max-w-[47.75rem] text-">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo duis
          ut diam quam nulla porttitor massa id.
        </p>
      </div> -->
      <div class="grid grid-cols-3 mt-3">
        <p class="col-span-full lg:(col-start-2 col-span-2 ml-4) text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo duis
          ut diam quam nulla porttitor massa id.
        </p>
      </div>
    </div>
    <div class="container">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-14"
      >
        <template v-for="(item, idx) in servicesList" :key="idx">
          <ServicesListItem
            :title="item.title"
            :desc="item.desc"
            :link="item.link"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const servicesList = ref([
      {
        title: 'Website Coding',
        desc: 'We provide website coding services from scratch. No templates, drag and drop, or even third party services.',
        link: '/services/website-coding',
      },
      {
        title: 'SEO Management',
        desc: 'Search Engine Optimisation (SEO) is the process taken to raise a website’s position on the search result page, boosting visibility.',
        link: '/services/seo-management',
      },
      {
        title: 'Mobile Application Development (Android/iOS)',
        desc: 'We offer full cycle mobile application development services for Android and iOS to help clients digitalize their business ideas into applications.',
        link: '/services/mobile-application-development',
      },
      {
        title: 'Social Media Management',
        desc: 'Social media management is the curation of your brand’s social media activities to attract and engage audiences.',
        link: '/services/social-media-management',
      },
      {
        title: 'Photography & Videography Services',
        desc: 'We provide professional photography and videography services to boost up your sales and magnetize more clients towards your brand.',
        link: '/services/photography-videography-services',
      },
      {
        title: 'Graphic Design',
        desc: 'As your brand is the most important investment you need in your business, we could help you build a consistent and strategic branding for it.',
        link: '/services/graphic-design',
      },
      {
        title: 'UI/UX Design',
        desc: 'User experience is how a person feels when interfacing with a system.',
        link: '/services/ui-ux-design',
      },
      {
        title: 'Marketplace Management',
        desc: 'Setting up an account/store on the marketplace is one thing, but managing, updating, and selling your products is a completely different matter.',
        link: '/services/marketplace-management',
      },
    ]);

    return {
      servicesList,
    };
  },
};
</script>

<style></style>
