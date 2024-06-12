<script setup lang="ts">
    import { actions, getActionProps } from "astro:actions";
    import { ref } from "vue";
    import { useForm } from "atmosphere-ui";

    const isLoading = ref(false);
    const form = useForm({
        fullName: '',
        email: '',
        message: ''
    });
    const handleAction = async (e: any) => {
        if (isLoading.value) return
        isLoading.value = true;
        try {
            const formData = new FormData(e.target);
            const result = await actions.newsletter(formData);
            form.reset();
            console.log(result);
        } finally {
            isLoading.value = false
        }
    }
</script>

<template>
    <form
          method="POST"
          @submit.prevent="handleAction"
        >
        <input v-bind="{...getActionProps(actions.newsletter)}" />
        <section class="flex space-x-4">
            <section class="flex flex-col space-y-2">
                <label for="email">Full Name</label>
                <input name="fullName" v-model="form.fullName" type="name" placeholder="Full Name" id="full-name" class="flex items-center h-10 px-2 py-2 space-x-2 text-gray-200 border rounded-md border-slate-400 bg-slate-900">
            </section>
            <section class="flex flex-col space-y-2">
                <label for="email">Email</label>
                <input name="email" v-model="form.email" type="email" id="email" placeholder="me@example.com" class="flex items-center h-10 px-2 py-2 space-x-2 text-gray-200 border rounded-md border-slate-400 bg-slate-900" />
            </section>
        </section>
        <section class="flex flex-col mt-4 space-y-2">
            <label for="message">How can I help you?</label>
            <textarea rows="5" name="message" v-model="form.message" id="textarea" class="flex items-center px-2 py-2 space-x-2 text-gray-200 border rounded-md border-slate-400 bg-slate-900" />
        </section>
        <button :disabled="isLoading" type="submit" class="w-full px-5 py-2 mx-auto mt-4 text-white transition rounded-md shadow-lg hover:bg-primary-400 bg-primary-500 shadow-primary-500/50">
            Send message <span v-if="isLoading">...</span>
        </button>
        </form>
</template>