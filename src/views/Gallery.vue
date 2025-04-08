<template>
  <div class="gallery">
    <div class="page-header">
      <div class="container">
        <h1>Our Work Gallery</h1>
        <p>Discover our handcrafted metalwork creations</p>
      </div>
    </div>

    <div class="container py-5">
      <div class="filter-buttons mb-5">
        <button 
          class="btn btn-outline-dark me-2 mb-2" 
          :class="{ 'active': activeCategory === 'all' }" 
          @click="filterGallery('all')">
          All Works
        </button>
        <button 
          v-for="category in categories" 
          :key="category" 
          class="btn btn-outline-dark me-2 mb-2" 
          :class="{ 'active': activeCategory === category }" 
          @click="filterGallery(category)">
          {{ category }}
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
                  <p>View Larger</p>
                </div>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.description }}</p>
              <span class="badge bg-secondary">{{ item.category }}</span>
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
export default {
  name: 'Gallery',
  data() {
    return {
      activeCategory: 'all',
      selectedItem: null,
      galleryItems: [
        {
          title: 'Custom Metal Gate',
          image: '/images/gallery-1.jpg',
          category: 'Gates',
          description: 'Hand-forged ornamental gate with intricate scrollwork and nature-inspired motifs.'
        },
        {
          title: 'Wrought Iron Railing',
          image: '/images/gallery-2.jpg',
          category: 'Railings',
          description: 'Elegant staircase railing combining traditional blacksmithing with contemporary design.'
        },
        {
          title: 'Decorative Fire Pit',
          image: '/images/gallery-3.jpg',
          category: 'Outdoor',
          description: 'Functional art piece designed to bring warmth and style to outdoor spaces.'
        },
        {
          title: 'Metal Wall Art',
          image: '/images/gallery-4.jpg',
          category: 'Art',
          description: 'Abstract metal wall sculpture with flowing lines and balanced composition.'
        },
        {
          title: 'Garden Trellis',
          image: '/images/gallery-5.jpg',
          category: 'Outdoor',
          description: 'Custom-designed garden trellis featuring climbing plant supports.'
        },
        {
          title: 'Ornamental Fence',
          image: '/images/gallery-6.jpg',
          category: 'Fences',
          description: 'Decorative metal fence with custom design elements for a private residence.'
        },
        {
          title: 'Custom Fireplace Screen',
          image: '/images/gallery-7.jpg',
          category: 'Indoor',
          description: 'Hand-forged fireplace screen with nature-inspired elements.'
        },
        {
          title: 'Metal Sculpture',
          image: '/images/gallery-8.jpg',
          category: 'Art',
          description: 'Freestanding sculpture combining welding and forging techniques.'
        },
        {
          title: 'Driveway Gate',
          image: '/images/gallery-9.jpg',
          category: 'Gates',
          description: 'Grand entrance gate designed for durability and visual impact.'
        }
      ]
    }
  },
  computed: {
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
      // Bootstrap modal activation would go here in a real implementation
    }
  },
  mounted() {
    // In a real implementation, you would initialize the Bootstrap modal here
  }
}
</script>

<style scoped>
.page-header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/gallery-header.jpg');
  background-size: cover;
  background-position: center;
  color: white;
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
