<script setup>
import { RouterView } from 'vue-router'
import { onMounted, onBeforeUnmount, ref, computed, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Import Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'
// Import Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Initialize i18n
const { locale } = useI18n()
const currentLocale = computed(() => locale.value)

// Get current route to conditionally display video
const route = useRoute()
const isHomePage = computed(() => route.name === 'Home')

// Function to change the locale
function changeLocale(lang) {
  locale.value = lang
  localStorage.setItem('locale', lang)
}

// Reactive references for video handling
const videoElement = ref(null)
const videoLoaded = ref(false)
const videoError = ref(false)

// Handle video events
const handleVideoLoaded = () => {
  videoLoaded.value = true
}

const handleVideoError = (error) => {
  console.error('Video error:', error)
  videoError.value = true
}

// Video playback management
onMounted(() => {
  nextTick(() => {
    if (isHomePage.value && videoElement.value) {
      videoElement.value.load();
      const playPromise = videoElement.value.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Video playback error:', error);
          setTimeout(() => {
            if (videoElement.value) {
              videoElement.value.muted = true;
              videoElement.value.play().catch(e => console.error('Second attempt failed:', e));
            }
          }, 1000)
        })
      }
    }
  })
    
  // Initialize navbar scroll effect
  const handleScroll = () => {
    const navbar = document.querySelector('.navbar')
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled')
      } else {
        navbar.classList.remove('scrolled')
      }
    }
  }
  
  window.addEventListener('scroll', handleScroll)
  
  // Call once to set initial state
  handleScroll()
  
  // Store the handleScroll function for cleanup
  window.handleScrollCleanup = handleScroll
})

// Clean up event listeners
onBeforeUnmount(() => {
  if (window.handleScrollCleanup) {
    window.removeEventListener('scroll', window.handleScrollCleanup)
  }
})
</script>

<template>
  <div class="app-container d-flex flex-column min-vh-100">
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav w-100 justify-content-center">
            <!-- Home -->
            <li class="nav-item">
              <router-link to="/" class="nav-link" exact-active-class="active">{{ $t('nav.home') }}</router-link>
            </li>
            
            <!-- Gallery -->
            <li class="nav-item">
              <router-link to="/gallery" class="nav-link" active-class="active">{{ $t('nav.gallery') }}</router-link>
            </li>
            
            <!-- Logo (centered) -->
            <li class="nav-item mx-3">
              <router-link to="/" class="navbar-brand">
                <img src="@/assets/images/logo.jpg" alt="SteelNovo" height="50" class="d-inline-block align-top">
              </router-link>
            </li>
            
            <!-- About Us -->
            <li class="nav-item">
              <router-link to="/about" class="nav-link" active-class="active">{{ $t('nav.about') }}</router-link>
            </li>
            
            <!-- Contact -->
            <li class="nav-item">
              <router-link to="/contact" class="nav-link" active-class="active">{{ $t('nav.contact') }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <main class="flex-grow-1">
      <RouterView />
    </main>

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
/* Global styles */
body {
  font-family: 'Open Sans', sans-serif;
  color: #333;
  padding-top: 60px; /* Add padding for the fixed navbar */
}

/* Video header styles */
.video-header {
  position: relative;
  height: 60vh;
  min-height: 400px;
  width: 100%;
  overflow: hidden;
  margin-top: -60px; /* Offset the padding-top on body */
}

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.header-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
  object-fit: cover;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Dark overlay for better text visibility */
}

/* Navigation styles */
.navbar {
  background-color: rgba(33, 37, 41, 0.7) !important; /* Semi-transparent dark background */
  backdrop-filter: blur(5px); /* Add blur effect for modern browsers */
  transition: background-color 0.3s ease;
}

.navbar.scrolled {
  background-color: rgba(33, 37, 41, 0.9) !important; /* Darker when scrolled */
}

.navbar-brand {
  font-weight: 700;
}

.navbar-dark .navbar-nav .nav-link {
  color: rgba(255,255,255,0.85);
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
}

.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link.active {
  color: #ffffff;
  text-shadow: 0 0 10px rgba(255,255,255,0.5);
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
