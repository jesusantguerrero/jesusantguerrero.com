<template>
<div class="fixed z-30 w-full pt-3 text-gray-400 transition backdrop-blur-sm" :class="'bg-white/80'">
    <div class="flex items-center px-10 justify-between wrapper">
        <h1 class="text-2xl font-bold">
            <a href="/" v-if="scrolled || showLogo">
                JG
            </a>
        </h1>
        <nav class="flex space-x-2.5 font-medium list-none">
            <li class="transition cursor-pointer"
            :class="['hover:text-dodgerblue-400']" v-for="link in links">
                <a :href="link.path">
                    {{ link.label }}
                </a>
            </li>
        </nav>
    </div>
    <div class="h-0.5 mt-5 w-full transition-all backdrop-blur-sm" :class="(scrolled || showLogo) && 'bg-gradient-to-r from-accent-600/80 to-primary-300/80'"></div>
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
            garden: {
                label: "Digital Garden",
                path: "/garden"
            },
            uses: {
                label: "Uses",
                path: "/uses"
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