<script setup lang="ts">
import { account } from "~/lib/appwrite";
import { useAuthStore, useIsLoadingStore } from "~/store/auth.store";

const isLoadingStore = useIsLoadingStore();
const authStore = useAuthStore();
const router = useRouter();

const logout = async () => {
  isLoadingStore.set(true);
  await account.deleteSession("current");
  authStore.clear();
  await router.push("/login");
  isLoadingStore.set(false);
};
</script>

<template>
  <aside class="px-5 py-8 bg-sidebar h-full relative w-full">
    <NuxtLink
      to="/"
      class="mb-10 block">
      <NuxtImg
        class="mx-auto"
        src="/logo.svg"
        width="140" />
    </NuxtLink>

    <button
      class="absolute top-2 right-3 transition-colors hover:text-primary"
      @click="logout">
      <Icon
        name="line-md:logout"
        size="20" />
    </button>
    <LayoutMenu />
  </aside>
</template>

<style scoped></style>
