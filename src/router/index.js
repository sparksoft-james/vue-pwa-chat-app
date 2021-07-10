import Vue from 'vue'
import Router from 'vue-router'
import chatListPage from '@/components/pages/chatListPage'
import chatPage from '@/components/pages/chatPage'
import callPage from '@/components/pages/callPage'
import contactPage from '@/components/pages/contactPage'
import newMessagePage from '@/components/pages/newMessagePage'
import settingsPage from '@/components/pages/settingsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: chatListPage
    },
    {
      path: '/chat',
      name: 'chat',
      component: chatPage
    },
    {
      path: '/call',
      name: 'call',
      component: callPage
    },
    {
      path: '/call',
      name: 'call',
      component: contactPage
    },
    {
      path: '/newMessage',
      name: 'New Message',
      component: newMessagePage
    },
    {
      path: '/settings',
      name: 'settings',
      component: settingsPage
    }
  ]
})
