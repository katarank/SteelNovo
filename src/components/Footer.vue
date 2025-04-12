<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer class="mt-auto slim-footer">
    <div class="bg-dark text-white py-3">
      <div class="container text-center">
        <p class="mb-0 p-3">{{ t('footer.companyName') }}</p>
      </div>
    </div>
    <div class="bg-white text-dark p-5">
      <div class="container text-center">
        <div class="footer-links">
          <router-link to="/gallery" class="footer-link">{{ t('nav.gallery') }}</router-link>
          <router-link to="/about" class="footer-link">{{ t('nav.about') }}</router-link>
          <router-link to="/contact" class="footer-link">{{ t('nav.contact') }}</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.slim-footer {
  font-size: 12px;
  width: 100%;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  font-size: 12px;
}

.footer-link {
  color: #333;
  text-decoration: none;
  transition: color 0.2s;
  text-transform: uppercase;
}

.footer-link:hover {
  color: #666;
  text-decoration: underline;
}
</style>
