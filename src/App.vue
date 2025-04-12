<script setup>
import { RouterView } from 'vue-router'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Import Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'
// Import Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Initialize i18n
const { locale } = useI18n()
const currentLocale = computed(() => locale.value)

</script>

<template>
  <div class="app-container d-flex flex-column min-vh-100">
    <!-- Use the Menu component -->
    <Menu class="menu"/>
    <div class="page">
      <RouterView />
    </div>

    <Footer />
  </div>
</template>

<style>
/* App container styles */
.menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
.page {
  position: relative;
  width: 100%;
}
body, #app {
  max-width: unset !important;
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}
/* Main content styles */
main {
  padding-top: 20px; /* Space after video section */
  position: relative;
  z-index: 1;
}
</style>
