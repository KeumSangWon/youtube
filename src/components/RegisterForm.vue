<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex>
        <v-form v-on:submit.prevent="register">
          <!-- id -->
          <v-text-field
            outlined
            label="Enter Your ID"
            name="login"
            prepend-icon="person"
            type="text"
            v-model="id"
          ></v-text-field>

          <!-- pw -->
          <v-text-field
            outlined
            id="password"
            label="Enster Your Password"
            name="password"
            prepend-icon="lock"
            type="password"
            v-model="pw"
          ></v-text-field>

          <!-- pw check -->
          <v-text-field
            outlined
            id="password"
            label="Enter Your Password Check"
            name="password"
            prepend-icon="lock"
            type="password"
          ></v-text-field>
          <!-- name -->
          <v-layout>
            <v-flex me-2>
              <v-text-field
                outlined
                id="firstName"
                label="Enter Your FirstName"
                name="firstName"
                prepend-icon="assignment_ind"
                type="text"
                v-model="name1"
              ></v-text-field>
            </v-flex>
            <v-flex ms-2>
              <v-text-field
                outlined
                id="secondName"
                label="Enter Your LastName"
                name="secondName"
                type="text"
                v-model="name2"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <!-- youtubeURL -->
          <v-text-field
            outlined
            id="youtubeURL"
            label="Enter Your YoutubeURL"
            name="youtubeURL"
            prepend-icon="play_circle_filled"
            v-model="youtube_url"
            type="text"
          ></v-text-field>

          <!-- phoneNumber -->
          <v-layout>
            <v-flex me-2>
              <v-select
                :items="items"
                label="010"
                id="num1"
                prepend-icon="call"
                name="num1"
                outlined
                v-model="phoneNum1"
                hide-selected
              ></v-select>
            </v-flex>
            <v-flex me-2 ms-2>
              <v-text-field outlined id="num2" name="num2" type="text" v-model="phoneNum2"></v-text-field>
            </v-flex>
            <v-flex ms-2>
              <v-text-field outlined id="num3" name="num3" type="text" v-model="phoneNum3"></v-text-field>
            </v-flex>
          </v-layout>
          <!-- location -->
          <v-layout>
            <v-flex me-2 sm12 xs12 md10>
              <v-text-field
                outlined
                label="Enter Your Location Number"
                prepend-icon="room"
                name="location_num"
                type="text"
                v-model="location1"
                id="sample6_address"
              ></v-text-field>
            </v-flex>
            <v-flex ms-2>
              <v-btn @click="sample6_execDaumPostcode()" color="red darken-1" dark>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
          <v-text-field
            outlined
            id="sample6_detailAddress"
            label="Enter Your Location Number"
            prepend-icon="room"
            name="location_num"
            type="text"
            v-model="location2"
          ></v-text-field>
          <v-layout justify-center>
            <v-btn color="red darken-1" dark type="submit">Register</v-btn>
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
    items: ["010", "016", "011"],
    id: "",
    pw: "",
    name1: "",
    name2: "",
    phoneNum1: "",
    phoneNum2: "",
    phoneNum3: "",
    location1: "",
    location2: "",
    youtube_url: ""
  }),
  methods: {
    sample6_execDaumPostcode() {
      new daum.Postcode({
        oncomplete: function(data) {
          // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

          // 각 주소의 노출 규칙에 따라 주소를 조합한다.
          // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
          var addr = ""; // 주소 변수
          var extraAddr = ""; // 참고항목 변수

          //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
          if (data.userSelectedType === "R") {
            // 사용자가 도로명 주소를 선택했을 경우
            addr = data.roadAddress;
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            addr = data.jibunAddress;
          }

          // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
          if (data.userSelectedType === "R") {
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
              extraAddr += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== "" && data.apartment === "Y") {
              extraAddr +=
                extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (extraAddr !== "") {
              extraAddr = " (" + extraAddr + ")";
            }
            // 조합된 참고항목을 해당 필드에 넣는다.
            document.getElementById("sample6_extraAddress").value = extraAddr;
          } else {
            document.getElementById("sample6_extraAddress").value = "";
          }

          // 우편번호와 주소 정보를 해당 필드에 넣는다.
          // document.getElementById("sample6_postcode").value = data.zonecode;
          document.getElementById("sample6_address").value = addr;
          // 커서를 상세주소 필드로 이동한다.
          document.getElementById("sample6_detailAddress").focus();
        }
      }).open();
    },
    register() {
      if (!this.phoneNum1) {
        this.phoneNum1 = "010";
      }

      axios
        .post("http://localhost:8000/api/register", {
          email: this.id,
          password: this.pw,
          name: this.name2 + " " + this.name1,
          phone_num: this.phoneNum1 + this.phoneNum2 + this.phoneNum3,
          location: this.location1 + this.location2,
          picture:
            "https://yt3.ggpht.com/-Y3vJZoNm9IQ/AAAAAAAAAAI/AAAAAAAAAAA/CPnjCbRIvbg/s48-c-k-no-mo-rj-c0xffffff/photo.jpg",
          youtube_url: this.youtube_url,
          type: this.$store.state.user_type
        })
        .then(res => {
          console.log(res);
          router.push({ name: "login" });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script><!-- end export default -->