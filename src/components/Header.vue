<template>
<div class="fixed z-10 w-full px-10 py-3 text-gray-400 transition" :class="{'shadow-md bg-accent-500 text-white': scrolled}">
    <div class="flex justify-between wrapper">
        <h1 class="text-2xl font-bold">JG</h1>
        <nav class="flex space-x-2 font-medium list-none">
            <li class="cursor-pointer">Home</li>
            <li class="cursor-pointer">Projects</li>
            <li class="cursor-pointer">Blog</li>
            <li class="cursor-pointer">More</li>
        </nav>
    </div>
</div>
</template>

<script>
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