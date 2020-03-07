<template>

    <v-app id="sandbox">
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
  </v-app>
</template>

<script>
import Drawner from '@/components/Drawner.vue';
export default {
  components:{
    Drawner
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
      
    }
  },
  mounted() {
    this.testhello()
  },
  methods: {
    testhello(){
      localStorage.setItem('access_token','1b6a5bb55ebde6467e1f7d3718f0c94733340c58')
      this.axios.get('test/').then((res)=>{
        console.log(res)
      })
    }
  },
}
</script>

<style lang="scss">

</style>
