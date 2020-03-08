<template>
  <div class="container">
    <div >
      <v-avatar size="256">
        <img
          
          src="../assets/das.jpg"
          alt="Meliodas"
        >
      </v-avatar>
    </div>
      <v-row class="content justify-center">
        <v-col md ="4">
            <v-text-field
                label="Firstname"
            ></v-text-field>
        </v-col>
        <v-col md ="4">
            <v-text-field
                label="Lastname"
            ></v-text-field>
        </v-col>
      </v-row>
      
      <v-row class="content justify-center">
        <v-col md ="4">
            <v-text-field
                label="E-mail"
            ></v-text-field>
        </v-col>
        <v-col md ="4">
            <v-text-field
            value="100.00"
            label="Balance"
            regular
            readonly
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

.content{
    width:100%;

}

</style>
