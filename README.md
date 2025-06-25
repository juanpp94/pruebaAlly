# 🌐 Proyecto Angular - Dashboard de Usuarios y Clima

Este es un proyecto desarrollado en Angular que presenta un panel interactivo con información de usuarios y datos climáticos por país. La aplicación está organizada modularmente para facilitar su mantenimiento, escalabilidad y reutilización de componentes.

---

## 🧱 Estructura del Proyecto

El proyecto está dividido en los siguientes módulos:

### 🔁 `shared`
Contiene todos los **componentes reutilizables de UI**, como:

- Componente de tarjeta (`CardComponent`)
- Pipes personalizados para formateo de fechas
- Otros elementos visuales reutilizables

Este módulo es utilizado en toda la aplicación para mantener la coherencia en la interfaz.

---

### 👥 `users`
Módulo que gestiona la visualización de **usuarios registrados**, con las siguientes funcionalidades:

- Tabla paginada (2 usuarios por página)
- Fechas formateadas a `aaaa-mm-dd hh:mm:ss am/pm` mediante un pipe personalizado
- Controles de paginación: Primero, Anterior, Siguiente, Último
- **Datos persistidos en `localStorage`** (simulación de backend)

---

### ☁️ `weather`
Módulo encargado de mostrar información de **países** y su **clima**:

- Datos generales del país: nombre, capital, región, coordenadas
- Iconos dinámicos según el estado del clima (nublado, soleado, lluvioso)
- Zonas horarias disponibles por país
- Hora actual de cada zona horaria
- Lista de tareas con viñetas de colores según su estado (completada o no)
- **Tareas almacenadas en `localStorage`**

**APIs utilizadas**:
- 🌍 [REST Countries API](https://restcountries.com/) — para obtener datos de países
- ☁️ [OpenWeatherMap API](https://openweathermap.org/) — para obtener información del clima

---

## 🔐 Autenticación

El acceso al módulo principal (`/dashboard`) está protegido por una guardia (`authGuard`):

- Si el usuario **no ha iniciado sesión**, es redirigido a `/auth/login`
- Al iniciar sesión o registrarse exitosamente, se guarda `isLogin = 'yes'` en `localStorage`
- Solo los usuarios autenticados pueden navegar a los módulos `users` o `weather`

---

## 🚀 Cómo Ejecutar el Proyecto

1. Clona el repositorio:
   git clone https://github.com/juanpp94/pruebaAlly.git
   cd pruebaAlly

2. Instalación de dependencias
  npm install

# PruebaAlly

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
