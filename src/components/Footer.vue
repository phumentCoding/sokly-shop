<!-- Footer.vue -->
<template>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <!-- Quick Links Section -->
          <div class="col-md-9">
            <h5 class="footer-title">QUICK LINKS</h5>
            <div class="row">
              <div class="col-6 col-md-3" v-for="(column, index) in quickLinksColumns" :key="index">
                <ul class="list-unstyled">
                  <li v-for="link in column" :key="link">
                    <a :href="`#${link.toLowerCase().replace(' ', '-')}`" class="footer-link">{{ link }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          <!-- Follow Us Section -->
          <div class="col-md-3">
            <h5 class="footer-title">FOLLOW US</h5>
            <ul class="list-unstyled">
              <li v-for="social in socialLinks" :key="social.name" class="mb-2">
                <a :href="social.url" target="_blank" class="footer-link d-flex align-items-center">
                  <img :src="social.icon" :alt="social.name" class="social-icon me-2" />
                  {{ social.name }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  
      <!-- Copyright Section -->
      <div class="copyright text-center py-3">
        Sokly Phone Shop © 2020. All Rights Reserved
      </div>
    </footer>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Quick Links data
  const quickLinks = [
    'Mobile Phone', 'Laptop', 'Play Station', 'Bluetooth Speaker',
    'Tablet', 'Earphone', 'Connector', 'Keyboard',
    'Smart Watch', 'Power Bank', 'Router Wireless', 'News',
    'Accessories', 'Adapter', 'Case', 'Contact us'
  ];
  
  // Split quick links into columns (4 columns for desktop, 2 for mobile)
  const quickLinksColumns = ref([]);
  const itemsPerColumn = Math.ceil(quickLinks.length / 4); // 4 columns
  for (let i = 0; i < quickLinks.length; i += itemsPerColumn) {
    quickLinksColumns.value.push(quickLinks.slice(i, i + itemsPerColumn));
  }
  
  // Social Media Links (icons are placeholders; replace with actual URLs or local assets)
  const socialLinks = ref([
    {
      name: 'Sokly Phone Shop',
      url: 'https://facebook.com',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' // Facebook icon
    },
    {
      name: 'Sokly Phone Cambodia',
      url: 'https://instagram.com',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' // Instagram icon
    },
    {
      name: 'Sokly Phone',
      url: 'https://t.me',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg' // Telegram icon
    }
  ]);
  </script>
  
<style lang="css" scoped>
  .footer {
    background-color: #f8f9fa;
    padding: 40px 0 0;
    border-top: 1px solid #dee2e6;
  }
  
  .footer-title {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin-bottom: 15px;
    text-transform: uppercase;
  }
  
  .footer-link {
    color: #666;
    font-size: 14px;
    text-decoration: none;
    line-height: 2;
  }
  
  .footer-link:hover {
    color: #007bff;
  }
  
  .social-icon {
    width: 24px;
    height: 24px;
  }
  
  .copyright {
    background-color: #e9ecef;
    color: #666;
    font-size: 14px;
    margin-top: 20px;
  }
  </style>