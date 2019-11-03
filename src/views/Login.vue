<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm12 md4>
        <v-flex display-1 font-weight-thin>Login Page</v-flex>
        <br />
        <br />
        <v-card class="elevation-12">
          <v-toolbar color="red darken-1" dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
            <div class="flex-grow-1"></div>
          </v-toolbar>
          <v-card-text>
            <!-- <v-form v-on:submit.prevent="login{{email, password}}"> -->
            <v-text-field
              outlined
              label="Login"
              name="login"
              prepend-icon="person"
              type="text"
              v-model="email"
            ></v-text-field>

            <v-text-field
              outlined
              id="password"
              label="Password"
              name="password"
              prepend-icon="lock"
              type="password"
              v-model="password"
            ></v-text-field>
            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn color="red darken-1" dark @click="$router.push({ name: 'register' })">Register</v-btn>
              <v-btn
                color="red darken-1"
                dark
                @click="login({email, password})"
              >&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;</v-btn>
            </v-card-actions>
            <!-- </v-form> -->
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import router from "../router";
import { mapState, mapActions } from "vuex";
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: false,
    email: "",
    password: ""
  }),
  methods: {
    ...mapActions(["login"])
    // login() {
    // axios
    //   .post("http://localhost:8000/api/login", {
    //     email: this.email,
    //     password: this.password
    //   })
    //   .then(res => {
    //     localStorage.setItem("user_token", res.data.token);
    //     getUserInfo();
    //     this.email = "";
    //     this.password = "";
    //     this.$store.dispatch("check_login", true);
    //     router.push({ name: "myPage" });
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     console.log(err.response);
    //   });
  }
  // getUserInfo({ commit }) {
  //   let token = localStorage.getItem("user_token");
  //   let config = {
  //     headers: {
  //       user_token: token
  //     }
  //   };
  //   axios
  //     .get("http://localhost:8000/api/profile", config)
  //     .then(res => {
  //       console.log(res.data.user);
  //       return res.data;
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       alert("check your ID and Password");
  //     });
  // }
  // }
};
</script>

