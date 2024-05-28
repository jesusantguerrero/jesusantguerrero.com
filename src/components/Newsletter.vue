<script setup lang="ts">
    import { actions, getActionProps } from "astro:actions";

    const handleAction = async () => {
        const formData = new FormData(e.target);
        const result = await actions.newsletter(formData);
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
                <input name="fullname" type="name" placeholder="Full Name" id="full-name" class="flex items-center h-10 px-2 py-2 space-x-2 text-gray-200 border rounded-md border-slate-400 bg-slate-900">
            </section>
            <section class="flex flex-col space-y-2">
                <label for="email">Email</label>
                <input name="email" type="email" id="email" class="flex items-center h-10 px-2 py-2 space-x-2 text-gray-200 border rounded-md border-slate-400 bg-slate-900" />
            </section>
        </section>
        <section class="flex flex-col mt-4 space-y-2">
            <label for="message">How can I help you?</label>
            <textarea rows="5" name="message" id="textarea" class="flex items-center px-2 py-2 space-x-2 text-gray-200 border rounded-md border-slate-400 bg-slate-900" />
        </section>
        <button type="submit" class="w-full px-5 py-2 mx-auto mt-4 text-white transition rounded-md shadow-lg hover:bg-primary-400 bg-primary-500 shadow-primary-500/50">Send message</button>
        </form>
</template>