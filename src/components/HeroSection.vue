<template>
    <div class="font-poppins text-body">
        <section class="flex flex-col items-center text-center desktop:flex-row desktop:justify-between py-6 desktop:py-24">
            <!-- Illustration (will be on top for mobile) -->
            <div class="order-1 desktop:order-2 desktop:w-1/2 flex justify-center mt-4 desktop:mt-0">
                <img src="@/assets/illustration-working.svg" alt="Illustration" class="w-3/4 max-w-xs desktop:max-w-full h-auto">
            </div>
            <!-- Text Content (will be below illustration on mobile) -->
            <div class="order-2 desktop:order-1 desktop:w-1/2 px-4 desktop:px-16 desktop:text-start">
                <h1 class="text-4xl desktop:text-7xl font-bold text-veryDarkViolet leading-tight">
                    More than just
                </h1>
                <h1 class="text-4xl desktop:text-7xl font-bold text-veryDarkViolet leading-tight py-2">
                    shorter links
                </h1>
                <p class="text-grayishViolet text-lg font-medium mt-4">
                    Build your brand's recognition and get detailed insights on how your links are performing.
                </p>
                <ButtonComponent text="Get Started" customClasses="bg-cyan text-white rounded-full px-8 py-3 mt-8"/>
            </div>
        </section>
    </div>
</template>

<script setup>
import ButtonComponent from './ButtonComponent.vue';
</script>

<!-- <style scoped></style> -->
