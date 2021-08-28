<template>
    <div class="h-10 px-12 py-2 rounded-md text-accent-100 bg-primary-500">
        {{ searchText }} Hola
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps({
    text: {
        type: String,
        default: 'My stuff',
    },
    speed: {
        type: Number,
        default: 200,
    },
})

let searchText = $ref('');
const timer = ref(null);

const write = () => {
    searchText = props.text.slice(0, searchText.length + 1);
    if (searchText.length == props.text.length) {
        clearInterval(timer.value);
    }
}

onMounted(() => {
    timer.value = setInterval(write, props.speed);
})
</script>