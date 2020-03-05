<template>

    <v-app id="sandbox">
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      app
      overflow
      dark
    >

    <v-list-item class="px-2 pt-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>



    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="primaryDrawer.clipped"
      app
      dark
    >
      <v-app-bar-nav-icon
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      />
      <v-toolbar-title>Vuetify</v-toolbar-title>
      <router-link to="/">Home</router-link> |
        <router-link to="/myblog">Myblog</router-link> |
        <router-link to="/about">About</router-link>
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
    <!-- <v-content>
      <v-container>
        
      </v-container>
    </v-content> -->

</template>

<script>
export default {
  data() {
    return {
      primaryDrawer: {
        model: null,
        clipped: true,
      },
      footer: {
        inset: false,
      },
      items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        mini: true,
    }
  },
}
</script>

<style lang="scss">

</style>
