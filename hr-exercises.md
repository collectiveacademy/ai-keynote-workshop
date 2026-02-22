## Bloque 3: Live Demo (45 min)

### De lo Vago a lo Preciso
*   *Acción:* Mostrar ChatGPT en pantalla gigante.
*   *Prompt Malo:* "Dame ideas para un viaje". (Mostrar resultado genérico).
*   *Prompt Bueno (CRIF):* "Actúa como una agencia de viajes de lujo. Planea un viaje de 7 días a Italia para una familia con 2 niños (6 y 10 años), evitando museos aburridos y priorizando actividades al aire libre. Presupuesto medio. Formato: Tabla día por día."

### Caso de Uso Pro - Evaluación de Desempeño (HR Focus)
*   *Concepto:* Cómo usar la IA para sintetizar múltiples fuentes de datos (Feedback de pares, autoevaluación, notas del manager) en un documento coherente y profesional.
*   *Estructura del Prompt (Uso de XML Tags):*
```markdown
Actúa como un Manager de Operaciones Senior. Ayúdame a redactar la revisión de fin de año para un miembro de mi equipo llamada Elena. 
Tu objetivo es crear un resumen ejecutivo profesional y constructivo basado en las siguientes piezas de información:

<formato_de_salida>
1. Mirando Atrás: Logros clave del 2025 y áreas de desafío. 2-3 ejemplos de cómo aplicó nuestros principios operativos.
2. Mirando Adelante: Dos nuevos comportamientos o habilidades en los que Elena debe enfocarse para elevar su impacto.
</formato_de_salida>

<principios_operativos>
- El Cliente es el Norte: Trabajamos desde las necesidades del usuario.
- Excelencia en la Ejecución: Cuidamos el detalle y la calidad técnica.
- Colaboración sin Silos: Trabajamos como un solo equipo, sin egos.
- Mentalidad de Aprendizaje: Buscamos siempre aprender algo nuevo.
</principios_operativos>

<feedback_de_pares>
- Fortaleza: Entrega trabajo de alta calidad y es muy proactiva.
- Oportunidad: Podría delegar más y evitar sobrecargarse de tareas operativas.
</feedback_de_pares>

<autoevaluacion_de_elena>
- Destaca su éxito liderando la transición al Proyecto "Retail Flow".
- Obtuvo una certificación técnica en "Sistemas de Tesorería".
- Quiere enfocarse en mentoría el próximo año.
</autoevaluacion_de_elena>

<notas_del_manager_confidencial>
Elena tiene mucha energía pero a veces propone ideas que no están alineadas con la estrategia actual. 
Necesita primero sumergirse más en la nueva operación antes de intentar cambiarla. 
A veces se toma el feedback de forma personal; necesita madurez para entender que no es un ataque. 
Le asignaré liderar las "Calibraciones de Calidad" para que entienda los fundamentos antes de proponer cambios profundos.
</notas_del_manager_confidencial>

Prioriza mis notas (Manager) y busca patrones repetidos en el feedback de pares. Tono: Profesional, empático pero directo.
```

### Iteración en Vivo
*   *Acción:* Refinar el resultado anterior en vivo. "El tono suena muy duro en la parte de las ideas, suavízalo pero mantén la firmeza en que debe aprender primero la operación".

## Bloque 4: Hands-on / Workshop (45 min)

### Del Gimnasio al Laboratorio (HR Focus)
*   *Instrucción:* Ahora que entendemos la teoría, vamos a aplicarla en retos reales de HR comparando la "vieja forma" vs. la "nueva forma" de hablar con la IA.

### Reto 1 - El Salto de Calidad (Feedback Review)
*   *Objetivo:* Ver la diferencia entre un prompt genérico y uno específico (CRIF + XML).
*   *Paso 1 (La vieja forma):* Pide a la IA: "Escribe una evaluación de desempeño para Elena que trabajó bien pero debe mejorar su comunicación". 
    *   *Analiza:* ¿Qué tan genérico es el resultado?
*   *Paso 2 (La nueva forma):* Usa el framework del Bloque 3 (Slide 12). Pasa el contexto completo, separa con etiquetas `<contexto>`, `<feedback_manager>` y define un `<formato_salida>`.
    *   *Analiza:* ¿Cómo cambia la profundidad y utilidad del consejo?

### Reto 2 - Role-play: Manejo de Conversaciones Difíciles
*   *Objetivo:* Usar la IA como simulador para preparar una reunión real.
*   *Prompt Maestro:*
```text
Actúa como un empleado con alto potencial pero que recientemente ha bajado su 
rendimiento y se muestra defensivo. Yo seré tu manager. Empieza tú la 
conversación quejándote de que tienes demasiada carga de trabajo. Mi objetivo 
es entender la causa raíz y acordar un plan de mejora.
```
*   *Iteración Dinámica:* Después de un par de intercambios, dile a la IA:
```text
PAUSA. Sal del personaje. Actúa como mi Coach de HR y analiza mi última 
respuesta: ¿Fui empático? ¿Hice preguntas abiertas? ¿Cómo puedo mejorar mi enfoque?
```

### Reto 3 - El Filtro de Sesgos (Audit Mode)
*   *Objetivo:* Usar la IA para auditar nuestro propio juicio.
*   *Actividad:* Toma un párrafo de feedback que hayas escrito recientemente (o inventa uno).
*   *Prompt:* "Analiza este texto de feedback. ¿Hay sesgos inconscientes (de género, edad, cultura)? ¿El lenguaje es constructivo o punitivo? Dame 3 opciones para reescribirlo manteniendo el mensaje pero eliminando el sesgo."

## Bloque 3: Live Demo (45 min)

### Paso 1 - Investigación en Tiempo Real (Deep Research)
*   *Acción:* Ejecutar la fase de "Discovery" usando el primer bloque del Prompt Maestro.
*   *Prompt de ejecución:* 
    ```text
    Analiza el mercado de [Data Scientist] en [CDMX/Remoto]. 
    1. Compara las propuestas de valor de [Empresa A] y [Empresa B]. 
    2. Identifica los 3 'skills' técnicos más escasos según foros y tendencias de 2024.
    3. Busca rangos salariales reales por percentiles.
    ```
*   *Meta:* Obtener la materia prima para la "Capa 2" del Context Stacking.

### Paso 2 y 3 - Contexto y Candidate Persona
*   *Acción:* Integrar los desafíos de la empresa (Capa 1) con los hallazgos del mercado para definir al humano ideal.
*   *Prompt de ejecución:* 
    ```text
    Con los datos de mercado anteriores y sabiendo que nuestro reto es [Ej: escalar de 10 a 50 ingenieros sin perder agilidad]:
    1. Define el perfil psicográfico (Motivaciones y Frustraciones).
    2. ¿Qué 'gancho' conectaría emocionalmente con este candidato?
    3. Crea un resumen del 'Candidate Persona' que incluya sus hábitos (ej. qué lee, qué valora).
    ```
*   *Meta:* Crear un perfil que no se base en requisitos, sino en motivaciones.

### El Entregable - Redacción de la JD "Out of the Box"
*   *Acción:* Consolidar todo el "Context Stacking" en una descripción de puesto disruptiva.
*   *Prompt de ejecución:* 
    ```text
    Actúa como un Copywriter de Employer Branding. 
    Usa toda la información (Market + Contexto + Persona) para redactar la JD final.
    - Tono: Innovador y desafiante. 
    - Estructura: 'Tu Misión', 'Tus Retos', 'Tus Beneficios'. 
    - Regla de Oro: Prohibido usar la palabra 'Requisitos' o 'Requerimientos'.
    ```
*   *Meta:* Pasar del reporte estratégico a una pieza de atracción de talento real.

## Bloque 4: Hands-on / Workshop (45 min)

### Challenge: La Vacante Imposible
*   *Instrucción:* Elige esa vacante que llevas meses sin poder cerrar o una posición nueva y compleja.
*   *Metodología:* Vamos a ensamblar un **Prompt Maestro de 3 Capas** usando **XML Tags** para organizar el contexto profundo.

### Fase 1: Ensamblaje del Contexto (Deep Research + ADN)
*   *Actividad:* Copia y completa el siguiente prompt interactivo para iniciar tu investigación.
*   *Prompt Maestro para el Taller:*
```text
Actúa como un Consultor de Estrategia de Talento e IA Senior. 
MI OBJETIVO: Construir un reporte de mercado y el perfil ideal para un [INSERTAR NOMBRE DEL ROL AQUÍ].

<contexto_empresa>
- Nuestra industria: [INSERTAR SECTOR, EJ: FINTECH, RETAIL, ETC]
- Reto actual: [INSERTAR DESAFÍO PRINCIPAL, EJ: MIGRACIÓN TECNOLÓGICA, EXPANSIÓN A LATAM]
- Cultura: [INSERTAR 2-3 VALORES CLAVE, EJ: AGILIDAD RADICAL, FOCO EN DATOS]
</contexto_empresa>

<investigacion_mercado>
- Analiza tendencias salariales y ganchos de contratación para este rol en [INSERTAR UBICACIÓN O 'REMOTO'].
- Identifica los 3 'skills' técnicos más escasos hoy.
- Compara lo que ofrecen competidores como [INSERTAR COMPETIDOR A] y [INSERTAR COMPETIDOR B].
</investigacion_mercado>

<instruccion>
Basado en las etiquetas anteriores, define el 'Candidate Persona' (Psicografía): 
¿Qué le frustra en su trabajo actual? ¿Qué le haría decir 'sí' a nuestra propuesta?
</instruccion>
```

### Fase 2: Redacción Disruptiva (Employer Branding)
*   *Actividad:* Una vez que tengas el reporte, genera la JD final eliminando los clichés corporativos.
*   *Prompt de Redacción:*
```text
Actúa como un Copywriter de Employer Branding de alto nivel. 
Usa el análisis anterior para redactar la JD final.

<formato_salida>
- Tono: [INSERTAR TONO DESEADO, EJ: REBELDE, PROFESIONAL-CERCANO, TÉCNICO]
- Estructura: 'Tu Misión', 'Tus Retos', 'Tus Beneficios'.
- REGLA: Prohibido usar la palabra 'Requisitos'. Enfócate en el impacto.
</formato_salida>

<auditoria_de_sesgos>
Analiza el resultado final. ¿Detectas sesgos de género o edad? 
Sugiéreme 2 cambios para que el lenguaje sea más inclusivo y atractivo para talento diverso.
</auditoria_de_sesgos>
```
## Bloque 3: Live Demo (45 min)

### Paso 1 - Diseñando la Entrevista Estructurada
*   *Acción:* Tomar la Job Description generada en la sesión anterior y transformarla en una guía de entrevista.
*   *Concepto:* No improvisar. Cada pregunta debe tener un "por qué" y un "qué espero escuchar".
*   *Prompt de ejecución:* 
    ```text
    Actúa como un Experto en Selección por Competencias. 
    Tengo esta JD: [Pegar JD]. 
    1. Identifica las 3 competencias críticas para el éxito en este rol. 
    2. Crea 3 preguntas situacionales (behavioral) por cada competencia. 
    3. Para cada pregunta, define un "Indicador de Respuesta Excelente" (qué evidencias buscamos).
    ```
*   *Meta:* Crear una hoja de ruta que elimine el sesgo de "me cayó bien".

### Paso 2 - Captura y Transcripción (La Magia en Vivo)
*   *Acción:* Simular una respuesta de entrevista (2-3 min) y procesarla en tiempo real.
*   *Herramientas:* Uso de la App móvil de ChatGPT (Modo Voz), Word Dictado o Whisper.
*   *Dinámica:*
    1. El instructor pone un audio o pide a un voluntario una respuesta rápida.
    2. Se muestra cómo la IA transcribe palabra por palabra, capturando matices que el reclutador suele perder mientras toma notas.
*   *Visual:* Pantalla compartida mostrando la transcripción fluyendo en vivo.

### Paso 3 - Evaluación con IA (Caso Real: Operations Associate)
*   *Acción:* Someter la transcripción a un modelo de IA configurado con principios operativos reales.
*   *Contexto de la Vacante (Nexus Ops - Anonymized):*
    > "Nexus Ops está lanzando sus Centros de Entrega Globales. Buscamos personas dinámicas para diseñar y escalar nuestras operaciones de la próxima década. Responsabilidades: Resolver problemas de usuarios, analizar procesos para escalar la operación, y colaborar con equipos de producto."
*   *Prompt Maestro (Estructura de Scorecard Real):*
    ```markdown
    Actúa como un Reclutador Senior en Nexus Ops. 

    <objetivo>
    Convertir estas notas crudas de entrevista en un scorecard legible, estructurado y basado en evidencias.
    </objetivo>

    <indicadores_excelencia_definidos_previamente>
    1. Delivering Outstanding Results:
       - "El candidato debe describir métricas específicas (KPIs) que mejoraron gracias a su intervención directa, no solo participación pasiva."
    2. Exothermic (Energía):
       - "Buscamos evidencia de haber motivado a otros o desbloqueado situaciones tensas. No solo 'ser amable', sino generar inercia positiva."
    3. Users First:
       - "Debe mencionar explícitamente haber hablado con usuarios finales o usado feedback de clientes para tomar una decisión difícil."
    </indicadores_excelencia_definidos_previamente>

    <criterio_de_corte>
    No basta con comportamientos base. Buscamos alto impacto. Si el candidato no cumple con los indicadores de excelencia anteriores o no provee evidencia clara de resultados, su recomendación final debe ser negativa.
    </criterio_de_corte>

    <instrucciones_evaluacion>
    Evalúa los siguientes principios usando las opciones: (Strong yes, yes, no, definitely not). Apoya cada calificación con una cita o evidencia corta de la transcripción.
    
    1. Delivering Outstanding Results: ¿Demostró comportamientos y mentalidad alineados con resultados excepcionales?
    2. Exothermic: ¿Es una persona que genera energía en el equipo?
    3. Users First: ¿Pone al usuario en el centro de sus decisiones?
    </instrucciones_evaluacion>

    <formato_salida>
    - RECOMENDACIÓN FINAL: (Strong yes, yes, no, definitely not)
    - KEY TAKE-AWAYS: (Conclusiones, pros, contras y temas para seguimiento).
    </formato_salida>

    <jd>
    Nexus Ops is launching Nexus Delivery Centers - a brand new global team to design, implement and grow operations. 
    Responsibilities:
    - Troubleshoot and solve external user issues.
    - Analyze processes to scale operations and improve user experience.
    - Partner with global specialists to run critical workflows.
    Who you are:
    - User first mindset, analytical thinking, excellent communication.
    - Process-oriented and able to prioritize in quick-moving environments.
    </jd>

    <transcripcion>
    [Pegar aquí el texto de la entrevista]
    </transcripcion>
    ```
*   *Meta:* Mostrar cómo la IA puede aplicar "filtros de cultura y principios" de forma mucho más rigurosa que una lectura rápida humana.

## Bloque 4: Hands-on / Workshop (45 min)

### Workshop - Tu Entrevista Aumentada (Paso 1: Diseño)
*   *Actividad:* Diseñar el marco de evaluación para una vacante real.
*   *Instrucciones:*
    1. Toma la JD que generaste en la Sesión 2 (o una vacante actual).
    2. Identifica los 2 "Operating Principles" o Competencias más críticos para ese rol.
    3. Usa el siguiente prompt para generar tus preguntas y criterios de éxito.

*   *Prompt de Diseño:*
```text
Actúa como un Experto en Selección por Competencias y Metodología STAR. 
MI OBJETIVO: Crear una guía de entrevista estructurada para el rol de [INSERTAR NOMBRE DEL ROL].

<jd>
[INSERTAR DESCRIPCIÓN DEL PUESTO AQUÍ]
</jd>

<competencias_clave>
1. [INSERTAR COMPETENCIA 1, EJ: LIDERAZGO]
2. [INSERTAR COMPETENCIA 2, EJ: RESOLUCIÓN DE PROBLEMAS]
</competencias_clave>

<instruccion>
1. Genera 2 preguntas STAR por cada competencia mencionada.
2. Para cada pregunta, define un "Indicador de Respuesta Excelente" que describa qué evidencias conductuales específicas (hechos, no opiniones) debemos escuchar del candidato.
</instruccion>
```

### Workshop - Paso 2: Ejecución y Captura
*   *Actividad:* Roleplay y captura de datos en tiempo real.
*   *Dinámica (En parejas):*
    1. **Entrevistador:** Elige una de tus preguntas STAR generadas y lánzala.
    2. **Candidato:** Responde durante 2-3 minutos basándote en una experiencia real.
    3. **Captura:** El entrevistador debe usar la App de ChatGPT (Modo Voz/Dictado) o Word para transcribir la respuesta **sin interrumpir el flujo**.
*   *Tip:* Asegúrate de pedir permiso antes de "grabar/transcribir".

### Workshop - Paso 3: Auditoría de IA y Decisión
*   *Actividad:* Procesar la entrevista con el Prompt Maestro y analizar resultados.
*   *Instrucciones:*
    1. Copia la transcripción obtenida en el paso anterior.
    2. Usa el siguiente prompt interactivo para generar tu scorecard.

*   *Prompt Maestro de Evaluación:*
```text
Actúa como un Reclutador Senior experto en análisis de evidencias conductuales. 

<objetivo>
Evaluar la siguiente transcripción de entrevista basándote en los indicadores de excelencia definidos.
</objetivo>

<indicadores_de_excelencia>
[INSERTAR AQUÍ LOS INDICADORES GENERADOS EN EL PASO 1]
</indicadores_de_excelencia>

<transcripcion_entrevista>
[PEGAR AQUÍ EL TEXTO TRANSCRITO]
</transcripcion_entrevista>

<instrucciones_evaluacion>
1. Analiza la respuesta del candidato buscando evidencias STAR (Situación, Tarea, Acción, Resultado).
2. Califica cada competencia como: (Strong Yes / Yes / No / Definitely Not).
3. JUSTIFICACIÓN: Extrae una cita textual de la transcripción que soporte tu calificación.
4. DETECCIÓN DE SESGOS: Indica si el entrevistador hizo alguna pregunta que pudiera inducir sesgos.
</instrucciones_evaluacion>

<formato_salida>
Presenta un Scorecard estructurado con: Competencia, Calificación, Evidencia (Cita) y Recomendación Final.
</formato_salida>
```
*   *Debate en Pareja:*
    *   ¿La IA detectó alguna "Red Flag" que tú pasaste por alto?
    *   ¿Las citas textuales justifican realmente la calificación dada?
    *   ¿Qué tan cerca estuvo la recomendación de la IA de tu "gut feeling"?

### Reflexión Grupal: ¿Datos o Instinto?
*   *Preguntas clave:*
    *   ¿Cómo cambia la dinámica de la entrevista cuando no tienes que tomar notas desesperadamente?
    *   ¿Es este proceso más justo para el candidato?
    *   ¿Qué tan escalable es este modelo en tu organización actual?


## Bloque 5: Cierre (15 min)

### Ética del Grabado
*   *Key Point:* Siempre pedir consentimiento. Transparencia total con el candidato.


## Bloque 3: Live Demo (45 min)

### Paso 1 - De la Abstracción a la Acción (Definición)
*   *Acción:* Definir la "columna vertebral" de una competencia.
*   *Concepto:* No basta con un nombre; necesitamos dimensiones claras.
*   *Prompt de ejecución:* 
    ```text
    Actúa como un Arquitecto de Talento. 
    Define la competencia 'Propiedad (Ownership)' para una empresa de producto tech. 
    1. Describe qué significa en 2 párrafos con un tono de alto rendimiento. 
    2. Divide la competencia en 3 dimensiones: Responsabilidad Personal, Resolución Proactiva y Calidad de Entrega.
    ```

### Paso 2 - El Constructor de Matrices BARS
*   *Acción:* Transformar dimensiones en comportamientos medibles.
*   *Prompt de ejecución:* 
    ```text
    Usa la competencia y dimensiones anteriores para crear una matriz BARS en tabla Markdown. 
    Columnas: Nivel 1 (En Desarrollo), Nivel 2 (Sólido/Esperado), Nivel 3 (Referente/Excede). 
    Filas: Las 3 dimensiones definidas. 
    REGLA DE ORO: Describe acciones que un manager podría 'ver' o 'oír' en una reunión o en Slack. Cero adjetivos subjetivos.
    ```

### Paso 3 - El Performance Review Formal (Anual/Semestral)
*   **Concepto:** Cuando llega el "Día del Juicio" (Review Anual), el manager suele estar abrumado por múltiples fuentes de datos.
*   **Solución:** Usar un prompt estructurado que integre Feedback de Pares, Autoevaluación y Notas del Manager para generar un reporte balanceado.
*   **Caso de Uso:** "Valentina", una empleada de alto rendimiento previo que está luchando con la adaptación a un nuevo equipo (Ego vs. Colaboración).
*   **Prompt Maestro para Performance Reviews:**
    ```markdown
    Ayúdame a construir la Evaluación de Fin de Año para mi equipo. Como manager, tengo feedback que he escrito, las autoevaluaciones de mi equipo y el feedback de pares.
    
    OBJETIVO: Escribir una evaluación de fin de año concisa para [Nombre del Empleado].
    PRIORIDAD: Enfócate en comportamientos repetidos en los diferentes feedbacks, priorizando mis notas como manager.
    
    <formato_de_salida>
    Mirando hacia atrás:
    - Resume logros clave y áreas de desafío de forma sucinta.
    - Comparte 2-3 ejemplos breves de cómo este empleado modeló nuestros Principios Operativos.
    
    Mirando hacia adelante:
    - Enumera dos nuevos comportamientos o habilidades en los que enfocarse.
    - Explica cómo esto les haría más efectivos.
    </formato_de_salida>
    
    <contexto_principios_operativos>
    [Insertar Principios de la Empresa: ej., Usuarios Primero, Moverse con Urgencia, Colaborar sin Ego, Mantener la Curiosidad...]
    </contexto_principios_operativos>
    
    <calificacion>
    Cumple con éxito las expectativas (Calificación privada para contexto).
    
    EVALUACIÓN BASADA EN BARS (Pasos 1 y 2):
    - Propiedad (Ownership): Nivel 3 (Sólido). Valentina cumple con la "Responsabilidad Personal", pero su "Resolución Proactiva" se ve limitada por la falta de delegación.
    - Calidad de Entrega: Nivel 3 (Referente). Sus entregas técnicas son impecables, superando la barra alta de fiabilidad del equipo.
    - Colaboración: Nivel 1 (En Desarrollo). Se observa una brecha crítica en la dimensión de "Colaborar sin Ego" al reaccionar defensivamente ante el feedback de diseño.
    </calificacion>
    
    <feedback_de_pares>
    - Fortaleza: Compromiso con la calidad.
    - Fortaleza: Ejecución eficiente.
    - Oportunidad: Colaboración y Delegación (necesita delegar más).
    </feedback_de_pares>
    
    <autoevaluacion>
    - Afirma cumplir con "Usuarios Primero" al corregir flujos de inicio de sesión.
    - Afirma "Curiosidad" al aprender sobre productos de Tesorería.
    - Planea hacer la transición a Operaciones de Consumo, pero quiere equilibrar la enseñanza con el aprendizaje.
    </autoevaluacion>
    
    <evaluacion_manager_anterior>
    - Anteriormente de alto rendimiento (calificación SME).
    - Ganó premios por eficiencia y liderazgo en NPI.
    - Historial de necesidad de coaching en autonomía.
    </evaluacion_manager_anterior>
    
    <pensamientos_crudos_manager_actual>
    [Empleado] tiene mucha energía pero sus ideas a menudo están desalineadas con nuestra realidad actual. Necesita dominar los conceptos básicos de la nueva operación antes de intentar cambiarla. Reacciona a la defensiva cuando se rechazan sus ideas (Ego). Siente la necesidad de demostrar su valía debido a su antigüedad, pero es contraproducente. Quiero asignarla a Calibraciones de QA para fundamentarla en los aspectos básicos.
    </pensamientos_crudos_manager_actual>
    ```

### Bonus Track - Conversaciones Difíciles (Feedback de Alto Impacto)
*   **Concepto:** Usar la rúbrica BARS para preparar conversaciones donde el desempeño no es el esperado, transformando la tensión en un plan de acción.
*   **Meta:** Mostrar cómo la IA ayuda a preparar un feedback objetivo que desarme la defensividad del empleado.
*   **Prompt Maestro para Conversaciones Difíciles:**
    ```markdown
    Actúa como un Coach de Management y Experto en Feedback. 
    OBJETIVO: Preparar una conversación de feedback para una situación difícil basada en evidencias.

    RÚBRICA DE REFERENCIA (BARS):
    [Pegar aquí la tabla BARS de la competencia en cuestión]

    HECHOS OBSERVADOS:
    - Empleado: [Nombre]
    - Situación: [Ej: "Entregó el proyecto 2 días tarde, pero el código no tuvo errores y ayudó a otros 2 compañeros a terminar sus tareas."]
    - Nivel esperado para su rol: Nivel 3 (Sólido).

    TAREA:
    1. ANÁLISIS: Según la rúbrica, ¿en qué nivel está operando hoy este empleado? Justifica con los hechos.
    2. FEEDBACK COIN: Redacta un script de conversación siguiendo:
       - Contexto: El momento específico.
       - Observación: El hecho objetivo (sin juicios).
       - Impacto: Cómo afectó al equipo/negocio.
       - Next Steps: Qué necesita hacer para subir la vara (Nivel 3).
    3. PREPARACIÓN: Anticipa 2 objeciones del empleado y dame respuestas empáticas pero alineadas a la rúbrica.
    ```

## Bloque 4: Hands-on / Workshop (45 min)

### Workshop Parte 1 - Arquitectura de la Competencia (Diseño)
*   *Actividad:* Seleccionar una competencia "crítica" y definir sus niveles BARS usando Context Stacking.
*   *Instrucciones:*
    1. Elige una competencia que hoy sea "gris" o subjetiva en tu equipo.
    2. Usa etiquetas XML para dar contexto a la IA.
*   *Prompt Sugerido:*
    ```text
    <contexto_equipo> [Ej: Equipo de Customer Success en una Startup] </contexto_equipo>
    <competencia> [Ej: Comunicación con Clientes Difíciles] </competencia>
    <instruccion> 
    Genera una matriz BARS de 3 niveles (1, 2, 3). 
    Asegúrate de que el Nivel 3 refleje a un referente en el mercado y el Nivel 1 sea un punto de acción inmediato.
    </instruccion>
    ```

### Workshop Parte 2 - El Simulador de Feedback (Roleplay)
*   *Actividad:* Roleplay interactivo con la IA para practicar la entrega de feedback.
*   *Dinámica:* 
    1. Usa el **Prompt Maestro de Conversaciones Difíciles** para generar tu script COIN.
    2. Configura a la IA como tu "interlocutor difícil".
*   *Prompt del Simulador:*
    ```text
    Actúa como un empleado con perfil [Ej: Senior con mucha experiencia pero resistente al cambio]. 
    Acabo de darte el siguiente feedback: [Pegar tu script COIN]. 
    Respóndeme con una objeción que pondría a prueba mi liderazgo. 
    Mantengamos el diálogo turno a turno. Mi objetivo es reconducir la charla hacia la rúbrica BARS.
    ```

### Workshop Parte 3 - El "End of Year Review" Challenge
*   *Actividad:* Redactar una evaluación de desempeño completa integrando múltiples fuentes de datos.
*   *Dinámica:*
    1. Piensa en un miembro de tu equipo (o usa un caso hipotético).
    2. Recopila mentalmente (o escribe notas rápidas):
        *   Su autoevaluación (¿Qué cree que hizo bien?).
        *   Feedback de pares (¿Qué dicen otros?).
        *   Tus notas como manager (La realidad cruda).
    3. Usa el **Prompt Maestro del Paso 3** para generar el review final.
*   *Prompt Simplificado para el Taller:*
    ```text
    Actúa como un Manager Senior. Redacta el Performance Review de fin de año para [Nombre].
    
    INPUTS:
    - Mis notas: [Ej: Gran capacidad técnica, pero le cuesta comunicar malas noticias a tiempo].
    - Feedback de pares: [Ej: Es muy colaborativo, siempre ayuda a desbloquear a otros].
    - Autoevaluación: [Ej: Cree que está listo para ascender a Senior].
    
    OUTPUT:
    Genera un texto narrativo de 2 párrafos: "Mirando hacia atrás" (Logros) y "Mirando hacia adelante" (Áreas de foco).
    ```

### Workshop Parte 4 - Auditoría de Equidad y Sesgos
*   *Actividad:* Revisar el feedback y la rúbrica para asegurar que sean 100% profesionales y objetivos.
*   *Prompt Sugerido:*
    ```text
    Analiza este feedback que redacté: [Pegar feedback, mínimo 5 renglones]. 
    1. Identifica adjetivos subjetivos y cámbialos por comportamientos observables. 
    2. ¿Detectas señales de sesgo o bias?
    3. Dame una versión final que sea asertiva y centrada en el crecimiento.
    ```

### Reflexión: De Juez a Coach
*   *Pregunta:* ¿Cómo cambia tu seguridad como manager cuando la discusión no es sobre tu "opinión" sino sobre la "rúbrica" y los datos consolidados?
*   *Key Takeaway:* La IA nos ayuda a separar a la persona del comportamiento y a ver la "película completa" del año.

## Bloque 5: Cierre (15 min)

### El Valor de la Claridad
*   *Reflexión:* La claridad es amabilidad. La IA nos ayuda a ser claros para que el empleado pueda ganar.


## Bloque 3: Live Demo (45 min)

### Paso 1 - Diseñando la Encuesta Perfecta (Pre-Medición)
*   *Concepto:* No empieces por las preguntas, empieza por el objetivo.
*   *Factores Clave:*
    *   **Frecuencia:** ¿Pulso mensual (check-in rápido) o Anual (profunda)?
    *   **Anonimato:** Crucial para temas sensibles.
    *   **Actionability:** "Si la respuesta es negativa, ¿puedo hacer algo al respecto?". Si no, no preguntes.
*   *Prompt de Diseño:*
    ```text
    Actúa como un Experto en People Analytics. 
    Diseña una estructura de encuesta de clima para [Empresa de Tecnología de 100 empleados en crecimiento rápido].
    
    OBJETIVO: Medir el impacto del reciente regreso a la oficina (RTO) y el burnout.
    RESTRICCIÓN: Máximo 10 preguntas.
    
    ESTRUCTURA REQUERIDA:
    1. 2 Preguntas de eNPS (Quantitative).
    2. 3 Preguntas sobre Work-Life Balance (Escala Likert 1-5).
    3. 2 Preguntas abiertas (Qualitative) diseñadas para obtener historias, no monosílabos.
    4. Justifica por qué elegiste cada pregunta abierta (qué sesgo evitas).
    ```

### Paso 2 - Auditoría de la Herramienta (Fricción y Calidad)
*   *Acción:* Antes de lanzar, usa la IA como "Abogado del Diablo" para asegurar que los datos que recojas sean útiles y no ruido.
*   *Prompt de Auditoría de Calidad:*
    ```text
    Actúa como un experto en Psicometría y Diseño de Encuestas. 
    Analiza las preguntas que generamos anteriormente para asegurar que los datos resultantes sean de alta calidad.
    
    CRITERIOS DE AUDITORÍA:
    1. Fatiga del Encuestado: ¿Hay preguntas redundantes que podamos eliminar para aumentar la tasa de completitud?
    2. Sesgo de Respuesta: ¿Alguna pregunta está redactada de forma que empuja al empleado a responder positivamente (Leading Question)?
    3. Ambigüedad: ¿Hay términos vagos que diferentes personas podrían interpretar de distintas maneras?
    4. Accionabilidad: Si una pregunta sale con puntaje bajo, ¿el resultado nos da una pista clara de qué acción tomar o es demasiado genérica?
    
    Reescribe las preguntas necesarias para que sean directas, neutras y diseñadas para obtener insights accionables.
    ```

### Paso 3 - El "Data Scientist" de Bolsillo (Análisis de CSV)
*   *Contexto:* Tienes un Excel/CSV con 500 filas de comentarios abiertos sobre "¿Qué mejorarías de la empresa?".
*   *Prompt Maestro (Data Analysis):*
    ```text
    Actúa como un Senior People Analyst experto en NLP (Natural Language Processing). 
    Analiza los comentarios del archivo adjunto (CSV) siguiendo esta estructura rigurosa:
    
    TAREA 1: SENTIMENT ANALYSIS (Visión Estratégica)
    - Genera un reporte por Áreas/Categorías (ej. Liderazgo, Cultura, Compensación, Procesos).
    - Para cada área, indica: Sentimiento (Positivo/Neutro/Negativo/Mixto), % de Confianza de la IA y un resumen ejecutivo de los comentarios que justifique esa clasificación.
    
    TAREA 2: TOPIC MODELING (Descubrimiento de Patrones)
    - Identifica los temas emergentes sin usar categorías predefinidas.
    - Para cada tema, genera una tabla con:
      a) Tema Identificado (ej. "Fricción Tecnológica").
      b) Frecuencia (% de menciones sobre el total).
      c) Sentimiento Promedio del tema.
      d) Acción Recomendada específica para RRHH.
    
    TAREA 3: RIESGOS CRÍTICOS Y "EARLY WARNINGS"
    - Detecta señales de Burnout, intención de renuncia o toxicidad.
    - Cita 2 ejemplos textuales (anonimizados) representativos de cada riesgo.
    
    FORMATO DE SALIDA: Usa tablas markdown para las visualizaciones de sentimiento y temas, tal como un reporte ejecutivo de People Analytics.
    ```

::: tip 📥 Recurso para Práctica
[**Descargar Dataset de Ejemplo (Mock Responses)**](./mock-responses.md)  
Este archivo contiene 250 respuestas simuladas de una startup en crecimiento. Úsalo para copiar y pegar en la IA y probar el prompt anterior.
:::


## Bloque 4: Hands-on / Workshop (45 min)

### Challenge - "El CEO está Furioso"
*   *Escenario:* La encuesta de pulso acaba de salir y el eNPS cayó 20 puntos. El CEO quiere respuestas en 1 hora.
*   *Actividad:*
    1.  Toma el dataset de muestra (o tus datos propios anonimizados).
    2.  Ejecuta el **Prompt Maestro de Análisis**.
    3.  Genera el "Executive Summary".

### Redactando el Executive Summary
*   *Prompt Sugerido:*
    ```text
    Usa el análisis anterior para escribir un correo al CEO.
    ESTRUCTURA:
    1. El Titular: La verdad en una frase (Bluf: Bottom Line Up Front).
    2. Los Datos: Los 3 drivers de la caída del eNPS.
    3. La Recomendación: Qué sugerimos hacer YA para detener la hemorragia.
    TONO: Directo, basado en datos, sin excusas, estratégico.
    ```

### Simulador de Crisis de Comunicación
*   *Actividad:* "La gente está hablando en los pasillos sobre los despidos recientes".
*   *Prompt:*
    ```text
    Ayúdame a redactar el script para el All-Hands meeting de mañana. 
    La encuesta muestra miedo e incertidumbre. 
    Necesito un discurso que reconozca el dolor (empatía) pero que re-enfoque al equipo en el futuro (visión), sin prometer cosas que no podemos cumplir.
    ```

## Bloque 5: Cierre del Curso (15 min)

### El Viaje Completo (Recap S1-S5)

*   S1: Productividad Personal (Tú).
*   S2: Job Descriptions (Definir).
*   S3: Entrevistas (Elegir).
*   S4: Performance (Mejorar).
*   S5: Cultura (Escuchar).


<div style="margin: 2rem auto; max-width: 640px; padding: 2rem 2.5rem; border-left: 4px solid var(--vp-c-brand-1); background: var(--vp-c-brand-soft); border-radius: 0 12px 12px 0; text-align: center;">
  <p style="font-size: 1.35rem; font-weight: 600; line-height: 1.6; color: var(--vp-c-text-1); margin: 0; font-style: italic;">
    "La IA no reemplaza lo humano.<br>La IA automatiza lo burocrático<br>para que podamos ser <span style="color: var(--vp-c-brand-1); font-weight: 800;">más humanos</span>."
  </p>
</div>

