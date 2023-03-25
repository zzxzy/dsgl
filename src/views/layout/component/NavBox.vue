<template>
	<div class="esc">
		<div class="ds">
				<img src="http://shop.tangxiaoyang.vip/img/shop.53b53384.png" style="width: 40px;height:40px;">
				电商管理系统
		</div>
		<div>
			欢迎您：<el-button type="danger" @click="loginOut">退出登录</el-button>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			loginOut(){	
				localStorage.removeItem("token");
				this.$router.push({
					path:"/login"
				})
			}
			
		}
		
		
	}
	
	
</script>

<style>
.esc{
	line-height: 60px;
	display: flex;
	justify-content: space-between;
}

</style>