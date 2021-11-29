<template>
  <div class="overflow-x-hidden">
    <div id="teleport-target" class=""></div>
    <div class="mb-15">
      <TheNavbar />
      <div class="min-h-[54vh]">
        <slot />
      </div>
      <LazyTheFooter />
    </div>
  </div>
</template>
