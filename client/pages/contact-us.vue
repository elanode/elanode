<template>
  <div class="mt-17">
    <section class="container text-center mb-24">
      <h1 class="header mb-4">Connect With Us</h1>
      <p class="max-w-[47.75rem] mx-auto mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Leo duis ut diam
        quam nulla porttitor massa id. Posuere morbi leo urna molestie at
        elementum.
      </p>
      <div
        class="flex flex-col md:flex-row w-full items-center justify-center gap-x-12 gap-y-3"
      >
        <a
          href="https://wa.me/+6281287005020"
          target="_blank"
          class="flex items-center gap-x-5"
        >
          <IconPhone />
          <span class="font-bold text-xl underline">+62-812-8700-5020</span>
        </a>
        <a href="mailto:admin@elanode.com" class="flex items-center gap-x-5">
          <IconEmail />
          <span class="font-bold text-xl underline">admin@elanode.com</span>
        </a>
      </div>
    </section>
    <section class="container mb-14">
      <h2 class="header mb-3">Have a Project ?</h2>
      <div class="md:(grid grid-cols-6) items-start">
        <div class="col-span-2">
          <p class="font-bold text-primary">We'd love to hear from you</p>
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
    <!-- <section class="container mb-16">
      <h3 class="font-bold text-xl mb-4">How can we help you?</h3>
      <BaseToggleButtonGroup
        v-model="currentSelected"
        multiple
        :buttons="toggleButtons"
        class="mb-4"
      />
      <v-form
        :validation-schema="schema"
        @submit="onSubmit"
        v-slot="{ isSubmitting }"
        class="flex-col gap-y-10"
      >
        <BaseFormInput label="Full Name" class="mb-4" name="Full name" />
        <BaseFormInput label="Email" class="mb-4" name="Email" type="email" />
        <BaseFormInput
          label="Phone Number"
          class="mb-4"
          name="Phone number"
          type="tel"
        />
        <BaseFormInput label="Details" class="mb-8" name="Details" />
        <div class="flex w-full justify-end items-center gap-x-[0.875rem]">
          <button
            :disabled="isSubmitting"
            class="text-primary font-bold text-base"
          >
            Send Message
          </button>
          <IconArrow />
        </div>
      </v-form>
    </section> -->
  </div>
</template>

<script>
// import { Form, Field, ErrorMessage } from 'vee-validate';
// import { object, string } from 'yup';

export default {
  name: "ContactUsPage",
  // components: {
  //   VForm: Form,
  //   VField: Field,
  //   ErrorMessage: ErrorMessage,
  // },
  // setup() {
  //   const schema = object({
  //     ['Full name']: string().required('Full name cannot be empty!'),
  //     ['Email']: string().required('Email cannot be empty!').email(),
  //     ['Phone number']: string()
  //       .required('Phone number cannot be empty!')
  //       .matches(/\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/, 'Must be a phone number!'),
  //     ['Details']: string().required('Details cannot be empty!'),
  //   });
  //   const currentSelected = ref();
  //   const fullName = ref('');
  //   const toggleButtons = ref([
  //     {
  //       id: 'website',
  //       value: 'website',
  //       title: 'Website',
  //     },
  //     {
  //       id: 'socialMedia',
  //       value: 'social',
  //       title: 'Social Media',
  //     },
  //     {
  //       id: 'photography',
  //       value: 'photography',
  //       title: 'Photography',
  //     },
  //     {
  //       id: 'others',
  //       value: 'others',
  //       title: 'Others',
  //     },
  //   ]);

  //   watch(currentSelected, () => {
  //     console.log(currentSelected.value);
  //   });

  //   // const onSubmit = (values) => {
  //   //   console.log(values);
  //   //   alert(JSON.stringify(values, null, 2));
  //   // };

  //   return {
  //     schema,
  //     currentSelected,
  //     toggleButtons,
  //     fullName,
  //     // onSubmit,
  //   };
  // },
  // methods: {
  //   onSubmit(values) {
  //     console.log(values);
  //     return new Promise((resolve) => {
  //       setTimeout(() => {
  //         resolve(JSON.stringify(values, null, 2));
  //       }, 2000);
  //     });
  //   },
  // },
};
</script>

<style></style>
