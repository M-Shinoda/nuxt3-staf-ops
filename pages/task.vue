<script setup lang="ts">
import type { Task } from '../server/api/task'

const tasks = (await $fetch('/api/task').catch((error) => { return error.data }) as Task[])
</script>

<template>
  <div>
    <h1 class="text-xl py-2">
      タスク一覧
    </h1>
    <table class="w-full text-left bg-gray-500 rounded-md">
      <thead>
        <tr class="border-b-2 border-black">
          <th class="text-xs w-2/6 border-r-2 border-black">
            タスク名
          </th>
          <th class="text-xs w-4/6">
            操作
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.title">
          <td class="text-sm py-3 border-r-2 border-t border-black">
            {{ task.title }}
          </td>
          <td class="rows-2 border-t border-black w-full">
            <button class="text-sm rounded bg-gray-300 px-4 py-1 mx-3">
              詳細を見る
            </button>
            <button class="text-sm rounded bg-gray-300 px-4 py-1 mx-3">
              実行する
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
