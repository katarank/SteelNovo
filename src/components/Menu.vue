<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import router from "@/router/index.js";

// Initialize i18n
const { locale } = useI18n()
const currentLocale = computed(() => locale.value)

// Function to refresh the application
const goToHome = async () => {
  await router.push('/')
}
</script>

<template>
  <!-- Navigation Bar -->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav w-100 d-flex justify-content-center align-items-center">
          <!-- Home -->
          <li class="nav-item mx-3">
            <router-link to="/" class="nav-link" exact-active-class="active">{{ $t('nav.home') }}</router-link>
          </li>
          
          <!-- Gallery -->
          <li class="nav-item mx-3">
            <router-link to="/gallery" class="nav-link" active-class="active">{{ $t('nav.gallery') }}</router-link>
          </li>
          
          <!-- Logo (centered) -->
          <li class="nav-item mx-3">
            <a href="#" @click.prevent="goToHome">
              <img src="@/assets/images/logo.svg" alt="SteelNovo" height="50" class="d-inline-block align-top">
            </a>
          </li>
          
          <!-- About Us -->
          <li class="nav-item mx-3">
            <router-link to="/about" class="nav-link" active-class="active">{{ $t('nav.about') }}</router-link>
          </li>
          
          <!-- Contact -->
          <li class="nav-item mx-3">
            <router-link to="/contact" class="nav-link" active-class="active">{{ $t('nav.contact') }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
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
</style>
