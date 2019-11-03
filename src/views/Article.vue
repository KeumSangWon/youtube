<template>
  <v-container>
    <v-layout justify-center row warp xs12 sm12 md6>
      <v-flex xs12 sm12 md6>
        <v-card class="mx-auto">
          <v-card-actions>
            <v-layout justify-start row warp>
              <v-flex v-for="item in check_box" :key="item.text" xs3 sm4 md2 ml-2>
                <v-checkbox
                  :label="item.text"
                  v-model="selected"
                  color="red darken-3"
                  :value="item.text"
                  hide-details
                ></v-checkbox>
              </v-flex>
              <v-flex v-if="isOk" v-for="item in check_box2" :key="item.text" xs3 sm4 md2 ml-2>
                <v-checkbox
                  :label="item.text"
                  v-model="selected"
                  color="red darken-3"
                  :value="item.text"
                  hide-details
                ></v-checkbox>
              </v-flex>
            </v-layout>
          </v-card-actions>
          <v-layout justify-end>
            <a @click="add()">
              <p style="margin-right:20px; color:black; text-decoration:none">{{ more_text }}</p>
            </a>
          </v-layout>

          <v-card-actions>
            <v-select :items="items_money" v-model="selecteds_money" label="Salary" outlined></v-select>
            <v-select :items="items_career" v-model="selecteds_career" label="Career" outlined></v-select>
            <v-select
              :items="items_work"
              v-model="selecteds_work"
              label="Recruitment Type"
              outlined
            ></v-select>
          </v-card-actions>
          <v-card-actions>
            <v-layout justify-center></v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row warp justify-center>
      <v-flex>
        <ArticleTable></ArticleTable>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import ArticleTable from "../components/ArticleTable";
export default {
  components: {
    ArticleTable
  },

  data: () => ({
    y: "/",
    selected: [],
    selecteds_career: [],
    selecteds_money: [],
    selecteds_work: [],
    items_money: [
      "100 이상",
      "200 이상",
      "300 이상",
      "400 이상",
      "500 이상",
      "추후 협의"
    ],
    items_career: ["신입", "1~2년", "3~4년", "5년이상"],
    items_work: ["정규직", "인턴직", "계약직", "추후 협의"],
    check_box: [
      { text: "i" },
      { text: "j" },

      { text: "a" },
      { text: "b" },
      { text: "c" },
      { text: "d" },
      { text: "e" },
      { text: "f" },
      { text: "g" },
      { text: "h" }
    ],
    check_box2: [
      { text: "지역 이동" },
      { text: "영어" },

      { text: "기타 언어" },
      { text: "PhotoShop" },
      { text: "AfterEffects" },
      { text: "Vegas" },
      { text: "Finalcut" },
      { text: "기타툴" },
      { text: "고등학교 졸업" },
      { text: "대학교 재학" },
      { text: "대학교 졸업" },
      { text: "장비 있음" },
      { text: "장비 없음" },
      { text: "야간 가능" },
      { text: "기타 등등" }
    ],
    checking_more: false,
    more_text: "more+"
  }),
  computed: {
    isOk() {
      return this.checking_more;
    }
  },
  mounted() {
    var a = this.selected.length;
    if (a != this.selected.length) {
      console.log("gg");
    }
  },
  methods: {
    add() {
      if (this.checking_more == false) {
        this.checking_more = true;
        this.more_text = "cancle";
        console.log(this.checking_more);
      } else {
        this.checking_more = false;
        this.more_text = "more+";
        console.log(this.checking_more);
      }
    }
  }
};
</script>