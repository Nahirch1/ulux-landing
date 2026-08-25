import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'U-LUX | Instalaciones eléctricas, obras y automatización',
  description: 'Instalaciones eléctricas, obras, automatización y mantenimiento en Mendoza.',
  metadataBase: new URL('https://www.ulux.com.ar'),
  openGraph: {
    title: 'U-LUX | Instalaciones diseñadas para durar',
    description: 'Soluciones eléctricas para viviendas, comercios y obras.',
    images: ['/images/hero-casa.jpg']
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
