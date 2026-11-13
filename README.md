#  Portafolio Personal - Pool Hijuela (popehiflo)

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![GitHub Pages](https://img.shields.io/badge/deployed-GitHub%20Pages-green.svg)

## 🚀 Descripción del Proyecto
🎥 **Video de Implementación:** [YouTube](https://www.youtube.com/watch?v=tjAcXTpIou8)  
🌎 **Visita mi Portafolio:** [GitHub Pages](https://popehiflo.github.io/)  

![Portafolio popehiflo](./public/assets/imgs/projects/frontend_portfolio-popehiflo.webp)   

Este proyecto es mi portafolio personal que muestra mis habilidades y proyectos como desarrollador web Fullstack. Está construido con tecnologias modernas para presentar de manera profesional y atractiva mi trabajo y trayectoria profesional.
## 🌟 Características
- **Diseño responsivo:** Adaptado para dispositivos móviles, tablets y desktops.
- **Cambio de tema:** Modo oscuro (predeterminado) y claro con animación (aun no).
- **Secciones dinámicas:** Proyectos y blogs generados desde datos en JavaScript.
- **Modal de blogs:** Vista detallada de artículos/blogs con imágenes y contenido completo.
- **Optimización:** Carga rápida con JavaScript crítico inline y lazy loading de imágenes.

## 🛠️ Tecnologías Utilizadas   
`HTML5`, `CSS3`, `Javascript(ES6+)`, `Responsive Design`, `BEM Notation`
- **Frontend:** HTML5, CSS3, JavaScript (ES6 Modules)
- **Estilos:** BEM Notation, CSS Variables, animaciones personalizadas
- **Despliegue:** GitHub Pages
- **Fuentes/Icons:** Google Fonts (Poppins, Black Han Sans), Font Awesome

## 📂 Estructura del proyecto
```
popehiflo.github.io/
├── public/
│   └── assets/
│       └── imgs/       # Imágenes estáticas
├── src/
│   ├── data/          # Datos de proyectos y blogs (MOCKDATA.js)
│   ├── styles/        # Estilos globales (index.css)
│   ├── utils/         # Lógica JS modular (secciones, tema, etc.)
│   └── index.js       # Punto de entrada JS
├── index.html         # Estructura principal
├── logo.svg           # Logo personal
├── LICENSE            # Licencia MIT
└── README.md          # Este archivo
```


## 🚀 Uso
1. **Explorar localmente:**
   - Clona el repositorio: `git clone https://github.com/popehiflo/popehiflo.github.io.git`
   - Abre `index.html` en un navegador.
2. **Ver en vivo:**
   - Visita [popehiflo.github.io](https://popehiflo.github.io).

## 💻 Desarrollo
- **Requisitos:** Solo un navegador moderno (no se necesitan dependencias adicionales).
- **Modificar contenido:** Edita `src/data/MOCKDATA.js` para añadir proyectos o blogs.
- **Estilos:** Personaliza `src/styles/index.css` según tus necesidades.

## Guía de Imágenes y Assets

### Medidas Recomendadas para Nuevos Assets (Relación 16:9)

Para mantener una estética uniforme y evitar saltos de maquetación (CLS) o distorsiones de aspecto, todas las imágenes de tarjetas y modales deben producirse en relación de aspecto **16:9**:

| Tipo de Asset | Dimensión Recomendada | Relación | Formato | Peso Ideal | Nomenclatura |
|---|---|---|---|---|---|
| **Card de Proyecto (`imageSmall`)** | 600 x 338 px | 16:9 | `.webp` | 10 – 25 KB | `[categoria]_[slug]-small.webp` |
| **Cabecera de Modal (`image`)** | 1280 x 720 px | 16:9 | `.webp` | 25 – 60 KB | `[categoria]_[slug].webp` |
| **Captura Secundaria Modal (`<figure>`)** | 1280 x 720 px | 16:9 | `.webp` | 25 – 70 KB | `[slug]-ficha.webp` |
| **Card / Modal de Blog (`image`)** | 1280 x 720 px (render 600x338 card / 800x450 modal) | 16:9 | `.webp` | 10 – 30 KB | `blog_[slug].webp` |
| **Avatar de Perfil (`profile.jpeg`)** | 320 x 320 px (render 150x150 / 198x198 px Retina) | 1:1 | `.jpeg` | 12 – 20 KB | `profile.jpeg` |
| **Open Graph Social (`og-image.jpg`)** | 1200 x 630 px | 1.91:1 | `.jpg` | < 100 KB | `og-image.jpg` |

> **Nota técnica de renderizado:** En el CSS, las imágenes de `.project__box-image img` y `.blog__box .box-image img` tienen `max-width: 100%; height: auto; object-fit: cover;`, y en el HTML los atributos de reserva de espacio nativo son `width="600" height="338"` para Cards y `width="800" height="450"` para Modales (ambos calculan una relación exacta de 16:9).

### Inventario de Dimensiones y Pesos Reales Actuales

A continuación se detalla la medición binaria de los archivos reales en producción:

| Archivo | Dimensión Real | Aspect Ratio | Peso Actual | Uso Principal |
|---|---|---|---|---|
| `public/assets/imgs/profile.jpeg` | 320 x 320 px | 1:1 | ~15.5 KB | Sidebar (Avatar de perfil) |
| `public/assets/imgs/abstract-background-canvas-code.webp` | 1200 x 813 px | ~1.48:1 | ~78.8 KB | Hero desktop (Fondo texto H1) |
| `public/assets/imgs/abstract-background-canvas-code-mobile.webp` | 600 x 300 px | 2:1 | ~28.5 KB | Hero móvil (Fondo texto H1) |
| `public/assets/imgs/og-image.jpg` | 1200 x 630 px | 1.91:1 | 72.0 KB | Metadatos redes sociales Open Graph |
| **Proyectos:** | | | | |
| `projects/fullstack_repuestos-rojas-small.webp` | 600 x 338 px | 16:9 | 19.3 KB | Card Proyecto 01 |
| `projects/fullstack_repuestos-rojas.webp` | 1280 x 720 px | 16:9 | 40.2 KB | Modal Proyecto 01 |
| `projects/repuestos-rojas-ficha.webp` | 1280 x 720 px | 16:9 | 77.9 KB | Ficha secundaria Proyecto 01 |
| `projects/frontend_portfolio-popehiflo-small.webp` | 600 x 338 px | 16:9 | 19.9 KB | Card Proyecto 02 |
| `projects/frontend_portfolio-popehiflo.webp` | 1280 x 720 px | 16:9 | 182.3 KB | Modal Proyecto 02 |
| `projects/img-frontend-0-small.webp` | 600 x 338 px | 16:9 | 24.6 KB | Card Proyectos 03, 07 |
| `projects/img-frontend-0.webp` | 1280 x 720 px | 16:9 | 50.5 KB | Modal Proyectos 03, 07 |
| `projects/img-frontend-1-small.webp` | 600 x 338 px | 16:9 | 11.1 KB | Card Proyecto 05 |
| `projects/img-frontend-1.webp` | 1280 x 720 px | 16:9 | 25.1 KB | Modal Proyecto 05 |
| `projects/backend_swagger-small.webp` | 600 x 338 px | 16:9 | 10.9 KB | Card Proyecto 06 |
| `projects/backend_swagger.webp` | 1280 x 720 px | 16:9 | 22.6 KB | Modal Proyecto 06 |
| `projects/img-backend-1-small.webp` | 600 x 338 px | 16:9 | 6.8 KB | Card Proyecto 08 |
| `projects/img-backend-1.webp` | 780 x 440 px | 16:9 | 6.7 KB | Modal Proyecto 08 |
| `projects/img-backend-2-small.webp` | 600 x 338 px | 16:9 | 19.6 KB | Card Proyecto 04 |
| `projects/img-backend-2.webp` | 1280 x 720 px | 16:9 | 71.6 KB | Modal Proyecto 04 |
| **Blogs:** | | | | |
| `blogs/blog_nvm.webp` | 1280 x 720 px | 16:9 | 23.4 KB | Card y Modal Blog 01 |
| `blogs/blog_spring-boot.webp` | 1280 x 720 px | 16:9 | 6.5 KB | Card y Modal Blogs 02, 03, 04 |

## 📄 Licencia
Este proyecto está bajo la [Licencia MIT](LICENSE).

¡Gracias por visitar mi portafolio! Si tienes sugerencias o quieres colaborar, no dudes en contactarme.

         
⌨️ con ❤️ por [popehiflo](https://github.com/popehiflo)
