<template>
    <v-card class="mx-auto" max-width="750" >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline">สร้างโพสต์</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-card-text>
        <v-form
          ref="form"
        >
          <v-text-field 
            dense
            v-model="title"
            outlined
            label="หัวข้อ"
          ></v-text-field>

          <v-text-field 
            dense
            v-model="description"
            outlined
            label="อธิบาย"
          ></v-text-field>
          <div class="text-end">
            <v-btn @click="CreatePost">โพสต์</v-btn>
          </div>
        </v-form> 
      </v-card-text>
    </v-card>
</template>

<script>
export default {
    name:'FormPost',
    data() {
        return {
            title: '',
            description:''
        }
    },
    methods: {
        CreatePost () {
            this.$emit('createpost',{"title":this.title,"description":this.description})
        }
    },

}
</script>