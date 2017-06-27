<template id="detal">
    <div>
        <div>
            <div id="bg"></div>
            <mt-swipe :auto="4000" style="width: 100%;height:3.2rem;margin-top: 0.7rem" class="">
                <mt-swipe-item><img class="img1" style="width: 100%;height:3.2rem;" :src="arr1[0]" alt=""></mt-swipe-item>
                <mt-swipe-item><img class="img1" style="width: 100%;height:3.2rem;" :src="arr1[0]" alt=""></mt-swipe-item>
            </mt-swipe>
            <div style="width:100vw;height:auto">
                <div id="d_section">
                    <p>{{arr1[1]}}</p>
                    <span class="d_1" style="margin-bottom: 0.2rem">{{arr1[2]}}</span>
                    <div class="d">库存：55 </div>
                    <div class="d2">运费：免运费</div>
                    <div class="shop" style="float: left;height: 1rem;line-height: 1rem">
                        <span>熏衣小店</span>
                        <span style="float: right">进入应用></span>
                    </div>
                    <div>
                        <span style="font-size: 0.16rem">宝贝评价（0）</span>
                    </div>
                    <div class="criticism" style="line-height: 0.77rem">
                        <span>有图（0）</span>
                        <span>好评（0）</span>
                        <span>中评（0）</span>
                        <span>差评（0）</span>
                    </div>
                </div>
                <div id="footer">
                    <span class="buy b" id="b_u">立即购买</span>
                    <span class="car b" id="b_c">加入购物车</span>
                </div>
            </div>
            <div id="buy">
                <div id="d_i" style="width:100vw;height:1rem;">
                    <img :src="arr1[0]" alt="">
                    <div>
                        <p style="float: left;">{{arr1[1]}}</p><span id="erro" style="float:right;font-size: 0.4rem;margin-left: 1.3rem;margin-top:-0.3rem ">X</span>
                        <p style="color:#f1590d ;margin-top: 0.3rem;">{{arr1[2]}}</p>
                    </div>
                </div>
                <div id="d_z" style="width: 100vw;height: 1rem;border-bottom: solid 1px #eeeeee;border-top:solid 1px #eeeeee ">
                     <span style="font-size: 0.16rem;font-weight: 900;margin-left: 0.2rem">数量</span>
                     <span style="margin-left: 3rem; margin-right: 0.4rem">库存：55</span><span class="cirl">+</span><input type="text" value="0"><span class="cirl">-</span>
                </div>
                <div id="d_f" style="width: 100vw;height:100%; ">
                        <span>下一步</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'detal',
        data () {
            return {
                str: "你好",
                arr1: ""
            }
        },
        mounted(){
            var _this = this;
            console.log(this.$route.params.id)
            var cc = this.$route.params.id
            axios.get("/src/components/flower.json").then(function (res) {
                _this.arr1 = res.data.goods[cc]
            })
            $("#buy").css("bottom","-3rem")
            $(".b").on("tap",function () {
                $("#buy").css({"transition":"1s","bottom":"0"})
               $("#bg").addClass("bg")
            })
            $("#erro").on("tap",function () {
                $("#buy").css("bottom","-3rem")
                $("#bg").removeClass("bg")
            })
        }
    }
</script>

<style>
    #footer {
        width: 100vw;
        height: 1rem;
        background: white;
        position: fixed;
        bottom: 0;
        z-index: 999;
        line-height: 0.5rem;
        box-shadow: 0 0 0.05rem #000;
    }

    .img1 {
        width: 100%;
        height:3.3rem;
    }

    .b {
        display: inline-block;
        width: 2rem;
        height: 0.5rem;
        border-radius: 0.05rem;
        margin-left: 0.7rem;
        line-height: 0.5rem;
        text-align: center;
        font-size: 0.12rem;
    }

    .buy {
        background: #f1590d;
        color: white;
    }

    .car {
        background: #eeeeee;
        color: #000000;
    }

    #d_section {
        height: 1.41rem;
        width: 95%;
        margin: 0 auto;
    }

    #d_section p {
        margin-top: 0.21rem;
        font-size: 0.26rem;
        color: #f05b0b;
    }

    #d_section .d_1 {
        width: 100vw;
        font-size: 0.24rem;
        font-weight: bold;
        color: #f05b0b;
        display: inline-block;
        float: left;
        padding: 0.1rem 0;
        border-bottom: 1px solid #eeeeee;

    }

    #d_section .d {
        width: 100%;
        line-height: 0.1rem;
        padding: 0.1rem 0;
        margin-top: 0.1rem;
        font-size: 0.26rem;
        color: #3c3c3c;
        font-weight: 900;
    }

    #d_section .d2 {
        width: 100%;
        line-height: 0.1rem;
        padding: 0.1rem 0;
        margin-top: 0.1rem;
        font-size: 0.26rem;
        color: #3c3c3c;
        font-weight: 900;
    }

    #d_section .shop {
        width: 100vw;
        border-bottom: 0.25rem solid #e4e4e4;
        border-top: 0.25rem solid #e4e4e4;
        font-size: 0.25rem;
        line-height: 0.5rem;
        height: 0.5rem;
    }

    #d_section .criticism span {
        font-size: 0.2rem;
        padding: 0.03rem 0.03rem;
        margin-left: 0.09rem;
        background: #f4ebe6;
    }

    .bg {
        width:100%;background:rgba(0,0, 0, 0.6);
        height:100vh;position: fixed;
        z-index: 99999;
    }
    #buy {
        width: 100vw;
        height: 3rem;
        background: white;
        position: fixed;
        bottom: 0;z-index:1000000;
        box-shadow: 0 0 0.06rem black;
    }
    #d_i{
         display: flex;
        align-items: center;

        flex-direction: row;
    }
    #d_i img{
        width: 0.7rem;
        height:0.7rem;
        margin-left: 0.3rem;
        border: 1px solid #eeeeee;
    }

    #d_i p{
        font-size: 0.12rem;
        text-indent: 0.3rem;
    }
    #d_z{
        font-size: 0.12rem;
        display: flex;
        align-items: center;
        flex-direction: row;
    }
    #d_z .cirl{
        width:0.3rem;
        height:0.3rem;
        border-radius: 50%;
        border:solid #f1590d 1px ;
        line-height: 0.3rem;
        text-align: center;

    }
    #d_z input{
        width:0.5rem;
        border:none;
        outline: none;
        text-align: center;
    }
    #d_f{
        font-size: 0.2rem;
        display: flex;
       justify-content: center;
        /*flex-direction: row;*/

    }
    #d_f>span{
        width:90%;
        height:0.7rem;
        background: #f1590d;
           margin-top: 0.1rem;
        border-radius: 0.06rem;
        text-align: center;
        line-height: 0.7rem;
        color: #ffffff;

    }
</style>
