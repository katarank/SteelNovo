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
          // Use current language or fallback to English
          title: item.title[currentLocale] || item.title.en,
          description: item.description[currentLocale] || item.description.en
        };
      });
    }
  },
  methods: {
    openLightbox(index) {
      this.selectedItem = this.galleryItems[index];
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), transparent), url('@/assets/images/modern-art-table-legs.jpg');
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
