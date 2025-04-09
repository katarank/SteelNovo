<template>
  <div class="video-container">
    <video 
        ref="videoElement"
        :src="videoSrc"
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
          <p>Failed to load: {{ videoSrc }}</p>
        </div>
    </div>
    <div v-if="!videoLoaded && !videoError" class="video-loading">
      Loading video...
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';

export default {
  name: 'VideoPlayer',
  props: {
    videoSrc: {
      type: String,
      required: true
    }
  },
  setup(props, { emit }) {
    const videoElement = ref(null);
    const videoLoaded = ref(false);
    const videoError = ref(false);

    // Handle video events
    const handleVideoLoaded = () => {
      console.log('Video loaded successfully:', props.videoSrc);
      videoLoaded.value = true;
      emit('videoLoaded');
    };

    const handleVideoError = (error) => {
      console.error('Video error:', error);
      console.error('Failed to load video from path:', props.videoSrc);
      videoError.value = true;
      emit('videoError', error);
    };

    // Video playback management
    onMounted(() => {
      console.log('VideoPlayer mounted, trying to play video from:', props.videoSrc);
      
      // Make sure the video src is valid
      if (!props.videoSrc) {
        console.error('No video source provided');
        videoError.value = true;
        return;
      }

      nextTick(() => {
        if (videoElement.value) {
          console.log('Loading video element');
          videoElement.value.load();
          
          const playPromise = videoElement.value.play();
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.error('Video playback error:', error);
              setTimeout(() => {
                if (videoElement.value) {
                  videoElement.value.muted = true;
                  videoElement.value.play().catch(e => console.error('Second attempt failed:', e));
                }
              }, 1000);
            });
          }
        } else {
          console.error('Video element reference is null');
        }
      });
    });

    return {
      videoElement,
      videoLoaded,
      videoError,
      handleVideoLoaded,
      handleVideoError
    };
  }
};
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100vw;
  height: 40vh; /* Full viewport height */
  overflow: hidden;
  background-color: #000; /* Black background if video is loading */
  z-index: 1; /* Move it behind the content */
  top: 0;
  left: 0;
}

.header-video {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Maintain aspect ratio while covering the area */
  display: block; /* Ensures proper rendering */
}

.video-fallback {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 20px;
}

.video-loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 1.2rem;
}
</style>
