<template>
  <v-container>
    <!-- self infomation -->
    <v-layout justify-center wrap row>
      <v-flex xs12 sm12 md4>
        <h1 style>MyPage</h1>
        <br />
        <br />
        <v-text-field label="Name" :placeholder="name" readonly></v-text-field>
        <v-text-field label="Birth" :placeholder="birth" readonly></v-text-field>
        <v-text-field label="PhoneNumber" :placeholder="phoneNum" readonly></v-text-field>
      </v-flex>
    </v-layout>
    <!-- apills -->
    <apply></apply>
    <v-layout justify-center>
      <v-btn>edit</v-btn>&nbsp;&nbsp;
      <v-btn @click="$router.push({ name: 'employment' })">Back</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import apply from "../components/Apply";
export default {
  components: {
    apply
  },
  data: () => ({
    name: "Keum SangWon",
    phoneNum: "010-6555-0465",
    birth: "1996-08-07"
  }),
  created() {
    consol.log(this.$store.user_info);
  }
};
</script>