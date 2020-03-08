<template>
  <div class="container">
    <div class="circle"></div>
      <v-row class="content justify-center">
        <v-col md ="5">
            <v-text-field
                label="Firstname"
            ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="content justify-center">
        <v-col md ="5">
            <v-text-field
                label="Lastname"
            ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="content justify-center">
        <v-col md ="5">
            <v-text-field
                label="E-mail"
            ></v-text-field>
        </v-col>
      </v-row>
      <v-btn large>Edit</v-btn>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
}
.circle{
    width:15%;
    height: 25%;
    background-color: red;
    border-radius: 50%;
    
}
.content{
    width:100%;

}
</style>
