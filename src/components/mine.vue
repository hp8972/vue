<template id="mine">
	<div>
		<!--<mt-header fixed :title="str" @click.native="tap">
			对于不是按钮的块级元素点击事件要加native，如果在button上则不加
		  <router-link to="/" slot="left">
		    <mt-button icon="back"  v-if="isShow">返回</mt-button>
		  </router-link>
		  
		</mt-header>-->
		
		<mt-cell title="首页" to='/my'></mt-cell>
		
		
		   <router-view>
		 	
		 </router-view>
		
	</div>

</template>

<script>
	export default {
		name: "mine",
		data() {
			return {
				str: "什么鬼",
				isShow:false
			}
	},
	methods:{
		data:function(res){
			this.str=res
			this.isShow=true
		},
		tap:function(){
			this.str="沃德玛雅"
			this.isShow=false
		}
		
	}

  }
</script>

<style>


</style>