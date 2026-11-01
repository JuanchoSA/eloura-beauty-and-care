<template>
  <div class="min-h-screen bg-[#FDFBF7] flex flex-col md:flex-row text-stone-800 font-sans">
    
    <!-- SIDEBAR DE ADMINISTRACIÓN (Página 3) -->
    <aside class="w-full md:w-64 bg-white border-r border-[#F4D5D8] flex flex-col justify-between p-5 md:min-h-screen">
      <div class="space-y-6">
        
        <!-- Logo Alma -->
        <div class="pt-2">
          <div class="flex items-baseline gap-1">
            <span class="text-3xl font-serif font-bold text-[#731A26] tracking-tight">Eloura<span class="text-[#731A26]"></span></span>
          </div>
          <span class="text-[9px] uppercase tracking-[0.25em] text-[#731A26]/80 font-medium block mt-1">
            B E A U T Y &nbsp; A N D &nbsp; C A R E
          </span>
        </div>

        <!-- Sección de Navegación -->
        <div>
          <span class="text-[10px] uppercase tracking-[0.2em] font-semibold text-stone-400 block mb-3 px-3">
            ADMINISTRACIÓN
          </span>

          <nav class="space-y-1.5 text-xs font-medium">
            <a 
              href="#" 
              class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#FDF3F4] text-[#731A26] border border-[#F4D5D8] transition"
            >
              <svg class="w-4 h-4 text-[#731A26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </svg>
              <span>Inventario / Productos</span>
            </a>

            <button 
              @click="mostrarAlertaConfig = true"
              class="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-stone-600 hover:bg-stone-50 transition text-left cursor-pointer"
            >
              <svg class="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Configuración</span>
            </button>
          </nav>
        </div>

      </div>

      <!-- Pie del Sidebar -->
      <div class="mt-8 space-y-4">
        <!-- Tarjeta "Cada detalle cuenta" -->
        <div class="bg-[#FDF3F4] border border-[#F4D5D8] rounded-2xl p-4">
          <h4 class="font-serif font-bold text-sm text-[#731A26] mb-1">Cada detalle cuenta.</h4>
          <p class="text-[11px] text-stone-600 leading-relaxed font-light">
            Un catálogo cuidado es el inicio de un buen ritual.
          </p>
        </div>

        <!-- Botón Volver / Cerrar Sesión -->
        <div class="pt-2 border-t border-[#F4D5D8]/70 flex flex-col gap-2">
          <button 
            @click="$emit('volver-tienda')" 
            class="w-full flex items-center justify-start gap-2 px-3 py-2 text-xs text-stone-600 hover:text-[#731A26] transition font-medium cursor-pointer"
          >
            <span>← Ir a la tienda pública</span>
          </button>
          <button 
            @click="$emit('cerrar-sesion')" 
            class="w-full flex items-center justify-start gap-2 px-3 py-2 text-xs text-[#731A26] hover:bg-[#FDF3F4] rounded-xl transition font-medium cursor-pointer"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </div>
    </aside>

    <!-- ÁREA PRINCIPAL -->
    <main class="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
      <div class="max-w-6xl mx-auto space-y-6">
        
        <!-- Barra Superior: Breadcrumbs & Perfil -->
        <div class="flex items-center justify-between pb-4 border-b border-[#F4D5D8]">
          <div class="flex items-center gap-2 text-xs text-stone-500">
            <span>Administración</span>
            <span>›</span>
            <span class="text-stone-800 font-medium">Productos</span>
          </div>

          <div class="flex items-center gap-3">
            <div class="text-right hidden sm:block">
              <div class="text-xs font-semibold text-stone-800">Equipo Eloura</div>
              <div class="text-[10px] text-stone-400">Administración</div>
            </div>
            <div class="w-8 h-8 rounded-full bg-[#F4D5D8] text-[#731A26] font-serif font-bold text-sm flex items-center justify-center border border-[#F4D5D8]">
              a.
            </div>
          </div>
        </div>

        <!-- Título y Botón Agregar Nuevo Producto -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 class="text-2xl sm:text-3xl font-serif font-bold text-[#731A26]">
              Gestión de Productos
            </h1>
            <p class="text-xs text-stone-500 mt-1 font-light">
              Tu selección de belleza, siempre al día.
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-2.5">
            <button 
              @click="$emit('sincronizar-supabase')"
              title="Sincronizar y respaldar los productos en la base de datos de Supabase"
              class="bg-white hover:bg-[#FDF3F4] text-[#731A26] border border-[#F4D5D8] px-4 py-2.5 rounded-xl text-xs font-medium tracking-wide shadow-2xs transition flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
            >
              <span>☁️ Sincronizar en la Nube</span>
            </button>

            <button 
              @click="abrirModalNuevo"
              class="bg-[#731A26] hover:bg-[#58121B] text-[#FFFDF7] px-5 py-2.5 rounded-xl text-xs font-medium tracking-wide shadow-sm transition flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
            >
              <span class="text-base leading-none font-light">+</span>
              <span>Agregar Nuevo Producto</span>
            </button>
          </div>
        </div>

        <!-- Tarjetas de Estadísticas (3 Cards) -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <!-- Card 1: Productos en catálogo -->
          <div class="bg-[#FDF3F4] border border-[#F4D5D8] rounded-2xl p-4 flex items-center gap-4">
            <div class="w-10 h-10 rounded-xl bg-white/80 border border-[#F4D5D8] flex items-center justify-center text-[#731A26] shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </svg>
            </div>
            <div>
              <div class="text-2xl font-serif font-bold text-[#731A26] leading-none">
                {{ String(productos.length).padStart(2, '0') }}
              </div>
              <div class="text-xs text-stone-600 mt-1 font-light">Productos en catálogo</div>
            </div>
          </div>

          <!-- Card 2: Categorías de cuidado -->
          <div class="bg-[#FDF3F4] border border-[#F4D5D8] rounded-2xl p-4 flex items-center gap-4">
            <div class="w-10 h-10 rounded-xl bg-white/80 border border-[#F4D5D8] flex items-center justify-center text-[#731A26] shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
              </svg>
            </div>
            <div>
              <div class="text-2xl font-serif font-bold text-[#731A26] leading-none">
                {{ String(totalCategorias).padStart(2, '0') }}
              </div>
              <div class="text-xs text-stone-600 mt-1 font-light">Categorías de cuidado</div>
            </div>
          </div>

          <!-- Card 3: Moneda COP -->
          <div class="bg-[#FDF3F4] border border-[#F4D5D8] rounded-2xl p-4 flex items-center gap-4">
            <div class="w-10 h-10 rounded-xl bg-white/80 border border-[#F4D5D8] flex items-center justify-center text-[#731A26] shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div class="text-2xl font-serif font-bold text-[#731A26] leading-none">COP</div>
              <div class="text-xs text-stone-600 mt-1 font-light">Pesos colombianos</div>
            </div>
          </div>
        </div>

        <!-- Filtros y Búsqueda -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="w-full sm:w-96 relative">
            <input 
              v-model="busqueda"
              type="text" 
              placeholder="Buscar por nombre de producto"
              class="w-full bg-white border border-[#F4D5D8] rounded-xl py-2 pl-9 pr-4 text-xs text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-[#731A26]"
            />
            <svg class="w-4 h-4 absolute left-3 top-2.5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>

          <div class="w-full sm:w-auto">
            <select 
              v-model="filtroCategoria"
              class="w-full sm:w-auto bg-white border border-[#F4D5D8] rounded-xl px-4 py-2 text-xs text-stone-700 focus:outline-none focus:border-[#731A26] cursor-pointer"
            >
              <option value="todas">Todas las categorías</option>
              <option v-for="cat in categoriasDisponibles" :key="cat" :value="cat">{{ cat }}</option>
            </select>
          </div>
        </div>

        <!-- Tabla de Productos -->
        <div class="bg-white rounded-2xl border border-[#F4D5D8] shadow-sm overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-[#FFFDF7] text-stone-500 uppercase tracking-wider text-[11px] font-semibold border-b border-[#F4D5D8]">
                <tr>
                  <th class="py-3.5 px-5">PRODUCTO</th>
                  <th class="py-3.5 px-5">CATEGORÍA</th>
                  <th class="py-3.5 px-5">PRECIO · COP</th>
                  <th class="py-3.5 px-5 text-right">ACCIONES</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#F4D5D8]/50">
                <tr 
                  v-for="prod in productosFiltrados" 
                  :key="prod.id"
                  class="hover:bg-[#FDF3F4]/30 transition group"
                >
                  <!-- Producto con foto y tamaño -->
                  <td class="py-3.5 px-5">
                    <div class="flex items-center gap-3">
                      <img 
                        :src="prod.imagen_url || '/images/productos/producto-placeholder.svg'" 
                        @error="$event.target.src = '/images/productos/producto-placeholder.svg'"
                        :alt="prod.nombre" 
                        class="w-11 h-11 rounded-lg object-cover border border-[#F4D5D8] bg-[#FFFDF7] shrink-0"
                      />
                      <div>
                        <div class="font-bold text-[#731A26] text-sm flex items-center gap-1.5">
                          <span>{{ prod.nombre }}</span>
                          <span 
                            v-if="prod.badge"
                            class="bg-[#731A26] text-[#FFFDF7] text-[9px] font-semibold tracking-wider px-1.5 py-0.5 rounded-sm uppercase"
                          >
                            {{ prod.badge }}
                          </span>
                        </div>
                        <div class="text-[11px] text-stone-400">{{ prod.presentacion || 'Presentación regular' }}</div>
                      </div>
                    </div>
                  </td>

                  <!-- Categoría en Badge Blush -->
                  <td class="py-3.5 px-5">
                    <span class="inline-block bg-[#FDF3F4] text-[#731A26] border border-[#F4D5D8] px-2.5 py-1 rounded-full text-[11px] font-medium">
                      #{{ prod.categoria }}
                    </span>
                  </td>

                  <!-- Precio -->
                  <td class="py-3.5 px-5 font-bold text-stone-800 text-sm">
                    $ {{ Number(prod.precio).toLocaleString('es-CO') }}
                  </td>

                  <!-- Acciones: Editar / Eliminar -->
                  <td class="py-3.5 px-5 text-right">
                    <div class="flex items-center justify-end gap-3 font-medium">
                      <button 
                        @click="abrirModalEditar(prod)"
                        class="text-[#731A26] hover:text-[#58121B] flex items-center gap-1 cursor-pointer transition"
                      >
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        <span>Editar</span>
                      </button>

                      <button 
                        @click="confirmarEliminar(prod)"
                        class="text-stone-400 hover:text-red-600 flex items-center gap-1 cursor-pointer transition"
                      >
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        <span>Eliminar</span>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr v-if="productosFiltrados.length === 0">
                  <td colspan="4" class="py-10 text-center text-stone-400 text-xs">
                    No se encontraron productos que coincidan con la búsqueda.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Paginación y contador inferior -->
          <div class="px-5 py-3 border-t border-[#F4D5D8] flex items-center justify-between text-xs text-stone-500 font-light bg-[#FFFDF7]">
            <span>Mostrando {{ productosFiltrados.length }} de {{ productos.length }} productos</span>
            <span>Página 1 de 1</span>
          </div>
        </div>

        <!-- Nota informativa sobre eliminación -->
        <div class="flex items-start gap-2 text-stone-500 text-[11px] pt-1">
          <svg class="w-4 h-4 text-stone-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Eliminar retira el producto del catálogo público. Se solicitará confirmación.</span>
        </div>

      </div>
    </main>

    <!-- MODAL AGREGAR / EDITAR PRODUCTO (Página 4 del PDF) -->
    <div 
      v-if="mostrarModal" 
      class="fixed inset-0 bg-stone-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto"
    >
      <div class="bg-white rounded-3xl max-w-3xl w-full border border-[#F4D5D8] shadow-2xl overflow-hidden my-6">
        
        <!-- Cabecera del Modal -->
        <div class="px-6 sm:px-8 pt-6 pb-4 border-b border-[#F4D5D8] flex items-start justify-between">
          <div>
            <h2 class="text-2xl font-serif font-bold text-[#731A26]">
              {{ modoEdicion ? 'Editar Producto' : 'Agregar Nuevo Producto' }}
            </h2>
            <p class="text-xs text-stone-500 font-light mt-0.5">
              {{ modoEdicion ? 'Modifica los datos del producto en el catálogo.' : 'Completa los detalles para sumar un nuevo cuidado al catálogo.' }}
            </p>
          </div>
          <button 
            @click="mostrarModal = false" 
            class="text-stone-400 hover:text-stone-700 p-1.5 rounded-lg transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        <!-- Formulario (2 columnas como en la Página 4) -->
        <form @submit.prevent="guardarProducto" class="p-6 sm:p-8 space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <!-- COLUMNA IZQUIERDA: Carga de Imagen y Consejos -->
            <div class="space-y-4">
              <label class="block text-xs font-semibold text-stone-700">Imagen del producto</label>
              
              <!-- Zona Drag & Drop -->
              <div 
                @dragover.prevent
                @drop.prevent="manejarDropImagen"
                class="border-2 border-dashed border-[#F4D5D8] rounded-2xl p-5 text-center bg-[#FFFDF7] hover:bg-[#FDF3F4]/30 transition relative flex flex-col items-center justify-center min-h-[190px]"
              >
                <!-- Previsualización si existe -->
                <div v-if="previewImagen" class="relative group w-28 h-28 mb-3">
                  <img :src="previewImagen" class="w-full h-full object-cover rounded-xl border border-[#F4D5D8]" />
                  <button 
                    type="button" 
                    @click="removerImagen"
                    class="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-[10px] flex items-center justify-center shadow"
                  >✕</button>
                </div>

                <div v-else class="mb-3 text-[#731A26]">
                  <svg class="w-10 h-10 mx-auto stroke-current" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>

                <p class="text-xs text-stone-600 mb-3 px-2">
                  Arrastra tu imagen aquí o selecciónala desde tu equipo.
                </p>

                <input 
                  type="file" 
                  id="modal-upload-input" 
                  accept="image/*" 
                  @change="manejarSeleccionImagen"
                  class="hidden" 
                />
                <label 
                  for="modal-upload-input"
                  class="bg-white hover:bg-[#FDF3F4] text-[#731A26] border border-[#F4D5D8] px-4 py-2 rounded-xl text-xs font-medium cursor-pointer transition shadow-2xs"
                >
                  Examinar imagen
                </label>
              </div>

              <!-- Requisitos de la imagen -->
              <p class="text-[11px] text-stone-400 font-light leading-relaxed">
                JPG, PNG o WEBP · Máximo 5 MB.<br/>
                Recomendado: imagen cuadrada de 1200 × 1200 px.
              </p>

              <!-- Tarjeta de inspiración "Una imagen con alma." -->
              <div class="bg-[#FDF3F4] border border-[#F4D5D8]/80 rounded-2xl p-4">
                <h4 class="font-serif font-bold text-sm text-[#731A26] mb-1">Una imagen con alma.</h4>
                <p class="text-xs text-stone-600 font-light leading-relaxed">
                  Usa un fondo neutro y luz suave. Deja que el producto sea el protagonista.
                </p>
              </div>
            </div>

            <!-- COLUMNA DERECHA: Campos de Datos -->
            <div class="space-y-4">
              <!-- Nombre -->
              <div>
                <label class="block text-xs font-semibold text-stone-700 mb-1.5">Nombre del producto</label>
                <input 
                  v-model="form.nombre" 
                  type="text" 
                  required 
                  placeholder="Escribe el nombre del producto"
                  class="w-full bg-[#FFFDF7] border border-[#F4D5D8] rounded-xl px-4 py-2.5 text-xs text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-[#731A26] focus:bg-white"
                />
              </div>

              <!-- Descripción -->
              <div>
                <label class="block text-xs font-semibold text-stone-700 mb-1.5">Descripción</label>
                <textarea 
                  v-model="form.descripcion" 
                  rows="3" 
                  required
                  placeholder="Describe su textura, aroma y principales cuidados..."
                  class="w-full bg-[#FFFDF7] border border-[#F4D5D8] rounded-xl px-4 py-2.5 text-xs text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-[#731A26] focus:bg-white resize-none"
                ></textarea>
              </div>

              <!-- Precio COP -->
              <div>
                <label class="block text-xs font-semibold text-stone-700 mb-1.5">Precio</label>
                <div class="relative">
                  <span class="absolute left-3.5 top-2.5 text-xs text-stone-400">$</span>
                  <input 
                    v-model="form.precio" 
                    type="number" 
                    required 
                    min="0"
                    placeholder="0"
                    class="w-full bg-[#FFFDF7] border border-[#F4D5D8] rounded-xl pl-8 pr-12 py-2.5 text-xs text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-[#731A26] focus:bg-white font-medium"
                  />
                  <span class="absolute right-3.5 top-2.5 text-xs text-stone-400 uppercase font-semibold">COP</span>
                </div>
              </div>

              <!-- Categoría -->
              <div>
                <label class="block text-xs font-semibold text-stone-700 mb-1.5">Categoría</label>
                <select 
                  v-model="form.categoria" 
                  required 
                  class="w-full bg-[#FFFDF7] border border-[#F4D5D8] rounded-xl px-4 py-2.5 text-xs text-stone-800 focus:outline-none focus:border-[#731A26] cursor-pointer"
                >
                  <option value="" disabled>Selecciona una categoría</option>
                  <option value="Champú">Champú</option>
                  <option value="Acondicionador">Acondicionador</option>
                  <option value="Perfume">Perfume</option>
                  <option value="Exfoliante">Exfoliante</option>
                  <option value="Crema">Crema</option>
                  <option value="Aceites">Aceites</option>
                  <option value="Capilares">Capilares</option>
                  <option value="Tratamientos">Tratamientos</option>
                  <option value="Jabones">Jabones</option>
                </select>
              </div>

              <!-- Presentación / Medida -->
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-xs font-semibold text-stone-700 mb-1.5">Presentación</label>
                  <input 
                    v-model="form.presentacion" 
                    type="text" 
                    placeholder="Ej. 300 ml, 200 g"
                    class="w-full bg-[#FFFDF7] border border-[#F4D5D8] rounded-xl px-4 py-2.5 text-xs text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-[#731A26]"
                  />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-stone-700 mb-1.5">Insignia (Badge)</label>
                  <input 
                    v-model="form.badge" 
                    type="text" 
                    placeholder="Ej. EL FAVORITO"
                    class="w-full bg-[#FFFDF7] border border-[#F4D5D8] rounded-xl px-4 py-2.5 text-xs text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-[#731A26]"
                  />
                </div>
              </div>

            </div>
          </div>

          <!-- Pie del Modal: Visibilidad y Botones -->
          <div class="pt-5 border-t border-[#F4D5D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            <!-- Interruptor Visible en el Catálogo -->
            <label class="flex items-center gap-3 cursor-pointer select-none">
              <input 
                v-model="form.visible" 
                type="checkbox" 
                class="w-4 h-4 text-[#731A26] rounded border-[#F4D5D8] focus:ring-[#731A26] accent-[#731A26]"
              />
              <div>
                <span class="text-xs font-semibold text-stone-800 block">Visible en tu catálogo</span>
                <span class="text-[11px] text-stone-500 font-light block">Al guardar, se publicará en la tienda de Alma.</span>
              </div>
            </label>

            <!-- Acciones Cancelar / Guardar -->
            <div class="flex items-center gap-3 justify-end">
              <button 
                type="button" 
                @click="mostrarModal = false"
                class="px-5 py-2.5 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 text-xs font-medium transition cursor-pointer"
              >
                Cancelar
              </button>

              <button 
                type="submit" 
                :disabled="guardando"
                class="px-6 py-2.5 rounded-xl bg-[#731A26] hover:bg-[#58121B] text-[#FFFDF7] text-xs font-medium tracking-wide shadow-sm transition cursor-pointer disabled:opacity-50"
              >
                {{ guardando ? 'Guardando...' : 'Guardar y Publicar' }}
              </button>
            </div>

          </div>
        </form>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  productos: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['guardar-producto', 'eliminar-producto', 'cerrar-sesion', 'volver-tienda', 'sincronizar-supabase'])

const busqueda = ref('')
const filtroCategoria = ref('todas')
const categoriasDisponibles = ['Champú', 'Acondicionador', 'Perfume', 'Exfoliante', 'Crema', 'Aceites', 'Capilares', 'Tratamientos', 'Jabones']

const mostrarModal = ref(false)
const modoEdicion = ref(false)
const guardando = ref(false)
const archivoImagen = ref(null)
const previewImagen = ref('')
const mostrarAlertaConfig = ref(false)

const form = ref({
  id: null,
  nombre: '',
  descripcion: '',
  precio: '',
  categoria: 'Champú',
  presentacion: '',
  badge: '',
  imagen_url: '',
  visible: true
})

const totalCategorias = computed(() => {
  const cats = new Set(props.productos.map(p => p.categoria))
  return cats.size
})

const productosFiltrados = computed(() => {
  return props.productos.filter(p => {
    const coincideNombre = (p.nombre || '').toLowerCase().includes(busqueda.value.toLowerCase())
    const coincideCat = filtroCategoria.value === 'todas' || p.categoria === filtroCategoria.value
    return coincideNombre && coincideCat
  })
})

const abrirModalNuevo = () => {
  modoEdicion.value = false
  form.value = {
    id: null,
    nombre: '',
    descripcion: '',
    precio: '',
    categoria: 'Champú',
    presentacion: '300 ml',
    badge: '',
    imagen_url: '',
    visible: true
  }
  archivoImagen.value = null
  previewImagen.value = ''
  mostrarModal.value = true
}

const abrirModalEditar = (prod) => {
  modoEdicion.value = true
  form.value = { ...prod }
  previewImagen.value = prod.imagen_url || ''
  archivoImagen.value = null
  mostrarModal.value = true
}

const manejarSeleccionImagen = (event) => {
  const file = event.target.files[0]
  if (file) {
    archivoImagen.value = file
    previewImagen.value = URL.createObjectURL(file)
  }
}

const manejarDropImagen = (event) => {
  const file = event.dataTransfer.files[0]
  if (file) {
    archivoImagen.value = file
    previewImagen.value = URL.createObjectURL(file)
  }
}

const removerImagen = () => {
  archivoImagen.value = null
  previewImagen.value = ''
  form.value.imagen_url = ''
}

const guardarProducto = async () => {
  guardando.value = true
  try {
    emit('guardar-producto', {
      producto: { ...form.value, precio: Number(form.value.precio) },
      archivoImagen: archivoImagen.value,
      modoEdicion: modoEdicion.value
    })
    mostrarModal.value = false
  } finally {
    guardando.value = false
  }
}

const confirmarEliminar = (prod) => {
  if (confirm(`¿Estás segura de eliminar "${prod.nombre}" del catálogo público?`)) {
    emit('eliminar-producto', prod.id)
  }
}
</script>
