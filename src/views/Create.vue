<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm12 md4>
        <h1 style>Create Video</h1>
        <v-form v-on:submit.prevent="ok">
          <v-text-field v-model="title" :rules="rules" label="Title" outlined></v-text-field>
          <v-text-field v-model="video_url" :rules="rules" label="Youtibe Url " outlined></v-text-field>

          <br />
          <v-expansion-panels accordion>
            <v-expansion-panel>
              <v-expansion-panel-header>Genre</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-layout wrap row>
                  <v-flex v-for="item in check_box_ganre" :key="item.id" xs4 sm4 md3>
                    <v-checkbox
                      :label="item.genre_name"
                      v-model="genre"
                      color="red darken-3"
                      :value="item.id"
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
    video_url: "",
    textarea: "",
    files: "",
    genre: [],
    check_box_ganre: []
  }),
  created() {
    axios
      .get("http://localhost:8000/api/items")
      .then(res => {
        console.log(res.data);

        this.check_box_ganre = res.data[4];
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    ok() {
      if (!this.files) {
        this.files = "none";
      } //end if

      axios
        .post("http://localhost:8000/api/create_video", {
          user_id: this.$store.getters.user_id,
          title: this.title,
          video_url: this.video_url,
          video_file: this.files,
          textarea: this.textarea,
          genre: this.genre
        }) //end post
        .then(res => {
          console.log(res.data);
          // router.push({ name: "allVideo" });
        }) // end then
        .catch(err => {
          console.log(err);
          console.log(err.response);
        }); // end catch
    }
  }
};
</script>