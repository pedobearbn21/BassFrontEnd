<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Postbox/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Postbox from "@/components/Postbox.vue";

export default {
  name: "Home",
  components: {
    HelloWorld ,
    Postbox ,
  }
};
</script>
