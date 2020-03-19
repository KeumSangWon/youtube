<template>
  <v-layout justify-center wrap row>
    <v-flex xs12 sm12 md4>
      <v-row>
        <v-col cols12 xs12 sm12 md4>
          <v-card>
            <v-list two-line>
              <v-card-title>list of applicants</v-card-title>
              <template v-for="index in pick_user">
                <v-divider :key="index.id" :inset="index.id"></v-divider>
                <v-list-item :key="index.id">
                  <v-list-item-avatar>
                    <img :src="src" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="index.title"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      pick_user: [],
      src:
        "https://yt3.ggpht.com/-Y3vJZoNm9IQ/AAAAAAAAAAI/AAAAAAAAAAA/CPnjCbRIvbg/s48-c-k-no-mo-rj-c0xffffff/photo.jpg"
    };
  },
  created() {
    console.log(this.$store.state.user_id);
    this.get_pick();
  },
  methods: {
    get_pick() {
      axios
        .get(
          "http://localhost:8000/api/get_pick?id=" + this.$store.state.user_id
        )
        .then(res => {
          console.log(res);
          // router.push({ name: "article" });
          this.pick_user = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>