<template>
  <div class="home">
    <div class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1>SteelNovo Blacksmith</h1>
          <h2>Master Craftsmanship by Two Brothers</h2>
          <p>Forging tradition with modern craftsmanship since 2010</p>
          <div class="cta-buttons">
            <router-link to="/gallery" class="btn btn-primary">View Our Work</router-link>
            <router-link to="/contact" class="btn btn-outline-light ms-2">Contact Us</router-link>
          </div>
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
          title: 'Custom Metal Gate',
          image: '/images/featured-1.jpg',
          description: 'Hand-forged ornamental gate with intricate scrollwork and nature-inspired motifs.'
        },
        {
          title: 'Wrought Iron Railing',
          image: '/images/featured-2.jpg',
          description: 'Elegant staircase railing combining traditional blacksmithing with contemporary design.'
        },
        {
          title: 'Decorative Fire Pit',
          image: '/images/featured-3.jpg',
          description: 'Functional art piece designed to bring warmth and style to outdoor spaces.'
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
.hero-section {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 8rem 0;
  text-align: center;
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
