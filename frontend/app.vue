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
import { useNuxtApp } from "nuxt/app";
import { computed, ref } from "@vue/reactivity";

const { $supabase } = useNuxtApp()
const loading = ref<boolean>(true)

$supabase?.auth.onAuthStateChange(() => {
    loading.value = false
})
</script>