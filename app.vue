<script setup lang="ts">
import type { Task } from './server/api/task'

const tasks = (await $fetch('/api/task').catch((error) => { return error.data }) as Task[])
</script>

<template>
  <div>
    <div v-for="task in tasks" :key="task.title">
      {{ task.title }}
    </div>
  </div>
</template>
