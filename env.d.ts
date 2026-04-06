/// <reference types="vite/client" />

import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /** 需要登录才能访问 */
    requiresAuth?: boolean
    /** 仅未登录可访问（如登录页），已登录会跳转首页 */
    guestOnly?: boolean
  }
}
