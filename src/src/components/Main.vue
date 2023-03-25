<template>
	<div>
		mainkjkjkjkjkjkjk12120f12e121
		<!-- <router-link to="/login">跳转到登录页面</router-link> -->
		 <router-link v-bind:to="{path:'/login',query:{id:'sk'}}">跳转到登录页面</router-link>
		 
		 <button v-on:click="goToRegister">跳转到注册页面</button>
	</div>
</template>

<script>
	export default{
		methods:{
			goToRegister(){
				// vue-router实例对象
				// console.log(this.$router) 
				this.$router.push({
					path:"/reg",
					query:{
						name:"jill"
					}
				})
				
				
			}
		}
	}
</script>

<style>
</style>