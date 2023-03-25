<template>
	<div class="container">
		<ul class="list-group col-md-4">
		  <li class="list-group-item">
			  <router-link  to="/about/order">历史订单</router-link>
		  </li>
		  <li class="list-group-item">
			  <router-link to="/about/contans">联系我们</router-link>
		  </li>
		  <li class="list-group-item">
			  <router-link to="/about/dc">点餐</router-link>
			  </li>
		</ul>
		<div class="col-md-8">
		    <router-view></router-view>
		</div>
	</div>
</template>

<script>
</script>

<style>
</style>