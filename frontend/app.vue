<template>
  <div>
    <NuxtRouteAnnouncer />
      <Header  />
      <NuxtPage v-if="!loading" />
      <div v-else>Loading...</div>
  </div>
</template>
<script setup lang="ts">
import Header from "./components/header.vue";

const { $supabase } = useNuxtApp()
const loading = ref<boolean>(true)

$supabase.auth.onAuthStateChange(() => {
    loading.value = false
})

const loaded = computed(() => {
    return !!$supabase
})
</script>