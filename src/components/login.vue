<template id="login"> 
	<div style="margin-top: 1rem">
		<input type="text" placeholder="请输入手机号"  id="tel"/>
		<input type="text" placeholder="请输入密码" id="pass" />
		
		<router-link to="/register" >
			<button id="zhuce">注册</button>
		</router-link>
		<button id="denglu" @click="tap1">登录</button>
	</div>


</template>

<script>
	export default{
		name:"login",
		methods:{
			tap1:function(){
			var _this=this;
			if($("#tel").val()!="" &&  $("#pass").val()!=""){
				$.ajax({
				type:"get",
				url:"http://datainfo.duapp.com/shopdata/userinfo.php",
				data:{
					status:"login",
					userID:$("#tel").val(),
					password:$("#pass").val()
				},
				datatype:"josn",
				success:function(data){
					console.log(data)
					if(data==0){
						alert("用户名不存在")
						$("#tel").val("")
						$("#pass").val("")
					}else if(data==2){
						alert("用户名和密码不匹配")
						$("#tel").val("")
						$("#pass").val("")
					}else{
						alert("登陆成功")
						_this.$router.push("/")
					}
				}												
				
			})
				
			}else{
				alert("请输入用户名和密码")
			}
			
				
				
				
		}
		}
	}
	
	
</script>

<style>
	#tel ,#pass{
	margin:0 auto;
		margin-top: 0.65rem;width: 5.8rem;height: 0.86rem;
		border:none;color:#b4b4b4;
		text-indent: 0.3rem;font: 0.26rem/0.86rem "微软雅黑";
		border-radius: 0.1rem;display: block;border:1px solid #ccc;
		outline: none;
}
#zhuce{
	margin-top: 0.4rem;width: 5.8rem;height: 0.86rem;
	font-size: 0.4rem;color: #FFFFFF;
	background: gray;border-radius: 0.1rem;border:none;margin-left:4vw;
}
#denglu{
	margin-top: 0.4rem;width: 5.8rem;height: 0.86rem;
	font-size: 0.4rem;color: #FFFFFF;
	background:orange;border-radius: 0.1rem;border:none;margin-left:4vw;
}
</style>