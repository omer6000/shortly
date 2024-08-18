<template>
  <nav class="flex justify-between items-center py-4 px-8 md:px-16 bg-white shadow-md">
    <div class="text-3xl font-bold text-veryDarkViolet font-poppins">
      Shortly
    </div>

    <!-- Desktop Navigation Links (Hidden on Mobile) -->
    <div class="hidden desktop:flex space-x-8">
      <a href="#" class="text-grayishViolet hover:text-veryDarkBlue font-poppins">Features</a>
      <a href="#" class="text-grayishViolet hover:text-veryDarkBlue font-poppins">Pricing</a>
      <a href="#" class="text-grayishViolet hover:text-veryDarkBlue font-poppins">Resources</a>
    </div>

    <!-- Desktop Login and Sign Up (Hidden on Mobile) -->
    <div class="hidden desktop:flex items-center space-x-4">
      <a href="#" class="text-grayishViolet hover:text-veryDarkBlue font-poppins">
        Login
      </a>
      <a href="#" class="bg-cyan text-white py-2 px-4 rounded-full hover:bg-darkViolet font-poppins">
        Sign Up
      </a>
    </div>

    <!-- Mobile Menu Button (Hidden on Desktop) -->
    <button @click="toggleMenu" class="block desktop:hidden">
      <svg class="w-6 h-6 text-grayishViolet" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>

    <!-- Mobile Menu (Visible when the menu button is clicked) -->
    <div v-if="isMenuOpen" class="absolute top-16 left-0 w-full bg-white shadow-md desktop:hidden">
      <div class="flex flex-col items-center space-y-4 py-4">
        <a href="#" class="text-grayishViolet hover:text-veryDarkBlue font-poppins">Features</a>
        <a href="#" class="text-grayishViolet hover:text-veryDarkBlue font-poppins">Pricing</a>
        <a href="#" class="text-grayishViolet hover:text-veryDarkBlue font-poppins">Resources</a>
        <a href="#" class="text-grayishViolet hover:text-veryDarkBlue font-poppins">Login</a>
        <a href="#" class="bg-cyan text-white py-2 px-4 rounded-full hover:bg-darkViolet font-poppins text-center">
          Sign Up
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped></style>
