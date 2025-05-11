# Learning Blog API

API RESTful para la gestión de publicaciones y comentarios de un blog de aprendizaje. Desarrollada con Node.js, Express y MongoDB.

## Características

- CRUD de publicaciones de blog
- Comentarios en publicaciones
- Validación de datos y limitación de peticiones
- Documentación interactiva con Swagger
- Seguridad con Helmet y CORS

## Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/Learning-Blog-API.git
   cd Learning-Blog-API

2. **Instala las dependencias**
    ```bash
    npm i

3. **Configura las variables de entorno**
   PORT=3030
   MONGO_URI=mongodb://localhost:27017/learning-blog

4. **Inicia el servidor**
   npm run dev


**Estructura del proyecto**
configs/
  documentation.js
  mongo.js
  server.js
src/
  comment/
    comment.controller.js
    comment.routes.js
  publication/
    publication.controller.js
    publication.routes.js
  middlewares/
    comment-validator.js
    publication-validator.js
    request-validator.js

*Autor*
Javier Alejandro Apen Solis
Alias: MR-APEN