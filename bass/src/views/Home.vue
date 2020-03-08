<template>
  <div class="home">
    <FormPost 
      @createpost='create'
    />
    <div class="pt-5">
      <Postbox/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Postbox from "@/components/Postbox.vue";
import FormPost from "@/components/FormPost.vue";

export default {
  name: "Home",
  components: {
    Postbox ,
    FormPost
  },
  methods: {
    create(event){
      console.log(event)
    }
  },
};
</script>
