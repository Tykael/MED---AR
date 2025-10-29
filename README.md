# 🏥 MED-AR — Plataforma Integral de Gestión Médica

**MED-AR (Medicina Argentina)** es una aplicación web full stack diseñada para optimizar la gestión médica y hospitalaria, centralizando pacientes, profesionales, turnos, y registros clínicos en un entorno seguro, ágil y escalable.

---

## 🚀 Objetivo del Proyecto

El objetivo de **MED-AR** es ofrecer una **solución digital integral para centros de salud**, permitiendo automatizar tareas administrativas, mejorar la comunicación médico-paciente y garantizar la trazabilidad de la información clínica.

Esta herramienta busca resolver problemas reales del ámbito sanitario, como:

* La dispersión de datos de pacientes entre múltiples sistemas.
* La falta de seguimiento médico centralizado.
* La gestión ineficiente de turnos y profesionales.

---

## 🧩 Características Principales

* **Gestión de pacientes:** registro, edición y consulta de información médica.
* **Administración de turnos:** creación, modificación y cancelación de citas médicas.
* **Panel de profesionales:** acceso personalizado con historial de pacientes.
* **Autenticación segura:** login basado en tokens JWT y control de roles.
* **Validaciones de datos:** mediante DTOs y decoradores personalizados.
* **Arquitectura modular:** escalable, mantenible y orientada a microservicios.

---

## ⚙️ Stack Tecnológico

**Backend:**

* NestJS (Node.js Framework)
* TypeScript
* PostgreSQL con TypeORM
* JWT para autenticación y roles
* Class Validator / DTOs para validaciones
* Cloudinary (opcional) para gestión de archivos

**Frontend:**

* React.js / Next.js
* TailwindCSS para estilos modernos y responsivos
* Axios para consumo de API REST

**Herramientas de desarrollo:**

* Git & GitHub para control de versiones
* Postman / Insomnia para testing de endpoints
* PgAdmin para gestión de base de datos

---

## 🏗️ Arquitectura del Proyecto

```
MED-AR/
├── backend/
│   ├── src/
│   │   ├── modules/
│   │   │   ├── users/
│   │   │   ├── patients/
│   │   │   ├── appointments/
│   │   │   └── auth/
│   │   ├── main.ts
│   │   └── app.module.ts
│   ├── test/
│   └── package.json
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── package.json
└── README.md
```

---

## ⚡ Instalación y Configuración

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/Tykael/MED---AR.git
cd MED---AR
```

### 2️⃣ Configurar el backend

```bash
cd backend
npm install
cp .env.example .env
# Configurar variables: DB_HOST, DB_USER, DB_PASS, JWT_SECRET, etc.
npm run start:dev
```

### 3️⃣ Configurar el frontend

```bash
cd ../frontend
npm install
npm run dev
```

---

## 🔐 Seguridad

* Encriptación de contraseñas con bcrypt.
* Tokens JWT para autenticación y autorización de roles.
* Middleware global para registro de solicitudes.
* Validaciones exhaustivas en DTOs y entidades.

---

## 📈 Escalabilidad y Mantenimiento

* Arquitectura modular que permite añadir nuevos módulos sin afectar los existentes.
* Soporte para microservicios y bases de datos distribuidas.
* Sistema preparado para integrar servicios externos (API de pagos, mensajería, etc.).

---

## 🧠 Buenas Prácticas Implementadas

* Principios **SOLID** y **Clean Architecture**.
* Separación clara entre capas (Controladores, Servicios, Repositorios).
* Manejo centralizado de errores con filtros globales.
* Validaciones automáticas con decoradores personalizados.

---

## 🧪 Testing (en desarrollo)

El proyecto incluye estructura para pruebas unitarias e integración usando Jest.

```bash
npm run test
```

---

## 👥 Autor

**Desarrollado por [Sebastian Arriagada](https://github.com/Tykael)**
💻 Enfocado en Backend con NestJS y PostgreSQL
📧 Contacto: [kamisama656@gmail.com](mailto:kamisama656@gmail.com)

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más detalles.

---

> 🧾 *MED-AR es una plataforma diseñada para transformar la gestión médica en Argentina, combinando tecnología, seguridad y eficiencia en un sistema integral para profesionales y pacientes.*
