import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface User {
  id: number
  name: string
  email: string
  badge: 1 | 2 | 3
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isAuthenticated = computed(() => !!user.value)

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Simulate password validation (for demo purposes)
    console.log('Login attempt with password:', password ? '***' : 'empty')

    // Simulate successful login with random badge
    const randomBadge = (Math.floor(Math.random() * 3) + 1) as 1 | 2 | 3

    user.value = {
      id: 1,
      name: 'Jhoe Doe',
      email: email || 'jhoedoe@gmail.com',
      badge: randomBadge
    }

    // Save to localStorage
    localStorage.setItem('user', JSON.stringify(user.value))

    return true
  }

  const logout = () => {
    user.value = null
    localStorage.removeItem('user')
  }

  const checkAuth = () => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      user.value = JSON.parse(savedUser)
    }
  }

  return {
    user,
    isAuthenticated,
    login,
    logout,
    checkAuth
  }
})
