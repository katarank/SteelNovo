<template>
  <div>
    <div class="page-header">
      <div class="container">
        <h1>About Us</h1>
        <p>Our story and craft philosophy</p>
      </div>
    </div>
    <div class="container py-5">
      <div class="row mb-5">
          <h2>Our Story</h2>
          <p class="lead">Two brothers with a shared passion for blacksmithing, transforming raw materials into functional art since 2011.</p>
          <p>SteelNovo was founded by brothers Omar and Davide Guerini, who grew up watching their father work metal in his small workshop. What started as a childhood fascination evolved into a lifelong passion, leading them to establish their own blacksmith business after years of apprenticeship and formal training.</p>
      </div>

      <div class="row mb-5">
          <h2>Our Craft Philosophy</h2>
          <p>We believe in the timeless value of handcrafted quality. Each piece we create embodies three core principles:</p>
          <ul class="craft-principles">
            <li><strong>Craftsmanship:</strong> We dedicate the time and attention necessary to create pieces of exceptional quality, with impeccable joinery and finishing.</li>
            <li><strong>Functionality:</strong> Beyond beauty, our work serves a purpose, designed to function flawlessly for generations.</li>
            <li><strong>Individuality:</strong> No two pieces are identical. Each creation bears the distinctive marks of handcrafted work and is tailored to our clients' specific needs.</li>
          </ul>
      </div>
      
      <div class="row mb-5">
        <div class="col-lg-12">
          <h2 class="text-center mb-4">Meet the Brothers</h2>
        </div>
        <div class="col-md-6">
          <div class="card mb-4">
            <img src="@/assets/images/only-logo.png" alt="Omar Guerini" class="card-img-top">
            <div class="card-body">
              <h3 class="card-title">Omar Guerini</h3>
              <p class="card-text">With a background in fine arts and 15 years of blacksmithing experience, Omar specializes in sculptural and decorative elements. His eye for design brings artistic vision to each project.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card mb-4">
            <img src="@/assets/images/only-logo.png" alt="Davide Guerini" class="card-img-top">
            <div class="card-body">
              <h3 class="card-title">Davide Guerini</h3>
              <p class="card-text">A mechanical engineer by training, David focuses on structural integrity and functional components. His technical expertise ensures that every piece is as durable as it is beautiful.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="workshop-section">
        <h2 class="text-center mb-4">Our Workshop</h2>
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <p class="text-center">Located just outside Portland, our forge combines traditional blacksmith tools with modern equipment. We welcome visitors by appointment to discuss projects and witness the crafting process firsthand.</p>
          </div>
        </div>
        <div class="row g-3 workshop-images">
          <div class="col-md-4">
            <img src="@/assets/images/only-logo.png" alt="Workshop forge" class="img-fluid rounded">
          </div>
          <div class="col-md-4">
            <img src="@/assets/images/only-logo.png" alt="Workshop tools" class="img-fluid rounded">
          </div>
          <div class="col-md-4">
            <img src="@/assets/images/only-logo.png" alt="Workshop overview" class="img-fluid rounded">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
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

h2 {
  margin-bottom: 1.5rem;
  position: relative;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.craft-principles {
  padding-left: 1.2rem;
}

.craft-principles li {
  margin-bottom: 1rem;
}

.workshop-section {
  margin-top: 3rem;
}

.workshop-images {
  margin-top: 2rem;
}
</style>
