<script setup lang="ts">
import { account } from "~/lib/appwrite";
import { useAuthStore, useIsLoadingStore } from "~/store/auth.store";

const isLoadingStore = useIsLoadingStore();
const authStore = useAuthStore();
const router = useRouter();

onMounted(async () => {
  try {
    const user = await account.get();
    if (user) {
      authStore.set(user);
    } else {
      router.push("/login");
    }
  } catch (error) {
    router.push("/login");
  } finally {
    isLoadingStore.set(false);
  }
});
</script>

<template>
  <LayoutLoader v-if="isLoadingStore.isLoading" />
  <section
    v-else
    :class="{ grid: authStore.isAuth }">
    <LayoutSidebar v-if="authStore.isAuth" />
    <div>
      <slot />
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 6fr;
  min-height: 100vh;
}
</style>
