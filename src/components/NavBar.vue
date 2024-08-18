<template>
  <nav class="flex justify-between items-center py-4 px-8 desktop:px-16 shadow-md text-body font-medium">
    <!-- Logo/Icon -->
    <div class="flex items-center space-x-8">
      <img src="@/assets/logo.svg" alt="Shortly Icon" class="w-14 h-14 md:w-28 md:h-28">
      
      <!-- Desktop Navigation Links (Hidden on Mobile) -->
      <div class="hidden desktop:flex space-x-8">
        <StyledLink text="Features" />
        <StyledLink text="Pricing" />
        <StyledLink text="Resources" />
      </div>
    </div>

    <!-- Desktop Login and Sign Up (Hidden on Mobile) -->
    <div class="hidden desktop:flex items-center space-x-4">
      <StyledLink text="Login" />
      <ButtonComponent text="Sign Up" customClasses="rounded-full px-4 py-2"/>
    </div>

    <!-- Mobile Menu Button (Hidden on Desktop) -->
    <button @click="toggleMenu" class="block desktop:hidden">
      <svg class="w-6 h-6 text-grayishViolet" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>

    <!-- Mobile Menu (Visible when the menu button is clicked) -->
    <div v-if="isMenuOpen" class="absolute top-16 left-0 w-full darkViolet shadow-md desktop:hidden bg-darkViolet">
      <div class="flex flex-col items-center space-y-4 py-4">
        <StyledLink text="Features" />
        <StyledLink text="Pricing" />
        <StyledLink text="Resources" />
        <hr class="w-full border-t border-grayishViolet">
        <StyledLink text="Login" />
        <ButtonComponent text="Sign Up" customClasses="rounded-full px-4 py-2"/>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import StyledLink from './StyledLink.vue';
import ButtonComponent from './ButtonComponent.vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<!-- <style scoped></style> -->
