<template>
  <header class="sticky top-0 z-40 bg-[#FFFDF7]/95 backdrop-blur-md border-b border-[#F4D5D8]">
    <!-- Top Announcement Bar -->
    <div class="bg-[#731A26] text-[#FFFDF7] px-4 py-2 text-[11px] sm:text-xs">
      <div class="max-w-7xl mx-auto flex items-center justify-between font-light tracking-wide">
        <span class="tracking-[0.2em] uppercase font-medium">BELLEZA A TU RITMO</span>
        <a 
          :href="whatsappUrlGeneral" 
          target="_blank" 
          rel="noopener noreferrer"
          class="hover:underline flex items-center gap-1.5 transition text-stone-100"
        >
          <span>Te acompañamos por WhatsApp</span>
          <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
          </svg>
        </a>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
      <div class="flex items-center justify-between gap-4">
        
        <!-- Logo & Tagline -->
        <a href="#" class="flex flex-col group shrink-0">
          <span class="text-3xl sm:text-4xl font-serif font-bold text-[#731A26] tracking-tight leading-none">
            Eloura<span class="text-[#731A26]">.</span>
          </span>
          <span class="text-[9px] uppercase tracking-[0.25em] text-[#731A26]/80 font-medium mt-1">
            B E A U T Y &nbsp; A N D &nbsp; C A R E
          </span>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center gap-7 text-xs font-medium tracking-wider uppercase text-stone-700">
          <a href="#" class="text-[#731A26] font-semibold transition hover:text-[#731A26]">Inicio</a>
          <a href="#catalogo" class="hover:text-[#731A26] transition">Productos</a>
          <a href="#nosotras" class="hover:text-[#731A26] transition">Nosotras/os</a>
          <a href="#marco-legal" class="hover:text-[#731A26] transition">Marco Legal</a>
        </nav>

        <!-- Right Tools: Search, WhatsApp, Admin -->
        <div class="flex items-center gap-2 sm:gap-3">
          
          <!-- Search input -->
          <div class="relative hidden sm:block w-44 lg:w-56">
            <input 
              :value="modelValueSearch"
              @input="$emit('update:modelValueSearch', $event.target.value)"
              type="text" 
              placeholder="Buscar productos"
              class="w-full bg-white/80 border border-[#F4D5D8] rounded-full py-1.5 pl-8 pr-3 text-xs text-stone-700 placeholder:text-stone-400 focus:outline-none focus:border-[#731A26] focus:bg-white transition"
            />
            <svg class="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>

          <!-- WhatsApp Button -->
          <a 
            :href="whatsappUrlGeneral" 
            target="_blank" 
            rel="noopener noreferrer"
            class="bg-[#731A26] hover:bg-[#58121B] text-[#FFFDF7] px-3.5 sm:px-4 py-2 rounded-full text-xs font-medium tracking-wide flex items-center gap-1.5 transition shadow-sm"
          >
            <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.974.532 1.907.828 3.149.828 3.182 0 5.77-2.587 5.77-5.766.001-3.187-2.575-5.67-5.77-5.67zm3.364 8.163c-.144.405-.837.774-1.17.824-.312.045-.698.069-2.253-.574-1.865-.772-3.056-2.678-3.149-2.802-.093-.123-.755-1.004-.755-1.916 0-.911.479-1.359.649-1.534.171-.174.375-.219.5-.219.125 0 .25.002.359.007.115.005.27-.043.422.324.156.377.534 1.303.581 1.399.047.096.078.209.016.333-.063.125-.094.202-.188.312-.093.109-.197.244-.282.328-.094.094-.192.196-.083.383.11.188.487.803 1.045 1.3 0.72 0.64 1.328.84 1.516.933.187.094.297.079.407-.047.11-.125.469-.546.594-.733.125-.188.25-.156.422-.094.172.062 1.094.516 1.281.609.188.094.313.141.359.219.047.078.047.452-.097.857z"/>
            </svg>
            <span class="hidden sm:inline">WhatsApp</span>
          </a>

          <!-- Admin Button / Link -->
          <button 
            @click="$emit('abrir-admin')" 
            class="text-[#731A26] bg-[#F4D5D8]/50 hover:bg-[#F4D5D8] p-2 sm:px-3 sm:py-2 rounded-full text-xs font-medium tracking-wide flex items-center gap-1.5 border border-[#F4D5D8] transition cursor-pointer"
            title="Administración"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span class="hidden sm:inline">Admin</span>
          </button>

          <!-- Mobile Menu Toggle Button -->
          <button 
            @click="menuMovilAbierto = !menuMovilAbierto"
            class="md:hidden text-[#731A26] p-1.5"
            aria-label="Abrir menú"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!menuMovilAbierto" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

        </div>
      </div>

      <!-- Mobile Search & Menu -->
      <div v-if="menuMovilAbierto" class="md:hidden pt-4 pb-2 border-t border-[#F4D5D8] mt-3 space-y-3">
        <div class="relative">
          <input 
            :value="modelValueSearch"
            @input="$emit('update:modelValueSearch', $event.target.value)"
            type="text" 
            placeholder="Buscar productos..."
            class="w-full bg-white border border-[#F4D5D8] rounded-full py-2 pl-9 pr-4 text-xs text-stone-700"
          />
          <svg class="w-4 h-4 absolute left-3 top-2.5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
        <nav class="flex flex-col gap-2 pt-2 text-xs uppercase tracking-wider font-medium text-stone-700">
          <a @click="menuMovilAbierto = false" href="#" class="py-1.5 hover:text-[#731A26]">Inicio</a>
          <a @click="menuMovilAbierto = false" href="#catalogo" class="py-1.5 hover:text-[#731A26]">Productos</a>
          <a @click="menuMovilAbierto = false" href="#nosotras" class="py-1.5 hover:text-[#731A26]">Nosotras/os</a>
          <a @click="menuMovilAbierto = false" href="#marco-legal" class="py-1.5 hover:text-[#731A26]">Marco Legal</a>
        </nav>
      </div>

    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  modelValueSearch: {
    type: String,
    default: ''
  },
  whatsappNumber: {
    type: String,
    default: '573114255527'
  }
})

defineEmits(['update:modelValueSearch', 'abrir-admin'])

const menuMovilAbierto = ref(false)
const whatsappUrlGeneral = computed(() => {
  return `https://wa.me/${props.whatsappNumber}?text=${encodeURIComponent('¡Hola! Me gustaría recibir asesoría sobre los productos de cuidado de Alma.')}`
})
</script>
