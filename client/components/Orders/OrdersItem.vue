<template>
  <div
    class="px-6 sm:px-14 pt-8 pb-7 rounded-[1.25rem]"
    style="box-shadow: 0px 0px 13px 1px #0584cc8a"
  >
    <div class="flex flex-col xl:flex-row">
      <div class="lg:mb-3">
        <h2 class="text-primary font-bold text-2xl mb-3">Website Coding</h2>
        <ul
          class="
            ml-2
            list-disc
            lg:list-inside
            mb-3
            text-xl
            flex flex-col
            gap-y-3
          "
        >
          <li>Basic Package</li>
          <li>Content Management System Admin</li>
        </ul>
      </div>
      <div class="flex-grow text-right">
        <div class="text-primary font-bold text-2xl mb-3">IDR 2098K</div>
        <div class="flex gap-x-2 justify-end items-center">
          <IconCalendar />
          <span class="font-bold">31 December 2020</span>
        </div>
      </div>
    </div>
    <div
      class="
        flex
        mt-3
        flex-col
        sm:flex-row sm:mt-0 sm:items-center
        gap-x-8 gap-y-2
      "
    >
      <div
        class="rounded-3xl text-center bg-warning px-8 py-3 font-bold text-xs"
      >
        Waiting Confirmation
      </div>
      <div class="flex gap-x-3 items-center">
        <IconEye />
        <span>Click here to see progress</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
