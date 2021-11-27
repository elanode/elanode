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
        class="
          flex flex-col
          md:flex-row
          w-full
          items-center
          justify-center
          gap-x-12 gap-y-3
        "
      >
        <div class="flex gap-x-5 items-center">
          <IconPhone />
          <span class="font-bold text-xl">0812 1200 9988</span>
        </div>
        <div class="flex gap-x-5 items-center">
          <IconEmail />
          <span class="font-bold text-xl">hello@elanode.com</span>
        </div>
      </div>
    </section>
    <section class="container mb-14">
      <h2 class="header mb-3">Have a Project ?</h2>
      <div class="md:(grid grid-cols-6) items-start">
        <div class="col-span-2">
          <p class="font-bold text-primary">We’d love to hear from you</p>
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
    <section class="container">
      <h3 class="font-bold text-xl mb-4">How can we help you?</h3>
      <BaseToggleButtonGroup
        v-model="currentSelected"
        multiple
        :buttons="toggleButtons"
        class="mb-4"
      />
      <!-- <Form
        @submit="onSubmit"
        :validation-schema="schema"
        v-slot="{ isSubmitting }"
      >
        <BaseFormInput
          v-model="fullName"
          label="Full Name"
          class="mb-10"
          name="fullName"
        />
        <button :disabled="isSubmitting">Submit</button>
      </Form> -->

      <v-form
        :validation-schema="schema"
        @submit="onSubmit"
        v-slot="{ isSubmitting }"
        class="flex-col gap-y-10"
      >
        <BaseFormInput label="Full Name" class="mb-4" name="Full name" />
        <BaseFormInput label="Email" class="mb-4" name="Email" />
        <BaseFormInput label="Full Name" class="mb-4" name="Full name" />
        <button :disabled="isSubmitting" :class="{ submitting: isSubmitting }">
          Submit
        </button>
      </v-form>
      <!-- https://learnvue.co/2019/12/building-reusable-components-in-vuejs-tabs/ -->
    </section>
  </div>
</template>

<script>
import * as VeeValidate from 'vee-validate';
import { object, string } from 'yup';

export default {
  name: 'ContactUsPage',
  // components: {
  //   Form,
  //   Field,
  //   ErrorMessage,
  // },
  components: {
    // Components were renamed to avoid conflicts of HTML form element without a vue compiler
    VForm: VeeValidate.Form,
    VField: VeeValidate.Field,
    ErrorMessage: VeeValidate.ErrorMessage,
  },
  setup() {
    const schema = object({
      // email: string().required().email(),
      // password: string().required().min(8),
      ['Full name']: string().required(),
      ['Email']: string().required().email(),
    });
    // const schema = ref();
    const currentSelected = ref();
    const fullName = ref('');
    const toggleButtons = ref([
      {
        id: 'website',
        value: 'website',
        title: 'Website',
      },
      {
        id: 'socialMedia',
        value: 'social',
        title: 'Social Media',
      },
      {
        id: 'photography',
        value: 'photography',
        title: 'Photography',
      },
      {
        id: 'others',
        value: 'others',
        title: 'Others',
      },
    ]);

    watch(currentSelected, () => {
      console.log(currentSelected.value);
    });

    // const onSubmit = (values) => {
    //   console.log(values);
    //   alert(JSON.stringify(values, null, 2));
    // };

    return {
      schema,
      currentSelected,
      toggleButtons,
      fullName,
      // onSubmit,
    };
  },
  methods: {
    onSubmit(values) {
      console.log(values);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(JSON.stringify(values, null, 2));
        }, 2000);
      });
    },
  },
};
</script>

<style></style>
