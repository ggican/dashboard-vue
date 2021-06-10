<template>
  <div class="home">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus doloremque,
    nemo incidunt impedit tempora voluptatibus itaque id, quod consectetur
    labore libero a accusamus ipsum molestiae assumenda sunt veritatis veniam
    dolores!
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="container mx-auto">
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: HelloWorld,
};
</script>
