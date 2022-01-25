<template>
    <div class="flex items-center h-12 px-5 py-2 space-x-2 text-gray-400 bg-gray-100 rounded-md">
        <div class="w-5 h-5">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12"><g fill="none"><path d="M5 1a4 4 0 1 0 2.453 7.16l2.693 2.694a.5.5 0 0 0 .707-.708L8.16 7.453A4 4 0 0 0 5 1zM2 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0z" fill="currentColor"></path></g></svg>
        </div>
        <div>
            {{ searchText }}<span v-show="isWriting">|</span>
        </div>
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
            timer.value = setInterval(write, props.speed);
        })

        return {
            searchText,
            isWriting,
        }
    }
}

</script>