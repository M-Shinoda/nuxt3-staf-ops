export const useAuth = () => {
  const cookie = useCookie('isLogin')

  const login = () => {
    cookie.value = true.toString()
  }

  const logout = () => {
    cookie.value = null
  }

  const getIsLogedIn = ():boolean => {
    return cookie.value?.toString() === 'true'
  }

  return {
    getIsLogedIn,
    login,
    logout
  }
}

export default defineNuxtRouteMiddleware((to, from) => {
  const { getIsLogedIn } = useAuth()
  const isLogined = getIsLogedIn()
  const router = useRouter()

  if (!isLogined) {
    if (to.path === from.path) {
      if (to.path !== '/login') {
        router.push('/login')
      }
    }
  } else if (to.path === '/login') {
    router.push('/task')
  }
})
