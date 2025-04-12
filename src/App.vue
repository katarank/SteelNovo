<script setup>
import { RouterView } from 'vue-router'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Menu from '@/components/Menu.vue'

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

    <footer class="bg-dark text-white py-4 mt-auto">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-3 mb-md-0">
            <h5>SteelNovo Blacksmith</h5>
            <p class="mb-0">{{ $t('footer.tagline') }}</p>
            <p class="motto mt-2 font-italic">
              <em>{{ $t('footer.motto') }}</em>
            </p>
            <p class="mb-0">{{ $t('footer.additionalInfo') }}</p>
          </div>
          <div class="col-md-4 mb-3 mb-md-0">
            <h5>{{ $t('footer.contact') }}</h5>
            <address class="mb-0">
              <p>{{ $t('contact.info.address') }}</p>
              <p>{{ $t('contact.info.phone') }}</p>
              <p>{{ $t('contact.info.email') }}</p>
            </address>
          </div>
          <div class="col-md-4">
            <h5>{{ $t('footer.quickLinks') }}</h5>
            <ul class="list-unstyled">
              <li><router-link to="/gallery" class="text-white">{{ $t('nav.gallery') }}</router-link></li>
              <li><router-link to="/about" class="text-white">{{ $t('nav.about') }}</router-link></li>
              <li><router-link to="/contact" class="text-white">{{ $t('nav.contact') }}</router-link></li>
            </ul>
          </div>
        </div>
        <hr class="my-3">
        <div class="text-center">
          <p class="mb-0">{{ $t('footer.copyright') }}</p>
        </div>
      </div>
    </footer>
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
