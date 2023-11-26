<script lang="ts" setup>
import { useAuth } from '~/middleware/auth.global'

const logout = () => {
  const router = useRouter()
  const { logout } = useAuth()
  logout()
  router.push('/login')
}
</script>

<template>
  <div class="rows-3 pt-10 pb-3">
    <h1 class="text-5xl w-full">
      halake-ops
    </h1>
    <div class="flex flex-row-reverse">
      <button @click="logout">
        Logout
      </button>
    </div>
    <hr class="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50">
  </div>
</template>
