# Instalación de Dependencias para Sistema de Cotizaciones

## Instalar las siguientes dependencias:

```bash
cd "/Users/ivanacuna/Documents/DESARROLLO DE PROYECTOS VSC/MONARCA WEBSITE/code"

# Instalar Supabase client
npm install @supabase/supabase-js

# Instalar Nodemailer para envío de emails
npm install nodemailer

# Instalar tipos de TypeScript para Nodemailer
npm install --save-dev @types/nodemailer
```

## Después de instalar, reinicia el servidor:

```bash
npm run dev
```

## Verificar que las siguientes variables estén en tu .env.local:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anon
SUPABASE_SERVICE_ROLE_KEY=tu_clave_service_role

# Email (Gmail example)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu_email@gmail.com
SMTP_PASSWORD=tu_password_de_aplicacion
EMAIL_FROM=exportaciones@tmonarca.com.mx
```

## Ejecutar el script SQL en Supabase:

1. Ve a tu proyecto en Supabase Dashboard
2. Abre el SQL Editor
3. Ejecuta el contenido del archivo `sistema_cotizaciones_postgresql.sql`
4. Verifica que las tablas se hayan creado correctamente

## Probar el sistema:

1. Abre http://localhost:3000
2. Haz clic en "Solicitar Cotización"
3. Llena el formulario (solo email y teléfono son obligatorios)
4. Verifica que recibas el email de confirmación
