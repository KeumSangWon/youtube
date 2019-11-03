<template>
  <v-layout align-center justify-center>
    <v-flex sm11 xs11 md4>
      <v-flex display-1>Register Page</v-flex>
      <br />
      <br />
      <v-card max-width="500" class="mx-auto" v-if="type==0">
        <v-card-title style="background:#E53935; font-size:1.5em; color:white">User Type</v-card-title>
        <v-card-text>plese click your type then you are going to look register form page</v-card-text>
        <v-card-text>if you are Youtuber click Employee button but you are Editer click Editer button</v-card-text>
        <v-card-actions>
          <v-layout justify-center>
            <v-btn color="red darken-1" dark @click="typeCheck1()">Youtuber</v-btn>
            <v-btn color="red darken-1" dark @click="typeCheck2()">Editer</v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
      <RegisterForm v-else></RegisterForm>
    </v-flex>
  </v-layout>
</template>
<script>
import RegisterForm from "../components/RegisterForm";
export default {
  components: {
    RegisterForm
  },
  data: () => ({
    type: 0
  }),
  methods: {
    typeCheck1() {
      this.type = 1;
      this.$store.dispatch("user_type", this.type);
      console.log("user_tpyr : " + this.$store.state.user_type);
    },
    typeCheck2() {
      this.type = 2;
      this.$store.dispatch("user_type", this.type);
      console.log("user_tpyr : " + this.$store.state.user_type);
    }
  }
};
</script>


