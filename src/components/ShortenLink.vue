<template>
    <div class="relative bg-gray flex justify-center items-center py-12">
        <div class="absolute inset-x-0 top-0 h-1/2 bg-white"></div>
        <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
        
        <!-- Mobile Version -->
        <div class="relative w-full max-w-md mx-auto bg-darkViolet md:hidden">
            <!-- Mobile Background Image -->
            <img src="@/assets/bg-shorten-mobile.svg" alt="Mobile Background" class="w-full max-h-40 rounded-lg">
    
            <!-- Input and Button Overlay -->
            <div class="absolute inset-0 flex flex-col items-center px-4 py-2 space-y-2">
            <input 
                type="text" 
                placeholder="Shorten a link here..." 
                class="w-full px-3 py-2 rounded-lg text-lg text-grayishViolet outline-none focus:ring-2 focus:ring-cyan"
            />
            <button class="w-full bg-cyan text-white px-4 py-2 rounded-lg text-lg hover:bg-darkViolet">
                Shorten It!
            </button>
            </div>
        </div>
        
        <!-- Desktop Version -->
        <div class="relative w-full max-w-4xl mx-auto bg-darkViolet hidden md:block">
            <!-- Desktop Background Image -->
            <img src="@/assets/bg-shorten-desktop.svg" alt="Desktop Background" class="w-full rounded-lg">
    
            <!-- Input and Button Overlay -->
            <div class="absolute inset-0 flex flex-col md:flex-row items-center px-4 md:px-8 py-2 md:py-4 rounded-full space-y-2 md:space-y-0 md:space-x-4">
            <input 
                type="text" 
                placeholder="Shorten a link here..." 
                class="flex-grow px-3 py-2 rounded-lg text-lg md:text-xl text-grayishViolet outline-none focus:ring-2 focus:ring-cyan"
            />
            <button class="w-full md:w-auto bg-cyan text-white px-4 py-2 rounded-lg text-lg md:text-xl hover:bg-darkViolet">
                Shorten It!
            </button>
            </div>
      </div>
  
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped></style>
  