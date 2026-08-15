"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CalendarDays, Check, ImagePlus, Instagram, MapPin, Menu, MessageCircle, Send, X } from "lucide-react";
import { FormEvent, useState } from "react";
import { categories, images, inspiration, navItems, products, spaces, textures, whatsappLink, whatsappMessages } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

type Product = (typeof products)[number];
type Inspiration = (typeof inspiration)[number];

function Nav() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const background = useTransform(scrollY, [0, 120], ["rgba(247,243,236,0)", "rgba(247,243,236,0.94)"]);
  const border = useTransform(scrollY, [0, 120], ["rgba(247,243,236,0)", "rgba(45,44,42,0.12)"]);

  return (
    <>
      <motion.header style={{ backgroundColor: background, borderColor: border }} className="fixed left-0 top-0 z-50 w-full border-b backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-[1540px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#inicio" className="group flex min-h-11 min-w-0 items-center gap-3" aria-label="Luxury Decor Home inicio">
            <span className="grid h-10 w-10 shrink-0 place-items-center border border-ink/20 bg-ivory/70 text-[0.66rem] font-bold uppercase tracking-[0.18em]">LDH</span>
            <span className="truncate font-serif text-2xl font-semibold leading-none tracking-normal">Luxury Decor Home</span>
          </a>
          <div className="hidden items-center gap-7 xl:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="animated-link text-sm font-semibold text-ink/75">
                {item.label}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-3 lg:flex">
            <a href="#showroom" className="btn border-ink/20">
              Visitar showroom
            </a>
            <a href={whatsappLink(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
              Hablar con un asesor
            </a>
          </div>
          <button className="icon-btn lg:hidden" onClick={() => setOpen(true)} aria-label="Abrir menú">
            <Menu size={22} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-ink text-ivory lg:hidden">
            <div className="flex h-20 items-center justify-between px-5">
              <span className="font-serif text-2xl font-semibold">Luxury Decor Home</span>
              <button className="icon-btn border-ivory/20 text-ivory" onClick={() => setOpen(false)} aria-label="Cerrar menú">
                <X size={22} />
              </button>
            </div>
            <div className="flex min-h-[calc(100vh-5rem)] flex-col justify-between px-6 pb-8 pt-8">
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className="block border-b border-ivory/10 pb-4 font-serif text-[clamp(2.8rem,12vw,4.8rem)] leading-none"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
              <div className="grid gap-3 pt-8">
                <a href={whatsappLink(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="btn btn-light justify-center">
                  Hablar con un asesor
                </a>
                <a href="#showroom" onClick={() => setOpen(false)} className="btn border-ivory/25 text-ivory justify-center">
                  Visitar showroom
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] overflow-hidden bg-ink text-ivory">
      <Image src={images.hero} alt="Interior contemporáneo con revestimientos y decoración premium" fill priority className="object-cover object-[56%_center] opacity-[0.86] md:object-center" sizes="100vw" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_42%,rgba(247,243,236,0.14),transparent_28%),linear-gradient(90deg,rgba(21,20,18,0.88),rgba(21,20,18,0.48)_48%,rgba(21,20,18,0.16))]" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-ink via-ink/55 to-transparent" />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1540px] flex-col justify-end px-5 pb-10 pt-28 sm:px-8 lg:px-12 lg:pb-16">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.68rem] font-bold uppercase tracking-[0.26em] text-ivory/78">
          <span>Revestimientos Premium</span>
          <span>Wallpapers</span>
          <span className="inline-flex items-center gap-2"><MapPin size={14} /> República Dominicana</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }} className="max-w-5xl font-serif text-[clamp(4rem,13vw,12.5rem)] font-medium leading-[0.82] tracking-normal">
          Espacios que hablan de ti.
        </motion.h1>
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.18 }} className="mt-8 grid gap-7 lg:grid-cols-[minmax(0,580px)_auto] lg:items-end lg:justify-between">
          <p className="max-w-xl text-lg leading-8 text-ivory/84 sm:text-xl">
            Revestimientos, texturas y piezas cuidadosamente seleccionadas para transformar cada espacio.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#colecciones" className="btn btn-light">
              Explorar colecciones <ArrowRight size={17} />
            </a>
            <a href={whatsappLink(whatsappMessages.hero)} target="_blank" rel="noopener noreferrer" className="btn border-ivory/25 text-ivory">
              Hablar con un asesor
            </a>
          </div>
        </motion.div>
        <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} href="#nosotros" aria-label="Continuar" className="mt-12 flex w-fit items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.26em] text-ivory/62">
          <span className="h-px w-12 bg-ivory/42" /> Desliza
        </motion.a>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section id="nosotros" className="section bg-ivory">
      <div className="mx-auto grid max-w-[1420px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
        <Reveal className="self-center">
          <SectionLabel>LUXURY DECOR HOME</SectionLabel>
          <h2 className="headline">Materiales que crean atmósferas. Detalles que transforman espacios.</h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-graphite/75">
            Seleccionamos revestimientos, wallpapers, accesorios y piezas decorativas para que propietarios, arquitectos y diseñadores puedan crear interiores con textura, intención y carácter.
          </p>
          <div className="mt-8 grid max-w-xl grid-cols-2 border-y border-ink/10 py-5 text-sm font-bold uppercase tracking-[0.14em] text-graphite/72">
            <span>Showroom físico</span>
            <span>Asesoría personalizada</span>
          </div>
        </Reveal>
        <div className="relative min-h-[520px] sm:min-h-[620px]">
          <Reveal className="absolute left-0 top-8 h-[72%] w-[72%] overflow-hidden">
            <Image src={images.introA} alt="Sala sofisticada con texturas cálidas" fill className="object-cover" sizes="(max-width: 1024px) 80vw, 50vw" />
          </Reveal>
          <Reveal delay={0.14} className="absolute bottom-0 right-0 h-[46%] w-[48%] overflow-hidden border-[10px] border-ivory shadow-soft sm:border-[12px]">
            <Image src={images.introB} alt="Detalle decorativo de interior premium" fill className="object-cover" sizes="(max-width: 1024px) 52vw, 28vw" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Collections() {
  return (
    <section id="colecciones" className="section bg-bone">
      <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12">
        <Reveal className="grid gap-6 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <SectionLabel>Colecciones</SectionLabel>
            <h2 className="headline max-w-4xl">Descubre nuestras colecciones</h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-graphite/70">
            Descubre materiales, texturas y piezas seleccionadas para transformar cada ambiente.
          </p>
        </Reveal>
        <div className="mt-12 grid auto-rows-[360px] gap-4 md:grid-cols-2 md:auto-rows-[390px] xl:grid-cols-6">
          {categories.map((item, index) => {
            const layout = ["xl:col-span-3 xl:row-span-2", "xl:col-span-3", "xl:col-span-2", "xl:col-span-2", "xl:col-span-2", "xl:col-span-4"][index];
            return (
              <Reveal key={item.title} delay={index * 0.04} className={`group relative overflow-hidden ${layout}`}>
                <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 34vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/86 via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-ivory sm:p-8">
                  <div className="mb-5 h-px w-14 bg-ivory/50 transition duration-500 group-hover:w-24" />
                  <p className="font-serif text-4xl font-medium sm:text-5xl">{item.title}</p>
                  <p className="mt-3 max-w-md text-sm leading-6 text-ivory/78">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductSelection() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <section className="section bg-ivory">
      <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>SELECCIÓN LUXURY</SectionLabel>
            <h2 className="headline max-w-5xl">Detalles que cambian un espacio.</h2>
          </div>
          <a href={whatsappLink(whatsappMessages.selection)} target="_blank" rel="noopener noreferrer" className="btn btn-dark w-fit">Hablar con un asesor</a>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.name} delay={index * 0.04}>
              <button onClick={() => setSelected(product)} className="group w-full text-left">
                <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                  <Image src={product.image} alt={product.name} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" />
                  <div className="absolute right-4 top-4 grid h-11 w-11 place-items-center border border-ivory/45 bg-ivory/18 text-ivory backdrop-blur-sm transition group-hover:bg-ivory group-hover:text-ink">
                    <ArrowRight size={18} />
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-ink/10 py-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-taupe">{product.category}</p>
                    <h3 className="mt-2 font-serif text-3xl leading-none">{product.name}</h3>
                    <p className="mt-3 text-sm font-bold uppercase tracking-[0.13em] text-graphite/60">Consultar disponibilidad</p>
                  </div>
                  <ArrowRight className="mt-8 shrink-0 text-graphite/45 transition group-hover:translate-x-1 group-hover:text-ink" size={18} />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function ProductModal({ product, onClose }: { product: Product | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {product && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70] grid place-items-center bg-ink/76 p-3 backdrop-blur-md sm:p-5" onClick={onClose}>
          <motion.div initial={{ y: 34, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 34, opacity: 0 }} className="grid max-h-[90vh] w-full max-w-5xl overflow-y-auto bg-ivory md:grid-cols-[1.05fr_0.95fr]" onClick={(event) => event.stopPropagation()}>
            <div className="relative min-h-[360px] md:min-h-[680px]">
              <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 52vw" />
            </div>
            <div className="p-6 sm:p-10">
              <button className="icon-btn ml-auto" onClick={onClose} aria-label="Cerrar producto"><X size={18} /></button>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-taupe">{product.category}</p>
              <h3 className="mt-4 font-serif text-5xl leading-none sm:text-6xl">{product.name}</h3>
              <p className="mt-6 text-lg leading-8 text-graphite/72">{product.description}</p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {product.gallery.map((image) => (
                  <div key={image} className="relative aspect-[4/3] overflow-hidden">
                    <Image src={image} alt={`${product.name} detalle`} fill className="object-cover" sizes="200px" />
                  </div>
                ))}
              </div>
              <a href={whatsappLink(whatsappMessages.product(product.name))} target="_blank" rel="noopener noreferrer" className="btn btn-dark mt-8 w-full sm:w-fit">
                <MessageCircle size={17} /> Consultar por WhatsApp
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Spaces() {
  return (
    <section id="ambientes" className="section border-t border-ink/10 bg-ivory">
      <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>Ambientes</SectionLabel>
            <h2 className="headline">Inspírate</h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-graphite/70">Cada espacio puede contar una historia diferente.</p>
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          {spaces.map((space, index) => (
            <Reveal key={space.title} delay={index * 0.05} className={`group relative min-h-[380px] overflow-hidden sm:min-h-[420px] ${index === 0 || index === 4 ? "lg:col-span-2" : ""}`}>
              <Image src={space.image} alt={space.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 35vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/68 to-transparent" />
              <p className="absolute bottom-6 left-6 font-serif text-5xl text-ivory">{space.title}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MaterialExplorer() {
  const [active, setActive] = useState(textures[0]);

  return (
    <section className="section bg-bone">
      <div className="mx-auto grid max-w-[1420px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:px-12">
        <Reveal>
          <SectionLabel>Visualización</SectionLabel>
          <h2 className="headline">Visualiza la diferencia.</h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-graphite/70">Explora cómo distintas superficies pueden cambiar la lectura de un mismo ambiente. Esta herramienta te ayuda a imaginar materiales antes de visitar el showroom.</p>
          <div className="mt-8 grid gap-3">
            {textures.map((texture) => (
              <button key={texture.name} onClick={() => setActive(texture)} className={`flex min-h-16 items-center justify-between border px-4 py-3 text-left transition ${active.name === texture.name ? "border-ink bg-ink text-ivory" : "border-ink/12 bg-ivory/40 hover:border-ink/40"}`}>
                <span>
                  <span className="block text-sm font-bold uppercase tracking-[0.16em]">{texture.name}</span>
                  <span className={`mt-1 block text-sm ${active.name === texture.name ? "text-ivory/65" : "text-graphite/60"}`}>{texture.description}</span>
                </span>
                <ArrowRight size={17} />
              </button>
            ))}
          </div>
        </Reveal>
        <Reveal className="relative aspect-[4/5] overflow-hidden bg-ink shadow-soft sm:aspect-[16/10]">
          <Image src={images.materialRoom} alt="Sala para visualizar materiales decorativos" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
          <AnimatePresence mode="wait">
            <motion.div key={active.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }} className="absolute inset-x-[7%] top-[8%] h-[44%] overflow-hidden mix-blend-multiply">
              <Image src={active.image} alt={`Textura ${active.name}`} fill className="object-cover opacity-80" sizes="(max-width: 1024px) 90vw, 54vw" />
              <div className={`absolute inset-0 ${active.tint}`} />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/52 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex flex-col justify-between gap-3 text-ivory sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-ivory/62">Material seleccionado</p>
              <p className="mt-2 font-serif text-4xl">{active.name}</p>
            </div>
            <a href={whatsappLink(whatsappMessages.material(active.name))} target="_blank" rel="noopener noreferrer" className="btn border-ivory/25 text-ivory">Hablar con un asesor</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Professionals() {
  const benefits = ["Asesoría personalizada", "Selección de materiales", "Soluciones residenciales y comerciales", "Atención a profesionales del diseño"];

  return (
    <section id="profesionales" className="section bg-ivory">
      <div className="mx-auto grid max-w-[1420px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
        <Reveal className="relative min-h-[520px] overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1500&q=85" alt="Materiales para arquitectos y diseñadores" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/70 to-transparent p-7 text-ivory">
            <p className="max-w-md text-sm font-bold uppercase tracking-[0.18em]">Materiales, acabados y acompañamiento para proyectos</p>
          </div>
        </Reveal>
        <Reveal className="self-center">
          <SectionLabel>PROFESIONALES</SectionLabel>
          <h2 className="headline">Materiales para ideas extraordinarias.</h2>
          <p className="mt-6 text-lg leading-8 text-graphite/70">Si eres arquitecto, diseñador o desarrollador, te acompañamos en la selección de materiales y soluciones para tus proyectos.</p>
          <div className="mt-8 grid gap-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center justify-between border-b border-ink/12 py-4 text-sm font-bold uppercase tracking-[0.14em]">
                {benefit}
                <Check size={16} />
              </div>
            ))}
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contacto" className="btn btn-dark">Solicitar atención profesional</a>
            <a href={whatsappLink(whatsappMessages.professional)} target="_blank" rel="noopener noreferrer" className="btn border-ink/20">Hablar con un asesor</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function InspirationSection() {
  const [selected, setSelected] = useState<Inspiration | null>(null);

  return (
    <section id="inspiracion" className="section bg-bone">
      <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionLabel>INSPIRACIÓN</SectionLabel>
          <h2 className="headline max-w-5xl">Imagina lo que podemos crear.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite/70">Ideas de aplicación para visualizar cómo nuestros materiales, accesorios y texturas pueden integrarse en distintos ambientes.</p>
        </Reveal>
        <div className="mt-12 columns-1 gap-4 md:columns-2 xl:columns-4">
          {inspiration.map((item, index) => (
            <Reveal key={item.name} className="mb-4 break-inside-avoid">
              <button onClick={() => setSelected(item)} className={`group relative w-full overflow-hidden text-left ${index === 0 || index === 3 ? "h-[560px]" : "h-[420px]"}`}>
                <Image src={item.image} alt={item.name} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/12 to-transparent" />
                <div className="absolute bottom-0 p-6 text-ivory">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-ivory/65">{item.application}</p>
                  <p className="mt-3 font-serif text-4xl leading-none">{item.name}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70] grid place-items-center bg-ink/75 p-4 backdrop-blur-md" onClick={() => setSelected(null)}>
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }} className="grid max-h-[88vh] w-full max-w-4xl overflow-hidden bg-ivory md:grid-cols-2" onClick={(event) => event.stopPropagation()}>
              <div className="relative min-h-[360px]">
                <Image src={selected.image} alt={selected.name} fill className="object-cover" sizes="50vw" />
              </div>
              <div className="p-7 sm:p-10">
                <button className="icon-btn ml-auto" onClick={() => setSelected(null)} aria-label="Cerrar inspiración"><X size={18} /></button>
                <p className="mt-10 text-xs font-bold uppercase tracking-[0.22em] text-taupe">{selected.application}</p>
                <h3 className="mt-4 font-serif text-5xl leading-none sm:text-6xl">{selected.name}</h3>
                <p className="mt-6 text-lg leading-8 text-graphite/70">{selected.detail}</p>
                <a href={whatsappLink(whatsappMessages.inspiration(selected.name))} target="_blank" rel="noopener noreferrer" className="btn btn-dark mt-8 w-fit" onClick={() => setSelected(null)}>Hablar con un asesor</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Showroom() {
  return (
    <section id="showroom" className="bg-ink text-ivory">
      <div className="grid min-h-[780px] lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative min-h-[470px] overflow-hidden lg:min-h-full">
          <Image src={images.showroom} alt="Showroom de materiales y decoración premium" fill className="object-cover opacity-[0.9]" sizes="(max-width: 1024px) 100vw, 54vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/76 via-transparent to-transparent" />
          <div className="absolute bottom-7 left-5 right-5 border-t border-ivory/22 pt-5 sm:left-8 sm:right-8">
            <p className="max-w-lg text-sm font-bold uppercase tracking-[0.2em] text-ivory/72">Materiales reales. Texturas visibles. Combinaciones que se entienden al tocarlas.</p>
          </div>
        </div>
        <div className="flex items-center px-5 py-20 sm:px-8 lg:px-16">
          <Reveal>
            <SectionLabel light>Showroom</SectionLabel>
            <h2 className="headline text-ivory">Ven. Toca. Imagina.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ivory/72">Hay texturas que una pantalla no puede explicar. Descubre nuestros materiales y combinaciones personalmente.</p>
            <div className="mt-10 grid gap-6 border-y border-ivory/12 py-8 sm:grid-cols-2">
              <div className="bg-ivory/[0.03] p-5">
                <MapPin className="mb-5" size={22} />
                <p className="font-semibold">Downtown Business Center</p>
                <p className="text-ivory/60">República Dominicana</p>
              </div>
              <div className="bg-ivory/[0.03] p-5">
                <CalendarDays className="mb-5" size={22} />
                <p className="font-semibold">Lunes-Viernes</p>
                <p className="text-ivory/60">9:00 AM-5:30 PM</p>
                <p className="mt-3 font-semibold">Sábado</p>
                <p className="text-ivory/60">9:00 AM-2:00 PM</p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://maps.google.com/?q=Downtown%20Business%20Center%20Dominican%20Republic" target="_blank" rel="noopener noreferrer" className="btn btn-light">Cómo llegar</a>
              <a href={whatsappLink(whatsappMessages.showroom)} target="_blank" rel="noopener noreferrer" className="btn border-ivory/25 text-ivory">Agendar visita</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ConsultationForm() {
  const [submitted, setSubmitted] = useState<{ name: string; interest: string; message: string; hasPhoto: boolean } | null>(null);
  const [lookingFor, setLookingFor] = useState("Revestimientos");
  const [photoName, setPhotoName] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const interest = String(formData.get("interest") || lookingFor).trim();
    const message = String(formData.get("message") || "").trim();
    const photo = formData.get("photo");
    const hasPhoto = photo instanceof File && photo.name.length > 0;
    setSubmitted({ name, interest, message, hasPhoto });
  }

  return (
    <section id="contacto" className="relative overflow-hidden bg-ivory py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1420px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
        <Reveal className="self-center">
          <SectionLabel>Contacto</SectionLabel>
          <h2 className="headline">Cuéntanos qué estás imaginando.</h2>
          <p className="mt-7 max-w-lg text-lg leading-8 text-graphite/70">Comparte lo que buscas y un asesor te orientará con materiales, combinaciones y próximos pasos para visitar el showroom.</p>
          <a href={whatsappLink(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="btn btn-dark mt-8 w-fit"><MessageCircle size={17} /> Hablar con un asesor</a>
        </Reveal>
        <Reveal delay={0.08} className="border border-ink/10 bg-bone/65 p-5 sm:p-8 lg:p-10">
          {submitted ? (
            <div className="grid min-h-[520px] place-items-center text-center">
              <div>
                <div className="mx-auto grid h-14 w-14 place-items-center border border-ink bg-ink text-ivory"><Check size={24} /></div>
                <h3 className="mt-7 font-serif text-5xl leading-none">Gracias, {submitted.name}. Ya tenemos una idea de lo que estás buscando.</h3>
                <p className="mx-auto mt-5 max-w-md leading-7 text-graphite/70">Puedes continuar la conversación con nuestro equipo por WhatsApp.</p>
                <a href={whatsappLink(whatsappMessages.form(submitted.name, submitted.interest, submitted.message, submitted.hasPhoto))} target="_blank" rel="noopener noreferrer" className="btn btn-dark mt-7"><MessageCircle size={17} /> Continuar por WhatsApp</a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.14em] text-graphite/70">
                Nombre
                <input required name="name" className="form-field" autoComplete="name" />
              </label>
              <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.14em] text-graphite/70">
                WhatsApp
                <input required name="whatsapp" className="form-field" inputMode="tel" autoComplete="tel" />
              </label>
              <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.14em] text-graphite/70">
                ¿Qué estás buscando?
                <select required name="interest" value={lookingFor} onChange={(event) => setLookingFor(event.target.value)} className="form-field">
                  {["Revestimientos", "Papel tapiz", "Baños", "Accesorios", "Fuentes", "Proyecto completo", "Otro"].map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.14em] text-graphite/70">
                Cuéntanos un poco sobre tu espacio
                <textarea name="message" rows={5} className="form-field resize-none" />
              </label>
              <label className="group grid cursor-pointer gap-3 border border-ink/[0.12] bg-ivory p-4 text-sm font-bold uppercase tracking-[0.14em] text-graphite/70 transition hover:border-ink/40">
                <span>Adjuntar foto de mi espacio</span>
                <span className="flex min-h-20 items-center gap-4 border border-dashed border-ink/20 px-4 py-4 normal-case tracking-normal text-graphite/65 transition group-hover:border-ink/40">
                  <span className="grid h-11 w-11 shrink-0 place-items-center border border-ink/15 text-ink">
                    <ImagePlus size={19} />
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">{photoName || "Seleccionar JPG, PNG o HEIC"}</span>
                    <span className="mt-1 block text-sm font-medium text-graphite/58">Opcional · Una foto nos ayuda a entender mejor lo que tienes en mente.</span>
                  </span>
                </span>
                <input
                  name="photo"
                  type="file"
                  accept=".jpg,.jpeg,.png,.heic,image/jpeg,image/png,image/heic"
                  className="sr-only"
                  onChange={(event) => setPhotoName(event.target.files?.[0]?.name || "")}
                />
              </label>
              <button type="submit" className="btn btn-dark mt-2 w-full sm:w-fit">
                <Send size={17} /> Solicitar asesoría
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink px-5 py-12 text-ivory sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1540px]">
        <div className="grid gap-10 border-b border-ivory/12 pb-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <p className="font-serif text-5xl leading-none">Luxury Decor Home</p>
            <p className="mt-5 max-w-sm text-ivory/62">Revestimientos Premium | Wallpapers | Home Decor</p>
          </div>
          <div className="grid gap-3">
            {navItems.slice(1).map((item) => (
              <a key={item.href} href={item.href} className="animated-link w-fit text-ivory/72">{item.label}</a>
            ))}
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-ivory/45">Social</p>
            <a href="https://instagram.com/luxurydecor.do" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-ivory/72"><Instagram size={17} /> @luxurydecor.do</a>
          </div>
          <div className="text-ivory/72">
            <p>Downtown Business Center</p>
            <p>República Dominicana</p>
            <p className="mt-5">Lunes-Viernes 9:00 AM-5:30 PM</p>
            <p>Sábado 9:00 AM-2:00 PM</p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 pt-8 text-sm text-ivory/45 sm:flex-row">
          <p>© 2026 Luxury Decor Home</p>
          <a href={whatsappLink(whatsappMessages.footer)} target="_blank" rel="noopener noreferrer" className="animated-link w-fit">Hablar con un asesor</a>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a href={whatsappLink(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" aria-label="Hablar con un asesor por WhatsApp" className="fixed bottom-5 right-5 z-40 inline-flex min-h-12 items-center gap-2 border border-ink/12 bg-ivory/90 px-4 py-3 text-xs font-bold uppercase tracking-[0.13em] text-ink shadow-soft backdrop-blur-md transition hover:bg-ink hover:text-ivory sm:text-sm">
      <MessageCircle size={18} />
      <span>Hablar con un asesor</span>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Intro />
      <Collections />
      <ProductSelection />
      <Spaces />
      <MaterialExplorer />
      <Professionals />
      <InspirationSection />
      <Showroom />
      <ConsultationForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
