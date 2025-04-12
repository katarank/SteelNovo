import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import i18n from '../i18n'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      titleKey: 'home'
    }
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue'),
    meta: {
      titleKey: 'gallery'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      titleKey: 'about'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    meta: {
      titleKey: 'contact'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Always scroll to top when navigating
    return { top: 0 }
  }
})

// Update page title on route navigation
router.beforeEach((to, from, next) => {
  // Get the title key from the route metadata
  const titleKey = to.meta.titleKey || 'home'
  
  // Set the document title using the i18n translation
  document.title = i18n.global.t(`pageTitle.${titleKey}`)
  
  next()
})

export default router
