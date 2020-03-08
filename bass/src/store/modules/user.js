const state = {
    login_Status: false
  }
  
  // getters
  const getters = {}
  
  // actions
  const actions = {
    Check_login ({ commit }) {
      if(localStorage.getItem('access_token')){
          commit('setLoginState', true)
      }
    },
    routerGo({ value }){
      if(localStorage.getItem('access_token')){
        this.$router.push(value)
      }
    }
  }
  
  // mutations
  const mutations = {
    setLoginState (state, value) {
      state.login_Status = value
    },
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }