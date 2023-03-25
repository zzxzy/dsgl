const snabbdom = window.snabbdom;

const patch = snabbdom.init([
    snabbdom_class,
    snabbdom_props,
    snabbdom_style,
    snabbdom_eventlisteners
])

const h = snabbdom.h;
const container = document.getElementById('container');
const btn = document.getElementById('btn');
let vnode = h('ul', {}, [
    h('li.item', {}, '第一项'),
    h('li.item', {}, '第一项')
])

patch(container, vnode);

btn.addEventListener('click', () => {
    let newVnode = h('ul', {}, [
        h('li.item', {}, '第一项'),
        h('li.item', {}, '二项')
    ])
    patch(vnode, newVnode)
    vnode = new newVnode
})