const tracks = [
  {
    id: "track1",
    navTitle: "1. Crisis de Cumplimiento",
    title: "Track 1: La Crisis de Cumplimiento Omnicanal",
    audience: "Directores de Operaciones y Logística",
    scenario:
      'Una huelga en el centro de distribución de Cuautitlán ha reducido la capacidad de salida en un 40% dos días antes de El Buen Fin. Los equipos deben redirigir el inventario utilizando tiendas de alto volumen como nodos temporales de micro-cumplimiento sin romper la cobertura básica en tienda.',
    mockData: [
      "CSV con 100 filas de 50 tiendas del sur de México.",
      "Columnas: ID de Tienda, SKU, Categoría, Stock Actual, Velocidad de Venta Física Diaria, Cola de Pedidos Online, % de Margen, Distancia al Hub, Tiene Infraestructura SFS (Ship-from-Store), Personal de Picking Disponible."
    ],
    downloadBtn: "<a class='download-btn' href='./track1-data.csv' download='track1-data.csv'><span class='download-icon'>↓</span> Descargar Dataset CSV</a>",
    step0: {
      title: "Conoce tus Datos — Sin IA",
      instructions: [
        "Descarga el CSV desde la sección de Datos Simulados.",
        "Sin usar IA, abre el archivo y familiarízate con las columnas: ¿Qué mide cada una? ¿Qué rango de valores ves?",
        "Sin usar IA, identifica las 3 tiendas con mayor cola de pedidos online y las 3 con menor stock de electrónica.",
        "Sin usar IA, pregúntate: si tú fueras el Director de Supply Chain, ¿qué datos te preocuparían más a 48 horas del Buen Fin? Anota tu hipótesis para compararla después."
      ]
    },
    step1Ingredients: [
      "Persona: Director de Cadena de Suministro de Walmart México en modo crisis.",
      "Contexto: Hub al 60% de capacidad, 48 horas antes de El Buen Fin. Adjunta el CSV de inventario.",
      'Tarea: Diseñar estrategia de reubicación de inventario (Tienda-a-Hogar + Tienda-a-Tienda).',
      "Restricciones: Proteger pedidos online de electrónica de alto margen, mantener cobertura de 3 días para básicos/perecederos, el costo logístico no debe erosionar más del 8% del margen del producto.",
      "Filtro: Solo tiendas con Tiene_Infra_SFS=Si y Personal_Picking_Disponible>=3 son candidatas viables a Dark Store.",
      'Resultado: 5 tiendas para activar como Dark Stores temporales + tabla de impacto en P&L.'
    ],
    step1Example: `Actua como el Director de Supply Chain de Walmart Mexico. Tienes un contexto de crisis: nuestro Cedis en Cuautitlan esta operando al 60% a dos dias del Buen Fin.

Adjunto un CSV con datos de las 50 tiendas de la region Sur. Las columnas clave son: Stock_Actual, Velocidad_Venta_Fisica_Diaria, Cola_Pedidos_Online, Pct_Margen, Distancia_Hub_km, Tiene_Infra_SFS y Personal_Picking_Disponible.

Tu objetivo es disenar una estrategia de reubicacion de inventario (Store-to-Home y Store-to-Store).

<restricciones>
1. Prioriza cumplimiento de pedidos online de Electronica (alto margen) — usa Cola_Pedidos_Online y Pct_Margen para ranquear.
2. No rompas stock fisico para Perecederos/Basicos — cruza Stock_Actual con Velocidad_Venta_Fisica_Diaria para garantizar minimo 3 dias de cobertura.
3. El costo logistico no debe erosionar mas del 8% del margen — usa Distancia_Hub_km como proxy del costo de traslado.
4. Solo considera como Dark Stores tiendas con Tiene_Infra_SFS=Si y Personal_Picking_Disponible>=3. Si una tienda tiene alta demanda online pero no tiene infraestructura, indica que necesitarias para habilitarla.
</restricciones>

<formato_salida>
1. Que 5 tiendas activar como Dark Stores temporales (justifica con datos del CSV).
2. Tabla con volumen a mover e impacto estimado en P&L.
</formato_salida>`,
    step1Reflection: [
      "¿Las 5 tiendas que propuso la IA coinciden con las que habrías elegido en el Paso 0? ¿Qué criterio priorizó la IA que tú no habías ponderado igual?",
      "¿Qué supuesto clave hizo la IA sobre el costo logístico que necesitarías validar con datos reales antes de presentar este plan al CEO?"
    ],
    step2: {
      goal: "Cambiar de perspectiva: forzar una prueba de estrés del CFO al plan propuesto.",
      ask: "Pide a Gemini 3 puntos de falla financiera en el plan de Dark Stores, enfocados en costos ocultos de última milla en temporada alta.",
      pivot: "Ordena a Gemini revisar el plan original y mitigar explícitamente esos 3 riesgos."
    },
    step2Example: `PAUSA. Actua ahora como CFO y analiza el plan que acabas de proponer. Se muy critico.

Dime 3 riesgos financieros concretos de esta estrategia de Dark Stores, considerando costos ocultos de ultima milla y congestion de Buen Fin.

Despues vuelve al rol de Supply Chain y ajusta el plan original para mitigar esos 3 riesgos.`,
    businessProblem:
      "¿Activamos las 5 Dark Stores o cancelamos los pedidos de electrónica online pendientes y emitimos reembolsos? Justifica en 3 puntos usando el equilibrio entre el costo logístico proyectado y el valor de vida del cliente."
  },
  {
    id: "track2",
    navTitle: "2. Detective de Merma",
    title: 'Track 2: El Detective de "Merma" (Shrinkage)',
    audience: "Directores de Operaciones, Formatos de Tienda y Prevención de Pérdidas",
    scenario:
      "Los supercenters de Monterrey muestran un aumento del 15% en la merma en Farmacia/Belleza. Los líderes deben correlacionar anomalías transaccionales, horarios de turnos y narrativas de incidentes de seguridad para identificar la causa raíz antes de actuar.",
    mockData: [
      "CSV único de 100 filas con transacciones POS, turno/gerente y notas de incidente integradas.",
      "Columnas: Fecha, Tienda, Turno, Gerente_Turno, Hora, Tipo_Transaccion, Categoria, SKU, Descripcion, Cantidad, Monto_MXN, Nota_Incidente.",
      "Incluye anulaciones, devoluciones sin ticket, ajustes de inventario y registros de recepción de mercancía."
    ],
    downloadBtn: "<a class='download-btn' href='./track2-merma.csv' download='track2-merma.csv'><span class='download-icon'>↓</span> Descargar Dataset CSV</a>",
    step0: {
      title: "Conoce tus Datos — Sin IA",
      instructions: [
        "Descarga el CSV consolidado desde la sección de Datos Simulados.",
        "Sin usar IA, revisa las columnas: identifica los tipos de transacción (anulaciones, devoluciones sin ticket, ajustes) y las notas de incidente.",
        "Sin usar IA, filtra mentalmente: ¿qué turnos o tiendas aparecen más? ¿Hay patrones obvios a simple vista?",
        "Sin usar IA, pregúntate: ¿qué columnas cruzarías primero para encontrar la anomalía? Anota tu hipótesis para compararla después."
      ]
    },
    step1Ingredients: [
      "Persona: Director de Operaciones y Prevención de Pérdidas.",
      "Contexto: Aumento del 15% de merma en Farmacia/Belleza en Monterrey.",
      "Tarea: Cruzar entradas estructuradas y no estructuradas para identificar la causa raíz probable.",
      "Restricciones: Detectar correlaciones por turno/día/ventanas de recepción, y analizar reportes narrativos en busca de patrones sutiles recurrentes.",
      "Resultado: Las 2 principales hipótesis respaldadas por datos."
    ],
    step1Example: `Actua como Director de Operaciones y Prevencion de Perdidas de Walmart Mexico.

Adjunto un CSV consolidado con 100 transacciones de 5 supercenters de Monterrey (MTY-01 a MTY-05). Columnas clave: Fecha, Turno, Gerente_Turno, Tipo_Transaccion (Venta, Anulacion, Devolucion_Sin_Ticket, Ajuste_Inventario), Categoria, SKU, Cantidad, Monto_MXN y Nota_Incidente.

Tu mision es identificar la causa raiz del incremento del 15% de merma en Farmacia/Belleza.

<instrucciones>
1. Detecta correlaciones entre Turno, Gerente_Turno y Tipo_Transaccion — ¿alguna combinacion concentra las Anulaciones o Devoluciones_Sin_Ticket?
2. Analiza patrones repetidos en la columna Nota_Incidente — busca frases o situaciones que se repitan.
3. Entrega 2 hipotesis principales, cada una respaldada con filas concretas del CSV como evidencia.
</instrucciones>`,
    step2: {
      goal: "Pasar del diagnóstico al diseño de validación comprobable.",
      ask: "Elige una hipótesis y diseña un experimento de campo ciego de 7 días en 3 tiendas.",
      pivot: "Fuerza métricas diarias explícitas y umbrales sin alertar al personal potencialmente involucrado."
    },
    step1Reflection: [
      "¿Las hipótesis de la IA coinciden con la sospecha que anotaste en el Paso 0? Si difieren, ¿cuál te parece más sólida y por qué?",
      "¿Podrías tomar una acción disciplinaria basándote solo en este análisis del CSV? ¿Qué evidencia adicional necesitarías para actuar con certeza?"
    ],
    step2Example: `Elijo tu hipotesis #1.

Disena un experimento ciego de 7 dias en 3 tiendas de Monterrey para confirmar o descartar esta hipotesis.

Define metricas diarias exactas y umbrales de validacion. El diseno debe evitar alertar a posibles involucrados.`,
    businessProblem:
      "¿Implementamos inmediatamente un cambio importante en el proceso de recepción en toda la cadena en Monterrey, despedimos a los gerentes de turno señalados, o esperamos los resultados del experimento? Justifica tu decisión y el umbral de prueba requerido."
  },
  {
    id: "track3",
    navTitle: "3. Crisis de Clima Laboral",
    title: "Track 3: El Analista de Pulso — Crisis de Clima Laboral",
    audience: "Directores de RRHH, Talento y People Analytics",
    scenario:
      "Los resultados de la encuesta de pulso trimestral acaban de llegar: el eNPS de los Supercenters de la región Norte cayó 18 puntos en 90 días. El CEO quiere respuestas antes de la junta de las 4pm. Los equipos deben convertir 100 respuestas abiertas y métricas cuantitativas en un diagnóstico accionable y un plan de comunicación creíble.",
    mockData: [
      "CSV con 115 respuestas: 100 de la región Norte + 15 de la región Centro como grupo de control.",
      "Columnas: ID, Región, Formato (Supercenter/Express/Bodega), Antigüedad_Anos, Área (Operaciones/Logística/Caja/Admin), Score_eNPS (0-10), Fecha_Respuesta, Respuesta_Abierta."
    ],
    downloadBtn: "<a class='download-btn' href='./track3-clima.csv' download='track3-clima.csv'><span class='download-icon'>↓</span> Descargar Dataset CSV</a>",
    step0: {
      title: "Conoce tus Datos — Sin IA",
      instructions: [
        "Sin usar IA, descarga el CSV y revisa las columnas: ¿qué regiones y formatos tienen los scores eNPS más bajos?",
        "Sin usar IA, lee 10-15 comentarios abiertos al azar: ¿qué temas emergen antes de cualquier análisis?",
        "Sin usar IA, identifica si hay diferencias entre áreas (Operaciones vs Admin) o por antigüedad.",
        "Sin usar IA, pregúntate: si tú fueras el CHRO, ¿qué 3 hipótesis presentarías al CEO? Anótalas para compararlas después."
      ]
    },
    step1Ingredients: [
      "Persona: Senior People Analyst del CHRO de Walmart México.",
      "Contexto: eNPS cayó 18 puntos en Norte; CEO necesita diagnóstico en 2 horas.",
      "Tarea: Análisis de sentimiento + topic modeling sobre el CSV de 100 respuestas abiertas.",
      "Restricciones: Clasificar por Área/Región; detectar señales de burnout e intención de renuncia; citar ejemplos textuales anonimizados.",
      "Resultado: Top 3 drivers de la caída con evidencia textual + tabla de riesgos críticos."
    ],
    step1Example: `Actua como Senior People Analyst del equipo CHRO de Walmart Mexico.

Adjunto un CSV con 115 respuestas de la encuesta de pulso trimestral. Columnas: Region (100 de Norte + 15 de Centro como control), Formato (Supercenter/Express/Bodega), Antiguedad_Anos, Area (Operaciones/Logistica/Caja/Admin), Score_eNPS, Fecha_Respuesta y Respuesta_Abierta.

El eNPS de la region cayo 18 puntos en 90 dias. Necesito un diagnostico antes de una junta ejecutiva.

<analisis_requerido>
1. SENTIMENT ANALYSIS: Clasifica las respuestas por Area (Operaciones, Logistica, Caja, Admin). Para cada area indica: sentimiento dominante, % de confianza y un resumen ejecutivo de 2 lineas con los comentarios que lo justifican.

2. TOPIC MODELING: Identifica los 3 temas emergentes con mayor frecuencia de menciones (sin usar categorias predefinidas). Para cada tema entrega: nombre del tema, % de menciones, sentimiento promedio y una accion recomendada especifica para RRHH.

3. RIESGOS CRITICOS: Detecta senales de burnout, intencion de renuncia o toxicidad. Cita 2 ejemplos textuales anonimizados por riesgo detectado.

4. SEGMENTACION: ¿Hay diferencias por Formato (Supercenter vs Express vs Bodega), por Antiguedad_Anos, o entre regiones (Norte vs Centro)? Usa las 15 respuestas de Centro como grupo de control para aislar que es especifico de Norte.
</analisis_requerido>

<formato_salida>
Usa tablas markdown para los resultados de sentimiento y temas. Redacta los riesgos como alertas ejecutivas.
</formato_salida>`,
    step2: {
      goal: "Convertir el diagnóstico de datos en comunicación ejecutiva bajo presión de tiempo.",
      ask: "Redacta el correo al CEO con el diagnóstico: la verdad en una frase, los 3 drivers de la caída y la recomendación de acción inmediata.",
      pivot: "Pide a la IA que prepare también un script para el All-Hands de mañana que reconozca el dolor sin prometer cosas que RRHH no puede cumplir."
    },
    step1Reflection: [
      "¿Los 3 drivers que identificó la IA son los mismos que anotaste en el Paso 0? ¿Hay alguno que te sorprenda o que cambiaría lo que recomendarías al CEO?",
      "¿Cómo verificarías que los ejemplos textuales que citó la IA realmente están anonimizados y no permiten identificar al empleado en un equipo pequeño?"
    ],
    step2Example: `Usa el analisis anterior para dos entregables urgentes.

ENTREGABLE 1 - Correo al CEO (estructura BLUF):
1. El Titular: La verdad en una frase (Bottom Line Up Front).
2. Los Datos: Los 3 drivers principales de la caida del eNPS con evidencia.
3. La Recomendacion: Que hacemos YA esta semana para detener la hemorragia.
Tono: Directo, basado en datos, sin excusas, estrategico.

ENTREGABLE 2 - Script para All-Hands manana:
La encuesta muestra miedo e incertidumbre en el equipo de Norte.
Redacta un discurso de 5 minutos que: (a) reconozca el dolor con empatia real, (b) re-enfoque al equipo en acciones concretas de los proximos 30 dias, (c) no prometa nada que RRHH no pueda cumplir.`,
    businessProblem:
      "¿Anuncias mañana un 'Listening Tour' regional (compra tiempo pero puede percibirse como otro ejercicio de consultoría) o comprometes públicamente 3 cambios específicos en 30 días con dueño y fecha? Justifica considerando el riesgo de credibilidad en ambos escenarios."
  },
  {
    id: "track4",
    navTitle: "4. Abandono de Carrito",
    title: "Track 4: La Paradoja del Abandono del Carrito",
    audience: "Directores de E-commerce, Marketing, Ventas y Tecnología",
    scenario:
      "Walmart.com.mx ve un 65% de abandono de carrito móvil en Supermercado los domingos por la noche. Los equipos deben identificar la fricción raíz y diseñar una acción de retención con una economía defendible.",
    mockData: [
      "CSV de 100 sesiones de carrito con datos de sesión, punto de abandono, comparativa de precios y perfil de cliente.",
      "Columnas: Session_ID, Fecha, Dia_Semana, Hora, Dispositivo, Duracion_Min, Articulos_Agregados, Categoria, Valor_Carrito_MXN, Punto_Abandono, Precio_vs_Competencia_Pct, Slot_Entrega_Disponible, Es_Recurrente, Resultado.",
      "Archivo TXT con 50 transcripciones de chat de servicio al cliente."
    ],
    downloadBtn: "<a class='download-btn' href='./track4-carrito.csv' download='track4-carrito.csv'><span class='download-icon'>↓</span> Descargar Dataset CSV</a> <a class='download-btn' href='./track4-chats.txt' download='track4-chats.txt'><span class='download-icon'>↓</span> Descargar Chats TXT</a>",
    step0: {
      title: "Conoce tus Datos — Sin IA",
      instructions: [
        "Sin usar IA, descarga el CSV de sesiones y el TXT de chats desde la sección de Datos Simulados.",
        "Sin usar IA, en el CSV identifica: ¿cuál es el punto de abandono más frecuente? ¿Hay diferencia entre domingos y otros días?",
        "Sin usar IA, lee 10-15 transcripciones de chat y subraya las quejas que se repiten.",
        "Sin usar IA, formula tu hipótesis: ¿el problema es técnico, de precio o de logística? Anótala para compararla después."
      ]
    },
    step1Ingredients: [
      "Persona: Director de E-commerce y Crecimiento.",
      "Contexto: Pico de abandono en Supermercado los domingos por la tarde al 65%+. Adjunta el CSV de sesiones y el TXT de chats.",
      "Tarea: Diagnóstico de múltiples fuentes del impulsor de fricción.",
      "Restricciones: Distinguir fricción técnica vs precios vs logística; extraer los 3 temas principales de sentimiento negativo.",
      "Resultado: Hipótesis principal de la causa raíz específica del domingo."
    ],
    step1Example: `Actua como Director de E-commerce y Growth de Walmart Mexico.

Tenemos un pico de abandono de carrito en app movil para Despensa los domingos por la tarde.

Adjunto dos archivos:
1. CSV con 100 sesiones de carrito — columnas clave: Dia_Semana, Dispositivo, Punto_Abandono (Seleccion_Entrega / Resumen_Pago / Carga_Pagina / Carrito), Precio_vs_Competencia_Pct, Slot_Entrega_Disponible, Es_Recurrente y Resultado (Abandono/Completado).
2. TXT con 50 transcripciones de chat de servicio al cliente del mismo periodo.

<analisis_requerido>
1. Filtra por Dia_Semana=Domingo y compara la tasa de Abandono vs Completado con el resto de la semana.
2. Identifica el friction point principal: ¿en que Punto_Abandono se concentran las sesiones perdidas? ¿Que rol juega Slot_Entrega_Disponible=No?
3. Extrae los 3 sentimientos negativos dominantes en los chats — ¿confirman el patron del CSV?
4. Formula una hipotesis principal de por que el abandono pasa especificamente en domingo por la tarde.
5. Cruza los hallazgos del CSV con los chats — ¿los chats confirman, contradicen o agregan matices al patron cuantitativo? Si un hallazgo solo aparece en una fuente, senalalo.
</analisis_requerido>`,
    step2: {
      goal: "Convertir el diagnóstico en un diseño de retención práctico y económico.",
      ask: "Diseña 3 incentivos personalizados para el domingo para recuperar carritos.",
      pivot: "Calcula la pérdida de margen por cada 100 carritos recuperados para la opción más agresiva."
    },
    step1Reflection: [
      "¿El friction point principal que detectó la IA coincide con lo que notaste en el Paso 0? ¿Fue el CSV o los chats la fuente más reveladora?",
      "Si solo hubieras tenido el CSV (sin los chats), ¿habrías llegado a la misma conclusión? ¿Qué riesgo implica analizar una sola fuente de datos antes de actuar?"
    ],
    step2Example: `Asumiendo que tu hipotesis principal es correcta, disena 3 incentivos personalizados para recuperar carritos este domingo.

Para cada opcion, estima impacto comercial.

Luego calcula la cesion de margen por cada 100 carritos recuperados para la opcion mas agresiva.`,
    businessProblem:
      "¿Qué incentivo se lanza este domingo? Justifica comparando el margen sacrificado frente a la recuperación esperada de CAC y el impacto de retención a largo plazo."
  },
  {
    id: "trackBonus",
    navTitle: "Discusión Final",
    title: "Bonus: Discusión Final",
    type: "bonus",
    discussionQuestions: [
      {
        number: 1,
        question: "¿En qué momento del ejercicio sintieron que la IA los sorprendió — positiva o negativamente — y qué dice eso sobre sus supuestos previos?"
      },
      {
        number: 2,
        question: "¿Qué parte del proceso de decisión NO delegarían nunca a la IA, y por qué? ¿Dónde está la línea entre asistencia y responsabilidad?"
      },
      {
        number: 3,
        question: "Si el CEO les preguntara mañana '¿cómo saben que el análisis de la IA es confiable?', ¿qué mecanismos de validación pondrían en marcha antes de actuar?"
      },
      {
        number: 4,
        question: "¿Qué habilidad humana se volvió más valiosa — no menos — al trabajar con IA hoy? ¿Cómo cambia eso lo que buscarán en su próxima contratación?"
      },
      {
        number: 5,
        question: "Si tuvieran que implementar una de las soluciones generadas hoy, ¿cuál es el primer obstáculo organizacional — no tecnológico — que enfrentarían, y cómo lo resolverían?"
      }
    ]
  }
];

const nav = document.getElementById("track-nav");
const content = document.getElementById("content");

function renderNav(activeId) {
  nav.parentElement.dataset.activeTrack = activeId;
  nav.innerHTML = tracks
    .map(
      (track) =>
        `<button class="track-btn ${
          track.id === activeId ? "active" : ""
        }" data-track-id="${track.id}">${track.navTitle}</button>`
    )
    .join("");
}

function createPromptDetails(promptText, detailLabel) {
  const escaped = promptText
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
  return `
    <details>
      <summary>${detailLabel}</summary>
      <div class="prompt-block">
        <div class="copy-side">
          <button class="copy-btn" data-copy="${encodeURIComponent(promptText)}">Copiar Prompt</button>
          <p class="copy-disclaimer">Solo copia si consideras que no pudiste seguir las instrucciones mostradas arriba</p>
        </div>
        <pre><code>${escaped}</code></pre>
      </div>
    </details>
  `;
}

function renderBonusTrack(track) {
  renderNav(track.id);
  content.innerHTML = `
    <article data-track="${track.id}">
      <div class="track-header">
        <h2 class="section-title">${track.title}</h2>
        <p class="audience"><strong>Para el grupo completo</strong> — Reflexión abierta sobre la experiencia del taller.</p>
      </div>
      <div class="grid-container bonus-grid">
        ${track.discussionQuestions.map((q) => `
          <section class="card bonus-question-card">
            <div class="bonus-question-number">${q.number}</div>
            <p class="bonus-question-text">${q.question}</p>
          </section>
        `).join("")}
      </div>
    </article>
  `;
}

function renderTrack(trackId) {
  const track = tracks.find((item) => item.id === trackId) ?? tracks[0];

  if (track.type === "bonus") {
    renderBonusTrack(track);
    return;
  }

  renderNav(track.id);

  content.innerHTML = `
    <article data-track="${track.id}">
      <div class="track-header">
        <h2 class="section-title">${track.title}</h2>
        <p class="audience"><strong>Público Objetivo:</strong> ${track.audience}</p>
      </div>

      <div class="grid-container">
        <section class="card intro-card">
          <h3>Cómo usar este track</h3>
          <ol>
            <li>Primero escribe tu propio prompt a partir del esquema.</li>
            <li>Solo abre el ejemplo de prompt si tu equipo se queda atascado.</li>
            <li>Ejecuta el Paso 2 para forzar una iteración más profunda.</li>
            <li>Termina respondiendo al problema de negocio con una justificación.</li>
          </ol>
        </section>

        <section class="card scenario-card">
          <h3>El Escenario</h3>
          <p>${track.scenario}</p>
        </section>

        <section class="card data-card">
          <h3>Requisitos de Datos Simulados</h3>
          <ul>${track.mockData.map((item) => `<li>${item}</li>`).join("")}</ul>
          ${track.downloadBtn ? `<div class="download-row">${track.downloadBtn}</div>` : ""}
        </section>

        <section class="card step step-0-card">
          <h3>Paso 0: ${track.step0.title}</h3>
          <ol class="step0-list">${track.step0.instructions
            .map((item) => `<li>${item}</li>`)
            .join("")}</ol>
        </section>

        <section class="card step step-1-card">
          <h3>Paso 1: Esquema del Prompt (Construye tu prompt inicial)</h3>
          <ul>${track.step1Ingredients
            .map((item) => `<li>${item}</li>`)
            .join("")}</ul>
          ${createPromptDetails(track.step1Example, "Mostrar prompt ejemplo")}
        </section>

        <section class="card reflection-card">
          <h3>Pausa — Reflexión Crítica</h3>
          <p class="reflection-subtitle">Antes de continuar al Paso 2, discute con tu equipo:</p>
          <ol class="reflection-list">
            ${track.step1Reflection.map((q) => `<li>${q}</li>`).join("")}
          </ol>
        </section>

        <section class="card step step-2-card">
          <h3>Paso 2: Estrategia de Iteración (Ir más profundo)</h3>
          <div class="iteration-content">
            <p><strong>Tu Objetivo:</strong> ${track.step2.goal}</p>
            <p><strong>Qué preguntar:</strong> ${track.step2.ask}</p>
            <p><strong>El Pivote:</strong> ${track.step2.pivot}</p>
          </div>
          ${createPromptDetails(track.step2Example, "Mostrar prompt ejemplo")}
        </section>

        <section class="card business business-card">
          <h3>El Problema de Negocio a Resolver</h3>
          <p class="business-text">${track.businessProblem}</p>
        </section>
      </div>
    </article>
  `;
}

nav.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const id = target.getAttribute("data-track-id");
  if (!id) return;
  renderTrack(id);
});

content.addEventListener("click", async (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const value = target.getAttribute("data-copy");
  if (!value) return;

  const text = decodeURIComponent(value);
  try {
    await navigator.clipboard.writeText(text);
    target.classList.add("copied");
    target.textContent = "Copiado";
    setTimeout(() => {
      target.classList.remove("copied");
      target.textContent = "Copiar Prompt";
    }, 1200);
  } catch {
    target.textContent = "Error al copiar";
    setTimeout(() => {
      target.textContent = "Copiar Prompt";
    }, 1200);
  }
});

renderTrack(tracks[0].id);
