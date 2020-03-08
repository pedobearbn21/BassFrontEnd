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
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="name"
            outlined
            label="หัวข้อ"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            outlined
            label="อธิบาย"
            required
          ></v-text-field>
        <v-row justify="end">
          <v-col cols="2">
          <v-btn >โพสต์</v-btn>
          </v-col>
        </v-row>
        </v-form> 
      </v-card-text>
    </v-card>
    <div class="pt-5">
    <Postbox/>
    </div>
    
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
