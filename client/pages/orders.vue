<template>
  <div class="container mt-21">
    <h1 class="header mb-10">Order History</h1>
    <div class="flex flex-col gap-y-7">
      <OrdersItem v-for="(test, idx) in 4" :key="idx" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
