import Vue from 'vue'
import App from './App.vue'
let a = 1

console.log(a)
new Vue({
  el: '#app',
  render: a=>a(App)
})