<template>
  <div id="app">
    <mt-header title="朝花夕拾" fixed>
      <router-link to="" slot="left">
        <mt-button  icon="back"  @click="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <transition  enenter-active-class="animated   bounceIn"
                 leave-active-class="animated  rotateOutUpLeft">
    <router-view></router-view>
    </transition>
   <div class="footer">
     <div>
       <router-link to="/" class="f_r">
         <i class="iconfont icon-xianhua" ></i>
         <span>首页</span>
       </router-link>
     </div>
     <div>
       <router-link to="/list" class="f_r">
       <i class="iconfont icon-fenlei" ></i>
       <span>分类</span>
       </router-link>
     </div>
     <div>
       <router-link to="/my" class="f_r">
         <i class="iconfont icon-wode"></i>
         <span>我的</span>
       </router-link>
     </div>
   </div>
  </div>
</template>

<script>

export default {
    name: 'app',
  data () {
    return {
      msg: ''
    }
  },
    methods:{
         back: function(){
          this.$router.go(-1)
        }
    },
    mounted(){
        $(".footer div").on("tap",function () {
            $(this).find("i").css("color","#ffacce")
            $(".footer div").not($(this)).find("i").css("color","#2e2e2e")
        })
    }
}
</script>
<style>
  *{
    margin:0;
    padding:0;
  }
  a{
    text-decoration: none;
  }
#app {

}
  .footer{
    width:100%;
    height:0.8rem;
    position: fixed;
    border-top: 1px solid #e4e4e4;
    background:white;
    box-shadow: 0 0 0.05rem white;
    bottom:0;
  }
  .footer>div{
    float: left;
    height:0.8rem;
    width:33.333%;

  }
  .footer div i{
    display: inline-block;
    font-size: 0.3rem;
  }
  .footer div span{
    font-size:0.12rem;
    color: #2e2e2e;
  }
  .f_r{
    width:100%;
    height:100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
  }
</style>
