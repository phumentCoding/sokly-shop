<template>
    <!-- Top Header: Contact Info -->
    <header class="top-header">
      <div class="d-flex justify-content-end align-items-center">
        <div class="text-end">
          <p>Tel: 023 216 725/6, 078 311 111, 092 111 168, 078 911 166</p>
          <p>Sokly Phone Shop</p>
        </div>
      </div>
    </header>
  
    <!-- Main Header: Logo, Search Bar, Account -->
    <div class="main-header">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <!-- Logo -->
          <div class="logo">
            <img src="https://soklyphone.com/storage/image-2022-07-02-164325-1656755040dyQxA.jpg" alt="Sokly Phone Shop Logo">
          </div>
          <!-- Search Bar -->
          <div class="search-bar">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search" v-model="searchQuery">
              <button class="btn btn-primary" type="button" @click="handleSearch">Search</button>
            </div>
          </div>
          <!-- Account Link -->
          <a href="#" class="account-link">My Account <span class="ms-1">Register or Login</span></a>
        </div>
      </div>
    </div>
  
    <!-- Navigation Bar -->
    <nav class="nav-bar">
      <div class="container">
        <ul class="navbar-nav d-flex flex-row">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Product</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Laptops</a></li>
              <li><a class="dropdown-item" href="#">Phones</a></li>
              <li><a class="dropdown-item" href="#">Tablets</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Accessories</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Chargers</a></li>
              <li><a class="dropdown-item" href="#">Cases</a></li>
              <li><a class="dropdown-item" href="#">Headphones</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Secondhand</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Used Laptops</a></li>
              <li><a class="dropdown-item" href="#">Used Phones</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Special Offer</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Discounts</a></li>
              <li><a class="dropdown-item" href="#">Bundles</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pre Order</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">News</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script setup>
   import { ref } from 'vue';

   // Reactive state for the search query
  const searchQuery = ref('');
  
  // Handle search button click
  const handleSearch = () => {
    if (searchQuery.value.trim()) {
      console.log('Searching for:', searchQuery.value);
      // Add your search logic here (e.g., API call, route navigation)
    }
  };
</script>

<style lang="css" scoped>
  /* General header styling */
  .top-header {
    background-color: #f8f9fa;
    border-bottom: 1px solid #dee2e6;
    padding: 10px 20px;
    font-size: 14px;
  }
  
  .top-header p {
    margin: 0;
    color: #333;
  }
  
  /* Main header with logo, search, and account */
  .main-header {
    padding: 20px;
    background-color: #fff;
    border-bottom: 1px solid #dee2e6;
  }
  
  .logo img {
    height: 50px;
  }
  
  .search-bar {
    max-width: 500px;
    width: 100%;
  }
  
  .search-bar .input-group {
    width: 100%;
  }
  
  .search-bar .form-control {
    border-radius: 0;
    border-right: none;
  }
  
  .search-bar .btn {
    border-radius: 0;
    background-color: #007bff;
    border-color: #007bff;
  }
  
  .account-link {
    font-size: 16px;
    color: #333;
    text-decoration: none;
  }
  
  .account-link:hover {
    color: #007bff;
  }
  
  /* Navigation bar */
  .nav-bar {
    background-color: #003087;
    padding: 10px 20px;
  }
  
  .nav-bar .navbar-nav .nav-link {
    color: #fff;
    font-size: 16px;
    padding: 10px 15px;
  }
  
  .nav-bar .navbar-nav .nav-link:hover {
    color: #ffd700;
  }
  
  .nav-bar .dropdown-menu {
    border-radius: 0;
    border: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .nav-bar .dropdown-item {
    font-size: 14px;
    color: #333;
  }
  
  .nav-bar .dropdown-item:hover {
    background-color: #f8f9fa;
    color: #007bff;
  }
</style>