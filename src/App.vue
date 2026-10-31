<template>
  <div class="min-h-screen bg-[#FFFDF7] text-stone-800 font-sans selection:bg-[#F4D5D8] selection:text-[#731A26]">
    
    <!-- VISTA 1: PANEL DE ADMINISTRACIÓN (Página 3 & 4 del PDF) -->
    <AdminPanel 
      v-if="vistaActual === 'admin'"
      :productos="productos"
      @guardar-producto="handleGuardarProducto"
      @eliminar-producto="handleEliminarProducto"
      @cerrar-sesion="handleCerrarSesion"
      @volver-tienda="vistaActual = 'tienda'"
    />

    <!-- VISTA 2: INICIAR SESIÓN - ADMINISTRACIÓN (Página 2 del PDF) -->
    <LoginView 
      v-else-if="vistaActual === 'login'"
      :cargando="cargandoLogin"
      :error="errorLogin"
      @login="handleLogin"
      @volver-tienda="vistaActual = 'tienda'"
    />

    <!-- VISTA 3: TIENDA PÚBLICA (Página 1 del PDF) -->
    <div v-else class="flex flex-col min-h-screen">
      
      <!-- Barra de Navegación & Anuncio Superior -->
      <Navbar 
        v-model:modelValueSearch="busquedaGlobal"
        :whatsappNumber="whatsappNumber"
        @abrir-admin="abrirLogin"
      />

      <!-- SECCIÓN HERO (Bienvenida a Alma) -->
      <section class="relative bg-gradient-to-b from-[#FDF3F4]/60 via-[#FFFDF7] to-[#FFFDF7] pt-10 sm:pt-16 pb-12 border-b border-[#F4D5D8]/60">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <!-- Columna Izquierda: Mensaje y CTA -->
            <div class="lg:col-span-6 space-y-6 text-left">
              <div>
                <span class="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#731A26] font-semibold block mb-2">
                  BIENVENIDA A ELOURA
                </span>
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#731A26] leading-[1.1] tracking-tight">
                  Tu esencia.<br/>
                  Tu ritual.<br/>
                  Tu momento.
                </h1>
              </div>

              <p class="text-stone-600 text-sm sm:text-base leading-relaxed max-w-lg font-light">
                Pequeños gestos que se sienten bien. Descubre nuestra selección de cuidado capilar, aromas y belleza para todos los días.
              </p>

              <div class="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                <a 
                  href="#catalogo" 
                  class="inline-flex items-center justify-center gap-2 bg-[#731A26] hover:bg-[#58121B] text-[#FFFDF7] px-7 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-sm transition hover:shadow-md"
                >
                  <span>Explorar catálogo</span>
                  <span class="text-sm">↓</span>
                </a>

                <div class="text-xs text-stone-500 font-light leading-snug">
                  <span class="block text-stone-700 font-medium">Elige con calma.</span>
                  <span>Consúltanos directamente.</span>
                </div>
              </div>
            </div>

            <!-- Columna Derecha: Composición de Fotos y Badge "El arte de cuidarte" -->
            <div class="lg:col-span-6 relative">
              <div class="grid grid-cols-12 gap-3 sm:gap-4 items-end">
                
                <!-- Foto Principal (Botella Cosmética) -->
                <div class="col-span-8 overflow-hidden rounded-3xl bg-[#F7F3EA] border border-[#F4D5D8] shadow-[0_12px_30px_rgba(115,26,38,0.06)] aspect-[4/5]">
                  <img 
                    :src="'/images/hero/hero-principal.jpg'" 
                    @error="$event.target.src = '/images/hero/hero-principal.svg'"
                    alt="Ritual de belleza Alma" 
                    class="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <!-- Foto Secundaria (Detalle / Ambiente) -->
                <div class="col-span-4 space-y-3 sm:space-y-4">
                  <div class="overflow-hidden rounded-2xl bg-[#F7F3EA] border border-[#F4D5D8] shadow-sm aspect-square">
                    <img 
                      :src="'/images/hero/hero-secundaria-1.jpg'" 
                      @error="$event.target.src = '/images/hero/hero-secundaria-1.svg'"
                      alt="Cuidado capilar" 
                      class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div class="overflow-hidden rounded-2xl bg-[#F7F3EA] border border-[#F4D5D8] shadow-sm aspect-[4/3]">
                    <img 
                      :src="'/images/hero/hero-secundaria-2.jpg'" 
                      @error="$event.target.src = '/images/hero/hero-secundaria-2.svg'"
                      alt="Aromas y esencias" 
                      class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

              </div>

              <!-- Badge flotante "01 EL ARTE DE CUIDARTE" -->
              <div class="absolute -bottom-4 left-6 sm:left-10 bg-white/95 backdrop-blur-sm border border-[#F4D5D8] px-5 py-3 rounded-2xl shadow-lg flex items-center gap-3">
                <span class="text-xl font-serif font-bold text-[#731A26]">01</span>
                <div class="border-l border-[#F4D5D8] pl-3">
                  <span class="text-[10px] uppercase tracking-widest font-bold text-[#731A26] block">EL ARTE DE CUIDARTE</span>
                  <span class="text-[11px] text-stone-500 font-light">Cabello · Cuerpo · Aromas</span>
                </div>
              </div>
            </div>

          </div>

          <!-- Franja de Valores / 3 Pilares -->
          <div class="mt-14 pt-8 border-t border-[#F4D5D8]/70 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div class="flex items-center justify-center gap-2 text-xs text-stone-700 font-medium">
              <span class="text-[#731A26] text-sm">✦</span>
              <span>Una selección con intención</span>
            </div>
            <div class="flex items-center justify-center gap-2 text-xs text-stone-700 font-medium">
              <span class="text-[#731A26] text-sm">💬</span>
              <span>Asesoría cercana por WhatsApp</span>
            </div>
            <div class="flex items-center justify-center gap-2 text-xs text-stone-700 font-medium">
              <span class="text-[#731A26] text-sm">♡</span>
              <span>Un ritual para cada persona</span>
            </div>
          </div>

        </div>
      </section>

      <!-- SECCIÓN CATÁLOGO (Encuentra tu próximo favorito) -->
      <section id="catalogo" class="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        
        <!-- Cabecera del Catálogo -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span class="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#731A26] font-semibold block mb-1">
              ENCUENTRA TU PRÓXIMO FAVORITO
            </span>
            <h2 class="text-3xl sm:text-4xl font-serif font-bold text-[#731A26]">
              Un universo para cuidarte.
            </h2>
          </div>

          <div class="text-left md:text-right max-w-sm">
            <p class="text-xs text-stone-600 font-light leading-relaxed">
              Explora, descubre y pregúntanos. Cada producto abre una conversación, no un carrito.
            </p>
            <span class="text-[11px] text-stone-400 mt-1 block">
              {{ productosFiltrados.length }} productos seleccionados
            </span>
          </div>
        </div>

        <!-- Filtros por Categoría (Pestañas como en el PDF) -->
        <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <button 
            v-for="cat in listaCategoriasTabs" 
            :key="cat.id"
            @click="categoriaSeleccionada = cat.id"
            :class="[
              'px-4 py-2 rounded-full text-xs font-medium tracking-wide transition whitespace-nowrap cursor-pointer border',
              categoriaSeleccionada === cat.id 
                ? 'bg-[#731A26] text-[#FFFDF7] border-[#731A26] shadow-sm' 
                : 'bg-white text-stone-700 border-stone-200 hover:border-[#F4D5D8] hover:bg-[#FDF3F4]/50'
            ]"
          >
            {{ cat.label }}
          </button>
        </div>

        <!-- Rejilla de Productos (4 columnas como en el diseño) -->
        <div v-if="productosFiltrados.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard 
            v-for="prod in productosFiltrados" 
            :key="prod.id" 
            :producto="prod" 
            :whatsappNumber="whatsappNumber"
          />
        </div>

        <div v-else class="text-center py-16 bg-[#FDF3F4]/30 rounded-3xl border border-[#F4D5D8]">
          <p class="text-sm font-serif text-[#731A26] font-semibold">No se encontraron productos en esta categoría o búsqueda.</p>
          <button 
            @click="categoriaSeleccionada = 'todos'; busquedaGlobal = ''"
            class="mt-3 text-xs text-[#731A26] underline cursor-pointer"
          >
            Restablecer filtros
          </button>
        </div>

        <!-- Nota al pie del catálogo -->
        <div class="text-center mt-12 text-[11px] text-stone-500 font-light">
          Precios de referencia en pesos colombianos. Confirma valor vigente, disponibilidad y presentación por WhatsApp.
        </div>

      </section>

      <!-- SECCIÓN QUIÉNES SOMOS / EL ALMA DE LA MARCA -->
      <section id="nosotras" class="py-16 sm:py-24 bg-[#FDFBF7] border-y border-[#F4D5D8]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <!-- Columna Izquierda: Retrato con Marco Orgánico -->
            <div class="lg:col-span-5 relative">
              <div class="rounded-[2.5rem] overflow-hidden border border-[#F4D5D8] shadow-[0_12px_32px_rgba(115,26,38,0.06)] aspect-[3/4] bg-[#F7F3EA]">
                <img 
                  :src="'/images/nosotras/nosotras.jpg'" 
                  @error="$event.target.src = '/images/nosotras/nosotras.svg'"
                  alt="Alma - El alma de la marca" 
                  class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>

              <!-- Badge flotante inferior -->
              <div class="absolute -bottom-3 left-4 sm:left-6 bg-white/95 backdrop-blur-sm border border-[#F4D5D8] px-4 py-2 rounded-full shadow-md">
                <span class="text-xs font-serif italic text-[#731A26]">Lo cotidiano también puede ser especial.</span>
              </div>
            </div>

            <!-- Columna Derecha: Filosofía y 3 Pilares -->
            <div class="lg:col-span-7 space-y-6 text-left">
              <div>
                <span class="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#731A26] font-semibold block mb-2">
                  QUIÉNES SOMOS &nbsp;·&nbsp; EL ALMA DE LA MARCA
                </span>
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#731A26] leading-tight">
                  Creemos en una belleza que se vive, no se exige.
                </h2>
              </div>

              <div class="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                <p>
                  Alma nace de una idea sencilla: convertir el cuidado diario en un momento propio. Reunimos productos para el cabello, el cuerpo y los sentidos, con una mirada atenta a los pequeños detalles.
                </p>
                <p>
                  Nuestro propósito es ayudarte a elegir con tranquilidad. Sin rutinas imposibles ni promesas extraordinarias: una selección cuidada y una conversación honesta sobre lo que buscas.
                </p>
              </div>

              <!-- 3 Columnas de Valores: Cercanía, Intención, Transparencia -->
              <div class="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#F4D5D8]/70">
                <div>
                  <h4 class="font-serif font-bold text-base text-[#731A26] mb-1">Cercanía</h4>
                  <p class="text-xs text-stone-600 font-light leading-relaxed">
                    Te escuchamos antes de recomendar.
                  </p>
                </div>
                <div>
                  <h4 class="font-serif font-bold text-base text-[#731A26] mb-1">Intención</h4>
                  <p class="text-xs text-stone-600 font-light leading-relaxed">
                    Cada detalle tiene un propósito.
                  </p>
                </div>
                <div>
                  <h4 class="font-serif font-bold text-base text-[#731A26] mb-1">Transparencia</h4>
                  <p class="text-xs text-stone-600 font-light leading-relaxed">
                    Información clara para elegir mejor.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <!-- SECCIÓN PASOS: NO TIENES QUE ELEGIR A SOLAS -->
      <section class="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div class="bg-[#FDF3F4] rounded-3xl sm:rounded-[2.5rem] border border-[#F4D5D8] p-8 sm:p-12 lg:p-14">
          
          <!-- Encabezado de la Sección -->
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-10 border-b border-[#F4D5D8]">
            <div class="space-y-2">
              <span class="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#731A26] font-semibold block">
                NO TIENES QUE ELEGIR A SOLAS
              </span>
              <h2 class="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#731A26]">
                Tu próximo ritual empieza hablando.
              </h2>
              <p class="text-xs sm:text-sm text-stone-600 font-light max-w-xl">
                ¿No sabes por dónde empezar? Cuéntanos qué buscas y te ayudamos a conocer las opciones.
              </p>
            </div>

            <a 
              :href="whatsappUrlGeneral" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 bg-[#731A26] hover:bg-[#58121B] text-[#FFFDF7] px-6 py-3.5 rounded-full text-xs font-medium tracking-wide shadow-sm transition hover:shadow shrink-0"
            >
              <span>Hablemos por WhatsApp</span>
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
              </svg>
            </a>
          </div>

          <!-- 3 Pasos del Proceso (01, 02, 03) -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
            <div class="space-y-2">
              <span class="text-3xl font-serif font-bold text-[#731A26] block">01</span>
              <h4 class="font-serif font-bold text-base text-[#731A26]">Explora a tu ritmo</h4>
              <p class="text-xs text-stone-600 font-light leading-relaxed">
                Encuentra el producto que llama tu atención.
              </p>
            </div>

            <div class="space-y-2">
              <span class="text-3xl font-serif font-bold text-[#731A26] block">02</span>
              <h4 class="font-serif font-bold text-base text-[#731A26]">Conversemos</h4>
              <p class="text-xs text-stone-600 font-light leading-relaxed">
                Usa «Conocer más» y consulta sus detalles.
              </p>
            </div>

            <div class="space-y-2">
              <span class="text-3xl font-serif font-bold text-[#731A26] block">03</span>
              <h4 class="font-serif font-bold text-base text-[#731A26]">Elige con información</h4>
              <p class="text-xs text-stone-600 font-light leading-relaxed">
                Confirma presentación, precio y disponibilidad.
              </p>
            </div>
          </div>

        </div>
      </section>

      <!-- SECCIÓN MARCO LEGAL Y NORMATIVA -->
      <section id="marco-legal" class="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        
        <!-- Encabezado con link a documentación -->
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span class="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#731A26] font-semibold block mb-1">
              INFORMACIÓN QUE TE DA TRANQUILIDAD
            </span>
            <h2 class="text-2xl sm:text-3xl font-serif font-bold text-[#731A26]">
              Marco Legal y Normativa
            </h2>
          </div>

          <a 
            href="#contacto" 
            class="text-xs font-medium text-[#731A26] hover:underline flex items-center gap-1 transition"
          >
            <span>Consultar documentación</span>
            <span>↗</span>
          </a>
        </div>

        <!-- 3 Tarjetas de Normativa -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          <!-- Tarjeta 1: Información sanitaria -->
          <div class="bg-white rounded-2xl border border-[#F4D5D8] p-6 space-y-3 shadow-2xs">
            <div class="w-8 h-8 rounded-lg bg-[#FDF3F4] text-[#731A26] flex items-center justify-center">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 class="font-serif font-bold text-base text-[#731A26]">Información sanitaria</h3>
            <p class="text-xs text-stone-600 font-light leading-relaxed">
              Los registros o notificaciones sanitarias aplicables se consultan por referencia. Solicita y confirma con la marca la documentación vigente de cada producto.
            </p>
          </div>

          <!-- Tarjeta 2: Calidad y uso responsable -->
          <div class="bg-white rounded-2xl border border-[#F4D5D8] p-6 space-y-3 shadow-2xs">
            <div class="w-8 h-8 rounded-lg bg-[#FDF3F4] text-[#731A26] flex items-center justify-center">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 class="font-serif font-bold text-base text-[#731A26]">Calidad y uso responsable</h3>
            <p class="text-xs text-stone-600 font-light leading-relaxed">
              Consulta ingredientes, lote, contenido y modo de uso en el etiquetado. Sigue las indicaciones del fabricante y suspende el uso ante una reacción adversa.
            </p>
          </div>

          <!-- Tarjeta 3: Condiciones y privacidad -->
          <div class="bg-white rounded-2xl border border-[#F4D5D8] p-6 space-y-3 shadow-2xs">
            <div class="w-8 h-8 rounded-lg bg-[#FDF3F4] text-[#731A26] flex items-center justify-center">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 class="font-serif font-bold text-base text-[#731A26]">Condiciones y privacidad</h3>
            <p class="text-xs text-stone-600 font-light leading-relaxed">
              Este sitio es un catálogo informativo, sin carrito ni pagos en línea. Precios y disponibilidad se confirman por WhatsApp. No compartas datos sensibles al consultar.
            </p>
          </div>

        </div>

        <!-- Banner de descargo inferior -->
        <div class="bg-[#FFFDF7] rounded-xl border border-[#F4D5D8] p-4 flex items-start gap-3 text-stone-500 text-[11px] font-light">
          <svg class="w-4 h-4 text-stone-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>
            No se presentan números de registro ni certificaciones en este catálogo. La documentación y los requisitos aplicables deben verificarse con la marca antes de tomar una decisión.
          </span>
        </div>

      </section>

      <!-- FOOTER COMPLETO (Página 1 del PDF) -->
      <footer id="contacto" class="bg-[#58121B] text-[#FFFDF7] pt-14 pb-10 border-t border-[#4A0E16]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            
            <!-- Columna 1: Logo & Marca Alma -->
            <div class="lg:col-span-4 space-y-3">
              <span class="text-3xl font-serif font-bold text-white tracking-tight block">Eloura.</span>
              <p class="text-xs font-serif italic text-stone-300">
                Belleza cotidiana, a tu manera.
              </p>
              <p class="text-xs text-stone-300/80 font-light max-w-sm leading-relaxed">
                Un espacio para descubrir, preguntar y encontrar tu propio ritual de cuidado.
              </p>
            </div>

            <!-- Columna 2: Explora -->
            <div class="lg:col-span-2 space-y-3">
              <span class="text-[10px] uppercase tracking-[0.25em] text-[#F4D5D8] font-semibold block">
                EXPLORA
              </span>
              <ul class="space-y-2 text-xs text-stone-300 font-light">
                <li><a href="#" class="hover:text-white transition">Inicio</a></li>
                <li><a href="#catalogo" class="hover:text-white transition">Productos</a></li>
                <li><a href="#nosotras" class="hover:text-white transition">Nosotras/os</a></li>
                <li><a href="#marco-legal" class="hover:text-white transition">Marco Legal</a></li>
              </ul>
            </div>

            <!-- Columna 3: Conectemos -->
            <div class="lg:col-span-2 space-y-3">
              <span class="text-[10px] uppercase tracking-[0.25em] text-[#F4D5D8] font-semibold block">
                CONECTEMOS
              </span>
              <ul class="space-y-2 text-xs text-stone-300 font-light">
                <li>
                  <a href="https://www.instagram.com/elourabeautyandcare?utm_source=ig_web_button_share_sheet&srtk=ZDNlZDc0MzIxNw==" class="hover:text-white transition flex items-center gap-2">
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition flex items-center gap-2">
                    <span>Facebook</span>
                  </a>
                </li>
              </ul>
            </div>

            <!-- Columna 4: Estamos para ayudarte -->
            <div class="lg:col-span-4 space-y-3">
              <span class="text-[10px] uppercase tracking-[0.25em] text-[#F4D5D8] font-semibold block">
                ESTAMOS PARA AYUDARTE
              </span>
              <p class="text-xs text-stone-300 font-light">
                Hablemos de tu cuidado.
              </p>
              
              <div>
                <a 
                  :href="whatsappUrlGeneral" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 bg-white text-[#731A26] hover:bg-[#FDF3F4] px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition shadow-sm"
                >
                  <svg class="w-4 h-4 fill-[#731A26]" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                  <span>Escríbenos por WhatsApp</span>
                </a>
              </div>
              <p class="text-[11px] text-stone-400 font-light">
                Consulta directa, atención personal.
              </p>
            </div>

          </div>

          <!-- Pie de página final -->
          <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400 font-light">
            <div>
              &copy; 2026 Eloura · Belleza cotidiana
            </div>
            <div class="flex flex-wrap items-center justify-center gap-4 text-stone-300">
              <a href="#" class="hover:text-white transition">Aviso de privacidad</a>
              <span>·</span>
              <a href="#" class="hover:text-white transition">Términos de consulta</a>
              <span>·</span>
              <span>Catálogo informativo · Sin pagos en línea</span>
            </div>
          </div>

        </div>
      </footer>

    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import ProductCard from './components/ProductCard.vue'
import AdminPanel from './components/AdminPanel.vue'
import LoginView from './components/LoginView.vue'
import { initialProducts } from './data/initialProducts'
import { supabase, isSupabaseConfigured } from './supabase'

const whatsappNumber = ref('573114255527')
const whatsappUrlGeneral = computed(() => {
  return `https://wa.me/${whatsappNumber.value}?text=${encodeURIComponent('¡Hola! Me gustaría recibir información y asesoría sobre los productos de Alma.')}`
})

// Estado de Vistas: 'tienda' | 'login' | 'admin'
const vistaActual = ref('tienda')
const usuarioAdmin = ref(null)

// Datos de Productos
const productos = ref([])
const cargando = ref(true)

// Filtros y Búsqueda
const busquedaGlobal = ref('')
const categoriaSeleccionada = ref('todos')

const listaCategoriasTabs = [
  { id: 'todos', label: 'Todos' },
  { id: 'Champú', label: 'Champús' },
  { id: 'Acondicionador', label: 'Acondicionadores' },
  { id: 'Perfumes', label: 'Perfumes' },
  { id: 'Exfoliantes', label: 'Exfoliantes' },
  { id: 'Cremas', label: 'Cremas' },
  { id: 'mas-cuidados', label: 'Más cuidados' }
]

// Login
const cargandoLogin = ref(false)
const errorLogin = ref('')

// Carga Inicial de Datos (con Supabase o Local Storage con los 8 productos del PDF)
const cargarProductos = async () => {
  cargando.value = true
  let productosCargados = []

  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase
        .from('productos')
        .select('*')
        .order('created_at', { ascending: false })

      if (!error && data && data.length > 0) {
        productosCargados = data
      }
    } catch (e) {
      console.warn('No se pudo conectar a Supabase, usando almacenamiento local:', e)
    }
  }

  // Fallback a LocalStorage o initialProducts si no hay productos remotos
  if (productosCargados.length === 0) {
    const local = localStorage.getItem('alma_productos')
    if (local) {
      try {
        productosCargados = JSON.parse(local)
      } catch {
        productosCargados = initialProducts
      }
    } else {
      productosCargados = initialProducts
      localStorage.setItem('alma_productos', JSON.stringify(initialProducts))
    }
  }

  productos.value = productosCargados
  cargando.value = false
}

const verificarSesion = async () => {
  if (isSupabaseConfigured) {
    try {
      const { data } = await supabase.auth.getSession()
      if (data?.session?.user) {
        usuarioAdmin.value = data.session.user
      }
    } catch (err) {
      console.warn('Verificación de sesión omitida:', err)
    }
  }
}

onMounted(() => {
  verificarSesion()
  cargarProductos()
})

// Filtrado de Productos para la tienda
const productosFiltrados = computed(() => {
  return productos.value.filter(p => {
    // Solo mostrar productos con visible: true (por defecto true si no viene especificado)
    if (p.visible === false) return false

    // Filtro por texto de búsqueda
    const coincideTexto = busquedaGlobal.value === '' || 
      (p.nombre || '').toLowerCase().includes(busquedaGlobal.value.toLowerCase()) ||
      (p.descripcion || '').toLowerCase().includes(busquedaGlobal.value.toLowerCase()) ||
      (p.categoria || '').toLowerCase().includes(busquedaGlobal.value.toLowerCase())

    if (!coincideTexto) return false

    // Filtro por categoría seleccionada
    if (categoriaSeleccionada.value === 'todos') return true

    if (categoriaSeleccionada.value === 'mas-cuidados') {
      const categoriasPrincipales = ['champú', 'acondicionador', 'perfumes', 'perfume', 'exfoliantes', 'exfoliante', 'cremas', 'crema']
      return !categoriasPrincipales.includes((p.categoria || '').toLowerCase())
    }

    const catNormalizada = (p.categoria || '').toLowerCase()
    const selNormalizada = categoriaSeleccionada.value.toLowerCase()

    return catNormalizada.includes(selNormalizada) || selNormalizada.includes(catNormalizada)
  })
})

const abrirLogin = () => {
  if (usuarioAdmin.value) {
    vistaActual.value = 'admin'
  } else {
    errorLogin.value = ''
    vistaActual.value = 'login'
  }
}

const handleLogin = async ({ email, password }) => {
  cargandoLogin.value = true
  errorLogin.value = ''

  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (!error && data?.user) {
        usuarioAdmin.value = data.user
        vistaActual.value = 'admin'
        cargandoLogin.value = false
        return
      }
    } catch {
      // Continuar con verificación demo si Supabase falla o las credenciales no existen en Auth
    }
  }

  // Acceso de administración local para desarrollo/revisión rápida
  if ((email === 'admin@alma.com' || email === 'admin') && password === 'admin123' || password === 'alma2026') {
    usuarioAdmin.value = { email, role: 'admin' }
    vistaActual.value = 'admin'
  } else if (email && password) {
    // Si introdujo credenciales pero no coinciden
    errorLogin.value = 'Credenciales no válidas. Prueba con usuario: admin@alma.com / clave: alma2026'
  } else {
    errorLogin.value = 'Por favor ingresa usuario y contraseña.'
  }

  cargandoLogin.value = false
}

const handleCerrarSesion = async () => {
  if (isSupabaseConfigured) {
    try {
      await supabase.auth.signOut()
    } catch (e) {
      console.warn(e)
    }
  }
  usuarioAdmin.value = null
  vistaActual.value = 'tienda'
}

// Guardar o Editar Producto (con Supabase o Local Storage)
const handleGuardarProducto = async ({ producto, archivoImagen, modoEdicion }) => {
  let imagenUrlFinal = producto.imagen_url

  if (archivoImagen && isSupabaseConfigured) {
    try {
      const fileExt = archivoImagen.name.split('.').pop()
      const fileName = `${Date.now()}.${fileExt}`
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('productos-imagenes')
        .upload(fileName, archivoImagen)

      if (!uploadError && uploadData) {
        const { data: urlData } = supabase.storage
          .from('productos-imagenes')
          .getPublicUrl(fileName)
        imagenUrlFinal = urlData.publicUrl
      }
    } catch (e) {
      console.warn('Fallo al subir a Storage, usando URL local temporal:', e)
      imagenUrlFinal = URL.createObjectURL(archivoImagen)
    }
  } else if (archivoImagen) {
    imagenUrlFinal = URL.createObjectURL(archivoImagen)
  }

  const nuevoObjeto = {
    ...producto,
    imagen_url: imagenUrlFinal || 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80'
  }

  if (isSupabaseConfigured) {
    try {
      if (modoEdicion) {
        await supabase.from('productos').update(nuevoObjeto).eq('id', nuevoObjeto.id)
      } else {
        await supabase.from('productos').insert([nuevoObjeto])
      }
    } catch (e) {
      console.warn('Error en base de datos Supabase:', e)
    }
  }

  // Guardar en estado local
  if (modoEdicion) {
    const idx = productos.value.findIndex(p => p.id === nuevoObjeto.id)
    if (idx !== -1) {
      productos.value[idx] = nuevoObjeto
    }
  } else {
    nuevoObjeto.id = Date.now()
    nuevoObjeto.created_at = new Date().toISOString()
    productos.value.unshift(nuevoObjeto)
  }

  localStorage.setItem('alma_productos', JSON.stringify(productos.value))
}

// Eliminar Producto
const handleEliminarProducto = async (id) => {
  if (isSupabaseConfigured) {
    try {
      await supabase.from('productos').delete().eq('id', id)
    } catch (e) {
      console.warn('Error al eliminar en Supabase:', e)
    }
  }

  productos.value = productos.value.filter(p => p.id !== id)
  localStorage.setItem('alma_productos', JSON.stringify(productos.value))
}
</script>

<style>
/* Ocultar scrollbar horizontal en pestañas de categoría sin perder scroll */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>


<style>
/* Ocultar scrollbar horizontal en pestañas de categoría sin perder scroll */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>