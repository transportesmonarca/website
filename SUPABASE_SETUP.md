# Configuración de Supabase para Monarca Transportes

## Pasos para configurar Supabase

### 1. Obtener las credenciales de Supabase

1. Ve a tu proyecto en [Supabase](https://supabase.com/dashboard)
2. En el menú lateral, haz clic en **Settings** (⚙️)
3. Selecciona **API**
4. Encontrarás las siguientes credenciales:

   ```
   Project URL: https://xxxxxxxxxxxxx.supabase.co
   anon public: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   service_role (secret): eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

### 2. Obtener la URL de conexión a la base de datos

1. En el menú lateral, ve a **Settings** > **Database**
2. En la sección **Connection string**, encontrarás:
   - **Connection pooling** (recomendado para Vercel/Netlify)
   - **Direct connection** (para migraciones locales)

3. Copia la URL de **Connection pooling** (Mode: Transaction):
   ```
   postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true
   ```

4. Reemplaza `[PASSWORD]` con tu contraseña de base de datos

### 3. Configurar `.env.local`

Edita el archivo `.env.local` con tus credenciales:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Database URL (Connection Pooler)
DATABASE_URL="postgresql://postgres.xxxxxxxxxxxxx:tu_password@aws-0-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

# Direct Database URL
DIRECT_DATABASE_URL="postgresql://postgres.xxxxxxxxxxxxx:tu_password@db.xxxxxxxxxxxxx.supabase.co:5432/postgres"
```

### 4. Ejecutar el script SQL

1. Ve a **SQL Editor** en el panel de Supabase
2. Crea una nueva query
3. Copia y pega todo el contenido del archivo `sistema_cotizaciones_postgresql.sql`
4. Haz clic en **Run** para ejecutar el script
5. Verifica que todas las tablas se hayan creado correctamente

### 5. Instalar dependencias de Supabase

Ejecuta en la terminal:

```bash
npm install @supabase/supabase-js
```

### 6. Crear el cliente de Supabase

Crea el archivo `lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Para operaciones del servidor con service_role
export const supabaseAdmin = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)
```

### 7. Configurar Row Level Security (RLS)

Después de ejecutar el script SQL, configura las políticas de seguridad:

```sql
-- Habilitar RLS en todas las tablas
ALTER TABLE cotizaciones ENABLE ROW LEVEL SECURITY;
ALTER TABLE cotizaciones_respuesta ENABLE ROW LEVEL SECURITY;
ALTER TABLE empleados ENABLE ROW LEVEL SECURITY;
ALTER TABLE clientes ENABLE ROW LEVEL SECURITY;
ALTER TABLE rutas_tarifas ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserción pública de cotizaciones
CREATE POLICY "Permitir inserción pública de cotizaciones"
ON cotizaciones FOR INSERT
WITH CHECK (true);

-- Política para lectura de rutas_tarifas
CREATE POLICY "Permitir lectura pública de rutas"
ON rutas_tarifas FOR SELECT
USING (activa = true);

-- Resto de políticas según tus necesidades de seguridad
```

### 8. Verificar la conexión

Crea un archivo de prueba `test-db.ts`:

```typescript
import { supabase } from './lib/supabase'

async function testConnection() {
  const { data, error } = await supabase
    .from('rutas_tarifas')
    .select('*')
    .limit(1)
  
  if (error) {
    console.error('Error:', error)
  } else {
    console.log('Conexión exitosa:', data)
  }
}

testConnection()
```

### 9. Variables requeridas

**Mínimo necesario:**
- ✅ `NEXT_PUBLIC_SUPABASE_URL`
- ✅ `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- ✅ `DATABASE_URL` (con Connection Pooler)

**Recomendado:**
- ✅ `SUPABASE_SERVICE_ROLE_KEY` (para operaciones administrativas)
- ✅ `DIRECT_DATABASE_URL` (para migraciones y CLI)

### 10. Notas importantes

🔐 **Seguridad:**
- Nunca expongas `SUPABASE_SERVICE_ROLE_KEY` en el cliente
- Usa `anon key` solo para operaciones públicas
- Configura RLS para proteger datos sensibles

🚀 **Performance:**
- Usa Connection Pooler para deploys serverless (Vercel/Netlify)
- Usa Direct Connection para desarrollo local
- Considera indexes adicionales según uso

📊 **Monitoreo:**
- Revisa el Dashboard de Supabase para métricas
- Configura alertas en Database Health
- Monitorea el uso de la API

### Solución de problemas

**Error: "relation does not exist"**
- Verifica que el script SQL se ejecutó correctamente
- Revisa en SQL Editor que las tablas existan

**Error: "Invalid API key"**
- Verifica que copiaste las claves completas
- Reinicia el servidor de desarrollo

**Error de conexión a base de datos:**
- Verifica que la contraseña sea correcta
- Asegúrate de usar el Connection Pooler URL
- Revisa que el proyecto de Supabase esté activo

### Recursos adicionales

- [Documentación de Supabase](https://supabase.com/docs)
- [Supabase con Next.js](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
