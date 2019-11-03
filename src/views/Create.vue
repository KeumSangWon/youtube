<template>
  <v-container>
    <v-layout justify-center>
      <v-flex>
        <v-form v-on:submit.prevent="ok">
          <v-text-field v-model="title" :rules="rules" label="Title" outlined></v-text-field>
          <v-text-field v-model="youtubeURL" :rules="rules" label="Youtibe Url " outlined></v-text-field>

          <br />
          <v-expansion-panels accordion>
            <v-expansion-panel>
              <v-expansion-panel-header>Genre</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-layout wrap row>
                  <v-flex v-for="item in check_box_ganre" :key="item.text" xs4 sm4 md3>
                    <v-checkbox
                      :label="item.text"
                      v-model="genre"
                      color="red darken-3"
                      :value="item.genrek"
                      hide-details
                    ></v-checkbox>
                  </v-flex>
                </v-layout>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <br />

          <v-textarea
            v-model="textarea"
            outlined
            name="input-7-4"
            label="Enter explanation about Video"
          ></v-textarea>
          <v-layout justify-center>
            <v-btn color="red darken-1" dark type="submit">ok</v-btn>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import router from "../router";
export default {
  data: () => ({
    title: "",
    youtubeURL: "",
    textarea: "",
    genre: "",
    check_box_ganre: [
      { text: "Vlog", genre: 1 },
      { text: "Game", genre: 2 },
      { text: "Mukbang", genre: 3 },
      { text: "ASMR", genre: 4 },
      { text: "Review", genre: 5 },
      { text: "Exercise", genre: 6 },
      { text: "Tech", genre: 7 },
      { text: "News", genre: 8 },
      { text: "Music", genre: 9 },
      { text: "Etc", genre: 10 }
    ]
  }),
  methods: {
    ok() {
      axios
        .post("http://localhost:8000/api/create_video", {
          user_id: this.$store.getters.user_id,
          title: this.title,
          videoURL: this.youtubeURL,
          video_genre: this.genre,
          textarea: this.textarea
        })
        .then(res => {
          (this.title = ""), (this.youtubeURL = ""), (this.textarea = "");
        })
        .catch(err => {
          console.log(err);
          console.log(err.response);
        });
    }
  }
};
</script>