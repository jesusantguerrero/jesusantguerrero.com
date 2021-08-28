<template>
    <div class="h-10 px-12 py-2 rounded-md text-accent-100 bg-primary-500">
        {{ searchText }}<span v-show="isWriting">|</span>
    </div>
</template>

<script lang="ts">
import { ref, onMounted, computed } from 'vue';

export default {
    props: {
        text: {
            type: String,
            default: 'My stuff',
        },
        speed: {
            type: Number,
            default: 200,
        },
    },
    setup(props, { emit }) {
        const searchText = ref('');
        const timer = ref(null);
        
        const write = () => {
            searchText.value = props.text.slice(0, searchText.value.length + 1);
            if (searchText.value.length == props.text.length) {
                clearInterval(timer.value);
                timer.value = null;
            }
        }
        
        const isWriting = computed(() => {
            return timer.value !== null;
        });

        onMounted(() => {
            console.log("Mounted again")
            timer.value = setInterval(write, props.speed);
        })

        return {
            searchText,
            isWriting,
        }
    }
}

</script>