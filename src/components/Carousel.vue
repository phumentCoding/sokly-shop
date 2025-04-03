<template>
    <div class="carousel-container my-4">
        <!-- Swiper Component -->
        <div class="row">
            <div class="col-lg-9">
                <swiper 
                    v-if="slides.length > 0"
                    :modules="modules" 
                    :slides-per-view="1" 
                    :space-between="50"
                    :pagination="{ clickable: true }" 
                    :navigation="false" 
                    :loop="true"
                    :autoplay="{ delay: 3000, disableOnInteraction: false }" 
                    class="mySwiper1"
                >
                
                    <swiper-slide v-for="slide in slides" :key="slide.id">
                        <div class="slide-content">
                            <div class="text-content">
                                <h1>{{ slide.title }}</h1>
                                <p>{{ slide.desc }}</p>
                                <button class="btn btn-primary">{{ slide.cta }}</button>
                            </div>
                            <div class="image-content">
                                <img :src="slide.image" alt="iPhone 16 Pro">
                            </div>
                        </div>
                    </swiper-slide>

                   

                </swiper>
            </div>

            <div class="col-lg-3">
                <swiper 
                    v-if="posters.length > 0"
                    :modules="modules" 
                    :slides-per-view="1" 
                    :space-between="50" 
                    :pagination="{ clickable: true }"
                    :navigation="false" 
                    :loop="true" 
                    :autoplay="{ delay: 5000, disableOnInteraction: false }"
                    class="mySwiper2"
                >
                    <swiper-slide v-for="poster in posters" :key="poster.id">
                        <div class="slide-content">
                            <div class="image-content">
                                <img style="width: 100%; height: 100%;" src="https://soklyphone.com/storage/Advertises/2025/03-03-2025/hmd-skyline-5g-1-1742975248CG9Px.png" :alt="poster.name">
                            </div>
                        </div>
                    </swiper-slide>

                    

                  
                </swiper>
            </div>
            
        </div>
    </div>
</template>

<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation, Pagination, Autoplay } from 'swiper/modules';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import { onMounted, ref } from 'vue';
    import { getPosters, getSlides } from '../services/jsonService';

    const modules = [Navigation, Pagination, Autoplay];

    //create state
    const slides = ref([]);
    const posters = ref([]);

    onMounted( async () => {
        slides.value = await getSlides();
        posters.value = await getPosters();
    });

</script>

<style scoped>
.carousel-container {
    width: 80%;
    margin: auto;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f0f4f8;
    border-radius: 10px;
    height: 400px;
}

.slide-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
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

.text-content h2 {
    font-size: 2rem;
    margin-bottom: 10px;
}

.text-content p {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 15px;
}

.discount-slide .text-content p {
    color: white;
}

.image-content {
    flex: 1;
    text-align: center;
}

.image-content img {
    width: 100%;
    height: 300px;
    object-fit: contain;
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

.btn {
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-primary {
    background-color: #007aff;
    color: white;
    border: none;
}

.btn-primary:hover {
    background-color: #0062cc;
}
</style> 