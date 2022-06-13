<script setup>
import {
  CodeIcon,
  HomeIcon,
  UserGroupIcon,
} from '@heroicons/vue/solid';

const { showSidebar } = defineProps(['showSidebar']);
</script>
<template>
  <aside
    class="bg-cyan-600 text-cyan-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out md:relative md:-translate-x-0"
    :class="{ 'relative -translate-x-0': showSidebar }"
  >
    <a href="#" class="flex items-center space-x-2 px-4">
      <CodeIcon class="h-10 w-10" />
      <span class="text-2xl font-extrabold">VueLaravel</span>
    </a>
    <nav>
      <router-link
        to="/dashboard"
        class="flex items-center py-3 px-4 space-x-2 hover:bg-cyan-700 rounded hover:text-cyan-300 transition duration-500"
      >
        <HomeIcon class="h-6 w-6" />
        <span>Dashboard</span>
      </router-link>

      <router-link
        to="/dashboard"
        class="flex items-center py-3 px-4 space-x-2 hover:bg-cyan-700 rounded hover:text-cyan-300 transition duration-500"
      >
        <UserGroupIcon class="h-6 w-6" />
        <span>Team</span>
      </router-link>
    </nav>
  </aside>
</template>
