<template>
    <div class="container">
        <Navbar />
        <ChatWindow />
        <NewChatForm />
    </div>
</template>
<script>
import NewChatForm from '../components/NewChatForm.vue'
import Navbar from '@/components/Navbar.vue';
import getUser from '@/composables/getUser';
import ChatWindow from '../components/ChatWindow.vue';
import { useRouter } from 'vue-router';
import { watch } from 'vue';

export default {
    components: { Navbar, ChatWindow, NewChatForm },
    setup() {
        const { user } = getUser();
        const router = useRouter();

        // if the user is null or on logout redirect to welcome page,
        watch(user, () => {
            if (!user.value) {
                router.push({ name: 'Welcome' });
            }
        })
    }
}
</script>