# Proyecto de Manejo de Flota de Camiones

Este proyecto tiene como objetivo el manejo de una flota de camiones y la gestion de los usuarios.

## Funcionalidades

### Gestión de Flota
- **Registro de camiones:**             Permite agregar nuevos camiones con información relevante como matrícula, marca, modelo, año.
- **Modificación data de camiones:**    Permite modificar los datos registrados, en un proxima etapa, estado, mantenimiento etc
- **Eliminación de Registros:**         Permite eliminar vehiculos
- **Consulta de Registros:**            Permite consultar el total de los registros de la base 
- **Consulta de Registros por ID:**     Permite consultar un vehiculo por su ID 

### Gestión de Usuarios
- **Registro y autenticación de usuarios:** Permite el registro de nuevos usuarios en la base de datos
- **Login y autenticación de usuarios:** Permite loggearse a los usuarios para poder administrar la flota de camiones.

## Tecnologías Utilizadas

- **Backend:**          [Node.js] con [Express.js]
- **Base de datos:**    [MongoDB]
- **Autenticación:**    [JWT (JSON Web Tokens)] para la gestión de sesiones y autenticación de usuarios.
- **Validación:**       [express.Validator] para validación de los datos ingresados

## Instalación

### Requisitos previos
- Node.js y npm instalados en tu máquina.
- MongoDB en funcionamiento (local o servicio en la nube).

### Dependencies utilizadas
- **"bcryptjs": "5.1.1":**          hasheo de password
- **express": "4.21.2":**           Para habilitar el servidor
 - **express-validator": "7.2.0":** Para valiaciones de datos
- **helmet": "8.0.0":**             Para cabecera de seguridad
- **jsonwebtoken": "9.0.2":**       Para autenticación basada en token
 - **mongoose": "8.8.4":**          Para interacción del servidor con la base de datos
