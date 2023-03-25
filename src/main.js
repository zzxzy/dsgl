import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import TreeTable from 'vue-table-with-tree-grid'

import { Tree, Message, Tag, card, breadcrumbItem, breadcrumb, popconfirm, dialog, Switch, pagination, tableColumn, table, form, FormItem, Button, input, container, header, aside, main, row, col, menu, submenu, menuItem, MessageBox } from 'element-ui';
Vue.use(tableColumn)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(card)
Vue.use(breadcrumbItem)
Vue.use(popconfirm)
Vue.use(breadcrumb)
Vue.use(dialog)
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;
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

Vue.component('tree-table', TreeTable);
Vue.filter('dateFormat', function(originVal) {
    const dt = new Date(originVal)

    const y = dt.getFullYear()
    const m = (dt.getMonth() + 1 + '').padStart(2, '0')
    const d = (dt.getDate() + '').padStart(2, '0')

    const hh = (dt.getHours() + '').padStart(2, '0')
    const mm = (dt.getMinutes() + '').padStart(2, '0')
    const ss = (dt.getSeconds() + '').padStart(2, '0')

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
Vue.config.productionTip = false

new Vue({
    beforeCreate() {
        Vue.prototype.$bus = this
    },
    render: h => h(App),
    router
}).$mount('#app')