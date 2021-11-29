<template>
  <div class="mb-20">
    <ServicesHeaderWrapper>
      <ServicesHeader title="Website Coding">
        <p>
          We provide website coding services from scratch. No templates, drag
          and drop, or even third party services. To cater to your specific
          needs, we can code many types of websites such as company profile,
          e-commerce, portfolio, product catalog, marketplace, and many more.
        </p>
        <p>
          As we are coding your website from scratch we can assure you that your
          website is safer than DDos. Compared to websites from third party
          services the website we code will surely have faster loading time,
          customizable, and we can adjust the website design to your needs and
          preferences. We can also set the search engine optimization (SEO), add
          google adsense script, and also input plug-ins to your website.
        </p>
      </ServicesHeader>
    </ServicesHeaderWrapper>

    <section class="container">
      <ServicesGallery class="mt-16" />
    </section>

    <section class="container mt-16">
      <ServicesPricingPackage :packages="packages" v-model="selectedPackage" />
    </section>

    <section class="container mt-12">
      <div class="max-w-[34.375rem]">
        <ServicesSelect />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ServicesWebsiteCodingPage',

  setup() {
    const selectedPackage = ref({});
    const packages = [
      {
        title: 'Basic Package',
        label: '30% OFF',
        price: 1299,
        features: [
          {
            title: 'Responsive Layout',
            active: true,
          },
          {
            title: 'Feature Lorem Ipsum',
            active: true,
          },
          {
            title: 'Feature Lorem Ipsum',
            active: true,
          },
          {
            title: 'Feature Lorem Ipsum',
            active: true,
          },
          {
            title: 'Feature Lorem Ipsum',
            active: false,
          },
          {
            title: 'Feature Lorem Ipsum',
            active: false,
          },
        ],
      },
      {
        title: 'Premium Package',
        label: 'Most Popular',
        price: 2699,
        features: [
          {
            title: 'Responsive Layout',
            active: true,
          },
          {
            title: 'Feature Lorem Ipsum',
            active: true,
          },
          {
            title: 'Feature Lorem Ipsum',
            active: true,
          },
          {
            title: 'Feature Lorem Ipsum',
            active: true,
          },
          {
            title: 'Feature Lorem Ipsum',
            active: true,
          },
          {
            title: 'Feature Lorem Ipsum',
            active: false,
          },
        ],
      },
      {
        title: 'Enterprise Package',
        label: null,
        price: 4299,
        features: [
          {
            title: 'Responsive Layout',
            active: true,
          },
          {
            title: 'Feature Lorem Ipsum',
            active: true,
          },
          {
            title: 'Feature Lorem Ipsum',
            active: true,
          },
          {
            title: 'Feature Lorem Ipsum',
            active: true,
          },
          {
            title: 'Feature Lorem Ipsum',
            active: true,
          },
          {
            title: 'Feature Lorem Ipsum',
            active: true,
          },
        ],
      },
    ];

    return { packages, selectedPackage };
  },
};
</script>

<style></style>
