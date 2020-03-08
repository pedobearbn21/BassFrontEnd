<template>
  <div>
    <v-container>
      <v-row
        justify="center">
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="user.username"
            label="Username"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row
        justify="center">
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="user.password"
            label="Password"
          ></v-text-field>
        </v-col>
      </v-row>  
      <v-col
          cols='12'
      >
      <v-row justify="center">
      <v-button @click="login">Login</v-button>
      </v-row>
      </v-col>
    </v-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                username:'',
                password:'',
                email:''
            }
        }
    },
    methods: {
        login(){
            this.axios({
                method: 'post',
                url: `rest-auth/login/`,
                data: this.user
            }).then((res)=>{
                localStorage.setItem('access_token',res.data.key)
            })
        },
        logout(){
            localStorage.removeItem('access_token')
        }
    },

}
</script>

<style>

</style>