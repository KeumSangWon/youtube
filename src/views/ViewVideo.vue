<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm12 md6>
        <!-- video -->
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/OoQd7T5iR_o"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <br />
        <br />
        <v-flex>{{video_title}}</v-flex>
        <v-flex>Views : {{Views}}</v-flex>
        <hr />
        <br />
        <v-flex>
          <img
            id="img"
            class="style-scope"
            alt="타터터"
            height="40"
            width="40"
            src="https://yt3.ggpht.com/-Y3vJZoNm9IQ/AAAAAAAAAAI/AAAAAAAAAAA/CPnjCbRIvbg/s48-c-k-no-mo-rj-c0xffffff/photo.jpg"
          />
          <h4>{{user_email}}</h4>
          <v-layout justify-end>
            <v-btn rounded color="red darken-1" dark>Good</v-btn>
          </v-layout>
        </v-flex>
      </v-flex>

      <!-- Side Scroll -->
      <v-flex xs12 sm12 md2 ml-2>
        <v-container id="scroll-target" style="max-height: 500px" class="overflow-y-auto">
          <v-row v-scroll:#scroll-target="onScroll" justify="center" style="height: 1000px">
            <v-flex v-for="item in more_videos" :key="item.id">
              <v-card @click="$router.push({ name: 'viewVideo' })">
                <!--v-if="item.id != video_id"-->
                <v-img
                  class="white--text"
                  height="150px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                ></v-img>

                <v-card-text>
                  <span class="font-weight-black black--text subtitle-1">{{item.title}}</span>
                  <br />
                  <span class="text--primary">
                    <span>{{item.user.email}}</span>
                    <br />
                    <span>{{views}} | {{item.updated_at}}</span>
                  </span>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-row>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    video_id: 0,
    video_title: "",
    video_url: "",
    user_email: "",
    genre: "",
    updated_day: "",
    views: 0,
    user_id: 0,
    more_videos: []
  }),
  created() {
    this.view_video();
  },
  methods: {
    view_video() {
      axios
        .get("http://localhost:8000/api/video_show?id=" + this.$route.params.id)
        .then(res => {
          console.log(res.data);
          this.video_id = res.data.id;
          this.video_title = res.data.title;
          this.video_url = res.data.videoURL;
          this.user_email = res.data.user.email;
          this.genre = res.data.genre;
          this.video_list = res.data;
          this.updated_day = res.data.updated_at;
          this.user_id = res.data.user_id;
          this.my_videos();
        })
        .catch(err => {
          console.log(err);
        });
    },

    my_videos() {
      axios
        .get("http://localhost:8000/api/my_videos?id=" + this.user_id)
        .then(res => {
          console.log(res.data);
          this.more_videos = res.data;
          console.log(this.more_videos);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>