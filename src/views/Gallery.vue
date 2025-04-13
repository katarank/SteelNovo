<template>
  <div>
    <div class="page-header"/>
    <div class="container py-5">
      <div class="row g-4">
        <div 
          v-for="(item, index) in galleryItems"
          :key="index"
          class="col-md-6 col-lg-4 gallery-item"
        >
          <div class="card h-100">
            <div class="card-img-wrapper">
              <img :src="item.image" class="card-img-top" :alt="item.title">
              <div class="overlay" @click="openLightbox(index)">
                <div class="overlay-content">
                  <i class="fas fa-search-plus"></i>
                  <p>{{ $t('gallery.filter.viewLarger') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fullscreen Lightbox Modal -->
    <div class="fullscreen-modal" v-if="lightboxVisible" @click.self="closeLightbox">
      <div class="fullscreen-modal-content">
        <button type="button" class="close-btn" @click="closeLightbox">
          <i class="fas fa-times"></i>
        </button>
        
        <div class="image-container">
          <img :src="selectedItem.image" :alt="selectedItem.title" class="lightbox-image">
          
          <!-- Title and description overlay that appears on hover -->
          <div class="image-info-overlay">
            <h3>{{ selectedItem.title }}</h3>
            <p>{{ selectedItem.description }}</p>
          </div>
          
          <!-- Navigation overlay on the image -->
          <div class="image-navigation-overlay">
            <div class="nav-area prev-area" @click="navigateGallery(-1)">
              <div class="nav-indicator">
                <i class="fas fa-chevron-left"></i>
              </div>
            </div>
            <div class="nav-area next-area" @click="navigateGallery(1)">
              <div class="nav-indicator">
                <i class="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import galleryItems from '../data/galleryItems.js';

export default {
  name: 'Gallery',
  data() {
    return {
      selectedItem: null,
      currentIndex: 0,
      lightboxVisible: false,
      rawGalleryItems: galleryItems
    }
  },
  computed: {
    galleryItems() {
      // Get current locale
      const currentLocale = this.$i18n.locale;
      
      return this.rawGalleryItems.map(item => {
        return {
          image: item.src,
          alt: item.alt,
          // Use current language or fallback to English
          title: item.title[currentLocale] || item.title.en,
          description: item.description[currentLocale] || item.description.en
        };
      });
    }
  },
  methods: {
    openLightbox(index) {
      this.currentIndex = index;
      this.selectedItem = this.galleryItems[index];
      this.lightboxVisible = true;
      document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
    },
    
    closeLightbox() {
      this.lightboxVisible = false;
      document.body.style.overflow = ''; // Re-enable scrolling
    },
    
    navigateGallery(direction) {
      // Calculate new index with wraparound
      const totalItems = this.galleryItems.length;
      this.currentIndex = (this.currentIndex + direction + totalItems) % totalItems;
      this.selectedItem = this.galleryItems[this.currentIndex];
    },
    
    handleKeyNavigation(event) {
      if (!this.lightboxVisible) return;
      
      switch(event.key) {
        case 'Escape':
          this.closeLightbox();
          break;
        case 'ArrowRight':
          this.navigateGallery(1);
          break;
        case 'ArrowLeft':
          this.navigateGallery(-1);
          break;
      }
    }
  },
  mounted() {
    // Add keyboard navigation for the gallery
    window.addEventListener('keydown', this.handleKeyNavigation);
  },
  beforeUnmount() {
    // Clean up event listener
    window.removeEventListener('keydown', this.handleKeyNavigation);
    document.body.style.overflow = ''; // Ensure scrolling is re-enabled when leaving the page
  }
}
</script>

<style scoped>
.page-header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), transparent), url('@/assets/images/modern-art-table-legs.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  height: 30vh;
  padding: 5rem 0;
  text-align: center;
}

.filter-buttons .btn.active {
  background-color: #212529;
  color: white;
}

.card-img-wrapper {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.card-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  cursor: pointer;
}

.overlay-content {
  color: white;
  text-align: center;
}

.overlay-content i {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.card:hover .overlay {
  opacity: 1;
}

.card:hover .card-img-wrapper img {
  transform: scale(1.05);
}

/* Fullscreen Modal Styles */
.fullscreen-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 9999; /* Ensure it's above everything including the logo */
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.fullscreen-modal-content {
  position: relative;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 10;
  padding: 5px;
  transition: transform 0.2s;
}

.close-btn:hover {
  transform: scale(1.2);
  color: #ff5900;
}

.image-navigation-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  pointer-events: none; /* Let clicks pass through by default */
}

.nav-area {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  pointer-events: auto; /* Make this element capture clicks */
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.prev-area {
  justify-content: flex-start;
  padding-left: 20px;
}

.next-area {
  justify-content: flex-end;
  padding-right: 20px;
}

.nav-indicator {
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  opacity: 0;
  transition: opacity 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
}

.nav-area:hover .nav-indicator {
  opacity: 1;
  background-color: #ff5900;
  transform: scale(1.1);
}

.image-container {
  max-width: 100%;
  max-height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lightbox-image {
  max-width: 100%;
  max-height: 80vh;  /* Limits the height to avoid scrolling */
  object-fit: contain;
}

/* Image Info Overlay Styles */
.image-container {
  position: relative;
  display: inline-block;
}

.image-info-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 15px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  opacity: 0;
}

.image-container:hover .image-info-overlay {
  transform: translateY(0);
  opacity: 1;
}

.image-info-overlay h3 {
  color: #ff5900;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.image-info-overlay p {
  margin-bottom: 0;
  font-size: 0.95rem;
}

.image-details {
  color: white;
  text-align: center;
  margin-top: 1.5rem;
  max-width: 800px;
}
</style>
