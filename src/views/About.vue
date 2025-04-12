<template>
  <div>
    <div class="page-header">
      <div class="container">
        <h1>{{ $t('about.title') }}</h1>
        <p>{{ $t('about.subtitle') }}</p>
      </div>
    </div>
    <div class="container py-5">
      <div class="row mb-5">
          <h2>{{ $t('about.story.title') }}</h2>
          <p class="lead">{{ $t('about.story.intro') }}</p>
          <p>{{ $t('about.story.content1') }}</p>
      </div>

      <div class="row mb-5">
          <h2>{{ $t('about.philosophy.title') }}</h2>
          <p>{{ $t('about.philosophy.intro') }}</p>
          <ul class="craft-principles">
            <li>{{ $t('about.philosophy.principles.craftsmanship') }}</li>
            <li>{{ $t('about.philosophy.principles.functionality') }}</li>
            <li>{{ $t('about.philosophy.principles.individuality') }}</li>
          </ul>
      </div>
      
      <div class="row mb-5">
        <div class="col-lg-12">
          <h2 class="text-center mb-4">{{ $t('about.brothers.title') }}</h2>
        </div>
        <div class="col-md-6">
          <div class="card mb-4">
            <img src="@/assets/images/only-logo.png" alt="{{ $t('about.brothers.omar.fullName') }}" class="card-img-top">
            <div class="card-body">
              <h3 class="card-title">{{ $t('about.brothers.omar.fullName') }}</h3>
              <p class="card-text">{{ $t('about.brothers.omar.bio') }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card mb-4">
            <img src="@/assets/images/only-logo.png" alt="{{ $t('about.brothers.davide.fullName') }}" class="card-img-top">
            <div class="card-body">
              <h3 class="card-title">{{ $t('about.brothers.davide.fullName') }}</h3>
              <p class="card-text">{{ $t('about.brothers.davide.bio') }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="workshop-section">
        <h2 class="text-center mb-4">{{ $t('about.workshop.title') }}</h2>
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <p class="text-center">{{ $t('about.workshop.description') }}</p>
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
