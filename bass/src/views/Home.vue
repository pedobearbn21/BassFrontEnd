<template>
  <div class="home">
    <body>
    <v-card class="mx-auto" max-width="750">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline">สร้างโพสต์</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-card-text>
        <div>
          <v-text-field label="หัวข้อ" :rules="rules" hide-details="auto"></v-text-field>
          <v-text-field label="อธิบาย"></v-text-field>
        </div>
        <div>
          <v-btn small>โพสต์</v-btn>
        </div>
      </v-card-text>
    </v-card>
    <br>
    <Postbox/>

    
    </body>
  </div>
</template>

<script>
// @ is an alias to /src
import Postbox from "@/components/Postbox.vue";

export default {
  name: "Home",
  components: {
    Postbox ,
  }
};
</script>
