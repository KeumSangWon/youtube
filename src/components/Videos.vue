<template>
  <v-layout wrap fluid grid-list-md>
    <v-row justify-center row warp>
      <v-flex xs12 sm12 md12 lg12 xl3 v-for="item in video_list" :key="item.title">
        <v-card max-width="400" @click="$router.push({ name: 'viewVideo', params:{ id: item.id} })">
          <v-img
            class="white--text"
            height="200px"
            src="https://s-top.cs.skku.edu/s-top/_nuxt/img/6e72fdb.png"
          ></v-img>

          <v-card-text>
            <span class="font-weight-black black--text subtitle-1">{{item.title}}</span>
            <br />
            <span class="text--primary">
              <span>{{item.user.email}}</span>
              <br />
              <span>{{item.updated_at}}</span>
              <!-- after add views-->
            </span>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-row>
  </v-layout>
</template>
<script>
import axios from "axios";
import router from "../router";
export default {
  data: () => ({
    video_list: [],
    user_info: {}
  }),
  created() {
    console.log("ooookk");
    axios
      .get("http://localhost:8000/api/video_index")
      .then(res => {
        console.log(res.data);
        this.video_list = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>