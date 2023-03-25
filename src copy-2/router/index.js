import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

import login from "@/views/login.vue"
import layout from "@/views/layout/layout"
import welcome from "@/views/main"
import user from "@/views/user"
const routes = [{
		path: "/",
		redirect: "/login"
	},
	{
		path: "/login",
		component: login
	},
	{
		path:"/main",
		component:layout,
		redirect: "/welcome",
		children:[
			{path:"/welcome",component:welcome},
			{path:"/users",component:user},
		]
	}
]

const router = new VueRouter({
	routes
})

const whiteList=['/login'];

router.beforeEach(function(to,from,next){
	// 判断有没有token（判断有没有登录）
	if(localStorage.getItem('token')){
		// 登录了
		next();
	}else{
		// 没有登录
		// 只要是登录页面或者注册页面 就可以直接访问
		if(whiteList.indexOf(to.path)!==-1){
			next()
		}else{
			// 如果不是登录页面或者注册页面，重新跳转到登录页面
			next('/login');
		}	
	}
})


export default router;
