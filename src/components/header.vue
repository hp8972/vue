<template>
    <div id="header">

        <mt-swipe :auto="4000" style="width: 100vw;height:3.2rem;" class="swipe">
            <mt-swipe-item><img class="img" src="../img/1.png" alt=""></mt-swipe-item>
            <mt-swipe-item><img class="img" src="../img/2.png" alt=""></mt-swipe-item>
        </mt-swipe>
        <div class="h_section">
            <div>
                <router-link to="/list"><img class="h_s1" src="../img/3.png" alt=""></router-link>
            </div>
            <div>
                <div>
                    <router-link to="/list"><img class="h_s2" src="../img/4.png" alt=""></router-link>
                </div>
                <div>
                    <router-link to="/list"><img class="h_s2" src="../img/5.png" alt=""></router-link>
                </div>
            </div>
        </div>
        <div class="h_list">
            <router-link to="/list"><img class="h_i" src="../img/6.png" alt=""></router-link>
            <router-link to="/list"><img class="h_i" src="../img/7.png" alt=""></router-link>
            <router-link to="/list"><img class="h_i" src="../img/8.png" alt=""></router-link>
            <router-link to="/list"><img class="h_i" src="../img/9.png" alt=""></router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'header',
        data () {
            return {}
        }
    }
</script>

<style>
    .h_section {
        width: 100vw;
        display: flex;
        flex-direction: row;
        height: 3rem;
    }

    .img {
        width: 6.4rem;
        height: 3.2rem;
    }

    .h_section .h_s1 {
        flex: 1;
        float: left;
        width: 3.2rem;
        height: 2.8rem;
        border-right: 1px solid #e4e4e4;
    }

    .h_s2 {
        flex: 1;
        float: left;
        width: 3.2rem;
        height: 1.4rem;
        border-bottom: 1px solid #e4e4e4;
    }

    .h_list {
        width: 100vw;
        height: auto;
    }

    .h_i {
        width: 6.4rem;
        height: 2.5rem;
    }
</style>
