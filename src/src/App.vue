<template>
	<div>
		<NavBox></NavBox>
		<div class="container">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import NavBox from "./components/NavBox.vue"
	export default{
		components:{
			NavBox
		}
	}
</script>

<style>

</style>


