<template>
    <a :href="href" :class="styletext">{{ text }}</a>
  </template>
  
  <script>
  export default {
    name: "StyledLink",
    props: {
      href: {
        type: String,
        default: "#",
      },
      text: {
        type: String,
        required: true,
      },
      styletext: {
        type: String,
        default: 'text-grayishViolet hover:text-veryDarkBlue font-poppins',
      },
    },
  };
  </script>  