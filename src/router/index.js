import Vue from 'vue'
import Router from 'vue-router'
import Note from '@/pages/Note'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Note',
      component: Note
    }
  ]
})
