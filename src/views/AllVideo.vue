<template>
  <v-container fluid grid-list-md>
    <v-layout wrap>
      <v-flex>
        <v-btn color="red darken-1" dark @click="$router.push({name: 'create'})">create</v-btn>
      </v-flex>
      <videos></videos>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import router from "../router";
import videos from "../components/Videos";
export default {
  components: {
    videos
  },
  computed: {
    titleComputed() {
      console.log("I change when this.property changes.");
    }
  }
};
</script>