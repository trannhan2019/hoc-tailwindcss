<script setup>
import { ref } from 'vue';
import Sidebar from '../components/Sidebar.vue';
import Header from '../components/Header.vue';

const showSidebar = ref(false);
const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};
</script>
<template>
  <div class="relative flex min-h-screen">
    <!-- Sidebar -->
    <Sidebar :showSidebar="showSidebar" />
    <!-- Main content -->
    <div class="flex-1">
      <Header @toggleSidebar="toggleSidebar" />
      <router-view />
    </div>
  </div>
</template>
