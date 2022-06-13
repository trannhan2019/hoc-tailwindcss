<script setup>
import { MenuIcon } from '@heroicons/vue/solid';
</script>

<template>
  <header class="bg-white shadow px-2 py-4">
    <button @click="$emit('toggleSidebar')" class="md:hidden">
      <MenuIcon class="w-7 h-7 text-cyan-600 font-extrabold" />
    </button>
  </header>
</template>
