<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[100] flex items-end md:items-center justify-center"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-black/60 backdrop-blur-sm"
          @click="closeModal"
        ></div>

        <!-- Modal Content -->
        <div
          class="relative bg-[#1E2530] md:bg-[#2A3441] rounded-t-[20px] md:rounded-[10px] overflow-hidden shadow-2xl w-full md:max-w-[886px] flex flex-col md:flex-row border-t md:border border-border transform transition-all duration-300 max-h-[90vh] md:max-h-none"
        >
          <!-- Left Side - Mascot & Info (Desktop only) -->
          <div
            class="hidden md:flex flex-col justify-center items-center p-6 lg:p-8 bg-[#2A3441] md:w-[380px] lg:w-[420px]"
          >
            <div class="flex justify-center mb-4">
              <img
                src="@/assets/images/img-login.png"
                alt="Mascot"
                class="w-40 lg:w-64 h-auto object-contain"
              />
            </div>
            <h2
              class="text-lg lg:text-xl font-bold text-white mb-2 text-center leading-tight"
            >
              Masuk dan nikmati kemudahan<br />dalam melakukan Top up!
            </h2>
            <p class="text-xs lg:text-sm text-text-muted text-center leading-relaxed">
              Dengan masuk ke Teman Gabutmu, kamu menyetujui
              <a href="#" class="text-secondary hover:underline">Syarat dan Ketentuan</a
              >,serta
              <a href="#" class="text-secondary hover:underline">Kebijakan Privasi</a>
            </p>
          </div>

          <!-- Right Side - Form -->
          <div class="flex-1 bg-[#1E2530] p-5 md:p-6 lg:p-8 relative overflow-y-auto">
            <!-- Close Button -->
            <button
              @click="closeModal"
              class="absolute top-4 right-4 text-text-muted hover:text-text-primary hover:rotate-90 transition-all duration-200"
            >
              <X :size="22" />
            </button>

            <!-- Mobile Header with Mascot -->
            <div class="md:hidden flex flex-col items-center mb-6">
              <img
                src="@/assets/images/img-login.png"
                alt="Mascot"
                class="w-28 h-auto object-contain mb-4"
              />
              <h2 class="text-lg font-bold text-white mb-2 text-center leading-tight">
                Masuk dan nikmati kemudahan<br />dalam melakukan Top up!
              </h2>
              <p class="text-xs text-text-muted text-center leading-relaxed">
                Dengan masuk ke Teman Gabutmu, kamu menyetujui
                <a href="#" class="text-secondary hover:underline">Syarat dan Ketentuan</a>
                serta
                <a href="#" class="text-secondary hover:underline">Kebijakan Privasi</a>
              </p>
            </div>

            <!-- Tabs -->
            <div class="flex justify-center md:justify-start gap-6 mb-6">
              <button
                @click="activeTab = 'login'"
                :class="[
                  'text-base lg:text-lg font-semibold pb-1 transition-all duration-200',
                  activeTab === 'login'
                    ? 'text-[#FF8130] border-b-2 border-[#FF8130]'
                    : 'text-white'
                ]"
              >
                Masuk
              </button>
              <button
                @click="activeTab = 'register'"
                :class="[
                  'text-base lg:text-lg font-semibold pb-1 transition-all duration-200',
                  activeTab === 'register'
                    ? 'text-[#FF8130] border-b-2 border-[#FF8130]'
                    : 'text-white'
                ]"
              >
                Daftar
              </button>
            </div>

            <!-- Google Login Button -->
            <button
              @click="handleGoogleLogin"
              :disabled="isSubmitting"
              class="w-full flex items-center justify-center gap-3 bg-white text-gray-700 py-3 px-4 rounded-full md:rounded-[10px] font-medium hover:bg-gray-50 hover:shadow-md transition-all duration-200 mb-5 disabled:opacity-50"
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span class="text-sm lg:text-base">{{ isSubmitting ? 'Memproses...' : 'Lanjutkan dengan Google' }}</span>
            </button>

            <!-- Divider -->
            <div class="flex items-center gap-3 mb-5">
              <div class="flex-1 h-px bg-border"></div>
              <span class="text-text-muted text-xs lg:text-sm whitespace-nowrap"
                >Atau masuk dengan email</span
              >
              <div class="flex-1 h-px bg-border"></div>
            </div>

            <!-- Form -->
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <!-- Phone Number -->
              <div>
                <label class="block text-xs lg:text-sm text-text-secondary mb-1.5"
                  >Nomor Handpone</label
                >
                <input
                  type="tel"
                  v-model="form.phone"
                  placeholder="Masukkan no handpone"
                  class="w-full bg-[#2A3441] text-white text-sm px-4 py-3 rounded-[10px] placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all duration-200"
                />
              </div>

              <!-- Password (only for login) -->
              <Transition name="fade">
                <div v-if="activeTab === 'login'">
                  <label class="block text-xs lg:text-sm text-text-secondary mb-1.5"
                    >Password</label
                  >
                  <div class="relative">
                    <input
                      :type="showPassword ? 'text' : 'password'"
                      v-model="form.password"
                      placeholder="Masukkan password"
                      class="w-full bg-[#2A3441] text-white text-sm px-4 py-3 rounded-[10px] placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-secondary/50 pr-12 transition-all duration-200"
                    />
                    <button
                      type="button"
                      @click="showPassword = !showPassword"
                      class="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors"
                    >
                      <EyeOff v-if="showPassword" :size="18" />
                      <Eye v-else :size="18" />
                    </button>
                  </div>
                </div>
              </Transition>

              <!-- Forgot Password (only for login) -->
              <div v-if="activeTab === 'login'" class="text-left">
                <a
                  href="#"
                  class="text-xs lg:text-sm text-secondary hover:underline transition-colors"
                  >Lupa password?</a
                >
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-secondary text-white py-3 px-4 rounded-full md:rounded-[10px] font-semibold text-sm lg:text-base hover:bg-secondary-hover hover:shadow-lg active:scale-[0.98] transition-all duration-200 mt-2 disabled:opacity-50"
              >
                {{ isSubmitting ? 'Memproses...' : (activeTab === 'login' ? 'Masuk' : 'Daftar') }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { X, Eye, EyeOff } from 'lucide-vue-next'
import { useAuthStore } from '@/stores/auth'

interface Props {
  isOpen: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  close: []
  loginSuccess: []
}>()

const authStore = useAuthStore()

const activeTab = ref<'login' | 'register'>('login')
const showPassword = ref(false)
const isSubmitting = ref(false)

const form = reactive({
  phone: '',
  password: ''
})

const closeModal = () => {
  emit('close')
}

const handleSubmit = async () => {
  if (isSubmitting.value) return
  
  isSubmitting.value = true
  
  try {
    if (activeTab.value === 'login') {
      const email = form.phone.includes('@') ? form.phone : `${form.phone}@gmail.com`
      await authStore.login(email, form.password)
      emit('loginSuccess')
      closeModal()
    } else {
      // Register logic - for now just login
      const email = form.phone.includes('@') ? form.phone : `${form.phone}@gmail.com`
      await authStore.login(email, form.password)
      emit('loginSuccess')
      closeModal()
    }
  } catch (error) {
    console.error('Login error:', error)
  } finally {
    isSubmitting.value = false
  }
}

const handleGoogleLogin = async () => {
  if (isSubmitting.value) return
  
  isSubmitting.value = true
  
  try {
    await authStore.login('jhoedoe@gmail.com', '')
    emit('loginSuccess')
    closeModal()
  } catch (error) {
    console.error('Google login error:', error)
  } finally {
    isSubmitting.value = false
  }
}

watch(activeTab, () => {
  form.phone = ''
  form.password = ''
  showPassword.value = false
})

watch(
  () => props.isOpen,
  (isOpen) => {
    if (!isOpen) {
      form.phone = ''
      form.password = ''
      activeTab.value = 'login'
      showPassword.value = false
      isSubmitting.value = false
    }
  }
)
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from > div:last-child,
.modal-leave-to > div:last-child {
  transform: translateY(100%);
}

@media (min-width: 768px) {
  .modal-enter-from > div:last-child,
  .modal-leave-to > div:last-child {
    transform: scale(0.95) translateY(10px);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
