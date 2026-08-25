'use client';

import Image from 'next/image';
import { FormEvent, useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowRight,
  Building2,
  ChevronLeft,
  ChevronRight,
  CircuitBoard,
  Instagram,
  Lightbulb,
  Mail,
  Menu,
  PanelsTopLeft,
  Phone,
  Settings2,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
  Zap
} from 'lucide-react';

const COMPANY = {
  whatsappNumber: '5492622659138',
  instagramUrl: 'https://www.instagram.com/_u_lux?igsh=emozYXY0bDZ6MjBo',
  email: 'uluxcontacto@gmail.com'
};

const services = [
  {
    title: 'Instalaciones eléctricas',
    text: 'Ejecución integral para viviendas, locales, oficinas y obras nuevas.',
    icon: Zap
  },
  {
    title: 'Tableros y protecciones',
    text: 'Armado, organización y actualización de tableros eléctricos.',
    icon: CircuitBoard
  },
  {
    title: 'Iluminación técnica',
    text: 'Diseño e instalación de iluminación interior, exterior y decorativa.',
    icon: Lightbulb
  },
  {
    title: 'Automatización',
    text: 'Control de iluminación, equipos y soluciones eléctricas inteligentes.',
    icon: Settings2
  },
  {
    title: 'Obras y ampliaciones',
    text: 'Canalizaciones, tendidos y adaptación de instalaciones existentes.',
    icon: Building2
  },
  {
    title: 'Mantenimiento',
    text: 'Diagnóstico, correcciones y mantenimiento preventivo o correctivo.',
    icon: Wrench
  }
];

const projects = [
  {
    src: '/images/exterior-iluminacion.jpg',
    title: 'Iluminación exterior residencial',
    category: 'Iluminación',
    description: 'Apliques exteriores y distribución de luz cálida sobre fachada.'
  },
  {
    src: '/images/interior-iluminacion.jpg',
    title: 'Iluminación interior indirecta',
    category: 'Terminación',
    description: 'Iluminación perimetral y puntos focales integrados al ambiente.'
  },
  {
    src: '/images/tablero-electrico.jpg',
    title: 'Tablero eléctrico residencial',
    category: 'Tableros',
    description: 'Distribución de circuitos y protecciones para instalación residencial.'
  },
  {
    src: '/images/canalizacion-techo.jpg',
    title: 'Canalización en obra',
    category: 'Ejecución',
    description: 'Tendido técnico visible sobre estructura durante etapa de obra.'
  },
  {
    src: '/images/canalizacion-muro.jpg',
    title: 'Distribución por muro',
    category: 'Instalación',
    description: 'Cañerías, cajas y recorridos definidos antes de terminaciones.'
  },
  {
    src: '/images/estructura-canalizacion.jpg',
    title: 'Canalización sobre estructura',
    category: 'Obra nueva',
    description: 'Planificación de recorridos eléctricos integrada a la estructura.'
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

export function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState('');
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 700], [0, 120]);
  const heroScale = useTransform(scrollY, [0, 700], [1.04, 1.12]);

  useEffect(() => {
    document.body.style.overflow = menuOpen || selectedProject !== null ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen, selectedProject]);

  const whatsappHref = (message = 'Hola U-LUX, quisiera solicitar un presupuesto.') =>
    `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`;

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name');
    const phone = data.get('phone');
    const service = data.get('service');
    const location = data.get('location');
    const detail = data.get('detail');
    const message = `Hola U-LUX, soy ${name}.\n\nServicio: ${service}\nUbicación: ${location}\nTeléfono: ${phone}\nDetalle: ${detail}`;
    window.open(whatsappHref(message), '_blank', 'noopener,noreferrer');
    setFormStatus('Abrimos WhatsApp con la solicitud preparada.');
  };

  return (
    <main className="overflow-hidden bg-ink text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#inicio" className="group flex items-center gap-3" aria-label="U-LUX inicio">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 text-gold transition-transform duration-300 group-hover:scale-110">
              <Zap size={19} />
            </div>
            <div>
              <div className="text-xl font-semibold tracking-[0.18em]">U-LUX</div>
              <div className="text-[10px] uppercase tracking-[0.24em] text-white/45">Instalaciones</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 lg:flex">
            {['Servicios', 'Trabajos', 'Proceso', 'Presupuesto', 'Contacto'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a className="btn-gold" href={whatsappHref()} target="_blank" rel="noreferrer">
              Solicitar presupuesto <ArrowRight size={17} />
            </a>
          </div>

          <button className="rounded-full border border-white/15 p-3 lg:hidden" onClick={() => setMenuOpen(true)} aria-label="Abrir menú">
            <Menu size={20} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="fixed inset-0 z-[60] bg-ink px-6 py-5" initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center justify-between">
              <span className="text-xl tracking-[0.18em]">U-LUX</span>
              <button className="rounded-full border border-white/15 p-3" onClick={() => setMenuOpen(false)} aria-label="Cerrar menú"><X /></button>
            </div>
            <nav className="mt-20 flex flex-col gap-6 text-4xl font-light">
              {['Inicio', 'Servicios', 'Trabajos', 'Proceso', 'Presupuesto', 'Contacto'].map((item, index) => (
                <motion.a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                  <span className="mr-4 text-sm text-gold">0{index + 1}</span>{item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="inicio" className="relative flex min-h-screen items-end pt-20">
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
          <Image src="/images/hero-casa.jpg" alt="Obra residencial con iluminación exterior realizada por U-LUX" fill priority className="object-cover object-center" sizes="100vw" />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.88)_0%,rgba(0,0,0,.48)_48%,rgba(0,0,0,.35)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#090909_0%,transparent_38%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 lg:px-8 lg:pb-28">
          <motion.div className="max-w-4xl" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-gold-soft">
              <span className="h-px w-10 bg-gold" /> Instalaciones · Obras · Automatización
            </motion.div>
            <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[86px]">
              Instalaciones diseñadas <span className="text-gold-soft">para durar.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-base leading-7 text-white/68 sm:text-lg">
              Soluciones eléctricas para viviendas, comercios y obras. Planificación clara, ejecución ordenada y terminaciones cuidadas.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="btn-gold" href={whatsappHref()} target="_blank" rel="noreferrer">Solicitar presupuesto <ArrowDownRight size={18} /></a>
              <a className="btn-ghost" href="#trabajos">Ver nuestros trabajos <ArrowRight size={18} /></a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-carbon">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-white/10 px-5 lg:grid-cols-4 lg:divide-y-0 lg:px-8">
          {[
            ['Obras nuevas', PanelsTopLeft],
            ['Instalaciones', Zap],
            ['Automatización', Settings2],
            ['Mantenimiento', ShieldCheck]
          ].map(([label, Icon]) => (
            <div key={label as string} className="flex items-center gap-3 px-4 py-6 text-sm text-white/65 lg:px-7">
              <Icon size={19} className="text-gold" /> {label as string}
            </div>
          ))}
        </div>
      </section>

      <section id="servicios" className="border-y border-white/10 bg-carbon py-24 lg:py-32">
        <div className="section-shell">
          <Reveal>
            <p className="eyebrow">Servicios</p>
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <h2 className="section-title max-w-3xl">Soluciones para cada etapa de la obra.</h2>
              <p className="max-w-md text-white/52">Intervenimos desde la planificación hasta la puesta en funcionamiento.</p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article key={service.title} className="service-card group" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.05, duration: 0.55 }}>
                  <div className="flex items-start justify-between">
                    <div className="rounded-2xl border border-gold/25 bg-gold/5 p-3 text-gold transition duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-black"><Icon size={22} /></div>
                    <ArrowDownRight className="text-white/30 transition duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-gold" />
                  </div>
                  <h3 className="mt-10 text-xl font-medium">{service.title}</h3>
                  <p className="mt-3 leading-7 text-white/50">{service.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="trabajos" className="py-24 lg:py-32">
        <div className="section-shell">
        <Reveal>
       <h2 className="section-title mb-16 text-center">
    Nuestros trabajos
  </h2>
</Reveal>

          <div className="mt-14 grid auto-rows-[280px] gap-4 md:grid-cols-2 lg:grid-cols-12">
            {projects.map((project, index) => (
              <motion.button key={project.src} className={`project-card ${index === 0 || index === 3 ? 'lg:col-span-7' : 'lg:col-span-5'} ${index === 0 ? 'lg:row-span-2' : ''}`} onClick={() => setSelectedProject(index)} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: (index % 3) * 0.06 }}>
                <Image src={project.src} alt={project.title} fill className="object-cover transition duration-700 group-hover:scale-[1.06]" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-left">
                  <div>
                    <span className="text-xs uppercase tracking-[0.18em] text-gold-soft">{project.category}</span>
                    <h3 className="mt-2 text-xl font-medium">{project.title}</h3>
                  </div>
                  <div className="rounded-full border border-white/25 bg-black/25 p-3 backdrop-blur transition duration-300 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold group-hover:text-black"><ArrowDownRight size={18} /></div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/92 p-4 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)}>
            <motion.div className="relative w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-carbon" initial={{ scale: 0.94, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 15 }} onClick={(e) => e.stopPropagation()}>
              <div className="relative h-[55vh] min-h-[360px]">
                <Image src={projects[selectedProject].src} alt={projects[selectedProject].title} fill className="object-cover" sizes="90vw" />
              </div>
              <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-gold">{projects[selectedProject].category}</p>
                  <h3 className="mt-2 text-2xl">{projects[selectedProject].title}</h3>
                  <p className="mt-2 text-white/55">{projects[selectedProject].description}</p>
                </div>
                <div className="flex gap-2">
                  <button className="modal-arrow" onClick={() => setSelectedProject((selectedProject - 1 + projects.length) % projects.length)} aria-label="Anterior"><ChevronLeft /></button>
                  <button className="modal-arrow" onClick={() => setSelectedProject((selectedProject + 1) % projects.length)} aria-label="Siguiente"><ChevronRight /></button>
                </div>
              </div>
              <button className="absolute right-4 top-4 rounded-full bg-black/65 p-3 backdrop-blur" onClick={() => setSelectedProject(null)} aria-label="Cerrar"><X /></button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="presupuesto" className="py-24 lg:py-32">
        <div className="section-shell grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">CONTACTO</p>
           <h2 className="section-title">
Solicitá tu presupuesto.
</h2>
            <p className="mt-6 max-w-md leading-7 text-white/55">Respondemos consultas para viviendas, comercios y obras. Completá el formulario o escribinos directamente por WhatsApp.</p>
            <div className="mt-10 space-y-4">
              <a className="contact-line" href={whatsappHref()} target="_blank" rel="noreferrer"><Phone size={19} /> WhatsApp <ArrowRight size={17} /></a>
              <a className="contact-line" href={COMPANY.instagramUrl} target="_blank" rel="noreferrer"><Instagram size={19} /> Instagram <ArrowRight size={17} /></a>
              <a className="contact-line" href={`mailto:${COMPANY.email}`}><Mail size={19} /> {COMPANY.email} <ArrowRight size={17} /></a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={submitForm} className="rounded-[28px] border border-white/10 bg-panel p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nombre" name="name" placeholder="Tu nombre" required />
                <Field label="Teléfono" name="phone" placeholder="261..." required />
                <Field label="Ubicación" name="location" placeholder="Departamento o localidad" required />
                <label className="field-label">Servicio
                  <select name="service" className="field-input" defaultValue="Instalación eléctrica">
                    {services.map((service) => <option key={service.title}>{service.title}</option>)}
                  </select>
                </label>
              </div>
              <label className="field-label mt-5">Detalle del trabajo
                <textarea name="detail" className="field-input min-h-36 resize-y" placeholder="Describí brevemente el trabajo, estado actual y plazos aproximados." required />
              </label>
              <button type="submit" className="btn-gold mt-6 w-full justify-center">Solicitar presupuesto <ArrowRight size={18} /></button>
              {formStatus && <p className="mt-4 text-sm text-gold-soft">{formStatus}</p>}
            </form>
          </Reveal>
        </div>
      </section>

      <section id="contacto" className="border-t border-white/10 bg-carbon py-16">
        <div className="section-shell flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-3 text-gold"><Sparkles size={18} /><span className="text-xs uppercase tracking-[0.2em]">Hablemos de tu proyecto</span></div>
            <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl">Una instalación bien resuelta empieza con una consulta clara.</h2>
          </div>
          <a className="btn-gold shrink-0" href={whatsappHref()} target="_blank" rel="noreferrer">Contactar ahora <ArrowRight size={18} /></a>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-ink py-10">
        <div className="section-shell flex flex-col gap-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <div><span className="font-medium tracking-[0.18em] text-white">U-LUX</span><span className="ml-3">Instalaciones diseñadas para durar.</span></div>
          <div className="flex flex-wrap gap-5"><a href={COMPANY.instagramUrl} target="_blank" rel="noreferrer">Instagram</a><a href={`mailto:${COMPANY.email}`}>Correo</a><a href="#inicio">Volver arriba</a></div>
          <div>© {new Date().getFullYear()} U-LUX</div>
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
        <a className="floating-link" href={COMPANY.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
        <a className="floating-whatsapp" href={whatsappHref()} target="_blank" rel="noreferrer" aria-label="WhatsApp"><Phone size={21} /></a>
      </div>
    </main>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.22 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function Field({ label, name, placeholder, required = false }: { label: string; name: string; placeholder: string; required?: boolean }) {
  return <label className="field-label">{label}<input className="field-input" name={name} placeholder={placeholder} required={required} /></label>;
}
