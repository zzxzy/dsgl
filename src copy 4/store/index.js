import Vuex from "vuex";
import Vue from "vue";
import login from "./modules/login.js"
import user from "./modules/user.js"

import createPersistedstate from 'vuex-persistedstate'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        ProductList: [{
            name: "xm",
            price: 100,
        }, {
            name: "xh",
            price: 200,
        }]
    },
    getters: {
        sale: (state) => {
            var sale = state.ProductList.map(product => {
                return {
                    name: "**" + product.name + "**",
                    price: product.price / 2

                }
            })
            return sale;
        }
    },
    mutations: {
        sale: (state, paly) => {
            setTimeout(() => {
                state.ProductList.forEach(item => {
                    item.price -= paly
                });
            }, 1000);
        }
    },
    actions: {
        action: ({ commit }, paly) => {
            return commit('sale', paly)
        }

    },
    modules: {
        login,
        user
    },
    plugins: [
        createPersistedstate({
            key: 'loginData',
            paths: ['login', "user"]
        })
    ]

});
export default store;