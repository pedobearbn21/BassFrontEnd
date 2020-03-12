<template>
  <v-container class="center">
    <v-card class="mx-auto " max-width="700">
    
        <v-card-text>
          <v-form
          ref="form"
        >
        <p class="head">Bass</p>
          <v-row
          justify="center">
          <v-col
          cols="12"
          md="6"
          >
          
          <v-text-field
          dense
          v-model="user.username"
          outlined
          label="Username"
          ></v-text-field>
          </v-col>
          </v-row>
        <v-row
        justify="center">
        <v-col
          cols="12"
          md="6"
        >
        <v-text-field
          dense
          v-model="user.password"
          outlined
          label="Password"
        ></v-text-field>
        </v-col>
      </v-row>  
      <v-col
          cols='12'
      >
      <v-row justify="center">
      <v-btn @click="login">Login</v-btn>
      </v-row>
      </v-col>
      </v-form>
      </v-card-text>
    </v-card>
  </v-container>
  
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
                this.$emit('login_success')
            })
        },
        logout(){
            localStorage.removeItem('access_token')
        }
    },
    
}


</script>

<style>
  .center {
    margin: 0;
    position: absolute;
    top: 40vh;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .head{
    font-size: 48px;
    display: flex;
    justify-content: center;
    padding:20px;
  }
</style>