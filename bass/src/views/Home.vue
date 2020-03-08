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
        <v-row>
          <v-col cols="12" >
            <v-text-field
              label="Outlined"
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              label="Outlined"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="end">
          <v-btn small>โพสต์</v-btn>
        </v-row>
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
