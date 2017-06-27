<template id="tab1">
    <div>
    <div  v-for="(item,i) in arr">
        <div class='ll'>
            <router-link :to="'/detal/'+arr1[i]"><img :src='item[0]' ></router-link>
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
                  arr:[],
                arr1:[]
            }
        },
        mounted(){
           var  _this=this;
           var arr1=[1,2]
             axios.get("/src/components/flower.json").then(function (res) {
                 for(var item in res.data.goods){
                     if(item.length==3){
                         _this.arr1.push(item)
                         _this.arr.push(res.data.goods[item])
                         console.log(_this.arr)
                     }

                 }

             })
        }
    }
</script>

<style>


</style>
