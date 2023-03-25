<template>
	<div>
		管理页面
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: "sk"
			}
		},
		beforeRouteEnter(to, from, next) {
			// 在渲染该组件的对应路由被验证前调用
			// 不能获取组件实例 `this` ！
			// 因为当守卫执行时，组件实例还没被创建！
			// console.log(this.name);
			next(vm => {
				// 通过 `vm` 访问组件实例
				console.log(vm.name);
			});
		}

	}
</script>

<style>
</style>
