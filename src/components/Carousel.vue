<template>
    <div class="carousel-container">
      <!-- Swiper Component -->
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        :pagination="{ clickable: true }"
        :navigation="true"
        :loop="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        class="mySwiper"
      >
        <!-- Slide 1: iPhone 16 Pro and Pro Max -->
        <swiper-slide>
          <div class="slide-content">
            <div class="text-content">
              <h1>iPhone 16 Pro and 16 Pro Max</h1>
              <p>
                Larger screen of 6.3" and 16 Pro Max to 6.9". The edge of the screen is shorter than before. Equipped with 48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto can record 4K 120fps.
              </p>
            </div>
            <div class="image-content">
                <img src="https://example.com/iphone-16-pro.png" alt="iPhone 16 Pro">
            </div>
          </div>
        </swiper-slide>
  
        <!-- Slide 2: Discount Banner -->
        <swiper-slide>
          <div class="slide-content discount-slide">
            <div class="text-content">
              <h1>Selected Item Up to 80% OFF</h1>
              <p>Shop now and save big on your favorite tech!</p>
            </div>
            <div class="image-content">
                <img src="https://example.com/iphone-16-pro.png" alt="iPhone 16 Pro">
            </div>
          </div>
        </swiper-slide>
  
        <!-- Slide 3: Another iPhone Feature -->
        <swiper-slide>
          <div class="slide-content">
            <div class="text-content">
              <h1>Explore the New Colors</h1>
              <p>Available in Black Titanium, White Titanium, Natural Titanium, and Desert Titanium.</p>
            </div>
            <div class="image-content">
                <img src="https://example.com/iphone-16-pro.png" alt="iPhone 16 Pro">
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation, Pagination, Autoplay } from 'swiper/modules';
  
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  
  export default {
    name: 'Carousel',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Navigation, Pagination, Autoplay],
      };
    },
  };
  </script>
  
  <style scoped>
  .carousel-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .mySwiper {
    width: 100%;
    height: 400px;
  }
  
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f0f4f8;
    border-radius: 10px;
  }
  
  .slide-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px;
  }
  
  .discount-slide {
    background: linear-gradient(90deg, #ff6f61, #ffcc00);
    color: white;
  }
  
  .text-content {
    flex: 1;
    padding-right: 20px;
  }
  
  .text-content h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  
  .text-content p {
    font-size: 1.2rem;
    color: #333;
  }
  
  .discount-slide .text-content p {
    color: white;
  }
  
  .image-content {
    flex: 1;
    text-align: center;
  }
  
  .image-content img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  /* Navigation and Pagination Styles */
  :deep(.swiper-pagination-bullet) {
    background: #007aff;
  }
  
  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    color: #007aff;
  }
  </style>