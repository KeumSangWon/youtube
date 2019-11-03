<template>
  <v-container>
    <v-layout justify-center wrap row>
      <v-flex xs12 sm12 md4>
        <h1 style>MyPage</h1>
        <br />
        <br />
        <v-text-field label="Name" :placeholder="name" readonly></v-text-field>
        <v-text-field label="Birth" placeholder="1996/08/07" readonly></v-text-field>
        <v-text-field label="PhoneNumber" :placeholder="phoneNum" readonly></v-text-field>

        <v-text-field label="LocationSity" :placeholder="location" readonly></v-text-field>
        <v-text-field label="Employment status" placeholder="while in office" readonly></v-text-field>
        <v-text-field label="Career" placeholder="career" readonly></v-text-field>
        <v-layout justify-center>
          <v-btn>edit</v-btn>&nbsp;&nbsp;
          <v-btn @click="$router.push({ name: 'employment' })">Back</v-btn>
          {{this.$store.getters.user_id}}
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    // this.getUser().then(res => {
    //   console.log(res.user.name);
    //   this.name = res.user.name;
    //   this.phoneNum = res.user.phoneNum;
    //   this.location = res.user.location;
    //   this.$store.dispatch("user_id", res.user.email);
    //   this.$store.dispatch("user_type", res.user.type);
    //   console.log(this.$store.getters.user_id);
    //   return res;
    // });
    return {
      name: "",
      phoneNum: "",
      location: "",
      recruit: "",
      career: ""
    };
  },
  methods: {
    // getUser() {
    //   // axios.defaults.headers.common["Authorization"] =
    //   //   "Bearer " + localStorage.user_token;
    //   console.log(localStorage.user_token);
    //   let token = localStorage.user_token;
    //   let config = {
    //     headers: {
    //       Authorization: "Bearer " + token
    //     }
    //   };
    //   return axios
    //     .get("http://localhost:8000/api/profile", config)
    //     .then(res => {
    //       console.log(res.data.user);
    //       return res.data;
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  }
};
</script>