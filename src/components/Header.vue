<template>
<div class="fixed z-10 w-full px-10 py-3 text-gray-400 transition" :class="{'shadow-md bg-accent-500 text-white': scrolled}">
    <div class="flex justify-between wrapper">
        <h1 class="text-2xl font-bold">
            <a href="/">
                JG
            </a>
        </h1>
        <nav class="flex space-x-2.5 font-medium list-none">
            <li class="cursor-pointer hover:text-dodgerblue" v-for="link in links">
                <a :href="link.path">
                    {{ link.label }}
                </a>
            </li>
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
        const links = {
            home: {
                label: "Home",
                path: "/"
            },
            garden: {
                label: "Digital Garden",
                path: "/garden"
            },
            projects: {
                label: "Projects",
                path:"/#projects"
            },
            blog: {
                label: "Blog",
                path:"/#blog"
            },
            more: {
                label: "More",
                path: "/#more"
            }
        }

        const checkScroll = () => {
           scrolled.value = window.scrollY >  document.querySelector('.project-section').offsetTop;
        }

        onMounted(() => {
            document.addEventListener('scroll', checkScroll);
        });

        return {
            scrolled,
            links,
        }
    }
}
</script>