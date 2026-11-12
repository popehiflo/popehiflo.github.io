/**
 * Guía de Imágenes y Assets para Proyectos y Blogs:
 * - Card de Proyecto (`imageSmall`): 600 x 375 px (Relación 16:10) | Formato: .webp | Peso ideal: 15-35 KB | Nombre: [categoria]_[slug]-small.webp
 * - Cabecera de Modal (`image`): 800 x 500 px (Relación 16:10) | Formato: .webp | Peso ideal: 35-70 KB | Nombre: [categoria]_[slug].webp
 * - Captura Secundaria en Modal (`<figure class="project-modal-secondary-img">`): 800 x 500 px (ancho 800px, alto adaptable) | Formato: .webp | Peso ideal: 35-80 KB | Nombre: [slug]-ficha.webp
 * - Card/Modal de Blog (`image`): 600 x 375 px (Relación 16:10) | Formato: .webp | Peso ideal: 10-30 KB | Nombre: blog_[slug].webp
 * - Open Graph Social (`og-image.jpg`): 1200 x 630 px (Relación 1.91:1) | Formato: .jpg | Peso ideal: < 100 KB
 */

/* PROJECTS */
const allProjects = [
  {
    id: "01",
    title: "Repuestos Rojas: E-commerce, ERP & Punto de Venta (POS)",
    image: "./public/assets/imgs/projects/fullstack_repuestos-rojas.webp",
    imageSmall: "./public/assets/imgs/projects/fullstack_repuestos-rojas-small.webp",
    summary: "Plataforma All-in-One (Catálogo online SEO + ERP Administrativo + POS ultrarrápido y Kardex atómico) para el sector automotriz.",
    description: `
      <p><strong>El Desafío:</strong> Digitalizar las operaciones de mostrador y abrir un canal de ventas en línea para una tienda de repuestos automotrices en Cusco sin depender de costosas suscripciones mensuales, manejando compatibilidades por vehículo y control contable de stock.</p>
      <p><strong>La Solución:</strong> Plataforma "All-in-One" (E-commerce público + Sistema de Gestión ERP/POS) construida con <strong>Next.js 16</strong> y <strong>Supabase (PostgreSQL)</strong> bajo una arquitectura Serverless de alta eficiencia operativa.</p>
      <strong>Módulos del Sistema:</strong>
      <ul>
        <li><strong>Catálogo en Línea y Cotizaciones por WhatsApp:</strong> Sitio público optimizado para SEO (SSR, Sitemap automático y Rich Cards Open Graph) con buscador por marca/modelo y generación directa de cotizaciones hacia WhatsApp.</li>
        <li><strong>Punto de Venta (POS) e Historial de Ventas:</strong> Interfaz rápida de mostrador con búsqueda instantánea por SKU o compatibilidad vehicular, registro de ventas, gestión de cotizaciones e historial detallado de transacciones.</li>
        <li><strong>Control de Inventario y Kardex Contable:</strong> Motor transaccional con Triggers y RPCs en PostgreSQL que descuenta stock y registra cada entrada/salida en el Kardex de forma atómica, evitando quiebres o descuadres.</li>
        <li><strong>Analíticas Financieras (Dashboard):</strong> Reportes visuales con Recharts para monitorear ingresos brutos, margen neto de ganancia (restando COGS) y detección automática de stock sin rotación ("stock muerto").</li>
        <li><strong>Catálogo Interno y Control de Usuarios:</strong> Panel administrativo para publicar/editar repuestos con carga segura de imágenes a Cloudinary, protegido con políticas RLS y control de accesos por rol.</li>
      </ul>
      <figure class="project-modal-secondary-img">
        <img src="./public/assets/imgs/projects/repuestos-rojas-ficha.webp" alt="Ficha técnica y panel del sistema Repuestos Rojas" width="800" height="500" loading="lazy">
      </figure>
    `,
    tags: {
      nextjs: "next.js 16",
      react: "react 19",
      ts: "typescript",
      supabase: "supabase",
      postgres: "postgresql",
      tailwind: "tailwind v4",
      shadcn: "shadcn-ui",
      recharts: "recharts"
    },
    category: {
      id: "fullstack",
      name: "Full Stack"
    },
    links: {
      google: "https://www.repuestosrojas.pe/"
    }
  },
  {
    id: "02",
    title: "Portafolio Profesional & Marca Personal (popehiflo)",
    image: "./public/assets/imgs/projects/frontend_portfolio-popehiflo.webp",
    imageSmall: "./public/assets/imgs/projects/frontend_portfolio-popehiflo-small.webp",
    summary: "Aplicación web estática ultrarrápida en Vanilla JS, HTML5 y CSS3, optimizada para SEO técnico, accesibilidad y diseño responsivo desde 360px.",
    description: `
      <p><strong>El Objetivo:</strong> Construir una plataforma de marca personal y portafolio de proyectos con velocidad instantánea y control total del DOM, prescindiendo de frameworks pesados.</p>
      <strong>Características técnicas implementadas:</strong>
      <ul>
        <li><strong>Arquitectura Modular en Vanilla JS:</strong> Separación limpia de responsabilidades mediante ES6 Modules nativos y renderizado dinámico desde capa de datos centralizada.</li>
        <li><strong>SEO Técnico y Semántica Web:</strong> Implementación de datos estructurados JSON-LD (Schema.org <code>ProfilePage</code> y <code>Person</code>), protocolo Open Graph, Twitter Cards, URL canónica y sitemap XML.</li>
        <li><strong>Diseño Responsivo Milimétrico:</strong> Maquetación fluida con CSS Grid, Flexbox y Custom Properties adaptada desde pantallas móviles de 360px hasta monitores de escritorio, con soporte persistente de tema oscuro/claro.</li>
        <li><strong>Optimización de Rendimiento:</strong> Carga no bloqueante de iconografía, activos gráficos en formato WebP de doble resolución y lazy loading estratégico.</li>
      </ul>
      <figure class="project-modal-secondary-img">
        <img src="./public/assets/imgs/projects/img-frontend-0.webp" alt="Vista adicional de arquitectura responsiva y componentes del portafolio" width="800" height="500" loading="lazy">
      </figure>
    `,
    tags: {
      html: "html5",
      css: "css3",
      js: "es6-modules",
      seo: "technical-seo",
      schema: "json-ld",
      responsive: "responsive-ui"
    },
    category: {
      id: "frontend",
      name: "Frontend"
    },
    links: {
      github: "https://github.com/popehiflo/popehiflo.github.io",
      google: "https://popehiflo.github.io/",
      youtube: "https://www.youtube.com/watch?v=tjAcXTpIou8"
    }
  },
  {
    id: "03",
    title: "Sistema de Gestión Bibliográfica y Préstamos",
    image: "./public/assets/imgs/projects/img-frontend-0.webp",
    imageSmall: "./public/assets/imgs/projects/img-frontend-0-small.webp",
    summary: "Plataforma académica integral para catalogación de ejemplares, control de préstamos estudiantiles, devoluciones y moras en tiempo real.",
    description: `
      <p><strong>El Desafío:</strong> Reemplazar los registros manuales en hojas de cálculo de una institución educativa por un sistema centralizado capaz de controlar el estado de cada ejemplar, evitar duplicidad de préstamos y generar reportes rápidos para bibliotecarios y dirección.</p>
      <p><strong>La Solución:</strong> Desarrollé una aplicación full stack desacoplada con backend REST en <strong>Spring Boot</strong>, base de datos relacional en <strong>PostgreSQL</strong> y una SPA administrativa en <strong>Angular</strong>.</p>
      <strong>Características principales:</strong>
      <ul>
        <li><strong>Catálogo e Inventario por Ejemplar:</strong> Gestión de títulos, autores, editoriales, ISBN y código único de inventario por copia física.</li>
        <li><strong>Flujo de Préstamos y Devoluciones:</strong> Validación automática de disponibilidad, límites por estudiante y cálculo de fechas de vencimiento.</li>
        <li><strong>Búsqueda y Filtros Instantáneos:</strong> Consulta por título, autor, categoría temática o código de alumno en segundos.</li>
        <li><strong>Seguridad por Roles:</strong> Control de acceso diferenciado para administradores y personal de biblioteca con trazabilidad de movimientos.</li>
      </ul>
      <figure class="project-modal-secondary-img">
        <img src="./public/assets/imgs/projects/img-frontend-1.webp" alt="Vista adicional de préstamos y catálogo del sistema bibliográfico" width="800" height="500" loading="lazy">
      </figure>
    `,
    tags: {
      java: "java",
      springboot: "spring boot",
      angular: "angular",
      ts: "typescript",
      postgres: "postgresql",
      rest: "rest api"
    },
    category: {
      id: "fullstack",
      name: "Full Stack"
    },
    links: {
      github: "https://github.com/popehiflo"
    }
  },
  {
    id: "04",
    title: "Sistema de Gestión Clínica y Facturación (Odoo ERP)",
    image: "./public/assets/imgs/projects/img-backend-2.webp",
    imageSmall: "./public/assets/imgs/projects/img-backend-2-small.webp",
    summary: "Módulo integral en Python 3 y Odoo ERP para gestión de pacientes, historia ginecológica, citas por sede, laboratorio clínico y facturación con pagos parciales.",
    description: `
      <p><strong>El Desafío:</strong> Centralizar la atención médica, el laboratorio clínico y el control de caja/facturación de la clínica CerviCusco en un único sistema ERP adaptado a sus flujos médicos y administrativos.</p>
      <p><strong>La Solución:</strong> Desarrollo de un módulo (addon) a medida en <strong>Python 3</strong> y <strong>PostgreSQL</strong> sobre <strong>Odoo ERP</strong>, conectado nativamente con los módulos de Inventario, Ventas y Facturación.</p>
      <strong>Funcionalidades implementadas en el sistema:</strong>
      <ul>
        <li><strong>Gestión de Pacientes e Historia Ginecológica Dinámica:</strong> Registro con cálculo automático de edad, validación de campos obligatorios, pestaña ginecológica reactiva según género del paciente e impresión de Tarjeta de Paciente en PDF y exportación a Excel.</li>
        <li><strong>Control de Citas, Sedes y Calendario Multivista:</strong> Agendamiento por médico especialista, horario y sede (ej. San Blas / Larapa), diferenciación visual por colores según estado de facturación, impresión de ticket de cita y calendario interactivo por día, semana y mes.</li>
        <li><strong>Solicitudes y Resultados de Laboratorio Clínico:</strong> Flujo completo desde la orden médica hasta la carga de resultados por patólogo con rangos normales y unidades de medida, bloqueo contra doble facturación y emisión del Reporte de Laboratorio en PDF.</li>
        <li><strong>Facturación Integrada y Pagos Parciales (Señas):</strong> Generación de facturas directamente desde la cita o examen de laboratorio, control de estados (Borrador, Abierto, Pagado), registro de adelantos/señas con cálculo automático de saldo pendiente y facturas rectificativas.</li>
      </ul>
      <figure class="project-modal-secondary-img">
        <img src="./public/assets/imgs/projects/backend_swagger.webp" alt="Vista adicional del módulo clínico en Odoo" width="800" height="500" loading="lazy">
      </figure>
    `,
    tags: {
      python: "python 3",
      odoo: "odoo-erp",
      postgres: "postgresql",
      xml: "xml-qweb",
      billing: "facturacion",
      reporting: "pdf-reports"
    },
    category: {
      id: "fullstack",
      name: "Full Stack"
    },
    links: {
      github: "https://github.com/popehiflo",
      youtube: "https://www.youtube.com/watch?v=6Wx7BKUuhqM"
    }
  },
  {
    id: "05",
    title: "ERP Turístico: Cotizador de Paquetes, Reservas y Caja",
    image: "./public/assets/imgs/projects/img-frontend-1.webp",
    imageSmall: "./public/assets/imgs/projects/img-frontend-1-small.webp",
    summary: "Sistema ERP multiusuario para operadores turísticos en Cusco: armado dinámico de itinerarios, tarifas por temporada, reservas y control de caja.",
    description: `
      <p><strong>El Desafío:</strong> Gestionar cotizaciones complejas a medida (hoteles, trenes, guías, entradas y traslados) con múltiples proveedores, tipos de cambio y fechas de confirmación para agencias de viajes receptivas.</p>
      <p><strong>La Solución:</strong> Participé en el diseño y construcción de un ERP web corporativo sobre <strong>Java EE</strong>, <strong>JPA</strong> y <strong>MySQL</strong>, con una interfaz de escritorio en navegador basada en <strong>GWT / SmartGWT</strong> bajo metodología <strong>Scrum</strong>.</p>
      <strong>Características principales:</strong>
      <ul>
        <li><strong>Cotizador Dinámico de Paquetes:</strong> Cálculo automático de costos por pasajero, márgenes de ganancia, temporadas y servicios opcionales.</li>
        <li><strong>Gestión de Reservas y File Operativo:</strong> Seguimiento de confirmaciones de proveedores, rooming lists y hojas de ruta diarias para operaciones.</li>
        <li><strong>Módulo de Caja y Pagos:</strong> Control de adelantos, saldos pendientes, liquidaciones a proveedores y cuadre de caja multi-moneda.</li>
        <li><strong>Arquitectura Modular Java EE:</strong> Persistencia transaccional con JPA y generación de reportes operativos exportables.</li>
      </ul>
      <figure class="project-modal-secondary-img">
        <img src="./public/assets/imgs/projects/img-frontend-0.webp" alt="Vista adicional del cotizador y reservas del ERP turístico" width="800" height="500" loading="lazy">
      </figure>
    `,
    tags: {
      javaee: "java ee",
      jpa: "jpa",
      gwt: "gwt / smartgwt",
      mysql: "mysql",
      scrum: "scrum"
    },
    category: {
      id: "fullstack",
      name: "Full Stack"
    },
    links: {
      github: "https://github.com/popehiflo"
    }
  },
  {
    id: "06",
    title: "API RESTful de Control de Almacén y Herramientas en Obra",
    image: "./public/assets/imgs/projects/backend_swagger.webp",
    imageSmall: "./public/assets/imgs/projects/backend_swagger-small.webp",
    summary: "Servicio backend seguro y documentado para trazabilidad de entregas, devoluciones y mantenimiento de equipos y herramientas en frentes de obra.",
    description: `
      <p><strong>El Desafío:</strong> Reducir las pérdidas de herramientas menores y materiales entre almacén central y múltiples frentes de obra, garantizando responsabilidad individual y auditoría de cada movimiento.</p>
      <p><strong>La Solución:</strong> Diseñé una API RESTful robusta en <strong>Java</strong> y <strong>Spring Boot</strong>, protegida con <strong>Spring Security + JWT</strong>, respaldada por <strong>MySQL</strong> y documentada interactivamente con <strong>Swagger / OpenAPI</strong>.</p>
      <strong>Características principales:</strong>
      <ul>
        <li><strong>Autenticación Stateless con JWT:</strong> Emisión y validación de tokens con control granular de permisos por perfil (almacenero, residente, supervisor).</li>
        <li><strong>Trazabilidad de Asignaciones:</strong> Registro de salida, transferencia entre obras, estado de conservación y devolución por trabajador.</li>
        <li><strong>Documentación OpenAPI / Swagger:</strong> Contratos de endpoints estandarizados, esquemas de error uniformes y entorno de pruebas integrado.</li>
        <li><strong>Validación e Integridad Transaccional:</strong> Reglas de negocio estrictas para impedir devoluciones inconsistentes o saldos negativos en almacén.</li>
      </ul>
      <figure class="project-modal-secondary-img">
        <img src="./public/assets/imgs/projects/img-backend-1.webp" alt="Vista adicional de trazabilidad e inventario de la API de almacén" width="800" height="500" loading="lazy">
      </figure>
    `,
    tags: {
      java: "java",
      springboot: "spring boot",
      jwt: "spring security jwt",
      mysql: "mysql",
      swagger: "swagger / openapi"
    },
    category: {
      id: "backend",
      name: "Backend"
    },
    links: {
      github: "https://github.com/popehiflo"
    }
  },
  {
    id: "07",
    title: "Dashboard Comercial de KPIs y Control de Operaciones",
    image: "./public/assets/imgs/projects/img-frontend-0.webp",
    imageSmall: "./public/assets/imgs/projects/img-frontend-0-small.webp",
    summary: "Panel administrativo interactivo en React y TypeScript para monitoreo de ventas, métricas operativas, filtros dinámicos y exportación de datos.",
    description: `
      <p><strong>El Desafío:</strong> Brindar a gerencia y jefaturas comerciales una vista consolidada y ágil del rendimiento diario de sucursales, eliminando la demora de esperar reportes manuales al cierre de semana.</p>
      <p><strong>La Solución:</strong> Construí una interfaz analítica responsiva con <strong>React</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong> y visualización interactiva mediante <strong>Recharts</strong>.</p>
      <strong>Características principales:</strong>
      <ul>
        <li><strong>Visualización de KPIs en Tiempo Real:</strong> Tarjetas resumen de ticket promedio, volumen de ventas, cumplimiento de metas y comparativas intermensuales.</li>
        <li><strong>Gráficos Interactivos Responsivos:</strong> Series temporales, distribución por categoría y tooltips detallados adaptados a desktop y móvil.</li>
        <li><strong>Tablas con Filtrado y Ordenamiento:</strong> Búsqueda multicriterio por rango de fechas, sede y estado operativo sin recargar la página.</li>
        <li><strong>Tipado Estricto con TypeScript:</strong> Modelos de datos seguros y componentes reutilizables orientados a mantenibilidad.</li>
      </ul>
      <figure class="project-modal-secondary-img">
        <img src="./public/assets/imgs/projects/img-frontend-1.webp" alt="Vista adicional de reportes y métricas del dashboard comercial" width="800" height="500" loading="lazy">
      </figure>
    `,
    tags: {
      react: "react",
      ts: "typescript",
      tailwind: "tailwind css",
      recharts: "recharts"
    },
    category: {
      id: "frontend",
      name: "Frontend"
    },
    links: {
      github: "https://github.com/popehiflo"
    }
  },
  {
    id: "08",
    title: "Servicio de Facturación y Despacho de Notificaciones",
    image: "./public/assets/imgs/projects/img-backend-1.webp",
    imageSmall: "./public/assets/imgs/projects/img-backend-1-small.webp",
    summary: "Backend transaccional contenedorizado para generación de comprobantes, validación tributaria y despacho asíncrono de notificaciones a clientes.",
    description: `
      <p><strong>El Desafío:</strong> Garantizar que la emisión de comprobantes electrónicos y el envío de correos o alertas de confirmación no bloqueen las transacciones críticas de venta ante picos de demanda o latencia de servicios externos.</p>
      <p><strong>La Solución:</strong> Implementé un servicio backend desacoplado con <strong>Java</strong>, <strong>Spring Boot</strong> y <strong>PostgreSQL</strong>, empaquetado en <strong>Docker</strong> para despliegues consistentes entre entornos.</p>
      <strong>Características principales:</strong>
      <ul>
        <li><strong>Procesamiento Transaccional Seguro:</strong> Idempotencia en endpoints de emisión para evitar duplicidad de comprobantes ante reintentos de red.</li>
        <li><strong>Despacho Asíncrono con Reintentos:</strong> Cola persistente de notificaciones con políticas de backoff ante fallos temporales de proveedores SMTP/API.</li>
        <li><strong>Auditoría y Trazabilidad de Eventos:</strong> Registro detallado de estados por comprobante (emitido, aceptado, observado, notificado).</li>
        <li><strong>Contenerización con Docker:</strong> Configuración reproducible mediante Dockerfile y variables de entorno para despliegues ágiles.</li>
      </ul>
      <figure class="project-modal-secondary-img">
        <img src="./public/assets/imgs/projects/backend_swagger.webp" alt="Vista adicional de endpoints y monitoreo del servicio de facturación" width="800" height="500" loading="lazy">
      </figure>
    `,
    tags: {
      java: "java",
      springboot: "spring boot",
      docker: "docker",
      postgres: "postgresql"
    },
    category: {
      id: "backend",
      name: "Backend"
    },
    links: {
      github: "https://github.com/popehiflo"
    }
  }
];

const allBlogs = [
  {
    id: "01",
    title: "Guía Completa: Instalar y Gestionar NVM en Windows",
    image: "./public/assets/imgs/blogs/blog_nvm.webp",
    date: "20 de febrero 2025",
    author: "popehiflo",
    summary: "Aprende a instalar y usar Node Version Manager (NVM) en Windows para manejar múltiples versiones de Node.js de forma eficiente.",
    content: `
      <h2>Guía Completa: Instalar y Gestionar NVM en Windows</h2>
      <p>Node Version Manager (NVM) es una herramienta indispensable para cualquier desarrollador que trabaje con Node.js, especialmente si necesitas alternar entre diferentes versiones para distintos proyectos. En esta guía detallada, te mostraremos cómo instalar NVM en Windows 10/11 y cómo sacarle el máximo provecho.</p>
      
      <h3>¿Por qué usar NVM?</h3>
      <ul>
        <li>Permite instalar múltiples versiones de Node.js y npm.</li>
        <li>Facilita el cambio entre versiones con un simple comando.</li>
        <li>Ideal para proyectos que requieren versiones específicas de Node.js.</li>
      </ul>

      <h3>Paso 1: Desinstalar Node.js existente (si aplica)</h3>
      <p>Antes de instalar NVM, es crucial desinstalar cualquier versión previa de Node.js y npm para evitar conflictos. Puedes hacerlo desde "Agregar o quitar programas" en la configuración de Windows.</p>

      <h3>Paso 2: Descargar e Instalar NVM para Windows</h3>
      <p>Dirígete al repositorio oficial de NVM para Windows en GitHub: <a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank">nvm-windows Releases</a>. Descarga el archivo <code>nvm-setup.zip</code> de la última versión estable. Una vez descargado, descomprímelo y ejecuta el instalador <code>nvm-setup.exe</code>.</p>
      <p>Sigue las instrucciones del instalador. Se te pedirá elegir la ruta de instalación de NVM y la ruta donde se instalarán las versiones de Node.js. Se recomienda dejar las opciones por defecto.</p>

      <h3>Paso 3: Verificar la Instalación</h3>
      <p>Abre una nueva ventana de la línea de comandos (CMD o PowerShell) y ejecuta:</p>
      <pre><code>nvm version</code></pre>
      <p>Si la instalación fue exitosa, verás el número de versión de NVM. Si no, asegúrate de que las variables de entorno se hayan configurado correctamente o reinicia tu sistema.</p>

      <h3>Paso 4: Instalar Versiones de Node.js</h3>
      <p>Ahora puedes instalar cualquier versión de Node.js. Por ejemplo, para instalar la versión 16.13.0 (LTS):</p>
      <pre><code>nvm install 16.13.0</code></pre>
      <p>Para instalar la última versión estable:</p>
      <pre><code>nvm install latest</code></pre>
      <p>Puedes instalar tantas versiones como necesites.</p>

      <h3>Paso 5: Usar una Versión de Node.js</h3>
      <p>Para empezar a usar una versión específica, ejecuta:</p>
      <pre><code>nvm use 16.13.0</code></pre>
      <p>Verifica que la versión activa sea la correcta:</p>
      <pre><code>node -v</code></pre>

      <h3>Paso 6: Comandos Útiles de NVM</h3>
      <ul>
        <li><code>nvm list</code>: Muestra todas las versiones de Node.js instaladas.</li>
        <li><code>nvm uninstall &lt;version&gt;</code>: Desinstala una versión específica de Node.js.</li>
        <li><code>nvm current</code>: Muestra la versión de Node.js que estás usando actualmente.</li>
      </ul>

      <p>¡Felicidades! Ahora tienes un control total sobre tus versiones de Node.js en Windows, lo que te permitirá gestionar tus proyectos de manera mucho más eficiente.</p>
    `,
    tags: ["nvm", "windows", "nodejs", "npm", "desarrollo"]
  },
  {
    id: "02",
    title: "Primeros Pasos con Spring Boot: Creando tu Primera API REST",
    image: "./public/assets/imgs/blogs/blog_spring-boot.webp",
    date: "25 de febrero 2025",
    author: "popehiflo",
    summary: "Una guía práctica para configurar un proyecto Spring Boot y desarrollar una API REST básica desde cero.",
    content: `
      <h2>Primeros Pasos con Spring Boot: Creando tu Primera API REST</h2>
      <p>Spring Boot es un framework que simplifica enormemente el desarrollo de aplicaciones Java robustas y escalables, especialmente microservicios y APIs REST. En este artículo, te guiaremos a través de los pasos esenciales para configurar tu primer proyecto Spring Boot y crear una API REST funcional.</p>
      
      <h3>Requisitos Previos</h3>
      <ul>
        <li>Java Development Kit (JDK) 17 o superior.</li>
        <li>Apache Maven o Gradle (Maven es el más común para Spring Boot).</li>
        <li>Un entorno de desarrollo integrado (IDE) como IntelliJ IDEA, Eclipse o VS Code.</li>
      </ul>

      <h3>Paso 1: Generar el Proyecto con Spring Initializr</h3>
      <p>La forma más sencilla de empezar es usando <a href="https://start.spring.io/" target="_blank">Spring Initializr</a>, una herramienta web que genera la estructura básica de tu proyecto. Configúralo así:</p>
      <ul>
        <li>**Project:** Maven Project</li>
        <li>**Language:** Java</li>
        <li>**Spring Boot:** Elige la última versión estable (SNAPSHOTs no).</li>
        <li>**Group:** com.example (o tu dominio inverso)</li>
        <li>**Artifact:** myfirstapi (o el nombre de tu proyecto)</li>
        <li>**Packaging:** Jar</li>
        <li>**Java:** 17 (o la versión de tu JDK)</li>
        <li>**Dependencies:** Añade "Spring Web" (para crear APIs REST) y "Lombok" (opcional, para reducir código boilerplate).</li>
      </ul>
      <p>Haz clic en "Generate" y descarga el archivo ZIP. Descomprímelo en tu directorio de trabajo.</p>

      <h3>Paso 2: Importar el Proyecto en tu IDE</h3>
      <p>Abre tu IDE preferido e importa el proyecto como un proyecto Maven existente. El IDE se encargará de descargar las dependencias.</p>

      <h3>Paso 3: Crear tu Primer Controlador REST</h3>
      <p>En la carpeta 'src/main/java/com/example/myfirstapi' (o la que corresponda a tu Group y Artifact), crea un nuevo archivo Java llamado 'HelloController.java' con el siguiente contenido:</p>
      <pre><code class="language-java">package com.example.myfirstapi;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String sayHello() {
        return "¡Hola desde Spring Boot!";
    }
}
      </code></pre>
      <p>La anotación '@RestController' combina '@Controller' y '@ResponseBody', indicando que esta clase maneja solicitudes web y que los métodos devuelven datos directamente como respuesta HTTP. '@GetMapping("/hello")' mapea las solicitudes GET a la ruta '/hello' a este método.</p>

      <h3>Paso 4: Ejecutar la Aplicación</h3>
      <p>Puedes ejecutar la aplicación desde tu IDE o desde la línea de comandos:</p>
      <pre><code>cd myfirstapi
mvn spring-boot:run
      </code></pre>
      <p>Una vez que la aplicación se inicie (verás logs en la consola), abre tu navegador y visita 'http://localhost:8080/hello'. Deberías ver el mensaje "¡Hola desde Spring Boot!".</p>

      <h3>Conclusión</h3>
      <p>¡Felicidades! Has creado tu primera API REST con Spring Boot. Este es solo el comienzo. Spring Boot ofrece muchas más funcionalidades para construir aplicaciones robustas y escalables. ¡Sigue explorando!</p>
    `,
    tags: ["java", "springboot", "api", "rest", "maven", "desarrollo"]
  },
  {
    id: "03",
    title: "Docker para Desarrolladores: Contenedorizando tu Aplicación",
    image: "./public/assets/imgs/blogs/blog_spring-boot.webp",
    date: "10 de marzo 2025",
    author: "popehiflo",
    summary: "Introducción a Docker y cómo usarlo para empaquetar y desplegar tus aplicaciones de forma consistente en cualquier entorno.",
    content: `
      <h2>Docker para Desarrolladores: Contenedorizando tu Aplicación</h2>
      <p>Docker ha revolucionado la forma en que los desarrolladores construyen, empaquetan y despliegan aplicaciones. Permite crear entornos aislados y consistentes, eliminando el famoso problema de "funciona en mi máquina". En este artículo, exploraremos los conceptos básicos de Docker y cómo puedes empezar a usarlo en tu flujo de trabajo.</p>

      <h3>¿Qué es un Contenedor?</h3>
      <p>Un contenedor es una unidad de software estandarizada que empaqueta tu código y todas sus dependencias, de modo que la aplicación se ejecute de forma rápida y fiable de un entorno informático a otro. Un contenedor Docker incluye la aplicación, sus bibliotecas, dependencias y configuraciones necesarias.</p>

      <h3>Ventajas de Docker</h3>
      <ul>
        <li>**Consistencia:** Tu aplicación se ejecuta igual en desarrollo, pruebas y producción.</li>
        <li>**Aislamiento:** Los contenedores son procesos aislados que no interfieren entre sí.</li>
        <li>**Portabilidad:** Un contenedor puede ejecutarse en cualquier sistema que tenga Docker instalado.</li>
        <li>**Eficiencia:** Son ligeros y arrancan rápidamente.</li>
      </ul>

      <h3>Paso 1: Instalar Docker</h3>
      <p>Descarga e instala Docker Desktop desde el sitio oficial de Docker (<a href="https://www.docker.com/products/docker-desktop" target="_blank">docker.com</a>). Está disponible para Windows, macOS y Linux.</p>

      <h3>Paso 2: Crear un Dockerfile</h3>
      <p>Un Dockerfile es un script que contiene una serie de instrucciones para construir una imagen Docker. Aquí tienes un ejemplo básico para una aplicación Node.js:</p>
      <pre><code class="language-docker"># Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto que usará la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
      </code></pre>

      <h3>Paso 3: Construir la Imagen Docker</h3>
      <p>Abre tu terminal en el directorio donde tienes tu Dockerfile y ejecuta:</p>
      <pre><code>docker build -t mi-aplicacion-node .</code></pre>
      <p>Esto construirá una imagen llamada 'mi-aplicacion-node'.</p>

      <h3>Paso 4: Ejecutar el Contenedor</h3>
      <p>Una vez construida la imagen, puedes ejecutar tu aplicación en un contenedor:</p>
      <pre><code>docker run -p 80:3000 mi-aplicacion-node</code></pre>
      <p>Esto mapea el puerto 80 de tu máquina al puerto 3000 del contenedor. Ahora tu aplicación debería ser accesible en 'http://localhost'.</p>

      <h3>Conclusión</h3>
      <p>Docker simplifica enormemente el ciclo de vida del desarrollo. Con estos pasos básicos, ya puedes empezar a empaquetar y ejecutar tus propias aplicaciones en contenedores. ¡Explora más y descubre todo su potencial!</p>
    `,
    tags: ["docker", "contenedores", "devops", "nodejs", "despliegue"]
  },
  {
    id: "04",
    title: "Git Flow y Buenas Prácticas: Un Flujo de Trabajo Eficiente",
    image: "./public/assets/imgs/blogs/blog_spring-boot.webp",
    date: "20 de marzo 2025",
    author: "popehiflo",
    summary: "Explora el modelo Git Flow y otras buenas prácticas de Git para mejorar la colaboración y el control de versiones en tus proyectos de desarrollo.",
    content: `
      <h2>Git Flow y Buenas Prácticas: Un Flujo de Trabajo Eficiente</h2>
      <p>Git es una herramienta indispensable para el control de versiones en el desarrollo de software. Sin embargo, para equipos y proyectos complejos, es crucial adoptar un flujo de trabajo que garantice la consistencia, la estabilidad y la colaboración eficiente. Git Flow es uno de esos modelos.</p>

      <h3>¿Qué es Git Flow?</h3>
      <p>Git Flow es un modelo de ramificación (branching model) para Git, propuesto por Vincent Driessen, que define un conjunto estricto de reglas para la creación y fusión de ramas, con el objetivo de gestionar el ciclo de vida de un proyecto de software.</p>

      <h3>Ramas Principales en Git Flow</h3>
      <ul>
        <li><code>master</code>: Contiene el historial de lanzamientos (releases) y el código siempre debe estar listo para producción.</li>
        <li><code>develop</code>: Contiene el historial de desarrollo y es la rama principal donde se integran las nuevas características.</li>
      </ul>

      <h3>Ramas de Apoyo en Git Flow</h3>
      <ul>
        <li><code>feature/&lt;nombre-caracteristica&gt;</code>: Para desarrollar nuevas funcionalidades. Se ramifican de 'develop' y se fusionan de nuevo en 'develop'.</li>
        <li><code>release/&lt;version&gt;</code>: Para preparar un nuevo lanzamiento. Se ramifican de 'develop' y se fusionan en 'main' y 'develop'.</li>
        <li><code>hotfix/&lt;nombre-arreglo&gt;</code>: Para corregir errores críticos en producción. Se ramifican de 'master' y se fusionan en 'main' y 'develop'.</li>
      </ul>

      <h3>Buenas Prácticas Adicionales de Git</h3>
      <ul>
        <li>**Commits Atómicos:** Cada commit debe representar un cambio lógico y completo.</li>
        <li>**Mensajes de Commit Claros:** Usa mensajes descriptivos que expliquen el "qué" y el "por qué" del cambio.</li>
        <li>**Revisión de Código (Code Review):** Antes de fusionar, haz que otro miembro del equipo revise tu código.</li>
        <li>**No fusionar directamente en 'main':** Siempre trabaja en ramas separadas.</li>
        <li>**Mantener 'develop' actualizado:** Haz 'pull' frecuentemente para evitar conflictos grandes.</li>
      </ul>

      <h3>Conclusión</h3>
      <p>Adoptar un flujo de trabajo como Git Flow, junto con buenas prácticas de Git, puede mejorar significativamente la calidad del código, la colaboración en equipo y la eficiencia en el desarrollo de tus proyectos. ¡Empieza a aplicarlo hoy mismo!</p>
    `,
    tags: ["git", "git-flow", "control-de-versiones", "colaboracion", "desarrollo"]
  }
];


export { allProjects, allBlogs };
