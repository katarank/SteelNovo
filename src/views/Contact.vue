<template>
  <div>
    <div class="page-header">
      <div class="container">
        <h1>{{ $t('contact.title') }}</h1>
        <p>{{ $t('contact.subtitle') }}</p>
      </div>
    </div>
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-6 mb-4">
          <h2>{{ $t('contact.intro.title') }}</h2>
          <p class="lead">{{ $t('contact.intro.lead') }}</p>
          <p>{{ $t('contact.intro.description') }}</p>
          
          <div class="contact-info mt-5">
            <h3>{{ $t('contact.info.title') }}</h3>
            <ul class="list-unstyled">
              <li class="mb-3">
                <i class="bi bi-geo-alt-fill me-2"></i>
                <span>{{ $t('contact.info.address') }}</span>
              </li>
              <li class="mb-3">
                <i class="bi bi-telephone-fill me-2"></i>
                <span>{{ $t('contact.info.phone') }}</span>
              </li>
              <li class="mb-3">
                <i class="bi bi-envelope-fill me-2"></i>
                <span>{{ $t('contact.info.email') }}</span>
              </li>
              <li class="mb-3">
                <i class="bi bi-clock-fill me-2"></i>
                <span>{{ $t('contact.info.hours') }}</span>
              </li>
            </ul>
          </div>
          
          <div class="social-media mt-4">
            <h3>{{ $t('contact.social.title') }}</h3>
            <div class="social-icons">
              <a href="https://www.instagram.com/guerini_steelnovo/" target="_blank" rel="noopener noreferrer" class="me-3"><i class="bi bi-instagram"></i></a>
              <a href="#" class="me-3"><i class="bi bi-facebook"></i></a>
              <a href="#" class="me-3"><i class="bi bi-pinterest"></i></a>
            </div>
          </div>
        </div>
        
        <div class="col-lg-6">
          <div class="contact-form-card card shadow">
            <div class="card-body p-4">
              <h3 class="card-title mb-4">{{ $t('contact.form.title') }}</h3>
              <form @submit.prevent="submitForm">
                <div class="mb-3">
                  <label for="name" class="form-label">{{ $t('contact.form.name') }}</label>
                  <input type="text" class="form-control" id="name" v-model="form.name" required>
                </div>
                
                <div class="mb-3">
                  <label for="email" class="form-label">{{ $t('contact.form.email') }}</label>
                  <input type="email" class="form-control" id="email" v-model="form.email" required>
                </div>
                
                <div class="mb-3">
                  <label for="phone" class="form-label">{{ $t('contact.form.phone') }}</label>
                  <input type="tel" class="form-control" id="phone" v-model="form.phone">
                </div>
                
                <div class="mb-3">
                  <label for="projectType" class="form-label">{{ $t('contact.form.projectType.label') }}</label>
                  <select class="form-select" id="projectType" v-model="form.projectType">
                    <option value="" disabled selected>{{ $t('contact.form.projectType.placeholder') }}</option>
                    <option value="Gate">{{ $t('contact.form.projectType.options.gate') }}</option>
                    <option value="Railing">{{ $t('contact.form.projectType.options.railing') }}</option>
                    <option value="Furniture">{{ $t('contact.form.projectType.options.furniture') }}</option>
                    <option value="Art">{{ $t('contact.form.projectType.options.art') }}</option>
                    <option value="Other">{{ $t('contact.form.projectType.options.other') }}</option>
                  </select>
                </div>
                
                <div class="mb-3">
                  <label for="message" class="form-label">{{ $t('contact.form.message') }}</label>
                  <textarea class="form-control" id="message" rows="4" v-model="form.message" required></textarea>
                </div>
                
                <button type="submit" class="btn btn-dark w-100">{{ $t('contact.form.submit') }}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div class="map-section mt-5">
        <h3 class="text-center mb-4">{{ $t('contact.map.title') }}</h3>
        <div class="map-container">
          <!-- In a real implementation, this would contain an embedded Google Map or similar -->
          <div class="map-placeholder bg-light d-flex align-items-center justify-content-center">
            <p class="text-center text-muted">{{ $t('contact.map.placeholder') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // In a real implementation, this would send the form data to a server
      alert(this.$t('contact.form.success'));
      this.resetForm();
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      };
    }
  }
}
</script>

<style scoped>
.page-header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  background-size: cover;
  background-position: center;
  padding: 5rem 0;
  height: 40vh;
  color: white;
  text-align: center;
}

h2 {
  margin-bottom: 1.5rem;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
}

.contact-info i {
  font-size: 1.2rem;
  width: 25px;
}

.social-icons a {
  font-size: 1.5rem;
  color: #212529;
}

.social-icons a:hover {
  color: #6c757d;
}

.contact-form-card {
  border: none;
  border-radius: 10px;
}

.map-placeholder {
  height: 300px;
  border-radius: 10px;
}
</style>
