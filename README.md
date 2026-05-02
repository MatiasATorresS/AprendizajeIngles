# 🎓 Sistema de Aprendizaje de Inglés

¡Bienvenido al **Sistema de Aprendizaje de Inglés**! Esta es una aplicación web full-stack diseñada para ayudar a estudiantes (especialmente de educación secundaria en Chile) a mejorar sus habilidades en el idioma inglés a través de lecciones interactivas y un asistente de práctica impulsado por Inteligencia Artificial.

## 🚀 Características Principales

- **Autenticación Segura:** Registro e inicio de sesión con contraseñas encriptadas.
- **Contenido Curado:** Lecciones organizadas por unidades y materias.
- **Práctica con IA:** Generación dinámica de ejercicios personalizados con OpenRouter.
- **Seguimiento de Progreso:** Visualización de puntajes y estadísticas.
- **Panel de Administración:** Gestión de usuarios y métricas globales.
- **Diseño Responsivo:** Optimizado para escritorio y móviles.

## 🛠️ Tecnologías Utilizadas

### Frontend
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Axios](https://img.shields.io/badge/axios-671ddf?style=for-the-badge&logo=axios&logoColor=white)

### Backend & Database
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![TiDB](https://img.shields.io/badge/TiDB-24292e?style=for-the-badge&logo=github&logoColor=white)

### IA & Deployment
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-%2346E3B7.svg?style=for-the-badge&logo=render&logoColor=white)


## 📂 Estructura del Proyecto

```text
├── frontEnd/             # Aplicación React (Vite)
│   ├── src/pages/        # Pantallas principales
│   ├── src/components/   # Componentes reutilizables
│   └── src/styles/       # Estilos CSS (Modules)
├── server/               # Servidor Node.js (Express)
│   ├── server.js         # Punto de entrada y API
│   └── .env.example      # Plantilla de variables de entorno
└── mysql/                # Base de datos
    └── mysql.sql         # Script de creación de tablas y datos iniciales
```

## ⚙️ Configuración Local

Si deseas ejecutar este proyecto en tu computadora:

### 1. Requisitos
- Node.js (v18+)
- MySQL (XAMPP, WAMP o Docker)

### 2. Base de Datos
1. Crea una base de datos llamada `signup` en tu MySQL local.
2. Importa el archivo `mysql/mysql.sql`.

### 3. Backend
1. Entra a la carpeta `server/`: `cd server`
2. Instala las dependencias: `npm install`
3. Crea un archivo `.env` basado en `.env.example` y rellena tus datos.
4. Inicia el servidor: `npm start` (usa nodemon) o `node server.js`.

### 4. Frontend
1. Entra a la carpeta `frontEnd/`: `cd frontEnd`
2. Instala las dependencias: `npm install`
3. Crea un archivo `.env` y añade `VITE_API_URL=http://localhost:3031`.
4. Inicia la aplicación: `npm run dev`

## ☁️ Despliegue en la Nube

El proyecto está configurado para desplegarse fácilmente en:
-   **Base de Datos:** [TiDB Cloud](https://pingcap.com/tidb-serverless/) (MySQL compatible).
-   **Backend:** [Render](https://render.com/) (Requiere configurar variables de entorno y SSL).
-   **Frontend:** [Vercel](https://vercel.com/) (Requiere configurar `VITE_API_URL` y rewrites en `vercel.json`).

## 🔑 Variables de Entorno Necesarias

| Variable | Descripción |
| :--- | :--- |
| `DB_HOST` | Host de la base de datos MySQL |
| `DB_USER` | Usuario de la base de datos |
| `DB_PASSWORD` | Contraseña de la base de datos |
| `DB_NAME` | Nombre de la base de datos (ej. `signup`) |
| `DB_PORT` | Puerto (ej. 3306 o 4000 para TiDB) |
| `OPENROUTER_API_KEY` | Tu API Key de OpenRouter |
| `VITE_API_URL` | URL del Backend (en el Frontend) |

---
Desarrollado por [MatiasATorresS](https://github.com/MatiasATorresS)
