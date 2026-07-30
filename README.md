# Bioparque Yasuní

Sitio web estático de un zoológico ficticio, desarrollado para el taller de CI/CD con GitHub y AWS.

## Tecnologías

- HTML5
- CSS3
- JavaScript

## Estructura

```
zoo/
├── index.html          Página principal
├── animales.html       Sección de animales (4 categorías, 7 especies)
├── servicios.html      Servicios, horarios y precios
├── educacion.html      Conservación y educación ambiental
├── contacto.html       Formulario, datos y ubicación
├── css/
│   └── estilos.css     Hoja de estilos
├── js/
│   └── scripts.js      Filtro de animales y validación del formulario
└── buildspec.yml       Instrucciones para AWS CodeBuild
```

## Despliegue

El sitio se publica automáticamente en un servidor Windows con IIS mediante un flujo
de CI/CD: GitHub → AWS CodePipeline → CodeBuild → despliegue en IIS.

Cada cambio subido a la rama principal de GitHub dispara el pipeline y actualiza el
sitio publicado de forma automática.
