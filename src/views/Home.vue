<template>
  <div class="home">
    <div class="page-header">
        <VideoPlayer
            :videoSrc="menuVideo"
            @videoLoaded="onVideoLoaded"
            @videoError="onVideoError"
        />
    </div>

    <div class="content-wrapper">
      <section class="featured-works py-5">
        <div class="container">
        <h2 class="section-title">Featured Works</h2>
        <div class="row g-4">
          <div class="col-md-4" v-for="(item, index) in featuredItems" :key="index">
            <div class="card h-100">
              <div class="card-img-wrapper">
                <img :src="item.image" class="card-img-top" :alt="item.title">
              </div>
              <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <router-link to="/gallery" class="btn btn-outline-secondary">See Full Gallery</router-link>
        </div>
      </div>
    </section>

    <section class="testimonials py-5 bg-light">
      <div class="container">
        <h2 class="section-title">What Our Clients Say</h2>
        <div class="row g-4">
          <div class="col-md-4" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="card h-100">
              <div class="card-body">
                <p class="card-text quote">{{ testimonial.quote }}</p>
                <div class="client-info">
                  <h5 class="client-name">{{ testimonial.name }}</h5>
                  <p class="client-location">{{ testimonial.location }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  </div>
</template>

<script>
import galleryItems from '../data/galleryItems.js';
import menuVideo from '@/assets/videos/mock-menu-video.mp4';
import VideoPlayer from '@/components/VideoPlayer.vue';

export default {
  name: 'Home',
  components: {
    VideoPlayer
  },
  methods: {
    onVideoLoaded() {
      console.log('Video loaded successfully');
    },
    onVideoError(error) {
      console.error('Video error in Home component:', error);
    }
  },
  data() {
    return {
      menuVideo,
      rawGalleryItems: galleryItems,
      testimonials: [
        {
          quote: "The brothers created a beautiful custom railing for our home that exceeded our expectations. Their craftsmanship is truly exceptional.",
          name: "Michael Johnson",
          location: "Portland, OR"
        },
        {
          quote: "Working with SteelNovo was a pleasure from start to finish. They listened to our ideas and transformed them into something even better than we imagined.",
          name: "Sarah Williams",
          location: "Seattle, WA"
        },
        {
          quote: "The attention to detail in their metalwork is unmatched. Our garden gate is not just functional but a work of art that everyone comments on.",
          name: "Robert Miller",
          location: "Vancouver, BC"
        }
      ]
    }
  },
  computed: {
    // Process gallery items with proper localization
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
    // Get only the first 3 items for featured section
    featuredItems() {
      return this.galleryItems.slice(0, 3);
    }
  }
}
</script>

<style scoped>

.page-header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
}

.home {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

.content-wrapper {
  position: relative;
  z-index: 3; /* Higher than video but lower than navbar (if navbar has higher z-index) */
  width: 100%;
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.section-title:after {
  content: '';
  display: block;
  width: 80px;
  height: 3px;
  background: #6c757d;
  margin: 0.7rem auto;
}

.card-img-wrapper {
  height: 200px;
  overflow: hidden;
}

.card-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover .card-img-wrapper img {
  transform: scale(1.05);
}

.quote {
  font-style: italic;
  position: relative;
}

.quote:before {
  content: '"';
  font-size: 2rem;
  color: #6c757d;
  position: absolute;
  left: -15px;
  top: -15px;
  opacity: 0.3;
}

.client-info {
  margin-top: 1rem;
}
</style>
