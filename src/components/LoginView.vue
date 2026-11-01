<template>
  <div class="min-h-screen bg-[#FFFDF7] flex flex-col justify-between p-4 sm:p-6 lg:p-8">
    <div class="flex-1 flex items-center justify-center py-10">
      <div class="w-full max-w-lg">
        
        <!-- Tarjeta de Inicio de Sesión -->
        <div class="bg-white rounded-3xl border border-[#F4D5D8] shadow-[0_10px_35px_rgba(115,26,38,0.06)] overflow-hidden">
          
          <!-- Franja superior Blush -->
          <div class="bg-[#FDF3F4] border-b border-[#F4D5D8]/70 px-8 py-5 flex items-center justify-between">
            <div>
              <span class="text-2xl font-serif font-bold text-[#731A26] tracking-tight block">Eloura.</span>
              <span class="text-[9px] uppercase tracking-[0.25em] text-[#731A26]/80 font-medium">B E L L E Z A &nbsp; C O T I D I A N A</span>
            </div>
            <div class="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#731A26] font-semibold bg-white/80 px-3 py-1.5 rounded-full border border-[#F4D5D8]/80">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
              <span>ESPACIO PRIVADO</span>
            </div>
          </div>

          <!-- Cuerpo del Formulario -->
          <div class="p-8 sm:p-10">
            <div class="mb-8">
              <h1 class="text-2xl sm:text-3xl font-serif font-bold text-[#731A26] mb-2">
                Iniciar Sesión - Administración
              </h1>
              <p class="text-xs text-stone-600 font-light">
                Bienvenida de nuevo. Ingresa para cuidar y actualizar el catálogo de Eloura.
              </p>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-5">
              <!-- Campo Usuario / Email -->
              <div>
                <label class="block text-xs font-semibold text-stone-700 mb-2">Usuario</label>
                <div class="relative">
                  <input 
                    v-model="email" 
                    type="text" 
                    required 
                    placeholder="Ingresa tu usuario"
                    class="w-full bg-[#FFFDF7] border border-[#F4D5D8] rounded-xl py-3 pl-4 pr-10 text-xs sm:text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-[#731A26] focus:bg-white transition"
                  />
                  <div class="absolute right-3.5 top-3.5 text-stone-400">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Campo Contraseña -->
              <div>
                <label class="block text-xs font-semibold text-stone-700 mb-2">Contraseña</label>
                <div class="relative">
                  <input 
                    v-model="password" 
                    :type="mostrarPassword ? 'text' : 'password'" 
                    required 
                    placeholder="Ingresa tu contraseña"
                    class="w-full bg-[#FFFDF7] border border-[#F4D5D8] rounded-xl py-3 pl-4 pr-10 text-xs sm:text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-[#731A26] focus:bg-white transition"
                  />
                  <button 
                    type="button" 
                    @click="mostrarPassword = !mostrarPassword"
                    class="absolute right-3.5 top-3.5 text-stone-400 hover:text-stone-600 transition"
                  >
                    <svg v-if="!mostrarPassword" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                    </svg>
                    <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Mensaje de Error -->
              <p v-if="error" class="text-xs text-red-600 bg-red-50 p-3 rounded-xl border border-red-200 text-center font-medium">
                {{ error }}
              </p>

              <!-- Botón Ingresar -->
              <button 
                type="submit" 
                :disabled="cargando"
                class="w-full bg-[#731A26] hover:bg-[#58121B] text-[#FFFDF7] py-3.5 px-4 rounded-xl text-xs sm:text-sm font-medium tracking-wide flex items-center justify-center gap-2 transition duration-200 shadow-sm cursor-pointer disabled:opacity-50"
              >
                <span>{{ cargando ? 'Verificando...' : '→ Ingresar al Panel' }}</span>
              </button>

              <!-- Aviso de seguridad -->
              <div class="pt-4 flex items-center justify-center gap-2 text-stone-500 text-[11px]">
                <svg class="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Acceso exclusivo para el equipo de Eloura.</span>
              </div>
            </form>
          </div>

        </div>

        <!-- Enlace Volver a la tienda -->
        <div class="text-center mt-6">
          <button 
            @click="$emit('volver-tienda')" 
            class="inline-flex items-center gap-2 text-xs text-stone-600 hover:text-[#731A26] font-medium transition cursor-pointer"
          >
            <span>← Volver a la tienda</span>
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  cargando: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['login', 'volver-tienda'])

const email = ref('')
const password = ref('')
const mostrarPassword = ref(false)

const handleSubmit = () => {
  emit('login', {
    email: email.value,
    password: password.value
  })
}
</script>

