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
  <!-- Fixed Logo (Always Visible) -->
  <div class="fixed-logo">
    <a href="#" @click.prevent="goToHome">
      <img src="@/assets/images/only-logo.png" alt="SteelNovo" height="60" class="logo-image">
    </a>
  </div>

  <!-- Navigation Bar -->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
      <!-- Menu toggle button with custom hamburger animation -->
      <button class="navbar-toggler" type="button" @click="toggleMenu" aria-controls="navbarNav" :aria-expanded="menuOpen" aria-label="Toggle navigation">
        <div class="hamburger-menu" :class="{ 'open': menuOpen }">
          <span class="line line-1"></span>
          <span class="line line-2"></span>
          <span class="line line-3"></span>
        </div>
      </button>
      
      <!-- Regular desktop menu -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav w-100 d-flex justify-content-center align-items-center">
          <!-- Left Menu Items -->
          <li class="nav-item mx-3">
            <router-link to="/" class="nav-link" exact-active-class="active">{{ $t('nav.home') }}</router-link>
          </li>

          <li class="nav-item mx-3">
            <router-link to="/gallery" class="nav-link" active-class="active">{{ $t('nav.gallery') }}</router-link>
          </li>

          <!-- Spacer for logo -->
          <li class="nav-item logo-spacer mx-3"></li>

          <!-- Right Menu Items -->
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
/* Fixed Logo Styles */
.fixed-logo {
  position: fixed;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1200; /* Higher than other elements */
  text-align: center;
  padding: 5px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.logo-image {
  transition: transform 0.3s ease;
}

.logo-image:hover {
  transform: scale(1.05);
}

/* Logo spacer for the menu */
.logo-spacer {
  width: 120px; /* Adjust based on logo size */
}

/* Navigation styles */
.navbar {
  background-color: transparent;
  padding-top: 15px;
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
  padding: 0.5rem 0;
}

.overlay-link:hover {
  color: rgba(255, 89, 0, 0.72);
}

.overlay-link.active {
  color: rgba(255, 89, 0, 0.72);
}
/* Style for the toggle button and hamburger animation */
.navbar-toggler {
  position: absolute;
  top: 10px;
  left: 10px;
  border: none;
  background-color: transparent;
  transition: all 0.3s ease;
  z-index: 1100; /* Ensure it's above the overlay */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.navbar-toggler:focus {
  box-shadow: none;
  outline: none;
}

/* Hamburger menu styles */
.hamburger-menu {
  position: relative;
  width: 22px;
  height: 16px;
  cursor: pointer;
}

.line {
  position: absolute;
  height: 2px;
  width: 100%;
  background-color: white;
  border-radius: 2px;
  transition: all 0.45s ease;
  left: 0;
}

.line-1 {
  top: 0;
}

.line-2 {
  top: 50%;
  transform: translateY(-50%);
}

.line-3 {
  bottom: 0;
}

/* Animation for open state */
.hamburger-menu.open .line-1 {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}

.hamburger-menu.open .line-2 {
  opacity: 0;
  transform: translateX(-100%);
}

.hamburger-menu.open .line-3 {
  bottom: 50%;
  transform: translateY(50%) rotate(-45deg);
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
