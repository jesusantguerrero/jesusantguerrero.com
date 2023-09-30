<template>
    <section class="">
         <div class="mt-5" v-if="seeds?.length">
            <h2 class="mb-1 text-xl font-bold text-gray-200 flex">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5L7 15.59V9H5v10h10v-2H8.41L19 6.41Z"/></svg>
                </span>
                Backlinks
            </h2>
            <ul class="list-disc list-inside">
                <li class="mb-2" v-for="seed in seeds">
                        <a :href="`/garden/seeds/${seed.slug}/preview`" class="text-accent-400">{{ seed.title }}</a>
                </li>
            </ul>
        </div>
    </section>
</template>
 
<script>
import { onMounted } from "vue";
import tippy, { animateFill, followCursor, hideAll } from "tippy.js";
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';

export default {
    props: {
        includes: {
            type: String, 
            default: '/garden/seeds/'
        },
        seeds: {
            type: Array
        }
    },
    setup(props) {
        const isSeedLink = (element) => {
            return element.nodeName == 'A' && element.href.includes(props.includes)
        }

        const addWebMentions = () => {
            const links = document.querySelectorAll('a');
            links.forEach(link => link.relList.add("webmention"));
        }

        const addListeners = () => {
            const links = document.querySelector('section');
            links.addEventListener('mouseover', async (event) => {
                if (isSeedLink(event.target)) {
                    let tip; 
                    tip = tippy(event.target, {
                        theme: 'slate',
                        content: 'Loading...',
                        allowHTML: true,
                        inertia: true,
                        plugins: [animateFill, followCursor],
                        placement: 'auto-end',
                        showOnCreate: true,
                        interactive: true,
                        maxWidth: 740,
                        onShow: async (instance) => {
                            hideAll();
                            const data = await fetch(`${event.target.href}?preview=true`)
                            .then(data => data.status == 200 ? data.text() : data.statusText)
                            .then(data => data)

                            const container = document.createElement('div');
                            container.style.width = '100%';
                            container.style.height = '300px';
                            container.style.display = 'block';
                            container.style.overflow = 'auto';
                            container.classList.add('ic-scroller')
                            container.innerHTML = data;
                            instance.setContent(container);
                            
                        },
                        onHidden: () => {
                            tip.destroy();
                        }
                    });
                }
            })
        }

        onMounted(() => {
            addListeners();
            addWebMentions();
        })
    }
}
</script>

<style lang="scss">
.tippy-box[data-inertia][data-state='visible'] {
  transition-timing-function: cubic-bezier();
}

.tippy-box[data-theme~='slate'] {
    @apply bg-slate-700 text-white;
    overflow: hidden;
}

.ic-scroller {
    &::-webkit-scrollbar-thumb {
      background-color: transparentize($color: #000000, $amount: 0.7);
      border-radius: 4px;
  
      &:hover {
        background-color: transparentize($color: #000000, $amount: 0.7);
      }
    }
  
    &::-webkit-scrollbar {
      background-color: transparent;
      width: 8px;
      height: 10px;
    }
  
    &-slim {
      transition: all ease 0.3s;
      &::-webkit-scrollbar {
        height: 0;
      }
  
      &:hover {
        &::-webkit-scrollbar {
          height: 3px;
        }
      }
    }
  }
</style>