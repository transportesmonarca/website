# 🚀 Configuración de Variables de Entorno en Netlify

## ⚠️ PROBLEMA ACTUAL
El sitio funciona en localhost pero falla en producción con el error:
```
Error al enviar la cotización. Por favor intenta de nuevo.
```

**Causa:** Las variables de entorno no están configuradas en Netlify.

---

## ✅ SOLUCIÓN: Configurar Variables en Netlify

### Paso 1: Acceder a la Configuración
1. Ve a: **https://app.netlify.com/**
2. Selecciona tu sitio: **transportesmonarca/website**
3. Click en: **Site settings** (en el menú superior)
4. En el menú lateral: **Environment variables**

### Paso 2: Agregar Variables de Entorno

Haz click en **"Add a variable"** y agrega cada una de estas:

#### 🔐 Variables de Supabase (Base de Datos)
```
SUPABASE_SERVICE_ROLE_KEY
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4emttZ214YXF3Znhwd21hemx0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjcyOTE4OSwiZXhwIjoyMDc4MzA1MTg5fQ.9KL89UX3DzXl0j4ssaNqnWexTr_mS4Psa-_HgG-g3dc
```

#### 📧 Variables de Email (SMTP)
```
SMTP_HOST
smtp.gmail.com

SMTP_PORT
587

SMTP_USER
f.carbajo@tmonarca.com.mx

SMTP_PASSWORD
vcna rsxj qfql ysbw

EMAIL_FROM
f.carbajo@tmonarca.com.mx
```

### Paso 3: Redesplegar el Sitio
1. Después de agregar todas las variables, ve a **Deploys**
2. Click en **"Trigger deploy"** → **"Deploy site"**
3. Espera 2-3 minutos a que termine el despliegue

---

## 🧪 Verificar que Funciona

1. Una vez desplegado, ve a tu sitio: **https://[tu-sitio].netlify.app**
2. Llena el formulario de cotización
3. Deberías recibir el email de confirmación
4. La cotización debe guardarse en Supabase

---

## 📝 Notas Importantes

- ✅ Las variables públicas (`NEXT_PUBLIC_*`) ya están en `netlify.toml`
- 🔐 Las variables privadas DEBEN configurarse en el dashboard (por seguridad)
- ⚠️ Si cambias la contraseña de Gmail, actualiza `SMTP_PASSWORD`
- 📧 Gmail puede bloquear el envío de emails si detecta actividad sospechosa
  - Solución: Ir a https://myaccount.google.com/security y habilitar "Acceso de apps menos seguras"
  - O mejor: Usar "Contraseñas de aplicaciones" de Google

---

## 🆘 Troubleshooting

### Si después de configurar aún no funciona:

1. **Verifica las variables en Netlify:**
   - Asegúrate de que no tengan espacios extra
   - Verifica que copiaste las keys completas

2. **Revisa los logs de Netlify:**
   - Ve a **Deploys** → Click en el deploy más reciente
   - Busca errores en **Function logs**

3. **Prueba el email localmente:**
   ```bash
   npm run dev
   # Llena el formulario y verifica que funcione
   ```

4. **Contacto de soporte:**
   - Netlify Support: https://app.netlify.com/support
   - Supabase Docs: https://supabase.com/docs

---

## 📚 Referencias

- [Netlify Environment Variables](https://docs.netlify.com/environment-variables/overview/)
- [Next.js Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)
- [Supabase Keys](https://supabase.com/docs/guides/api#api-url-and-keys)
