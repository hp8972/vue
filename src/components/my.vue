<template id="my">
	<div>
		
		<router-link to="/login">
			<div id="login" @click="click">
			
				<span id="span1">
					<img src="../img/default_photo.png"/>
				</span >
				<span id="span2">请先登录</span>
				<span id="span3"> 
					<i class="iconfont icon-arrowright"></i>
				</span>
				
			</div>
			
		</router-link>
		
		
		<div id="conent">
			
			<div class="shouhuo">
				<span class="font">
					<i class="iconfont icon-shouhuodizhi"></i>
				</span>
				收货地址
			</div>
			
			<div class="shouhuo">
				<span class="font">
					<i class="iconfont icon-icon17"></i>
				</span>
				我的订单
			</div>
			<div class="shouhuo">
				<span class="font">
					<i class="iconfont icon-gouwuchekong"></i>
				</span>
				购物车
			</div>
			<div class="shouhuo">
				<span class="font">
					<i class="iconfont icon-xitongtongzhi"></i>
				</span>
				系统通知
			</div>
			<div class="shouhuo">
				<span class="font">
					<i class="iconfont icon-huiyuanqia"></i>
				</span>
				会员卡
			</div>
			<div class="shouhuo">
				<span class="font">
					<i class="iconfont icon-yhq"></i>
				</span>
				优惠券
			</div>
			
		</div>
		
		
		
	</div>
	
	
	
</template>

<script>
	export default{
		name:'my',
		methods:{
			click(){
				
			}
		}
	}
</script>

<style>

*{
	margin: 0;padding: 0;
}
a{
	text-decoration:none;
}
#login{
	height: 2rem;width: 100%;margin-top: 0.65rem;position: relative;
	background: url(../img/top_bg.jpg) ;background-size: 100% ;	
	line-height: 1.5rem;
}
	
#login #span1 img,#login #span1{
	height: 1rem;width: 1rem;display: inline-block;position: absolute;left: 0.5rem;
	top: 0.3rem;
	
}
#login #span2{
	height: 0.34rem;
}
#login #span2{
font-size: 0.34rem;color: #ffffff;margin-left: 3rem; margin-top: 0.3rem;
}	
#login #span3{
font-size: 0.4rem;color: #ffffff;
}
.shouhuo{
	height: 0.6rem;padding: 0.07rem;width: 100%;border-bottom: 1px solid #ddd;
	font-size: 0.2rem;line-height: 0.6rem;color: #bbb;
}

</style>