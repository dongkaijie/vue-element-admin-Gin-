import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    name: 'dashboard',
    alwaysShow: true,
    meta: {
      title: 'Permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      },
      {
        path: 'content',
        name: 'Content',
        component: () => import('@/views/content/index'),
        meta: { title: 'Content', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/guide/index'),
        name: 'Guide',
        meta: { title: 'Guide', icon: 'guide', noCache: true }
      }
    ]
  },
  {
    path: '/firstPage',
    component: Layout,
    redirect: '/safetySupervision/firstPage/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/safetySupervision/firstPage/index'),
        name: 'FirstPage',
        meta: { title: '首页', icon: 'star', noCache: true }
      }
    ]
  },
  {
    path: '/toDo',
    component: Layout,
    redirect: '/safetySupervision/toDo/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/safetySupervision/toDo/index'),
        name: 'ToDo',
        meta: { title: '待办', icon: 'list', noCache: true }
      }
    ]
  },
  {
    path: '/haveDone',
    component: Layout,
    redirect: '/safetySupervision/haveDone/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/safetySupervision/haveDone/index'),
        name: 'HaveDone',
        meta: { title: '已办', icon: 'icon', noCache: true }
      }
    ]
  },
  {
    path: '/enterpMaintain',
    component: Layout,
    redirect: '/safetySupervision/enterpMaintain/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/safetySupervision/enterpMaintain/index'),
        name: 'EnterpMaintain',
        meta: { title: '企业维护', icon: 'drag', noCache: true }
      }
    ]
  },
  {
    path: '/input',
    component: Layout,
    redirect: '/safetySupervision/components/input/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/safetySupervision/input/index'),
        name: 'Input',
        meta: { title: '输入框', icon: 'message', noCache: true }
      }
    ]
  },
  {
    path: '/table',
    component: Layout,
    redirect: '/safetySupervision/table/index',
    children: [
      {
        path: 'Table',
        component: () => import('@/views/safetySupervision/table/index'),
        name: 'Table',
        meta: { title: '表格', icon: 'message', noCache: true }
      }
    ]
  },
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'Permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'Page Permission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: 'Role Permission',
          roles: ['admin']
        }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
