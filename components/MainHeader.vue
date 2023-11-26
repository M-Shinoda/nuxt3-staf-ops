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
  <div class="header">
    <h1>タイトル</h1>
    <div>
      <button @click="logout">
        Logout
      </button>
    </div>
  </div>
</template>

<style>
.header {
  background-color: blue;
  color: aliceblue;
  display: flex;
}
</style>
