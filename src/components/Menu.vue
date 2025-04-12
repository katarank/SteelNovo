<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import router from "@/router/index.js";

// Initialize i18n
const { locale } = useI18n()
const currentLocale = computed(() => locale.value)

// Control menu overlay visibility
const menuOpen = ref(false)

// Function to refresh the application
const goToHome = async () => {
  await router.push('/')
  closeMenu()
}

// Toggle menu overlay
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  if (menuOpen.value) {
    document.body.style.overflow = 'hidden' // Prevent scrolling when menu is open
  } else {
    document.body.style.overflow = '' // Enable scrolling when menu is closed
  }
}

// Close menu overlay
const closeMenu = () => {
  menuOpen.value = false
  document.body.style.overflow = ''
}

// Navigate and close menu
const navigateTo = async (route) => {
  closeMenu()
  await router.push(route)
}
</script>

<template>
  <!-- Navigation Bar -->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
      <!-- Menu toggle button - now uses our custom function -->
      <button class="navbar-toggler" type="button" @click="toggleMenu" aria-controls="navbarNav" :aria-expanded="menuOpen" aria-label="Toggle navigation">
        <span v-if="!menuOpen" class="navbar-toggler-icon"></span>
        <span v-else class="navbar-toggler-close-icon">×</span>
      </button>
      
      <!-- Regular desktop menu -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav w-100 d-flex justify-content-center align-items-center">
          <!-- Home -->
          <li class="nav-item mx-3">
            <router-link to="/" class="nav-link" exact-active-class="active">{{ $t('nav.home') }}</router-link>
          </li>

          <li class="nav-item mx-3">
            <router-link to="/gallery" class="nav-link" active-class="active">{{ $t('nav.gallery') }}</router-link>
          </li>

          <li class="nav-item mx-3">
            <a href="#" @click.prevent="goToHome">
              <img src="@/assets/images/only-logo.png" alt="SteelNovo" height="50" class="d-inline-block align-top">
            </a>
          </li>

          <li class="nav-item mx-3">
            <router-link to="/about" class="nav-link" active-class="active">{{ $t('nav.about') }}</router-link>
          </li>

          <li class="nav-item mx-3">
            <router-link to="/contact" class="nav-link" active-class="active">{{ $t('nav.contact') }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Full-screen Overlay Menu -->
  <div class="menu-overlay" v-if="menuOpen" @click="closeMenu">
    <div class="menu-overlay-content" @click.stop>
      <!-- Close button -->
      
      <!-- Overlay Logo -->
      <div class="menu-overlay-logo">
        <img src="@/assets/images/only-logo.png" alt="SteelNovo" height="80">
      </div>
      
      <!-- Menu Items -->
      <div class="menu-overlay-links">
        <a href="#" @click.prevent="navigateTo('/')" class="overlay-link">{{ $t('nav.home') }}</a>
        <a href="#" @click.prevent="navigateTo('/gallery')" class="overlay-link">{{ $t('nav.gallery') }}</a>
        <a href="#" @click.prevent="navigateTo('/about')" class="overlay-link">{{ $t('nav.about') }}</a>
        <a href="#" @click.prevent="navigateTo('/contact')" class="overlay-link">{{ $t('nav.contact') }}</a>
      </div>
    </div>
  </div>
</template>
<script ></script>

<style scoped>
/* Navigation styles */
.navbar {
  background-color: transparent;
}

.navbar-dark .navbar-nav .nav-link {
  color: white;
  text-transform: uppercase; /* Make menu items uppercase */
  font-weight: bold; /* Make menu items bold */
}

.navbar-dark .navbar-nav .nav-link:hover {
  color: rgba(255, 89, 0, 0.72);
}

.nav-item {
  align-items: center;
}

.navbar-dark .navbar-nav .nav-link.active {
  color: rgba(255, 89, 0, 0.72);
}

/* Overlay Menu Styles */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85); /* Semi-transparent background */
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

.menu-overlay-content {
  position: relative;
  width: 100%;
  max-width: 500px;
  padding: 2rem;
  text-align: center;
}

.menu-overlay-logo {
  margin-bottom: 3rem;
}

.menu-overlay-links {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.overlay-link {
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
}

.overlay-link:hover {
  color: rgba(255, 89, 0, 0.72);
  transform: translateX(10px);
}

/* Style for the toggle button and its transition effects */
.navbar-toggler {
  position: absolute;
  top: 10px;
  left: 10px;
  border: none;
  background-color: transparent;
  transition: all 0.3s ease;
  padding: 0;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar-toggler:focus {
  box-shadow: none;
  outline: none;
}

.navbar-toggler-icon {
  transition: all 0.3s ease;
  animation: fade-in 0.3s forwards;

}

.navbar-toggler-close-icon {
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 1;
  color: white;
  display: inline-block;
  transition: all 0.3s ease;
  transform: rotate(0deg);
  animation: rotate-in 0.3s forwards;
}

@keyframes rotate-in {
  0% { transform: rotate(0deg); opacity: 0; }
  100% { transform: rotate(90deg); opacity: 1; }
}

@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
