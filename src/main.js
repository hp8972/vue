import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"
import VueRouter from "vue-router"
Vue.use(VueResource)
Vue.use(VueRouter)
import Mint from 'mint-ui';
Vue.use(Mint);
//-------------
import header from "./components/header.vue"
import list from "./components/list.vue"
import mine from "./components/mine.vue"
import detal from "./components/detal.vue"
import tab1 from "./components/tab1.vue"
import tab2 from "./components/tab2.vue"
import tab3 from "./components/tab3.vue"
import tab4 from "./components/tab4.vue"
import login from "./components/login.vue"
import my from "./components/my.vue";
import register from "./components/register.vue"

//---------------------------------------------
var route=[
    {path:"/",component:header},
    {path:"/list",component:list,
        "children":[
            {path:"/tab1",component:tab1},
            {path:"/tab2",component:tab2},
            {path:"/tab3",component:tab3},
            {path:"/tab4",component:tab4}
        ],
    path:"*",redirect:"/tab1"
      },
    {path:"/mine",component:mine},
    {path:"/detal/:id",component:detal},
    {path:"/my",component:my},
    {path:"/login",component:login},
    {path:"/register",component:register}
]
var router=new VueRouter({
    routes:route
})
new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})

