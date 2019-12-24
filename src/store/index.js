import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      studentNumber: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).studentNumber
    },
    userInfo:{
      studentNumber:'',
      name:'',
      sex:'',
    },
   /* result: {
      student_number:' ',
      student_name:' ',
      competition_name:' ',
      competition_time:' ',
      entry_form:' ',
      ambulatory:' ',
      other_resume:' ',
    },*/
  },
  mutations: {
    login (state, user) {
      state.studentNumber = user;
      window.localStorage.setItem('user', JSON.stringify(user))
    },
  }
})
