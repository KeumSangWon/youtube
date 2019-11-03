<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs11 sm12 md5>
        <v-flex display-1>Employment Page</v-flex>
        <br />
        <br />
        <v-form v-on:submit.prevent="ok">
          <v-text-field v-model="title" label="Title" outlined></v-text-field>
          <v-text-field v-model="files" label="YoutubeURL" outlined></v-text-field>
          <v-select
            :items="items_money"
            item-text="salary_item"
            item-value="id"
            label="Salary"
            outlined
            v-model="salary"
          ></v-select>
          <v-select
            :items="items_gender"
            item-text="gender_item"
            item-value="id"
            label="gender"
            outlined
            v-model="gender"
          ></v-select>
          <v-select
            :items="items_career"
            item-text="career_item"
            item-value="id"
            label="Career"
            outlined
            v-model="career"
          ></v-select>
          <v-select
            :items="items_work"
            item-text="recruitment_item"
            item-value="id"
            label="Work Type"
            outlined
            v-model="recruitment_type"
          ></v-select>
          <!--skill-->
          <v-expansion-panels accordion>
            <v-expansion-panel>
              <v-expansion-panel-header>Skill</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-layout wrap row>
                  <v-flex v-for="item in check_box_skill" :key="item.id" xs5 sm4 md3>
                    <v-checkbox
                      :label="item.skill_name"
                      v-model="skill"
                      color="red darken-3"
                      :value="item.id"
                      hide-details
                    ></v-checkbox>
                  </v-flex>
                </v-layout>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <!--genre-->
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
            <!--academic-->
            <v-expansion-panel>
              <v-expansion-panel-header>Academic</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-layout wrap row>
                  <v-flex v-for="item in check_box_academic" :key="item.id" xs12 sm4 md3>
                    <v-checkbox
                      :label="item.academic_category"
                      v-model="academic"
                      color="red darken-3"
                      :value="item.id"
                      hide-details
                    ></v-checkbox>
                  </v-flex>
                </v-layout>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <!--language-->
            <v-expansion-panel>
              <v-expansion-panel-header>Language</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-layout wrap row>
                  <v-flex v-for="item in check_box_language" :key="item.id" xs4 sm4 md3>
                    <v-checkbox
                      :label="item.language_name"
                      v-model="language"
                      color="red darken-3"
                      :value="item.id"
                      hide-details
                    ></v-checkbox>
                  </v-flex>
                </v-layout>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <!--etc-->
            <v-expansion-panel>
              <v-expansion-panel-header>Etc</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-layout wrap row>
                  <v-flex v-for="item in check_box_etc" :key="item.id" xs4 sm4 md3>
                    <v-checkbox
                      :label="item.etc_category"
                      v-model="etc"
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
          <v-file-input
            v-model="files"
            color="red darken-1"
            counter
            label="File input"
            multiple
            placeholder="Select your files"
            prepend-icon="mdi-paperclip"
            outlined
            :show-size="1000"
          >
            <template v-slot:selection="{ index, text }">
              <v-chip v-if="index < 2" color="red darken-1" dark label small>{{ text }}</v-chip>

              <span
                v-else-if="index === 2"
                class="overline grey--text text--darken-3 mx-2"
              >+{{ files.length - 2 }} File(s)</span>
            </template>
          </v-file-input>

          <br />

          <v-textarea outlined auto-grow label="Enter explanation about Video" v-model="textra"></v-textarea>
          <v-layout justify-center>
            <v-btn color="red darken-1" dark type="submit">ok</v-btn>
            {{this.$store.getters.user_id}}
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
    items_money: [],
    items_gender: [],
    items_career: [],
    items_work: [],
    check_box_skill: [],
    check_box_ganre: [],
    check_box_academic: [],
    check_box_language: [],
    check_box_etc: [],
    user_id: 0,
    title: "",
    salary: 0,
    career: 0,
    recruitment_type: 0,
    skill: [],
    genre: [],
    academic: [],
    language: [],
    etc: [],
    files: "",
    textra: "",
    gender: 0
  }),
  created() {
    this.title = this.$route.params.data.title;
    this.files = this.$route.params.data.video_file;
    this.salary = this.$route.params.data.salary_id;
    this.gender = this.$route.params.data.gender_id;
    this.career = this.$route.params.data.career_id;
    this.recruitment_type = this.$route.params.data.recruitment_id;
    this.$route.params.data.skill.forEach(element => {
      this.skill.push(element.id);
    });
    this.$route.params.data.academic.forEach(element => {
      this.academic.push(element.id);
    });
    this.$route.params.data.genre.forEach(element => {
      this.genre.push(element.id);
    });
    this.$route.params.data.language.forEach(element => {
      this.language.push(element.id);
    });
    this.$route.params.data.etc.forEach(element => {
      this.etc.push(element.id);
    });
    // this.skill = this.$route.params.data.skill.id;
    this.textra = this.$route.params.data.textra;

    axios
      .get("http://localhost:8000/api/items")
      .then(res => {
        console.log(res.data);
        (this.items_money = res.data[7]),
          (this.items_gender = res.data[3]),
          (this.items_career = res.data[1]),
          (this.items_work = res.data[6]),
          (this.check_box_skill = res.data[8]),
          (this.check_box_ganre = res.data[4]),
          (this.check_box_academic = res.data[0]),
          (this.check_box_language = res.data[5]),
          (this.check_box_etc = res.data[2]);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    ok() {
      console.log(this.$route.params.data.id);
      if (!this.files) {
        this.files = "none";
      } //end if

      axios
        .post("http://localhost:8000/api/recruit_update", {
          id: this.$route.params.data.id,
          user_id: this.$store.getters.user_id,
          title: this.title,
          gender: this.gender,
          salary: this.salary,
          career: this.career,
          textra: this.textra,
          file: this.files,
          recruitment_type: this.recruitment_type,
          skill: this.skill,
          genre: this.genre,
          academic: this.academic,
          language: this.language,
          etc: this.etc
        }) //end post
        .then(res => {
          console.log(res);
          (this.title = ""),
            (this.youtubeURL = ""),
            (this.salary = ""),
            (this.career = ""),
            (this.recruitment_type = ""),
            (this.skill = ""),
            (this.genre = ""),
            (this.academic = ""),
            (this.language = ""),
            (this.etc = ""),
            (this.files = ""),
            (this.textra = "");
          router.push({ name: "article" });
        }) // end then
        .catch(err => {
          console.log(err);
          console.log(err.response);
        }); // end catch
    } //end ok
  }
};
</script>