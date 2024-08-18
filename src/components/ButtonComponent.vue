<template>
  <button :class="[baseClasses, customClasses]">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    text: {
      type: String,
      required: true,
    },
    customClasses: {
      type: String,
      default: '',
    },
    baseClasses: {
      type: String,
      default: 'bg-cyan text-white hover:bg-darkViolet font-medium',
    },
  },
};
</script>

<!-- <style scoped></style> -->
