<template>
  <div class="home">
    <div class="video-container">
      <video 
          ref="videoElement"
          src="@/assets/videos/mock-menu-video.mp4"
          autoplay
          loop
          muted
          playsinline
          preload="auto"
          class="header-video"
          @loadeddata="handleVideoLoaded"
          @error="handleVideoError">
      </video>
      <div v-if="videoError" class="video-fallback">
          <!-- Fallback content if video fails to load -->
          <div class="video-error-message">
            <p>{{ $t('errors.videoLoadFailed') }}</p>
          </div>
      </div>
    </div>
    
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
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      featuredItems: [
        {
          title: 'Decorative Garden Gate',
          image: '@/assets/images/416090964_333012463031148_8278810173838462944_n.jpg',
          description: 'Hand-forged ornamental gate with intricate scrollwork and traditional design.'
        },
        {
          title: 'Ornamental Railing',
          image: '@/assets/images/424444861_1132819214760675_7803895683058345713_n.jpg',
          description: 'Elegant handrail crafted with attention to detail and functional design.'
        },
        {
          title: 'Custom Fireplace Tools',
          image: '@/assets/images/448813202_1513391539287747_1063186017773658937_n.jpg',
          description: 'Hand-crafted fireplace tools combining function and beautiful craftsmanship.'
        }
      ],
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
  }
}
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  height: 100vh; /* Adjust to your needs */
  overflow: hidden;
}

.header-video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;        /* Scale width to 100% of container */
  height: 100%;       /* Scale height to 100% of container */
  object-fit: cover;  /* Maintain aspect ratio while covering the area */
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.hero-content h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
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
