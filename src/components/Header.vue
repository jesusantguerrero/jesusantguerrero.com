<template>
<div class="fixed z-30 w-full px-10 py-3 text-gray-400 transition" :class="[ scrolled ? 'shadow-md bg-accent-500 text-white': 'bg-white']">
    <div class="flex items-center justify-between wrapper">
        <h1 class="text-2xl font-bold">
            <a href="/" v-if="scrolled || showLogo">
                JG
            </a>
        </h1>
        <nav class="flex space-x-2.5 font-medium list-none">
            <li class="transition cursor-pointer"
            :class="[scrolled ? 'text-gray-200 hover:text-white': 'hover:text-dodgerblue-400']" v-for="link in links">
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
    props: {
        showLogo: {
            type: Boolean
        }
    },
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
                path:"/#writing"
            },
            more: {
                label: "More",
                path: "/#more"
            }
        }

        const checkScroll = () => {
            const projectSection = document.querySelector('.project-section');
            if (projectSection) {
                scrolled.value = window.scrollY >  projectSection.offsetTop;
            }
        }

        onMounted(() => {
            checkScroll();
            document.addEventListener('scroll', checkScroll);
        });

        return {
            scrolled,
            links,
        }
    }
}
</script>