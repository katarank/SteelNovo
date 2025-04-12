<template>
  <div>
    <div class="page-header">
      <div class="container">
        <h1>{{ $t('gallery.title') }}</h1>
        <p>{{ $t('gallery.description') }}</p>
      </div>
    </div>
    <div class="container py-5">
      <div class="filter-buttons mb-5">
        <button 
          class="btn btn-outline-dark me-2 mb-2" 
          :class="{ 'active': activeCategory === 'all' }" 
          @click="filterGallery('all')">
          {{ $t('gallery.filter.all') }}
        </button>
        <button 
          v-for="category in categories" 
          :key="category" 
          class="btn btn-outline-dark me-2 mb-2" 
          :class="{ 'active': activeCategory === category }" 
          @click="filterGallery(category)">
          {{ $t(`gallery.categories.${category}`) }}
        </button>
      </div>

      <div class="row g-4">
        <div 
          v-for="(item, index) in filteredGalleryItems" 
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
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.description }}</p>
              <span class="badge bg-secondary">{{ $t(`gallery.categories.${item.category}`) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div class="modal fade" id="galleryModal" tabindex="-1" aria-hidden="true" v-if="selectedItem">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header border-0">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img :src="selectedItem.image" class="img-fluid" :alt="selectedItem.title">
            <h3 class="mt-3">{{ selectedItem.title }}</h3>
            <p>{{ selectedItem.description }}</p>
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
      activeCategory: 'all',
      selectedItem: null,
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
          category: item.category,
          // Use current language or fallback to English
          title: item.title[currentLocale] || item.title.en,
          description: item.description[currentLocale] || item.description.en
        };
      });
    },
    categories() {
      const categorySet = new Set(this.galleryItems.map(item => item.category));
      return Array.from(categorySet);
    },
    filteredGalleryItems() {
      if (this.activeCategory === 'all') {
        return this.galleryItems;
      } else {
        return this.galleryItems.filter(item => item.category === this.activeCategory);
      }
    }
  },
  methods: {
    filterGallery(category) {
      this.activeCategory = category;
    },
    openLightbox(index) {
      this.selectedItem = this.filteredGalleryItems[index];
      // Use Bootstrap 5 method to show the modal
      const myModal = new bootstrap.Modal(document.getElementById('galleryModal'));
      myModal.show();
    }
  },
  mounted() {
    // Import Bootstrap's JavaScript dynamically when component is mounted
    import('bootstrap').then(bootstrap => {
      window.bootstrap = bootstrap;
    });
  }
}
</script>

<style scoped>
.page-header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  background-size: cover;
  background-position: center;
  color: white;
  height: 40vh;
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
</style>
