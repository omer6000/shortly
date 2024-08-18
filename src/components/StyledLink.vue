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
        // default: "text-grayishViolet",
      },
    //   textClass: {
    //     type: String,
    //     default: "text-grayishViolet",
    //   },
    //   hoverClass: {
    //     type: String,
    //     default: "hover:text-veryDarkBlue",
    //   },
    //   fontClass: {
    //     type: String,
    //     default: "font-poppins",
    //   },
    }
    ,
    // computed: {
    //   computedClasses() {
    //     return `${this.textClass} ${this.hoverClass}`;
    //   },
    // },
    // methods: {
    // //   handleClick(event) {
    // //   },
    // },
  };
  </script>  