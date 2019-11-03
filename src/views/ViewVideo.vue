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
        <v-flex>Views : 55</v-flex>
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
          <h4>{{user_id}}</h4>
          <v-layout justify-end>
            <v-btn rounded color="red darken-1" dark>sadfsadf</v-btn>
          </v-layout>
        </v-flex>
      </v-flex>

      <!-- Side Scroll -->
      <v-flex xs12 sm12 md2 ml-2>
        <v-container id="scroll-target" style="max-height: 500px" class="overflow-y-auto">
          <v-row v-scroll:#scroll-target="onScroll" justify="center" style="height: 1000px">
            <v-card @click="$router.push({ name: 'viewVideo' })" v-for="i in 20" :key="i">
              <v-img
                class="white--text"
                height="150px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              ></v-img>

              <v-card-text>
                <span class="font-weight-black black--text subtitle-1">videoTitle</span>
                <br />
                <span class="text--primary">
                  <span>{{user_id}}</span>
                  <br />
                  <span>view | updateDay</span>
                </span>
              </v-card-text>
            </v-card>
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
    id: 0,
    video_title: "",
    video_url: "",
    user_id: "",
    genre: ""
  }),
  created() {
    console.log(this.$route.params.id);

    axios
      .get("http://localhost:8000/api/video_show?id=" + this.$route.params.id)
      .then(res => {
        console.log(res.data);
        this.video_title = res.data.title;
        this.video_url = res.data.videoURL;
        this.user_id = res.data.user_id;
        this.genre = res.data.genre;
        this.video_list = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>