<template>
  <div class="fullscreen-modal" v-if="visible" @click.self="closeModal">
      <button type="button" class="close-btn" @click="closeModal">
        <i class="bi bi-x-lg"></i>
      </button>
      
      <div class="image-container">
        <img :src="currentItem.image" :alt="currentItem.title" class="lightbox-image">
        
        <!-- Title and description overlay that appears on hover -->
        <div class="image-info-overlay">
          <h3>{{ currentItem.title }}</h3>
          <p>{{ currentItem.description }}</p>
        </div>
        
        <!-- Navigation overlay on the image -->
      </div>
    <div class="image-navigation-overlay">
      <div class="nav-area prev-area" @click="navigate(-1)">
        <div class="nav-indicator">
          <i class="bi bi-chevron-left"></i>
        </div>
      </div>
      <div class="nav-area next-area" @click="navigate(1)">
        <div class="nav-indicator">
          <i class="bi bi-chevron-right"></i>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'ImageLightbox',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      required: true
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    currentItem() {
      return this.items[this.currentIndex] || { 
        image: '', 
        title: '', 
        description: '' 
      };
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    navigate(direction) {
      this.$emit('navigate', direction);
    }
  },
  mounted() {
    const handleKeyDown = (event) => {
      if (!this.visible) return;
      
      switch(event.key) {
        case 'Escape':
          this.closeModal();
          break;
        case 'ArrowRight':
          this.navigate(1);
          break;
        case 'ArrowLeft':
          this.navigate(-1);
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
  }
}
</script>

<style scoped>
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
  width: 100%;
  height: 100%;
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
  cursor: pointer;
  font-size: 20px;
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
  transform: scale(1.1);
}

.image-container {
  max-width: 100%;
  max-height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.lightbox-image {
  max-width: 100%;
  max-height: 80vh;  /* Limits the height to avoid scrolling */
  object-fit: contain;
}

/* Image Info Overlay Styles */
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
</style>
