<template>
    <div></div>
</template>

<script>
import { onMounted } from "vue";
import tippy, { animateFill, followCursor, hideAll } from "tippy.js";
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';

export default {
    setup() {
        const isSeedLink = (element) => {
            return element.nodeName == 'A' && element.href.includes('/garden/seeds/')
        }

        const addListeners = () => {
            const links = document.querySelector('section');
            links.addEventListener('mouseover', async (event) => {
                if (isSeedLink(event.target)) {
                    let tip; 
                    tip = tippy(event.target, {
                        theme: 'light',
                        content: 'Loading...',
                        allowHTML: true,
                        inertia: true,
                        interactive: true,
                        plugins: [animateFill, followCursor],
                        placement: 'auto-end',
                        showOnCreate: true,
                        onShow: async (instance) => {
                            hideAll();
                            const data = await fetch(event.target.href).then(data => data.text()).then(data => data)
                            instance.setContent(data);
                        },
                        onHidden: () => {
                            tip.destroy();
                        }
                    });
                }
            })
        }

        onMounted(() => {
            console.log("Hola")
            addListeners();
        })
    }
}
</script>

<style>
.tippy-box[data-inertia][data-state='visible'] {
  transition-timing-function: cubic-bezier(...);
}
</style>