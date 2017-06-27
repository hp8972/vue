<template id="register">
	
	<div id="register1" style="margin-top: 1rem">
		<input type="text" placeholder="请输入手机号" class="tel"/>
		<input type="text" placeholder="请输入密码"  class="pass"/>
		
			<button class="confirm" @click="tap">确认注册</button>
		
	</div>
	
	
</template>

<script>
	export default{
		name:"register",
		methods:{
			tap(){
				
				
				var _this=this;
				var reg=/^1[34578]\d{9}$/g;
				console.log($(".tel").val())
				if(reg.test($(".tel").val()) && $(".pass").val()!=""){					
					console.log("成功")
					$.ajax({
						type:"get",
						url:"http://datainfo.duapp.com/shopdata/userinfo.php",
						data:{
							status:"register",
							userID:$(".tel").val(),
							password:$(".pass").val()
						},
						datatype:"json",
						success:function(data){
							console.log(data)
							if(data==0){
								alert("该账号已注册");
								$(".tel").val("");
								$(".pass").val("");
								
								
							}else if(data==1){
								alert("恭喜您，注册成功")
								_this.$router.push('/login')//跳转到登录页面
							}else if (data==2){
								alert("数据库报错");
								$(".tel").val("");
								$(".pass").val("");
								
							}
						}
						
					})
					
					
					
				}else{
					alert("请输入正确手机号")
					$(".tel").val("");
					$(".pass").val("");
								
				}
			}
		}
	}
</script>

<style>
	#register1{
		width: 80%;margin: 0 auto;
	}
	.tel,.pass{
		height: 0.86rem;width: 80vw;border: none;border: 1px solid #DDDDDD;
		border-radius: 0.1rem ;outline: none;
	}
	.confirm{
		height: 0.9rem;width: 80vw;background: #808080;border: none;
		border-radius: 0.1rem ;color: #FFFFFF;font-size: 0.4rem;
	}
	input{
		text-indent: 0.4rem;
	}
	
	
</style>