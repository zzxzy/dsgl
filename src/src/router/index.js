import VueRouter from "vue-router";
import vue from "vue";
vue.use(VueRouter); //暂时不管
// VueRouter 类或者构造函数
// 实例化vueRouter

import Main from "../components/Main"
import Register from "../components/Register"
import About from "../components/About"
import Login from "../components/Login"
import Manger from "../components/Manger"

import Order from "../components/about/Order"
import Contans from "../components/about/Contans"
import Diancan from "../components/about/Diancan"



const routes = [{
		path: "/",
		component: Main
	}, {
		path: "/reg",
		component: Register
		// beforeEnter: (to, from, next) => {
		// 	if (Object.keys(to.query).length){
		// 		to.query={};
		// 		next()
		// 	}
		// }
	},
	{
		path: "/about",
		component: About,
		redirect: "/about/contans",
		children: [{
				path: "/about/order",
				component: Order
			},
			{
				path: "/about/contans",
				component: Contans
			},
			{
				path: "/about/dc",
				component: Diancan
			}
		]
	},
	{
		path: "/login",
		component: Login
	},
	{
		path: "/m",
		component: Manger
	}
]

const router = new VueRouter({
	routes,
	mode: 'history'
});


// 如果是登录页面或者注册页面，可以访问
// 如果不是登录页面或者注册页面，跳转到登录页面
// router.beforeEach((to,from,next)=>{
// 	if(to.path=="/reg"||to.path=="/login"){
// 		next();
// 	}else{
// 		alert("你还没有登录")
// 		next('/login');
// 	}
// })

// router.afterEach((to,from)=>{
// 	console.log(to,from);
// })




export default router;
