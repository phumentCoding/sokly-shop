<template>
    <div class="container my-5">
      <h2 class="text-center mb-4">Popular Brands</h2>
      <div class="brand-grid">
        <div v-for="(brand, index) in brands" :key="index" class="brand-card">
          <img :src="brand.image" :alt="brand.name" class="brand-logo" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import { getBrands } from '../services/jsonService';
  
  const brands = ref([]);
  
  onMounted(async () => {
    brands.value = await getBrands();
  });
  </script>
  
  <style scoped>
  .brand-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    grid-template-rows: auto;
    gap: 15px;
    justify-content: center;
  }
  
  @media (min-width: 1200px) {
    .brand-grid {
      grid-template-columns: repeat(12, 1fr);
    }
  }
  
  .brand-card {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }
  
  .brand-card:hover {
    transform: scale(1.1);
  }
  
  .brand-logo {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  </style>
  