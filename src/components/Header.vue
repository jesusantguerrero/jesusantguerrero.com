<template>
<div class="fixed z-10 w-full h-16 transition" :class="{'shadow-md bg-primary-500': scrolled}">
    <div class="wrapper" v-if="scrolled"></div>
</div>
</template>

<script >

import { onMounted, ref } from 'vue'

export default {
    name: 'Header',
    setup() {
        const scrolled = ref(false);

        const checkScroll = () => {
           scrolled.value = window.scrollY >  document.querySelector('.project-section').offsetTop;
        }

        onMounted(() => {
            document.addEventListener('scroll', checkScroll);
        });

        return {
            scrolled,
        }
    }
}
</script>