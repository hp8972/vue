<template id="tab1">
    <div>
    <div  v-for="(item,i) in arr">
        <div class='ll'>
            <router-link :to="'/detal/'+i"><img :src='item[0]' ></router-link>
            <p>{{item[1]}}</p>
            <div style='margin-top: 0.12rem'><span class='l_p'>{{item[2]}}</span>
                <span class='sale'>销量：0</span></div>
        </div>
    </div>
     </div>
</template>
<script>
    export default {
        name: 'tab1',
        data () {
            return {
                  arr:""
            }
        },
        mounted(){
           var  _this=this;
             axios.get("/src/components/flower.json").then(function (res) {
                 _this.arr=res.data.goods
               console.log(_this.arr)
             })
        }
    }
</script>

<style>


</style>
