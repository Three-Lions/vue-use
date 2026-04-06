import type { RouteLocationMatched, RouteLocationNormalized } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

/** 与登录成功后写入的 key 保持一致，例如 localStorage.setItem(TOKEN_KEY, token) */
export const AUTH_TOKEN_KEY = 'access_token'

export function isLoggedIn(): boolean {
  return Boolean(localStorage.getItem(AUTH_TOKEN_KEY))
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { requiresAuth: true },
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      meta: { guestOnly: true },
      component: () => import('@/views/auth/login/index.vue'),
    },
  ],
})

router.beforeEach((to: RouteLocationNormalized) => {
  const needsAuth = to.matched.some((r: RouteLocationMatched) => r.meta.requiresAuth)
  const guestOnly = to.matched.some((r: RouteLocationMatched) => r.meta.guestOnly)

  if (needsAuth && !isLoggedIn()) {
    return {
      name: 'login',
      ...(to.fullPath !== '/' ? { query: { redirect: to.fullPath } } : {}),
    }
  }

  if (guestOnly && isLoggedIn()) {
    return { name: 'home' }
  }
})

export default router
