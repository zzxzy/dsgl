<template>
	<div>
		<ProductListOne></ProductListOne>
	<ProductListTwo></ProductListTwo>
	<button @click="getloginname">获取模块login中name里面的方法</button>
	<button @click="chname">触发login中的actions里面的方法</button>
	<button @click="chang_name">触发login中的mutations里面的方法</button>
	{{getname}}
	</div>
</template>


<script>
	import ProductListOne from '@/components/ProductListOne'
	import ProductListTwo from '@/components/ProductListTwo'
export default{
	components:{
		ProductListOne,
		ProductListTwo
	},
	computed:{
getname(){

}
	},
	methods:{
		getLoginName(){
			console.log(this.$store.state.login.name);
		},
		chname() {
            this.$store.dispatch('login/chname')
        },
		chang_name(){
			this.$store.dispatch('login/chang_name','iu')
		}
	}
}
</script>

<style>


</style>
