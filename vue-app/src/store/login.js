import axios from 'axios'
export default {
  state: {
    email:'',
    password:''
  },
  actions: {
    login({state,commit}){
      console.log(state)
      console.log(commit)
      axios.post('http://localhost:3001/auth/login').then((response) => {
        console.log("response",response)
      })
    }
  },
  mutations: {},
  getters: {},
  namespaces: true

};
