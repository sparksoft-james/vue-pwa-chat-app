// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import '@/assets/css/main.scss'
import '@/assets/css/variable.scss'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import store from './store'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: 'AIzaSyBRpnySVFgrpvMALLBN0dJdGynmPXBse9I',
  authDomain: 'vue-chat-app-edb4a.firebaseapp.com',
  projectId: 'vue-chat-app-edb4a',
  storageBucket: 'vue-chat-app-edb4a.appspot.com',
  messagingSenderId: '1021005239909',
  appId: '1:1021005239909:web:b01e740f408bb98338188c',
  measurementId: 'G-8GTD3CQK3G'
})

firebase.auth().onAuthStateChanged(user => {
  store.dispatch('fetchUser', user)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  vuetify,
  store,
  components: { App }
})

Vue.use(VueCookies)
