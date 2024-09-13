# ForoAlura-API

ForoAlura es una plataforma donde los alumnos de Alura pueden hacer preguntas sobre diferentes cursos. Es un espacio de colaboración entre estudiantes, profesores y moderadores, lleno de oportunidades de aprendizaje.

## Funcionalidades

### Parte 1: Rutas y CRUD
- Crear un nuevo tópico.
- Mostrar todos los tópicos creados.
- Mostrar un tópico específico.
- Actualizar un tópico.
- Eliminar un tópico.

### Parte 2: Backend con Express
- Implementación de una API REST utilizando **Express**.
- Rutas RESTful para la gestión de tópicos.
- Validaciones según las reglas de negocio usando **Zod** para asegurar la integridad de los datos.
- Creación de un sistema de persistencia de datos utilizando **MySQL**.
- Uso de controladores para manejar la lógica del servidor.

## Tecnologías

- **Express** para el desarrollo del servidor.
- **MySQL** y **mysql2** para la persistencia de datos.
- **Zod** para validaciones de datos.
- **Morgan** para el registro de solicitudes HTTP.
- **bcrypt** para el hashing de contraseñas.
- **jsonwebtoken** para la autenticación basada en tokens.
- **nodemon** para recargar el servidor automáticamente durante el desarrollo.

## Características Adicionales
- **Rutas**: Implementadas siguiendo las mejores prácticas REST.
- **Validaciones**: Reglas de negocio aplicadas con **Zod**.
- **Base de datos**: Integración con **MySQL** para la persistencia de información.
- **Seguridad**: Contraseñas encriptadas con **bcrypt** y autenticación con **jsonwebtoken**.
