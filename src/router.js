import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

const Login = () => {
  return import(/* webpackChunkName: "login" */ "./views/Login.vue");
};
const Register = () => {
  return import(/* webpackChunkName: "register" */ "./views/Register.vue");
};
const ViewVideo = () => {
  return import(/* webpackChunkName: "viewVideo" */ "./views/ViewVideo.vue");
};
const Create = () => {
  return import(/* webpackChunkName: "create" */ "./views/Create.vue");
};
const Employment = () => {
  return import(/* webpackChunkName: "employment" */ "./views/Employment.vue");
};
const Apply = () => {
  return import(/* webpackChunkName: "apply" */ "./views/Apply.vue");
};
const Article = () => {
  return import(/* webpackChunkName: "article" */ "./views/Article.vue");
};
const ArticleView = () => {
  return import(
    /* webpackChunkName: "articleView" */ "./views/ArticleView.vue"
  );
};
const MyPage = () => {
  return import(/* webpackChunkName: "MyPage" */ "./views/MyPage.vue");
};
const AllVideo = () => {
  return import(/* webpackChunkName: "AllVideo" */ "./views/AllVideo.vue");
};
const RecruitUpdate = () => {
  return import(
    /* webpackChunkName: "RecruitUpdate" */ "./views/RecruitUpdate"
  );
};

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/viewVideo/:id",
      name: "viewVideo",
      component: ViewVideo
    },
    {
      path: "/create",
      name: "create",
      component: Create
    },
    {
      path: "/employment",
      name: "employment",
      component: Employment
    },
    {
      path: "/apply",
      name: "apply",
      component: Apply
    },
    {
      path: "/article",
      name: "article",
      component: Article
    },
    {
      path: "/articleView/:id",
      name: "articleView",
      component: ArticleView
    },
    {
      path: "/myPage",
      name: "myPage",
      component: MyPage
    },
    {
      path: "/allViedo",
      name: "allVideo",
      component: AllVideo
    },
    {
      path: "/recruitUpdate/:data",
      name: "recruitUpdate",
      component: RecruitUpdate
    }
  ]
});
