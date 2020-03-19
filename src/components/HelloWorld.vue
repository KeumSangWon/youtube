<template>
  <v-container>
    <v-layout text-center wrap>
      <v-row justify-center row warp>
        <v-layout>
          <v-flex xs12 sm12 md12>
            <v-img
              src="https://images.blackmagicdesign.com/images/products/blackmagicpocketcinemacamera/accessories/hero-md.jpg?_v=1564718600"
              max-width="100%"
              max-height="500"
            ></v-img>
            <br />
            <br />
            <br />

            <v-flex display-4 font-weight-medium>Welcome to Hello Creator</v-flex>
            <br />
            <br />
            <br />
            <v-flex
              display-1
              font-regular
            >This site connects the YouTuber and the editor you need. They can also be obtained by posting their own videos or by presenting conditions to appeal to them.</v-flex>
            <br />
            <br />
            <v-flex display-1 font-regular>Find the right person for you.</v-flex>

            <v-flex display-1 font-regular>Let's Start</v-flex>
            <br />
            <br />
            <v-flex>
              <v-btn
                color="red darken-1"
                dark
                width="10%"
                height="80"
                @click="$router.push({ name: 'login'})"
              >
                <v-icon size="60">play_circle_filled</v-icon>
              </v-btn>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({})
};
</script>
