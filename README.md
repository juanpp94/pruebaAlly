# 🌐 Proyecto Angular - Dashboard de Usuarios y Clima

Este es un proyecto desarrollado en Angular que presenta un panel interactivo con información de usuarios y datos climáticos por país. La aplicación está estructurada en módulos para facilitar su mantenimiento, reutilización y escalabilidad.

---

## 🧱 Estructura del Proyecto

El proyecto se divide en los siguientes módulos principales:

### 🔐 `auth`
Módulo encargado del **inicio de sesión** y **registro de usuarios**.

- Validación de campos (nombre, email, contraseña)
- Mensajes de error personalizados
- Navegación protegida por estado de autenticación

---

### 🔁 `shared`
Contiene todos los **componentes reutilizables de UI**, como:

- `CardComponent`: componente de tarjeta con estructura flexible (header, body, footer)
- Pipes personalizados (por ejemplo, para formateo de fechas)
- Otros elementos visuales reutilizables

---

### 👥 `users`
Módulo encargado de mostrar la lista de **usuarios registrados**, con las siguientes funcionalidades:

- Tabla paginada (2 usuarios por página)
- Fechas formateadas a `aaaa-mm-dd hh:mm:ss am/pm` mediante un pipe personalizado
- Controles de paginación: Primero, Anterior, Siguiente, Último
- **Usuarios almacenados en `localStorage`** (simulación de backend)

---

### ☁️ `weather`
Módulo que muestra información de **países** y su **clima**, incluyendo:

- Datos del país: nombre, capital, región, latitud/longitud
- Iconos dinámicos según clima (nublado, soleado, lluvioso)
- Zonas horarias disponibles
- Hora actual en cada zona horaria seleccionada
- Lista de tareas, con estilo visual diferenciado si están completadas o no
- **Tareas almacenadas en `localStorage`**

**APIs utilizadas**:
- 🌍 [REST Countries API](https://restcountries.com/)
- ☁️ [OpenWeatherMap API](https://openweathermap.org/)

---

## 🔐 Autenticación y Protección de Rutas

- Si el usuario **no ha iniciado sesión**, es redirigido a `/auth/login`
- Al iniciar sesión o registrarse correctamente, se guarda `isLogin = 'yes'` en `localStorage`
- Solo los usuarios autenticados pueden acceder al módulo `dashboard` y sus submódulos (`users`, `weather`)
- Las rutas están protegidas mediante una **AuthGuard** personalizada

---

## 🧪 Simulación de Backend

Para propósitos de desarrollo, se simulan los datos utilizando `localStorage`:

- **Usuarios** y **tareas** se almacenan localmente
- La información de países y clima se obtiene desde APIs públicas

---

## 🚀 Cómo Ejecutar el Proyecto

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-proyecto.git
   cd tu-proyecto
