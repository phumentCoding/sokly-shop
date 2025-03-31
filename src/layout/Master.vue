<!-- Header.vue -->
<template>

    <Header/>

    <section class="main-conents">
        <RouterView/>
    </section>

    <Footer/>

</template>
  
<script setup>
  import { RouterView } from 'vue-router';
  import Footer from '../components/Footer.vue';
  import Header from '../components/Header.vue';
</script>

  
  