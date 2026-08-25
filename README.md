# U-LUX Landing Page

Landing corporativa para servicios eléctricos construida con Next.js, TypeScript, Tailwind CSS y Framer Motion.

## Inicio rápido

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Datos que hay que reemplazar

En `components/LandingPage.tsx`, editar el objeto `COMPANY`:

```ts
const COMPANY = {
  whatsappNumber: '5492610000000',
  instagramUrl: 'https://instagram.com/ulux',
  email: 'contacto@ulux.com.ar'
};
```

- WhatsApp debe ir sin `+`, espacios ni guiones.
- Reemplazar Instagram por la URL real.
- Reemplazar el correo por el correo definitivo.

## Despliegue en Vercel

1. Subir el proyecto a GitHub.
2. Importar el repositorio en Vercel.
3. Ejecutar el deploy.
4. Agregar el dominio desde Project Settings > Domains.

## Próxima etapa sugerida

- Conectar el formulario a Resend o Formspree.
- Añadir dominio real y metadata definitiva.
- Incorporar datos legales y política de privacidad.
- Optimizar textos según zona de cobertura y servicios habilitados.
