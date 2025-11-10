# Configuración de Variables de Entorno

## Archivo `.env.local`

Este archivo contiene las variables de entorno necesarias para el funcionamiento de la aplicación.

### Instrucciones de Configuración

1. **Base de Datos PostgreSQL**
   ```bash
   DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/monarca_transportes"
   ```
   - Reemplaza `usuario` con tu usuario de PostgreSQL
   - Reemplaza `contraseña` con tu contraseña de PostgreSQL
   - Si tu base de datos está en otro servidor, cambia `localhost` por la IP o dominio
   - El puerto por defecto de PostgreSQL es `5432`

2. **Configuración de Email (SMTP)**
   
   Para Gmail:
   - Ve a tu cuenta de Google
   - Activa la verificación en 2 pasos
   - Genera una "Contraseña de aplicación" en https://myaccount.google.com/apppasswords
   - Usa esa contraseña en `SMTP_PASSWORD`

   ```bash
   SMTP_USER=tu_email@gmail.com
   SMTP_PASSWORD=xxxx_xxxx_xxxx_xxxx  # Contraseña de aplicación
   ```

3. **NextAuth Secret**
   
   Genera un secret aleatorio seguro:
   ```bash
   # En terminal ejecuta:
   openssl rand -base64 32
   ```
   Copia el resultado y pégalo en `NEXTAUTH_SECRET`

4. **Google Maps API (Opcional)**
   - Ve a https://console.cloud.google.com
   - Crea un proyecto o selecciona uno existente
   - Habilita la API de Google Maps
   - Crea credenciales (API Key)
   - Copia la API Key a `GOOGLE_MAPS_API_KEY`

5. **reCAPTCHA (Opcional)**
   - Ve a https://www.google.com/recaptcha/admin
   - Registra tu sitio
   - Copia las claves a `RECAPTCHA_SITE_KEY` y `RECAPTCHA_SECRET_KEY`

### Variables Requeridas vs Opcionales

**Requeridas para funcionalidad básica:**
- `DATABASE_URL` - Conexión a la base de datos
- `NEXT_PUBLIC_APP_URL` - URL de la aplicación

**Requeridas para sistema de cotizaciones completo:**
- `SMTP_*` - Para enviar emails de cotización
- `EMAIL_FROM` - Email remitente

**Opcionales:**
- `WHATSAPP_*` - Para integraciones avanzadas de WhatsApp
- `GOOGLE_MAPS_API_KEY` - Para mapas interactivos
- `RECAPTCHA_*` - Para protección anti-spam en formularios
- `NEXTAUTH_*` - Para sistema de autenticación

### Ejemplo de Configuración Local

```env
DATABASE_URL="postgresql://postgres:mipassword@localhost:5432/monarca_transportes"
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=miempresa@gmail.com
SMTP_PASSWORD=abcd_efgh_ijkl_mnop
EMAIL_FROM=exportaciones@tmonarca.com.mx
```

### Seguridad

⚠️ **IMPORTANTE:**
- Nunca compartas tu archivo `.env.local` en repositorios públicos
- El archivo `.env.local` ya está incluido en `.gitignore`
- Usa `.env.example` como plantilla para otros desarrolladores
- Rota tus claves y contraseñas periódicamente

### Solución de Problemas

**Error de conexión a base de datos:**
- Verifica que PostgreSQL esté corriendo
- Confirma usuario y contraseña correctos
- Verifica que el puerto sea el correcto (5432 por defecto)
- Asegúrate de que la base de datos existe

**Emails no se envían:**
- Verifica las credenciales SMTP
- Si usas Gmail, asegúrate de usar "Contraseña de aplicación"
- Revisa que el puerto sea 587 para TLS

**Variables no se cargan:**
- Reinicia el servidor de desarrollo después de cambiar `.env.local`
- Verifica que el archivo esté en la raíz del proyecto `/code/`
- No uses comillas en los valores a menos que contengan espacios
