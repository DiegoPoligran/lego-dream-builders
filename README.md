# 🧱 Plataforma de Comercio Electrónico LEGO-Dream-Builders - Gerencia de proyectos informáticos

*Desarrollo de una Plataforma de Comercio Electrónico para la Venta de Juguetes LEGO con Gestión Automatizada de Inventario y Control de Costos*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/dalexachs-projects/v0-poli)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/7VgX8QiUDxE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## 📋 Descripción del Proyecto

Este proyecto representa una solución tecnológica integral para el comercio electrónico de juguetes LEGO, desarrollado por Diego del Politécnico Grancolombiano.

### 🎯 Objetivos del Proyecto

- **Objetivo General**: Desarrollar una tienda virtual especializada en la venta de juguetes LEGO con funcionalidades avanzadas para gestión de inventarios y control de costos.

- **Objetivos Específicos**:
  1. Implementar un sistema de inventario automatizado con monitoreo en tiempo real
  2. Desarrollar un módulo de cálculo de costos integral
  3. Crear un sistema de gestión de pedidos con validación y facturación automatizada

## 👥 Equipo de Desarrollo

| Rol | Responsable | Responsabilidades Principales |
|-----|-------------|-------------------------------|
| **Team Leader** | Diego Pregonero | Coordinación general, gestión de comunicación y supervisión de objetivos |
| **Planning Manager** | Diego Pregonero | Planificación, cronogramas y seguimiento de recursos |
| **Development Manager** | Diego Pregonero | Liderazgo técnico, desarrollo de funcionalidades y calidad del código |
| **Quality Manager** | Diego Pregonero | Aseguramiento de calidad, pruebas y validaciones |
| **Support Manager** | Diego Pregonero | Soporte técnico, documentación y comunicación con usuarios |

## 🚀 Funcionalidades Implementadas

### ✅ **Catálogo de Productos**
- **20 sets LEGO** con información detallada
- **Sistema de filtros avanzado** por categoría, precio y búsqueda
- **Imágenes de alta calidad** y descripciones completas
- **Ordenamiento dinámico** por precio, nombre y popularidad

### ✅ **Carrito de Compras**
- **Gestión de productos** (agregar, quitar, modificar cantidades)
- **Cálculo automático** de subtotales y totales
- **Persistencia de datos** en localStorage
- **Interfaz intuitiva** con drawer lateral

### ✅ **Sistema de Autenticación**
- **Registro e inicio de sesión** simulado
- **Gestión de usuarios** con persistencia local
- **Protección de rutas** para checkout y pedidos
- **Modal de autenticación** responsive

### ✅ **Simulación de Pagos (Stripe)**
- **Formulario de checkout** completo
- **Datos de envío** y facturación
- **Simulación de procesamiento** de pagos
- **Cálculo de IVA** (19%) y costos de envío
- **Página de confirmación** con estado del pedido

### ✅ **Efectos Visuales Avanzados**
- **Parallax scrolling** en sección hero
- **Bloques LEGO 3D** con studs auténticos
- **Animaciones suaves** y transiciones
- **Diseño responsive** para todos los dispositivos

### ✅ **Gestión de Inventario**
- **Control de stock** por producto
- **Indicadores de disponibilidad**
- **Gestión de productos agotados**

## 🛠️ Tecnologías Utilizadas

### **Frontend**
- **Next.js 15** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de estilos utilitarios
- **shadcn/ui** - Componentes de interfaz de usuario
- **Lucide React** - Iconografía

### **Gestión de Estado**
- **React Context** - Manejo de estado global
- **localStorage** - Persistencia de datos del cliente

### **Herramientas de Desarrollo**
- **ESLint** - Linting de código
- **PostCSS** - Procesamiento de CSS
- **Git** - Control de versiones

## 📦 Instalación y Configuración Local

### **Prerrequisitos**
- Node.js 18.0 o superior
- npm, yarn, pnpm o bun
- Git

### **1. Clonar el Repositorio**
\`\`\`bash
git clone https://github.com/dalexach/TSP-Equipo6.git
cd TSP-Equipo6
\`\`\`

### **2. Instalar Dependencias**
\`\`\`bash
# Con npm
npm install

# Con yarn
yarn install

# Con pnpm
pnpm install

# Con bun
bun install
\`\`\`

### **3. Ejecutar en Modo Desarrollo**
\`\`\`bash
# Con npm
npm run dev

# Con yarn
yarn dev

# Con pnpm
pnpm dev

# Con bun
bun dev
\`\`\`

### **4. Abrir en el Navegador**
Navega a [http://localhost:3000](http://localhost:3000) para ver la aplicación.

## 🧪 Pruebas y Validación

### **Datos de Prueba**

#### **Usuario de Prueba**
- **Email**: cualquier email válido (ej: `test@example.com`)
- **Nombre**: Se genera automáticamente basado en el email

#### **Tarjeta de Prueba (Simulación Stripe)**
- **Número**: `4242 4242 4242 4242`
- **Fecha**: Cualquier fecha futura (ej: `12/25`)
- **CVC**: Cualquier 3 dígitos (ej: `123`)
- **Nombre**: Cualquier nombre

#### **Productos Destacados para Pruebas**
- **Deadpool Brickheadz** - $89,900
- **Millennium Falcon** - $1,299,900
- **Hogwarts Castle** - $899,900
- **Creator Expert Taj Mahal** - $649,900

### **Flujo de Pruebas Recomendado**

1. **Navegación del Catálogo**
   - Explorar productos por categorías
   - Usar filtros de precio y búsqueda
   - Probar ordenamiento

2. **Gestión del Carrito**
   - Agregar productos al carrito
   - Modificar cantidades
   - Eliminar productos

3. **Proceso de Autenticación**
   - Registrarse con email
   - Cerrar sesión e iniciar nuevamente

4. **Checkout Completo**
   - Llenar formulario de envío
   - Ingresar datos de tarjeta
   - Completar compra simulada
   - Verificar página de confirmación

## 📁 Estructura del Proyecto

\`\`\`
TSP-Equipo6/
├── app/                          # App Router de Next.js
│   ├── checkout/                 # Página de checkout
│   ├── order-confirmation/       # Confirmación de pedidos
│   ├── globals.css              # Estilos globales
│   ├── layout.tsx               # Layout principal
│   └── page.tsx                 # Página de inicio
├── components/                   # Componentes React
│   ├── ui/                      # Componentes shadcn/ui
│   ├── auth-modal.tsx           # Modal de autenticación
│   ├── cart-drawer.tsx          # Drawer del carrito
│   ├── checkout-form.tsx        # Formulario de checkout
│   ├── hero.tsx                 # Sección hero
│   ├── lego-brick.tsx           # Componente brick LEGO
│   ├── navbar.tsx               # Barra de navegación
│   ├── product-card.tsx         # Tarjeta de producto
│   ├── product-catalog.tsx      # Catálogo de productos
│   └── product-filters.tsx      # Filtros de productos
├── hooks/                       # Custom hooks
│   ├── use-auth.tsx            # Hook de autenticación
│   ├── use-cart.tsx            # Hook del carrito
│   └── use-parallax.tsx        # Hook de parallax
├── data/                        # Datos estáticos
│   └── products.ts             # Catálogo de productos
├── lib/                         # Utilidades
│   └── utils.ts                # Funciones utilitarias
├── public/                      # Archivos estáticos
│   └── images/                 # Imágenes del proyecto
└── styles/                      # Estilos adicionales
\`\`\`

## 🎨 Paleta de Colores

La aplicación utiliza una paleta de colores personalizada basada en:

- **Azul Principal**: `rgb(59, 130, 246)` - Color base de la marca
- **Dorado/Beige**: `rgb(211, 207, 130)` - Color complementario
- **Gradientes**: Efectos visuales en hero y componentes

## 📱 Responsive Design

La aplicación está completamente optimizada para:
- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

## 🔧 Scripts Disponibles

\`\`\`bash
npm run dev          # Ejecutar en desarrollo
npm run build        # Construir para producción
npm run start        # Ejecutar en producción
npm run lint         # Ejecutar linting
\`\`\`

## 🚀 Deployment

### **Vercel (Recomendado)**
La aplicación está configurada para deployment automático en Vercel:

1. Conectar repositorio a Vercel
2. Configurar variables de entorno (si las hay)
3. Deploy automático en cada push a main

### **Otros Proveedores**
Compatible con cualquier proveedor que soporte Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 📈 Roadmap y Próximas Funcionalidades

### **Fase 2 - Funcionalidades Avanzadas**
- [ ] Panel de administración completo
- [ ] Gestión de inventario en tiempo real
- [ ] Historial de pedidos por usuario
- [ ] Sistema de reseñas y calificaciones
- [ ] Wishlist de productos

### **Fase 3 - Integraciones**
- [ ] Integración real con Stripe
- [ ] Sistema de notificaciones por email
- [ ] Chat de soporte en vivo
- [ ] Analytics y métricas de ventas

### **Fase 4 - Optimizaciones**
- [ ] PWA (Progressive Web App)
- [ ] Optimización SEO avanzada
- [ ] Caching y performance
- [ ] Tests automatizados

## 🐛 Reporte de Issues

Para reportar bugs o solicitar nuevas funcionalidades:

1. Crear un issue en GitHub
2. Usar las plantillas proporcionadas
3. Incluir pasos para reproducir el problema
4. Adjuntar capturas de pantalla si es necesario

## 📄 Licencia

Este proyecto es desarrollado con fines académicos para el Politécnico Grancolombiano.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crear una rama para tu feature (\`git checkout -b feature/AmazingFeature\`)
3. Commit tus cambios (\`git commit -m 'Add some AmazingFeature'\`)
4. Push a la rama (\`git push origin feature/AmazingFeature\`)
5. Abrir un Pull Request

## 📞 Contacto

**Diego Pregonero Jiménez - Gestión de proyectos informáticos**
- **Institución**: Politécnico Grancolombiano
- **Materia**: Gestión de proyectos informáticos
- **Docente**: Luisa Maria Jiménez Ramos
- **Grupo**: B04

---

*Desarrollado por Diego Pregonero Jiménez 2025*
