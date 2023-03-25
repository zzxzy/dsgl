<template>
	<div class="container">
		<nav class="navbar navbar-default">
			<div class="container-fluid">
				<div class="navbar-header">
					<a class="navbar-brand" href="#">订餐系统</a>
				</div>
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav">
						<li class="active">
							<router-link to="/">首页</router-link>
						</li>
						<li>
							<router-link to="/m">管理</router-link>
						</li>
						<li>
							<router-link to="/about">关于我们</router-link>
						</li>
						<li>
							<router-link to="/login">登录</router-link>
						</li>
						<li>
							<router-link to="/reg">注册</router-link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
</script>

<style>
</style>
