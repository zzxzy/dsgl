const state = {
    name: "xm",
    price: 100,
}
const getters = {
    chang_namez(state) {
        return state.name
    }
}
const mutations = {
    chang_name(state, payload) {
        state.name = payload
    }
}
const actions = {
    chname({ commit }, payload) {
        console.log('chang_name', payload);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}