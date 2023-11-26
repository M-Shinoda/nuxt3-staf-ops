<script lang="ts" setup>
import { useAuth } from '~/middleware/auth.global'

const login = () => {
  const router = useRouter()
  const { login } = useAuth()
  login()
  router.push('/task')
}
</script>

<template>
  <div>
    <button @click="login">
      Login
    </button>
  </div>
</template>
