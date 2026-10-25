import { useState } from 'react';
import { motion } from 'framer-motion';
import logoMas from '../assets/logo.png';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import '../styles/mas.css';

const WHATSAPP =
  'https://wa.me/5493794618441?text=Hola%20MAS%20Soluciones,%20quiero%20saber%20más%20sobre%20sus%20servicios';
const PHONE_DISPLAY = '+54 9 379 461-8441';
const PHONE_TEL = '+5493794618441';
// TODO: reemplazar por tu email real
const EMAIL = 'tonosouza@gmail.com';

export default function Inicio() {
  return (
    <div className="mas-landing min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#portfolio', label: 'Proyectos' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-black/70 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logoMas} alt="MAS Soluciones" className="h-8 w-auto" />
          <span className="text-lg font-bold">MAS Soluciones</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-green-400">
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="transition hover:text-green-400">
            Contacto
          </a>
        </div>

        {/* CTA */}
        <a
          target="_blank"
          rel="noreferrer"
          href={WHATSAPP}
          className="hidden rounded-xl bg-gradient-to-r from-green-400 to-green-600 px-4 py-2 font-medium transition hover:brightness-110 md:block"
        >
          WhatsApp
        </a>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={open}
          className="text-2xl leading-none md:hidden"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute inset-x-0 top-20 z-20">
          <div className="m-4 flex flex-col gap-4 rounded-lg bg-black py-4 text-white shadow-lg">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-6">
                {l.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="px-6">
              Contacto
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={WHATSAPP}
              onClick={() => setOpen(false)}
              className="mx-6 mt-2 rounded-xl bg-green-500 px-4 py-2 text-center font-medium"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative flex h-screen items-center justify-center px-6 text-white">
      {/* Fondo imagen */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center">
        <img
          src="/hero-image.png"
          alt="Sistema MAS Soluciones"
          className="mx-auto mb-6 w-40 drop-shadow-2xl md:w-80"
        />
        <h1 className="mas-invert mb-6 text-3xl font-bold md:text-5xl">
          Creamos sistemas que hacen crecer tu negocio
        </h1>
        <p className="mb-8 text-lg text-gray-300 md:text-xl">
          Automatizá tus procesos, aumentá tus ventas y controlá todo desde un solo lugar
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#contacto"
            className="rounded-xl bg-green-500 px-6 py-3 font-semibold transition hover:bg-green-600"
          >
            Solicitar presupuesto
          </a>
          <a
            href="#servicios"
            className="rounded-xl border border-gray-500 px-6 py-3 transition hover:border-white hover:bg-white/10"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      title: 'Desarrollo Web',
      tagline: 'Tu presencia digital, pensada para convertir',
      desc: 'Diseñamos sitios rápidos y claros que explican qué ofrecés y guían al visitante hacia el siguiente paso, en cualquier dispositivo.',
      includes: [
        'Diseño responsive a medida',
        'Optimización de velocidad y SEO',
        'Panel para editar tus contenidos',
      ],
      ideal: 'Negocios que quieren ser encontrados',
    },
    {
      title: 'E-commerce',
      tagline: 'Vendé online sin fricciones',
      desc: 'Montamos tu tienda con catálogo, carrito, pagos y envíos conectados a tu facturación, para que cada venta fluya sola.',
      includes: [
        'Catálogo con variantes y precios',
        'Medios de pago y envíos integrados',
        'Facturación automática',
      ],
      ideal: 'Comercios que quieren vender 24 horas',
    },
    {
      title: 'Sistemas de Stock',
      tagline: 'Cada unidad, siempre localizada',
      desc: 'Registramos entradas, salidas y transferencias entre depósitos en tiempo real, y te avisamos antes de que falte mercadería.',
      includes: ['Alertas de stock mínimo', 'Códigos de barras y SKU', 'Valorización y reportes'],
      ideal: 'Empresas con mercadería y varios depósitos',
    },
    {
      title: 'Sistemas de Gestión',
      tagline: 'Los procesos de tu empresa, en un solo lugar',
      desc: 'Conectamos ventas, compras, clientes y cobranzas en una misma plataforma, para que todos trabajen con la misma información.',
      includes: [
        'Flujos de trabajo automatizados',
        'Roles y permisos por usuario',
        'Tableros de indicadores',
      ],
      ideal: 'Pymes que crecen y necesitan orden',
    },
    {
      title: 'Sistemas de Administración',
      tagline: 'Menos papeles, más control',
      desc: 'Automatizamos las tareas administrativas repetitivas para reducir errores y liberar tiempo del equipo.',
      includes: [
        'Facturación y cuentas corrientes',
        'Control de vencimientos',
        'Reportes listos para exportar',
      ],
      ideal: 'Áreas administrativas y contables',
    },
    {
      title: 'Soluciones a medida',
      tagline: 'Si no existe, lo construimos',
      desc: 'Analizamos cómo opera tu negocio y desarrollamos exactamente lo que necesitás, integrado con las herramientas que ya usás.',
      includes: [
        'Relevamiento y diagnóstico',
        'Integración con sistemas actuales',
        'Soporte y evolución continua',
      ],
      ideal: 'Procesos únicos que ningún software cubre',
    },
  ];

  return (
    <section id="servicios" className="bg-gray-100 px-6 py-20">
      <div className="mx-auto mb-14 flex max-w-3xl flex-col items-center gap-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#1553b0]">
          Nuestros Servicios
        </p>
        <h2 className="text-3xl font-bold leading-tight md:text-4xl">
          Tecnología que ordena tu negocio, <span className="text-[#1553b0]">a tu medida</span>
        </h2>
        <p className="text-lg leading-relaxed text-gray-600">
          Cada empresa trabaja distinto. Por eso no vendemos software genérico: analizamos cómo
          operás y construimos la herramienta que resuelve tus problemas reales, desde la web
          hasta el control del inventario.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <article
            key={item.title}
            className="flex flex-col gap-3.5 rounded-2xl bg-white p-7 text-left shadow"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-[#eaf3ff] px-2.5 py-1.5 text-sm font-bold text-[#1553b0]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
            <p className="font-semibold leading-snug text-[#1553b0]">{item.tagline}</p>
            <p className="leading-relaxed text-gray-600">{item.desc}</p>

            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Qué incluye
            </p>
            <ul className="space-y-2">
              {item.includes.map((inc) => (
                <li key={inc} className="flex gap-2.5 text-sm text-gray-700">
                  <span className="font-bold text-emerald-700" aria-hidden="true">
                    ✓
                  </span>
                  {inc}
                </li>
              ))}
            </ul>

            <p className="mt-auto border-t border-gray-200 pt-4 text-sm text-gray-500">
              <b className="text-gray-900">Ideal para:</b> {item.ideal}
            </p>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <div>
          <p className="text-2xl font-bold">¿No sabés por dónde empezar?</p>
          <p className="mt-1 text-gray-600">Contanos tu necesidad y te orientamos sin compromiso.</p>
        </div>
        <a
          href="#contacto"
          className="rounded-full bg-[#1d6fe8] px-7 py-3.5 font-semibold text-white transition hover:brightness-110"
        >
          Hablar con un especialista →
        </a>
      </div>
    </section>
  );
}

// Todavia no hay capturas reales de los proyectos: se muestran tiles con
// gradiente para que la seccion no quede con imagenes rotas.
const projectGradients = [
  'from-emerald-500 to-teal-700',
  'from-sky-500 to-indigo-700',
  'from-amber-500 to-orange-600',
];

function Portfolio() {
  const projects = [
    { 
      title: 'Sistema de Gestion Financiera Personal', 
      desc: 'Control de ingresos, gastos y ahorros en tiempo real', 
      img:  p1 
    },
    { 
      title: 'Sistema de Stock', 
      desc: 'Gestión de productos y stock en tiempo real', 
      img: p2
    },
    //{ title: 'E-commerce', desc: 'Tienda online completa', img: './Images/p3.jpg' },
    { 
      title: 'Dashboard', 
      desc: 'Panel de métricas e indicadores para la toma de decisiones', 
      img: p3 
    },
  ];

  return (
    <section id="portfolio" className="bg-white px-6 py-20 text-center">
      <h2 className="mb-12 text-3xl font-bold">Proyectos realizados</h2>

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <div
              className={`flex h-56 items-center justify-center bg-gradient-to-br ${projectGradients[i]} text-white`}
            >
              <span className="text-5xl font-bold opacity-40">0{i + 1}</span>
              <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-gray-500">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function About() {
  const principles = [
    {
      title: 'Cercanía',
      desc: 'Trabajamos codo a codo con vos en cada etapa, con atención personalizada y soporte cercano.',
    },
    {
      title: 'Calidad',
      desc: 'Sistemas confiables, seguros y escalables, pensados para durar y crecer con tu negocio.',
    },
    {
      title: 'Resultados',
      desc: 'Cada solución apunta a algo concreto: ahorrar tiempo, evitar errores y darte control.',
    },
  ];

  return (
    <section id="nosotros" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-5 md:gap-16">
          <div className="md:col-span-2">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#1553b0]">
              Nosotros
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Tecnología que simplifica, resultados que se miden
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-relaxed text-gray-600 md:col-span-3">
            <p className="text-xl text-gray-900">
              En MAS Soluciones diseñamos y desarrollamos sistemas de gestión, plataformas web y
              soluciones digitales adaptadas a cada empresa.
            </p>
            <p>
              Creemos que la tecnología debe simplificar el trabajo, impulsar el crecimiento y
              generar resultados medibles. Por eso empezamos por entender tus procesos: cómo
              vendés, cómo controlás tu stock, dónde se pierde tiempo. Con esa base creamos
              herramientas que acompañan a tu negocio a medida que crece.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-gray-200 pt-10 md:grid-cols-3 md:gap-12">
          {principles.map((item) => (
            <div key={item.title}>
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="leading-relaxed text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-14 text-center text-lg font-semibold text-[#1553b0]">
          Transformamos ideas en soluciones tecnológicas que generan valor.
        </p>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      title: 'Escuchamos',
      desc: 'Entendemos tu negocio, tus objetivos y dónde hoy se pierde tiempo o dinero.',
    },
    {
      title: 'Diseñamos',
      desc: 'Proponemos una solución clara, con alcance, plazos y una vista previa antes de construir.',
    },
    {
      title: 'Desarrollamos',
      desc: 'Construimos por etapas y te mostramos avances para que ajustes sobre la marcha.',
    },
    {
      title: 'Acompañamos',
      desc: 'Capacitamos a tu equipo y damos soporte para que el sistema evolucione con vos.',
    },
  ];

  return (
    <section id="proyectos" className="bg-gray-100 px-6 py-20">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#0b1b3a] p-8 text-left md:p-11">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
          Cómo trabajamos
        </p>
        <h2 className="mas-invert mb-8 mt-2 text-2xl font-bold text-white md:text-3xl">
          Un proceso simple, transparente y acompañado
        </h2>
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title}>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 font-bold text-emerald-950">
                {i + 1}
              </span>
              <h3 className="mb-1.5 mt-3 text-lg font-semibold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const contacts = [
    {
      label: 'Celular',
      value: PHONE_DISPLAY,
      href: WHATSAPP,
      icon: (
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
      ),
    },
    {
      label: 'Email',
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      icon: (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </>
      ),
    },
  ];

  return (
    <section id="contacto" className="bg-black px-6 py-20 text-center text-white">
      <h2 className="mas-invert mb-4 text-3xl font-bold">¿Listo para digitalizar tu negocio?</h2>
      <p className="mx-auto mb-8 max-w-xl text-gray-300">
        Contanos qué necesitás y te respondemos a la brevedad. Elegí el medio que te quede más
        cómodo.
      </p>
      <a
        target="_blank"
        rel="noreferrer"
        href={WHATSAPP}
        className="inline-block rounded-xl bg-green-500 px-8 py-4 font-semibold transition hover:bg-green-600"
      >
        Hablemos por WhatsApp
      </a>

      <div className="mx-auto mt-12 grid max-w-2xl gap-8 border-t border-white/10 pt-10 sm:grid-cols-2">
        {contacts.map((c) => (
          <a
            target="_blank"
            key={c.label}
            href={c.href}
            className="group flex flex-col items-center gap-2 transition hover:text-green-400"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="text-green-400"
            >
              {c.icon}
            </svg>
            <span className="text-sm text-gray-400">{c.label}</span>
            <span className="break-all text-lg font-medium">{c.value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 py-6 text-center text-gray-400">
      © {new Date().getFullYear()} MAS Sistemas - Todos los derechos reservados
    </footer>
  );
}