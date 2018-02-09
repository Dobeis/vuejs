import Vue from 'vue'
import Router from 'vue-router'
import Tasks from '@/components/Tasks'
import NewTask from '@/components/NewTask'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tasks',
      component: Tasks
    },
    {
      path: '/new',
      name: 'newTask',
      component: NewTask
    }
  ]
})
