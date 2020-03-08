<template>

    <v-app id="sandbox">
    <div v-if='true'>
    <Drawner
      :primaryDrawer='primaryDrawer'
    />
    <v-app-bar
      :clipped-left="primaryDrawer.clipped"
      app
      dark
    >
      <v-app-bar-nav-icon
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      />
      <v-toolbar-title>Bass</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container >
        <router-view />
      </v-container>
    </v-content>

    <v-footer
      :inset="footer.inset"
      app
    >
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    </div>
    <!-- <div v-else>
      <Login @login_success='success'/>
    </div> -->
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import Drawner from '@/components/Drawner.vue';
// import Login from '@/views/Login.vue';
export default {
  components:{
    Drawner,
    
  },
  data() {
    return {
      primaryDrawer: {
        model: null,
        clipped: true,
      },
      footer: {
        inset: false,
      },
      loginedL:false
      
    }
  },
  computed: mapState({
    logined: state => state.user.login_Status
  })
  ,
  created() {
    this.$store.dispatch('user/Check_login')
    this.login_success()
  },
  methods: {
    login_success(){
        if(this.logined){
          this.$router.push('/timeline')
        }
    },
    success(){
      this.$store.dispatch('user/Check_login')
      this.$router.push('/timeline')
    }
  },
}
</script>

<style lang="scss">

</style>
