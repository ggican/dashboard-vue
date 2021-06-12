<template>
  <div class="about">
    <div class="flex justify-between items-start">
      <div class="left w-2/4 pr-12">
        <h2 class="text-left text-2xl font-semibold mb-5">
          Lorem ipsum dolor sit amet
        </h2>
        <p class="text-left font-normal mb-5">
          consectetur adipiscing elit. Nulla vel turpis turpis. Sed mauris
          mauris, aliquam sed ante ut, ullamcorper laoreet erat. Duis eu rutrum
          purus. Ut luctus bibendum tellus ut congue. Ut dolor nisi, maximus
          aliquam nulla sed, venenatis consequat arcu. Nulla hendrerit vehicula
          arcu. In consectetur, purus sed consequat posuere, orci nunc consequat
          ipsum, ut sodales urna massa at neque.
        </p>
        <p class="text-left font-normal">
          Nulla eget tellus sodales, venenatis lacus eget, lobortis libero. Cras
          scelerisque metus non mi condimentum, ac lacinia enim fermentum. Sed
          arcu tortor, hendrerit a eros ac, eleifend porta enim. Suspendisse
          molestie enim quam, a maximus massa faucibus nec. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Integer tortor odio, iaculis eget lobortis iaculis, tempor nec ante.
          Aliquam venenatis nisl at ipsum commod
        </p>
      </div>
      <div class="right w-2/4">
        <img class="w-full" src="../assets/about.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  emits: ["titlePage"],
  async mounted() {
    this.$emit("titlePage", "About");
  },
};
</script>
