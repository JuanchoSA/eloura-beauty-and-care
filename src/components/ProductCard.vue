<template>
  <div class="bg-white rounded-2xl overflow-hidden border border-[#F4D5D8]/80 shadow-[0_2px_12px_rgba(115,26,38,0.04)] hover:shadow-[0_8px_24px_rgba(115,26,38,0.08)] hover:-translate-y-0.5 transition duration-300 flex flex-col justify-between group">
    
    <!-- Contenedor de Imagen -->
    <div class="relative bg-[#FBF8F3] aspect-square overflow-hidden p-4 flex items-center justify-center">
      <!-- Badge superior (EL FAVORITO / PARA LLEVAR) -->
      <span 
        v-if="producto.badge"
        class="absolute top-3 left-3 bg-[#731A26] text-[#FFFDF7] text-[9px] font-semibold tracking-widest px-2.5 py-1 rounded-sm uppercase z-10 shadow-sm"
      >
        {{ producto.badge }}
      </span>

      <img 
        :src="producto.imagen_url || '/images/productos/producto-placeholder.svg'" 
        @error="$event.target.src = '/images/productos/producto-placeholder.svg'"
        :alt="producto.nombre" 
        class="w-full h-full object-cover object-center rounded-xl group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>

    <!-- Contenido y Detalles -->
    <div class="p-5 flex-1 flex flex-col justify-between">
      <div>
        <!-- Categoría y Presentación -->
        <div class="flex items-center justify-between text-[11px] mb-1.5 font-medium">
          <span class="text-[#731A26]">#{{ producto.categoria }}</span>
          <span v-if="producto.presentacion" class="text-stone-400 font-normal">{{ producto.presentacion }}</span>
        </div>

        <!-- Nombre del Producto -->
        <h3 class="font-serif text-lg font-bold text-[#731A26] leading-snug mb-2 group-hover:text-[#8B2332] transition">
          {{ producto.nombre }}
        </h3>

        <!-- Descripción -->
        <p class="text-xs text-stone-600 leading-relaxed line-clamp-2 mb-4 font-light">
          {{ producto.descripcion }}
        </p>
      </div>

      <!-- Precio y Botón de Acción -->
      <div class="pt-3 border-t border-[#F4D5D8]/40 space-y-3">
        <div class="flex items-baseline gap-1.5">
          <span class="text-base font-bold text-[#731A26]">
            $ {{ Number(producto.precio).toLocaleString('es-CO') }}
          </span>
          <span class="text-[10px] uppercase font-semibold text-stone-500">COP</span>
        </div>

        <!-- Botón Conocer más (abre WhatsApp con mensaje personalizado) -->
        <a 
          :href="whatsappUrl" 
          target="_blank" 
          rel="noopener noreferrer"
          class="w-full bg-[#731A26] hover:bg-[#58121B] text-[#FFFDF7] py-2.5 px-4 rounded-full text-xs font-medium tracking-wide flex items-center justify-center gap-2 transition duration-200 shadow-sm"
        >
          <span>Conocer más</span>
          <svg class="w-3.5 h-3.5 stroke-current fill-none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" stroke-width="2"/>
            <circle cx="12" cy="12" r="2" fill="currentColor"/>
          </svg>
        </a>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  producto: {
    type: Object,
    required: true
  },
  whatsappNumber: {
    type: String,
    default: '573114255527'
  }
})

const whatsappUrl = computed(() => {
  const detalle = props.producto.presentacion ? ` (${props.producto.presentacion})` : ''
  const mensaje = encodeURIComponent(
    `¡Hola! Me gustaría conocer más sobre el producto "${props.producto.nombre}"${detalle} (#${props.producto.categoria}) por un valor de $${Number(props.producto.precio).toLocaleString('es-CO')} COP.`
  )
  return `https://wa.me/${props.whatsappNumber}?text=${mensaje}`
})
</script>
