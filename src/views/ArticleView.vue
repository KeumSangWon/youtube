<template>
  <v-container>
    <v-layout justify-center row warp>
      <v-flex xs12 sm12 md4>
        <v-flex display-1 font-weight-thin>모집요강</v-flex>
        <br />
        <br />
        <v-layout justify-end v-if="user_id == this.$store.getters.user_id">
          <v-btn
            color="red darken-1"
            class="white--text"
            @click="
              $router.push({
                name: 'recruitUpdate',
                params: { data: item_list }
              })
            "
            >수정하기</v-btn
          >&nbsp;&nbsp;
          <v-btn color="red darken-1" class="white--text" @click="destroy()"
            >삭제하기</v-btn
          >
        </v-layout>
        <br />
        <v-text-field
          label="Name"
          placeholder="Name"
          v-model="item_user.name"
          outlined
          readonly
        ></v-text-field>
        <v-text-field
          label="Gender"
          placeholder="Gender_item"
          v-model="item_gender.gender_item"
          outlined
          readonly
        ></v-text-field>
        <v-text-field
          label="Academic"
          placeholder="Academic_category"
          v-model="item_academic[0].academic_category"
          outlined
          readonly
        ></v-text-field>
        <v-text-field
          label="Genre"
          placeholder="Genre_name"
          v-model="item_genre[0].genre_name"
          outlined
          readonly
        ></v-text-field>
        <v-text-field
          label="Skill"
          placeholder="Skill_name"
          v-model="item_skill[0].skill_name"
          outlined
          readonly
        ></v-text-field
        >-->
        <v-text-field
          label="Salaty"
          placeholder="Salary_item"
          v-model="item_salary.salary_item"
          outlined
          readonly
        ></v-text-field>
        <v-text-field
          label="Career"
          placeholder="Career_item"
          v-model="item_career.career_item"
          outlined
          readonly
        ></v-text-field>
        <v-text-field
          label="Work"
          placeholder="Recruitment_item"
          v-model="item_recruitment.recruitment_item"
          outlined
          readonly
        ></v-text-field>
        <v-text-field
          label="Language"
          placeholder="Language_name"
          v-model="item_language[0].language_name"
          outlined
          readonly
        ></v-text-field>
        <v-text-field
          label="Etc"
          placeholder="Etc_category"
          v-model="item_etc[0].etc_category"
          outlined
          readonly
        ></v-text-field>
        <v-textarea
          outlined
          auto-grow
          name="input-7-4"
          label="PortFolio"
          placeholder="Textra"
          v-model="item_list.textra"
          readonly
        ></v-textarea>
        <v-layout justify-center>
          <v-btn color="red darken-1" class="white--text" @click="apply()"
            >지원하기</v-btn
          >&nbsp;&nbsp;
          <v-btn color="red darken-1" class="white--text" @click="ok()"
            >돌아가기</v-btn
          >
          <v-btn @click="download()">Download</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import axios from "axios";
import router from "../router";

export default {
  data: () => ({
    item_list: [],
    item_user: [],
    item_skill: [],
    item_career: [],
    item_recruitment: [],
    item_salary: [],
    item_genre: [],
    item_etc: [],
    item_language: [],
    item_academic: ["none"],
    item_gender: [],
    user_id: 0
  }),
  created() {
    console.log(this.$route.params.id);
    axios
      .get("http://localhost:8000/api/recruit_view?id=" + this.$route.params.id)
      .then(res => {
        console.log(res.data);
        this.item_list = res.data;
        this.item_user = res.data.user;
        this.item_skill = res.data.skill;
        this.item_career = res.data.career;
        this.item_recruitment = res.data.recruitment;
        this.item_salary = res.data.salary;
        this.item_genre = res.data.genre;
        this.item_etc = res.data.etc;
        this.item_language = res.data.language;
        this.item_academic = res.data.academic;
        this.item_gender = res.data.gender;
        this.user_id = res.data.user_id;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    destroy() {
      axios
        .get(
          "http://localhost:8000/api/recruit_destroy?id=" +
            this.$route.params.id
        )
        .then(res => {
          console.log(res);
          // router.push({ name: "article" });
        })
        .catch(err => {
          console.log(err);
        });
    },
    apply() {
      axios
        .post("http://localhost:8000/api/apply", {
          user_id: this.$store.getters.user_id,
          recruit_id: this.$route.params.id
        }) //end post
        .then(res => {
          console.log(res);
          router.push({ name: "article" });
        }) // end then
        .catch(err => {
          console.log(err);
          console.log(err.response);
        }); // end catch")
    },
    download() {
      // Points to the root reference
      var storageRef = this.$firebase.storage().ref();
      var starsRef = storageRef.child("icons8-padlock-512.png");

      // Get the download URL
      starsRef
        .getDownloadURL()
        .then(function(url) {
          // Insert url into an <img> tag to "download"
        })
        .catch(function(error) {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/object-not-found":
              // File doesn't exist
              break;

            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;

            case "storage/canceled":
              // User canceled the upload
              break;
            case "storage/unknown":
              // Unknown error occurred, inspect the server response
              break;
          }
        });
    }
  }
};
</script>
