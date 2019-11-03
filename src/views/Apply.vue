<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs11 sm12 md5>
        <v-flex display-1>Apply Page</v-flex>
        <br />
        <br />
        <v-form v-on:submit.prevent="ok">
          <v-text-field v-model="title" label="Title" outlined></v-text-field>
          <v-text-field v-model="title" label="Youtube url" outlined></v-text-field>
          <v-select :items="items_money" label="Salary" outlined></v-select>
          <v-select :items="items_gender" label="gender" outlined></v-select>
          <v-select :items="items_career" label="Career" outlined></v-select>
          <v-select :items="items_work" label="Recruitment Type" outlined></v-select>
          <!--skill-->
          <v-expansion-panels accordion>
            <v-expansion-panel>
              <v-expansion-panel-header>Skill</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-layout wrap row>
                  <v-flex v-for="item in check_box_skill" :key="item.text" xs5 sm4 md3>
                    <v-checkbox
                      :label="item.text"
                      v-model="skill"
                      color="red darken-3"
                      :value="item.text"
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
                  <v-flex v-for="item in check_box_ganre" :key="item.text" xs4 sm4 md3>
                    <v-checkbox
                      :label="item.text"
                      v-model="genre"
                      color="red darken-3"
                      :value="item.text"
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
                  <v-flex v-for="item in check_box_academic" :key="item.text" xs4 sm4 md3>
                    <v-checkbox
                      :label="item.text"
                      v-model="academic"
                      color="red darken-3"
                      :value="item.text"
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
                  <v-flex v-for="item in check_box_language" :key="item.text" xs4 sm4 md3>
                    <v-checkbox
                      :label="item.text"
                      v-model="language"
                      color="red darken-3"
                      :value="item.text"
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
                  <v-flex v-for="item in check_box_etc" :key="item.text" xs4 sm4 md3>
                    <v-checkbox
                      :label="item.text"
                      v-model="etc"
                      color="red darken-3"
                      :value="item.text"
                      hide-details
                    ></v-checkbox>
                  </v-flex>
                </v-layout>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <br />
          <br />

          <v-textarea
            outlined
            auto-grow
            name="input-7-4"
            label="Enter explanation about Video"
            v-model="textra"
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
    items_money: [
      "100 이상",
      "200 이상",
      "300 이상",
      "400 이상",
      "500 이상",
      "추후 협의"
    ],
    items_gender: ["Men", "Woman", "Uncrowned"],
    items_career: ["신입", "1~2년", "3~4년", "5년이상"],
    items_work: ["정규직", "인턴직", "계약직", "추후 협의"],
    check_box_skill: [
      { text: "PhotoShop" },
      { text: "AfterEffects" },
      { text: "Vegas" },
      { text: "Finalcut" },
      { text: "기타툴" }
    ],
    check_box_ganre: [
      { text: "Vlog" },
      { text: "Game" },
      { text: "Mukbang" },
      { text: "ASMR" },
      { text: "Review" },
      { text: "Exercise" },
      { text: "Tech" },
      { text: "News" },
      { text: "Music" },
      { text: "Cook" },
      { text: "Etc" }
    ],
    check_box_academic: [
      { text: "고등학교 졸업" },
      { text: "대학교 재학" },
      { text: "대학교 졸업" }
    ],
    check_box_language: [{ text: "영어" }, { text: "기타 언어" }],
    check_box_etc: [
      { text: "지역 이동" },
      { text: "장비 있음" },
      { text: "장비 없음" },
      { text: "야간 가능" },
      { text: "기타 등등" }
    ],
    title: "",
    salary: "",
    career: "",
    work: "",
    skill: "",
    genre: "",
    academic: "",
    language: "",
    etc: "",
    textra: ""
  }),
  methods: {
    ok() {
      console.log(
        this.title +
          "/" +
          this.salary +
          "/" +
          this.career +
          "/" +
          this.work +
          "/" +
          this.genre +
          "/" +
          this.academic +
          "/" +
          this.language +
          "/" +
          this.etc +
          "/" +
          this.textra
      );
      axios
        .post("http://localhost:8000/api/Apply", {
          title: this.title,
          salary: this.salary,
          career: this.career,
          work: this.work,
          skill: this.skill,
          genre: this.genre,
          academic: this.academic,
          language: this.language,
          etc: this.etc,
          textra: this.textra
        })
        .then(res => {
          (this.title = ""),
            (this.salary = ""),
            (this.career = ""),
            (this.work = ""),
            (this.skill = ""),
            (this.genre = ""),
            (this.academic = ""),
            (this.language = ""),
            (this.etc = ""),
            (this.textra = "");
          router.push({ name: "article" });
        })
        .catch(err => {
          console.log(err);
          console.log(err.response);
        });
    }
  }
};
</script>