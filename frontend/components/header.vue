<template>
    <div class="shadow py-5 flex justify-center border-b border-gray-300">
        <div class=" flex justify-between w-11/12">
            <div class="text-4xl">Askeladds</div>
            <div class="flex gap-5 w-1/5">
                <MenuItem @click="navigateTo('home')" icon="house" />
                <MenuItem @click="navigateTo('profile')" icon="user" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { navigateTo } from 'nuxt/app'
import MenuItem from "./utilities/MenuItem.vue";

</script>