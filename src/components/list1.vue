<!--<template>-->
    <!--<div id="list">-->
        <!--<mt-search-->
                <!--v-model="value"-->
                <!--cancel-text="取消"-->
                <!--placeholder="搜索" style="margin-top:0.65rem" class="search">-->
        <!--</mt-search>-->
        <!--<div class="l_l">-->
            <!--<router-link class="l_r" to="" style="color: #f6dbc0;border-bottom: solid 1px #000">全部</router-link>-->
            <!--<router-link class="l_r" to="">七夕鲜花</router-link>-->
            <!--<router-link class="l_r" to="">问候长辈</router-link>-->
            <!--<router-link class="l_r" to="">永生花</router-link>-->
        <!--</div>-->
        <!--<div class="l_list">-->
            <!--&lt;!&ndash;<div class="ll">&ndash;&gt;-->
            <!--&lt;!&ndash;<img src="" alt="">&ndash;&gt;-->
            <!--&lt;!&ndash;<p>佳期如梦&#45;&#45;&#45;&#45;永生花盒：进口永生玫瑰3枝,永生康乃馨3枝</p>&ndash;&gt;-->
            <!--&lt;!&ndash;<div style="margin-top: 0.12rem"><span class="l_p">￥100.00</span><span class="sale">销量：0</span></div>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--</div>-->
    <!--</div>-->
<!--</template>-->

<!--<script>-->
    <!--export default {-->
        <!--name: 'list',-->
        <!--data () {-->
            <!--return {-->
                <!--str: "nihao ",-->
                <!--value: ""-->
            <!--}-->
        <!--},-->
        <!--mounted(){-->
            <!--var com=""-->
            <!--axios.get("/src/components/flower.json").then(function (res) {-->
                <!--for(var i in  res.data.goods) {-->
                    <!--com+= "<div class='ll'>" +-->
                        <!--"<router-link class='link' to='/detal'><img src='"+res.data.goods[i][0] +"' ></router-link>" +-->
                        <!--"<p>"+res.data.goods[i][1]+"</p>" +-->
                        <!--"<div style='margin-top: 0.12rem'><span class='l_p'>"+res.data.goods[i][2]+"</span><span class='sale'>销量：0</span></div>" +-->
                        <!--"</div>"-->
                    <!--$(".l_list").html(com)-->
                <!--}-->
            <!--})-->
            <!--$(".l_l .l_r").on("tap", function () {-->
                <!--r-->
                <!--var index = $(this).index()-->
                <!--var con = "";-->
                <!--$(this).css({"border-bottom": "1px solid black",color:"#f6dbc0"})-->
                <!--$(this).siblings().css({"border-bottom": "1px solid white",color:"#000"})-->
                <!--axios.get('/src/components/flower.json')-->
                    <!--.then(function (res) {-->
                        <!--if (index==0){-->
                        <!--for(var i in  res.data.goods) {-->
                            <!--con+= "<div class='ll'>" +-->
                                <!--"<router-link to='/detal/:id'><img src='"+res.data.goods[i][0] +"' ></router-link>" +-->
                                <!--"<p>"+res.data.goods[i][1]+"</p>" +-->
                                <!--"<div style='margin-top: 0.12rem'><span class='l_p'>"+res.data.goods[i][2]+"</span><span class='sale'>销量：0</span></div>" +-->
                                <!--"</div>"-->
                            <!--$(".l_list").html(con)-->
                        <!--}-->
                        <!--}else if(index==1){-->
                            <!--for(var i in  res.data.goods) {-->
                                <!--if(i.length==3){-->
                                <!--con+= "<div class='ll'>" +-->
                                    <!--"<router-link to='/detal/:id'>"+"<img src='"+res.data.goods[i][0] +"' >"+"</router-link>" +-->
                                    <!--"<p>"+res.data.goods[i][1]+"</p>" +-->
                                    <!--"<div style='margin-top: 0.12rem'><span class='l_p'>"+res.data.goods[i][2]+"</span><span class='sale'>销量：0</span></div>" +-->
                                    <!--"</div>"-->
                                <!--$(".l_list").html(con)-->
                                <!--}-->

                            <!--}-->
                        <!--}else if(index==2){-->
                            <!--for(var i in  res.data.goods) {-->
                                <!--if(i.indexOf("l")!=-1){-->
                                    <!--con+= "<div class='ll'>" +-->
                                        <!--"<img src='"+res.data.goods[i][0] +"' >" +-->
                                        <!--"<p>"+res.data.goods[i][1]+"</p>" +-->
                                        <!--"<div style='margin-top: 0.12rem'><span class='l_p'>"+res.data.goods[i][2]+"</span><span class='sale'>销量：0</span></div>" +-->
                                        <!--"</div>"-->
                                    <!--$(".l_list").html(con)-->
                                <!--}-->

                            <!--}-->
                        <!--}else if(index==3){-->
                            <!--for(var i in  res.data.goods) {-->
                                <!--if(i.indexOf("s")!=-1){-->
                                    <!--con+= "<div class='ll'>" +-->
                                        <!--"<img src='"+res.data.goods[i][0] +"' >" +-->
                                        <!--"<p>"+res.data.goods[i][1]+"</p>" +-->
                                        <!--"<div style='margin-top: 0.12rem'><span class='l_p'>"+res.data.goods[i][2]+"</span><span class='sale'>销量：0</span></div>" +-->
                                        <!--"</div>"-->
                                    <!--$(".l_list").html(con)-->
                                <!--}-->
                            <!--}-->
                        <!--}-->
                    <!--})-->
                    <!--.catch(function (error) {-->
                        <!--console.log(error)-->
                    <!--})-->
            <!--})-->
        <!--}-->
    <!--}-->
<!--</script>-->

<!--<style>-->
    <!--a{-->
        <!--color: #000;-->
    <!--}-->
    <!--.search {-->
        <!--font-size: 0.12rem;-->
        <!--height: 1rem;-->
    <!--}-->

    <!--.l_l {-->
        <!--width: 100vw;-->
        <!--height: 0.5rem;-->
    <!--}-->

    <!--.l_l .l_r {-->
        <!--float: left;-->
        <!--width: 25%;-->
        <!--height: 0.5rem;-->
        <!--text-align: center;-->
        <!--line-height: 0.5rem;-->
        <!--font-size: 0.12rem;-->
        <!--border-bottom: solid 1px white;-->
    <!--}-->

    <!--.l_list {-->
        <!--width: 100vw;-->
        <!--padding: 0 0.3rem;-->
    <!--}-->

    <!--.l_list .ll {-->
        <!--float: left;-->
        <!--width: 2.70rem;-->
        <!--height: 3.12rem;-->
        <!--border: solid 1px #d7d7d7;-->
        <!--margin-right: 0.3rem;-->
        <!--border-radius: 0.08rem;-->
        <!--font-size: 0.12rem;-->
        <!--margin-top: 0.2rem;-->
    <!--}-->
    <!--.l_list .ll img {-->
        <!--width: 100%;-->
        <!--height: 2.12rem;-->
    <!--}-->

    <!--.l_list .ll p {-->
        <!--font-size: 0.12rem;-->
        <!--white-space: nowrap;-->
        <!--overflow: hidden;-->
        <!--text-overflow: ellipsis;-->
        <!--text-shadow: #d46fff;-->
    <!--}-->

    <!--.l_list .ll .l_p {-->
        <!--color: #f6dbc0;-->
        <!--font-size: 0.14rem;-->
    <!--}-->

    <!--.l_list .ll .sale {-->
        <!--font-size: 0.12rem;-->
        <!--margin-left: 0.42rem;-->
    <!--}-->
    <!--.link{-->
        <!--width:100%;-->
        <!--height:1rem;-->
        <!--display: inline-block;-->
        <!--background: red;-->
    <!--}-->
<!--</style>-->
