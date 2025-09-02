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
