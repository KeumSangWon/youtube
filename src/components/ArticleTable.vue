<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs11 sm12 md6>
        <v-layout justify-end mb-3>
          <v-btn color="red darken-1" dark @click="$router.push({name: 'employment'})">Create</v-btn>
        </v-layout>

        <v-flex xs11 sm12 md12 mb-3 v-for="item in table_list" :key="item.id">
          <v-card
            class="mx-auto"
            @click="$router.push({ name: 'articleView', params:{ id: item.id} })"
          >
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-text>{{ item.user.email }}</v-card-text>
            <v-card-actions>
              <v-card-text>근무형태 : {{ item.recruitment.recruitment_item }}</v-card-text>
              <v-card-text>급여 : {{ item.salary.salary_item }}</v-card-text>
            </v-card-actions>
            <v-card-actions>
              <v-card-text>사용기술 :</v-card-text>
              <v-card-text v-for="skill in item.skill" :key="skill.id">{{ skill.skill_name }}</v-card-text>
            </v-card-actions>
            <v-card-actions>
              <v-card-text>장르 :</v-card-text>
              <v-card-text v-for="genre in item.genre" :key="genre.id">{{ genre.genre_name }}</v-card-text>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
      </v-flex>
    </v-layout>
  </v-container>
</template>
   
<script>
import axios from "axios";
export default {
  created() {
    axios
      .get("http://localhost:8000/api/recruit_index")
      .then(res => {
        console.log(res.data[0].genre[0].genre_name);
        this.table_list = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  data() {
    return {
      table_list: [],
      page: 1,
      pageCount: 5,
      itemsPerPage: 2
    };
  }
};
</script>