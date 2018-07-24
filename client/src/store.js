import Vue from 'vue'
import Vuex from 'vuex' 
import Api from './service/Api'

Vue.use(Vuex)

const store = new Vuex.Store({
   state: {
        users: []
   },

   getters : {
    getUsers(state) {
        return state.users;
    }
   },

   mutations: {
    addUser(state, user) {
        state.users.push(todo);
        console.log('Added')
    }

   },

   actions : {
       addUser({ commit }, user) {
           const result = Api.getUsers(user)
           commit('addUser', user)

       }
      
   }
})

export default store;
