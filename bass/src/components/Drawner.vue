<template>
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
            <v-list-item-title>
              <router-link :to=item.path  >{{ item.title }}</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "Drawner",
    props:{
        primaryDrawer: {
            type: Object,
            defualt: {}
        }
    },
    data() {
        return {
            items: [
                { title: 'Home', icon: 'mdi-home-city', path: '/' },
                { title: 'Profile', icon: 'mdi-account', path: '/profile' },
                { title: 'Myblog', icon: 'mdi-blogger', path: '/myblog' },
                { title: 'Warehouse', icon: 'mdi-warehouse', path: '/warehouse' },
                { title: 'Logout', icon: 'mdi-logout', path: '/logout' },

            ],
            mini: true,
        }
    },

}
</script>

<style>

</style>