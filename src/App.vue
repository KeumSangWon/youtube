<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          @click="$router.push({ name: item.to })"
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="red darken-1" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>

      <v-row justify="end" v-if="this.$store.getters.check_login == false">
        <v-btn icon @click="$router.push({name: 'login'})">
          <v-icon class>person</v-icon>
        </v-btn>
      </v-row>

      <!-- menu -->
      <v-row justify="end" v-if="this.$store.getters.check_login == true">
        <v-menu left bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item @click="$router.push({ name: 'myPage' })">
              <v-list-item-title>Mypage</v-list-item-title>
            </v-list-item>
            <v-list-item @click="logout">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-row>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-row xs="12">
          <router-view></router-view>
        </v-row>
      </v-container>
    </v-content>
    <!-- <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>-->
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: false,
    items: [
      { text: "Home", icon: "home", to: "home" },
      { text: "Employment", icon: "home", to: "employment" },
      { text: "Video", icon: "home", to: "allVideo" },
      { text: "Article", icon: "home", to: "article" }
    ],
    isMobile: false
  }),
  methods: {
    ...mapActions(["logout"])
  }
};
</script>