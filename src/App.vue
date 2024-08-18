<template>
  <div class="flex flex-col min-h-screen">
    <NavBar/>
    <HeroSection/>
    <ShortenLink/>
  </div>
</template>
<script setup>
  import NavBar from './components/NavBar.vue'
  import HeroSection from './components/HeroSection.vue'
  import ShortenLink from './components/ShortenLink.vue'
</script>