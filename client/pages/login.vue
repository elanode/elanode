<template>
  <div class="w-screen h-screen pt-[11rem] flex">
    <!-- <div class="container">
      <NuxtLink to="/" class="flex items-center gap-x-[1.125rem] text-primary">
        <IconLogo class="fill-current" />
        <span class="font-bold text-[1.625rem] leading-[2.731rem]"
          >Elanode</span
        >
      </NuxtLink>
      <div class="flex items-center gap-x-20">
        <section class="max-w-[40.875rem]">
          <h1 class="font-bold text-4xl mb-11">
            We Provide Creative <br />Digital Solution
          </h1>
          <p class="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo duis
            ut diam quam nulla porttitor massa id. Posuere morbi leo urna
            molestie at elementum. Enim sed faucibus turpis in. Feugiat pretium
            nibh ipsum consequat.
          </p>
        </section>
        <section
          class="
            rounded-2xl
            px-10
            pt-10
            pb-12
            w-full
            max-w-[26.75rem]
            justify-end
          "
          style="box-shadow: 0px 0px 26px 0px #00000012"
        >
          <h2 class="font-bold text-[2rem] mb-4">Welcome Back</h2>
          <p class="mb-20">Please fill the information below</p>
          <v-form
            :validation-schema="schema"
            @submit="onSubmit"
            v-slot="{ isSubmitting }"
            class="flex-col gap-y-10"
          >
            <BaseFormInput
              label="Email"
              class="mb-6"
              name="Email"
              type="email"
              placeholder="Email"
              :disable-label="true"
            />
            <BaseFormInput
              label="Password"
              class="mb-11"
              name="Password"
              type="password"
              placeholder="Password"
              :disable-label="true"
            />
            <button
              class="w-full bg-primary py-3 text-white rounded-md font-bold"
              :disabled="isSubmitting"
            >
              Login
            </button>
          </v-form>
        </section>
      </div>
    </div> -->
  </div>
</template>

<script>
// import { Form, Field, ErrorMessage } from 'vee-validate';
// import { object, string } from 'yup';

export default {
  layout: 'plain',
  name: 'ContactUsPage',
  // components: {
  //   VForm: Form,
  //   VField: Field,
  //   ErrorMessage: ErrorMessage,
  // },
  // setup() {
  //   const schema = object({
  //     ['Email']: string().required('Email cannot be empty!').email(),
  //     ['Password']: string().required('Password cannot be empty!'),
  //   });

  //   return {
  //     schema,
  //   };
  // },
};
</script>

<style></style>
