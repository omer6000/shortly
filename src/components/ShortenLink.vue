<template>
    <div class="relative bg-gray flex flex-col items-center py-12">
      <div class="absolute inset-x-0 top-0 h-1/2 bg-white"></div>
      <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
      
      <!-- Mobile Version -->
      <div class="relative w-full max-w-md mx-auto bg-darkViolet md:hidden mb-8 z-10">
        <!-- Mobile Background Image -->
        <img src="@/assets/bg-shorten-mobile.svg" alt="Mobile Background" class="w-full max-h-40 rounded-lg">
  
        <!-- Input and Button Overlay -->
        <div class="absolute inset-0 flex flex-col items-center px-4 py-2 space-y-2">
          <input 
            v-model="newLink"
            type="text" 
            :class="['w-full px-3 py-2 rounded-lg text-lg outline-none focus:ring-2', hasError ? 'border-2 border-red text-red' : 'text-grayishViolet']"
            placeholder="Shorten a link here..." 
          />
          <button @click="addLink" class="w-full bg-cyan text-white px-4 py-2 rounded-lg text-lg hover:bg-opacity-70">
            Shorten It!
          </button>
          <p v-if="hasError" class="text-red text-sm mt-2">Please add a link</p>
        </div>
      </div>
      
      <!-- Desktop Version -->
      <div class="relative w-full max-w-4xl mx-auto bg-darkViolet hidden md:block mb-8 z-10">
        <!-- Desktop Background Image -->
        <img src="@/assets/bg-shorten-desktop.svg" alt="Desktop Background" class="w-full rounded-lg">
    
        <!-- Input and Button Overlay -->
        <div class="absolute inset-0 flex flex-col md:flex-row items-center px-4 md:px-8 py-2 md:py-4 rounded-full space-y-2 md:space-y-0 md:space-x-4">
          <!-- Input and Error Wrapper -->
          <div class="flex flex-col w-full md:w-auto md:flex-grow">
            <input 
              v-model="newLink"
              type="text" 
              :class="['w-full px-3 py-2 rounded-lg text-lg md:text-xl outline-none focus:ring-2', hasError ? 'border-2 border-red text-red' : 'text-grayishViolet']"
              placeholder="Shorten a link here..." 
            />
            <p v-if="hasError" class="text-red text-sm mt-1 md:mt-2">Please add a link</p>
          </div>
          <div class="md:ml-4 flex-shrink-0 w-full md:w-auto">
            <button @click="addLink" class="w-full bg-cyan text-white px-4 py-2 rounded-lg text-lg md:text-xl hover:bg-opacity-70">
              Shorten It!
            </button>
          </div>
        </div>
      </div>
    
      <!-- Display the Shortened Links -->
      <div v-for="(link, index) in links" :key="index" class="relative flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4 w-full max-w-4xl z-20">
        <a :href="link.url" target="_blank" class="text-veryDarkViolet text-lg truncate">{{ link.url }}</a>
        <button 
          @click="copyToClipboard(link.url)" 
          :class="['px-4 py-2 rounded-lg', link.copied ? 'bg-darkViolet text-white' : 'bg-cyan text-white']"
          class="hover:bg-opacity-70"
        >
          {{ link.copied ? 'Copied!' : 'Copy' }}
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const newLink = ref('');
  const links = ref([]);
  const hasError = ref(false);
  
  const addLink = () => {
    if (!newLink.value) {
      hasError.value = true; // Show error if the input is empty
      return;
    }
  
    links.value.push({ url: newLink.value, copied: false });
    newLink.value = ''; // Clear the input after adding the link
    hasError.value = false; // Reset error state after successful submission
  };
  
  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url).then(() => {
      const linkIndex = links.value.findIndex(link => link.url === url);
      links.value[linkIndex].copied = true;
      setTimeout(() => {
        links.value[linkIndex].copied = false; // Reset copied state after a short delay
      }, 2000);
    });
  };
  </script>
  