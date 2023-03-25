import Vue from 'vue'
import App from './App.vue'
import router from "../src/router"

import { Switch, pagination, tableColumn, table, form, FormItem, Button, input, container, header, aside, main, row, col, menu, submenu, menuItem } from 'element-ui';
Vue.use(tableColumn)
Vue.use(Switch)
Vue.use(pagination)
Vue.use(table)
Vue.use(form);
Vue.use(Button)
Vue.use(FormItem)
Vue.use(input)
Vue.use(container)
Vue.use(header)
Vue.use(aside)
Vue.use(main)
Vue.use(row)
Vue.use(col)
Vue.use(menu)
Vue.use(submenu)
Vue.use(menuItem)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')