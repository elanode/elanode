<template>
  <div class="overflow-x-hidden">
    <div id="teleport-target" class=""></div>
    <div class="mb-15">
      <TheNavbar />
      <slot />
      <LazyTheFooter />
    </div>
  </div>
</template>
