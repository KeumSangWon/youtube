<template>
  <v-container fluid grid-list-md>
    <v-layout wrap>
      <v-flex>
        <v-btn @click="$router.push({name: 'create'})">create</v-btn>
      </v-flex>
      <!-- test -->
      <v-flex xs12 sm12 md12 lg12 xl3 v-for="item in video_list" :key="item.title">
        <v-card max-width="400" @click="$router.push({ name: 'viewVideo', params:{ id: item.id} })">
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          ></v-img>

          <v-card-text>
            <span class="font-weight-black black--text subtitle-1">{{item.title}}</span>
            <br />
            <span class="text--primary">
              <span>{{item.user_id}}</span>
              <br />
              <span>view | updateDay</span>
            </span>
          </v-card-text>
        </v-card>
      </v-flex>

      <!-- <v-flex xs12 sm12 md12 lg12 xl3>
        <v-flex>
          <v-btn @click="$router.push({name: 'create'})">create</v-btn>
        </v-flex>
        <v-card max-width="400" @click="$router.push({ name: 'viewVideo' })">
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          ></v-img>

          <v-card-text>
            <span class="font-weight-black black--text subtitle-1">videoTitle</span>
            <br />
            <span class="text--primary">
              <span>channelName</span>
              <br />
              <span>view | updateDay</span>
            </span>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4 lg3 xl3>
        <v-card max-width="400">
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          ></v-img>

          <v-card-text>
            <span class="font-weight-black black--text subtitle-1">videoTitle</span>
            <br />
            <span class="text--primary">
              <span>channelName</span>
              <br />
              <span>view | updateDay</span>
            </span>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4 lg3 xl3>
        <v-card max-width="400">
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          ></v-img>

          <v-card-text>
            <span class="font-weight-black black--text subtitle-1">videoTitle</span>
            <br />
            <span class="text--primary">
              <span>channelName</span>
              <br />
              <span>view | updateDay</span>
            </span>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4 lg3 xl3>
        <v-card max-width="400">
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          ></v-img>

          <v-card-text>
            <span class="font-weight-black black--text subtitle-1">videoTitle</span>
            <br />
            <span class="text--primary">
              <span>channelName</span>
              <br />
              <span>view | updateDay</span>
            </span>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4 lg3 xl3>
        <v-card max-width="400">
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          ></v-img>

          <v-card-text>
            <span class="font-weight-black black--text subtitle-1">videoTitle</span>
            <br />
            <span class="text--primary">
              <span>channelName</span>
              <br />
              <span>view | updateDay</span>
            </span>
          </v-card-text>
        </v-card>
      </v-flex>-->
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import router from "../router";
export default {
  data: () => ({
    video_list: []
  }),
  computed: {
    titleComputed() {
      console.log("I change when this.property changes.");
    }
  },
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