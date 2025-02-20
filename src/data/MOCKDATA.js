/* PROJECTS */
const allProjects = [
  {
    id: "01",
    title: "Mi Portafolio Web",
    image: "./public/assets/imgs/projects/frontend_portfolio-popehiflo.webp",
    description: "Portafolio personal que muestra mis habilidades y proyectos como desarrollador web. Esta construido con HTML, CSS, Javascript, BEM Notation, etc. En el cual puedo presentar de manera profesional y atractiva mi trabajo y trayectoria profesional.",
    tags: {
      html: "html",
      css: "css",
      js: "js",
      bem: "bem"
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
    title: "Proyecto Backend 02",
    image: "./public/assets/imgs/projects/backend_swagger.png",
    description: "2 - Proyecto de una API con Node y Express. Este es un proyecto backend.",
    tags: {
      java: "java"
    },
    category: {
      id: "backend",
      name: "Backend"
    },
    links: {
      github: "https://github.com/popehiflo/popehiflo.github.io",
      google: "https://popehiflo.github.io/",
      youtube: "https://www.youtube.com/@popehiflo/videos"
    }
  },
  {
    id: "03",
    title: "Proyecto Frontend 03",
    image: "./public/assets/imgs/projects/img-frontend-0.png",
    description: "3- Proyecto de sitio web estático en HTML + CSS. Este es un proyecto frontend.",
    tags: {
      vite: "vite",
      reactjs: "reactjs",
      ts: "ts"
    },
    category: {
      id: "frontend",
      name: "Frontend"
    },
    links: {
      github: "https://github.com/popehiflo/popehiflo.github.io",
      google: "https://popehiflo.github.io/",
      youtube: "https://www.youtube.com/@popehiflo/videos"
    }
  },
  {
    id: "04",
    title: "Proyecto Backend 04 con un nombre un poco mas largo",
    image: "./public/assets/imgs/projects/img-backend-1.png",
    description: "4 - Proyecto de una API con Node y Express. Este es un proyecto backend.",
    tags: {
      nodejs: "nodejs"
    },
    category: {
      id: "backend",
      name: "Backend"
    },
    links: {
      github: "https://github.com/popehiflo/popehiflo.github.io",
      google: "https://popehiflo.github.io/",
      youtube: "https://www.youtube.com/@popehiflo/videos"
    }
  },
  {
    id: "05",
    title: "Proyecto Frontend 05",
    image: "./public/assets/imgs/projects/img-frontend-0.png",
    description: "5 - Proyecto de sitio web estático en HTML + CSS. Este es un proyecto frontend.",
    tags: {
      angular: "angular",
      rxjs: "rxjs"
    },
    category: {
      id: "frontend",
      name: "Frontend"
    },
    links: {
      github: "https://github.com/popehiflo/popehiflo.github.io",
      google: "https://popehiflo.github.io/",
      youtube: "https://www.youtube.com/@popehiflo/videos"
    }
  },
  {
    id: "06",
    title: "Proyecto Backend 06",
    image: "./public/assets/imgs/projects/img-backend-2.png",
    description: "6 - Proyecto de una API con Spring Boot y MongoDB. Este es un proyecto backend.",
    tags: {
      java: "java",
      springboot: "springboot",
      jpa: "jpa",
      mysql: "mysql"
    },
    category: {
      id: "backend",
      name: "Backend"
    },
    links: {
      github: "https://github.com/popehiflo/popehiflo.github.io",
      google: "https://popehiflo.github.io/",
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
