/* PROJECTS */
const allProjects = [
  {
    id: "01",
    title: "Portafolio Profesional de Desarrollo",
    image: "./public/assets/imgs/projects/frontend_portfolio-popehiflo.webp",
    summary: "Mi portafolio personal construido con Vanilla JS, HTML5 y CSS3, enfocado en la velocidad y el diseño responsivo.",
    description: `
      <p>Este portafolio es una Single Page Application (SPA) construida desde cero para mostrar mis habilidades y proyectos como desarrollador. El objetivo era crear un sitio web rápido, responsive y mantenible sin depender de frameworks de JavaScript.</p>
      <strong>Características principales:</strong>
      <ul>
        <li><strong>Diseño responsivo:</strong> Adaptado para móviles, tablets y desktops.</li>
        <li><strong>Cambio de tema:</strong> Modo oscuro (predeterminado) y claro.</li>
        <li><strong>Secciones dinámicas:</strong> Proyectos y blogs generados desde un único archivo de datos.</li>
        <li><strong>Componentes Modulares:</strong> Lógica de JavaScript separada en módulos para mantenibilidad.</li>
        <li><strong>Optimización:</strong> Carga rápida con lazy loading de imágenes y CSS optimizado.</li>
      </ul>
    `,
    tags: {
      html: "html5",
      css: "css3",
      js: "javascript",
      bem: "bem",
      responsive: "responsive",
      darkmode: "dark-mode"
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
    id: "02",
    title: "API REST para E-commerce",
    image: "./public/assets/imgs/projects/backend_swagger.png",
    summary: "Una API RESTful robusta para una tienda online, con gestión de productos, usuarios y pedidos.",
    description: "Desarrollo de una API RESTful completa para una plataforma de e-commerce. Incluye gestión de productos, inventario, usuarios, autenticación con JWT y procesamiento de pedidos. La API está documentada con Swagger/OpenAPI para facilitar la integración con cualquier cliente frontend.",
    tags: {
      java: "java",
      springboot: "spring boot",
      jwt: "jwt",
      mysql: "mysql",
      restapi: "rest api",
      swagger: "swagger"
    },
    category: {
      id: "backend",
      name: "Backend"
    },
    links: {
      github: "https://github.com/popehiflo",
      google: "https://popehiflo.github.io/"
    }
  },
  {
    id: "03",
    title: "Dashboard de Administración",
    image: "./public/assets/imgs/projects/img-frontend-0.png",
    summary: "Panel de control interactivo construido con React y TypeScript para la administración de un CMS.",
    description: "Panel de control interactivo para la administración de un CMS. Permite a los usuarios crear, editar y eliminar publicaciones, gestionar usuarios y ver estadísticas de visitas en tiempo real. Construido con React y TypeScript, utilizando Vite para un desarrollo rápido. El estado global se gestiona con Redux Toolkit y las visualizaciones de datos con Chart.js.",
    tags: {
      react: "react",
      ts: "typescript",
      vite: "vite",
      redux: "redux",
      mui: "material-ui"
    },
    category: {
      id: "frontend",
      name: "Frontend"
    },
    links: {
      github: "https://github.com/popehiflo",
      google: "https://popehiflo.github.io/"
    }
  },
  {
    id: "04",
    title: "Microservicio de Notificaciones",
    image: "./public/assets/imgs/projects/img-backend-1.png",
    summary: "Microservicio escalable con Node.js y Express para gestionar notificaciones por email, SMS y push.",
    description: "Creación de un microservicio independiente para gestionar el envío de notificaciones (email, SMS y push) a los usuarios. Construido con Node.js, Express y TypeScript. Se comunica con otros servicios de forma asíncrona a través de RabbitMQ para garantizar la escalabilidad y resiliencia del sistema.",
    tags: {
      nodejs: "node.js",
      express: "express",
      typescript: "typescript",
      rabbitmq: "rabbitmq",
      docker: "docker"
    },
    category: {
      id: "backend",
      name: "Backend"
    },
    links: {
      github: "https://github.com/popehiflo",
      google: "https://popehiflo.github.io/"
    }
  },
  {
    id: "05",
    title: "Aplicación de Clima",
    image: "./public/assets/imgs/projects/img-frontend-0-small.jpg",
    summary: "Una SPA con Angular y RxJS que muestra datos meteorológicos en tiempo real usando una API externa.",
    description: "Single Page Application (SPA) que muestra datos meteorológicos en tiempo real, consumiendo la API de OpenWeatherMap. Incluye geolocalización para detectar la ubicación del usuario y un buscador de ciudades. Desarrollada con Angular y RxJS para manejar los flujos de datos asíncronos de forma reactiva.",
    tags: {
      angular: "angular",
      rxjs: "rxjs",
      typescript: "typescript",
      spa: "spa"
    },
    category: {
      id: "frontend",
      name: "Frontend"
    },
    links: {
      github: "https://github.com/popehiflo",
      google: "https://popehiflo.github.io/"
    }
  },
  {
    id: "06",
    title: "Sistema de Reservas de Hotel",
    image: "./public/assets/imgs/projects/img-backend-2.png",
    summary: "Backend con Spring Boot y Spring Security para gestionar reservas, habitaciones y facturación de un hotel.",
    description: "Backend para una aplicación de reservas de hotel. Permite gestionar la disponibilidad de habitaciones, procesar reservas y manejar la facturación. La API está securizada con Spring Security y los datos se persisten en una base de datos PostgreSQL usando JPA/Hibernate.",
    tags: {
      java: "java",
      springboot: "spring boot",
      security: "spring security",
      postgresql: "postgresql",
      jpa: "jpa"
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

/* BLOGS */
const allBlogs = [
  {
    id: "01",
    title: "Instalar nvm en Windows",
    image: "./public/assets/imgs/blogs/blog_nvm.webp",
    date: "20 de febrero 2025",
    author: "popehiflo",
    summary: "En este artículo se muestra paso a paso cómo instalar nvm en Windows 10.",
    content: `
      <h2>Instalar nvm en Windows</h2>
      <p>Node Version Manager (nvm) es una herramienta esencial para gestionar múltiples versiones de Node.js en tu máquina. En este artículo, te guiaré paso a paso para instalarlo en Windows 10.</p>
      <h3>Paso 1: Descargar nvm</h3>
      <p>Dirígete al repositorio oficial en GitHub (<a href="https://github.com/coreybutler/nvm-windows" target="_blank">nvm-windows</a>) y descarga la última versión del archivo <code>nvm-setup.zip</code>. Una vez descargado, descomprímelo.</p>
      <h3>Paso 2: Instalación</h3>
      <p>Ejecuta el archivo <code>nvm-setup.exe</code>. Durante el proceso, se te pedirá seleccionar la ruta de instalación. Recomiendo dejar las opciones por defecto.</p>
      <h3>Paso 3: Verificar la instalación</h3>
      <p>Abre una terminal (CMD o PowerShell) y ejecuta:</p>
      <pre><code>nvm version</code></pre>
      <p>Si todo salió bien, verás la versión instalada de nvm.</p>
      <h3>Paso 4: Instalar Node.js</h3>
      <p>Usa el comando <code>nvm install 16.13.0</code> para instalar una versión específica de Node.js. Luego, actívala con <code>nvm use 16.13.0</code>.</p>
      <p>¡Y listo! Ahora puedes alternar entre versiones de Node.js fácilmente.</p>
    `,
    tags: ["nvm", "windows", "nodejs"]
  },
  {
    id: "02",
    title: "Introducción a Spring Boot",
    image: "./public/assets/imgs/blogs/blog_spring-boot.webp",
    date: "25 de febrero 2025",
    author: "popehiflo",
    summary: "Una guía básica para empezar con Spring Boot y crear tu primera API REST.",
    content: `
      <h2>Introducción a Spring Boot</h2>
      <p>Spring Boot es un framework de Java que simplifica el desarrollo de aplicaciones robustas y escalables. En este artículo, exploraremos cómo configurarlo y crear una API REST básica.</p>
      <h3>Requisitos previos</h3>
      <ul>
        <li>Java 17 o superior</li>
        <li>Maven o Gradle</li>
        <li>Un IDE como IntelliJ o Eclipse</li>
      </ul>
      <h3>Paso 1: Configurar el proyecto</h3>
      <p>Usa Spring Initializr (<a href="https://start.spring.io" target="_blank">start.spring.io</a>) para generar un proyecto con las dependencias <code>spring-web</code> y <code>spring-boot-starter</code>.</p>
      <h3>Paso 2: Crear un controlador</h3>
      <p>Crea una clase <code>HelloController.java</code>:</p>
      <pre><code>@RestController
  public class HelloController {
      @GetMapping("/hello")
      public String sayHello() {
          return "¡Hola, Spring Boot!";
      }
  }</code></pre>
      <h3>Paso 3: Ejecutar la aplicación</h3>
      <p>Ejecuta <code>mvn spring-boot:run</code> y visita <code>http://localhost:8080/hello</code> en tu navegador.</p>
      <p>¡Eso es todo! Ahora tienes una API funcional con Spring Boot.</p>
    `,
    tags: ["java", "springboot", "api"]
  }
];

export { allProjects, allBlogs };
