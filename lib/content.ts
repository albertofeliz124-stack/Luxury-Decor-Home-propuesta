export const whatsappNumber = "10000000000";

export function advisorLink(context: string) {
  const message = `Hola Luxury Decor Home, me gustaría hablar con un asesor sobre ${context}.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Colecciones", href: "#colecciones" },
  { label: "Inspiración", href: "#inspiracion" },
  { label: "Profesionales", href: "#profesionales" },
  { label: "Showroom", href: "#showroom" },
  { label: "Contacto", href: "#contacto" }
];

export const images = {
  hero: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=85",
  introA: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=85",
  introB: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=900&q=85",
  showroom: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=85",
  materialRoom: "https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1800&q=85"
};

export const categories = [
  {
    title: "Revestimientos",
    description: "Acabados arquitectónicos para muros con textura, profundidad y presencia.",
    image: "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?auto=format&fit=crop&w=1400&q=85"
  },
  {
    title: "Papel Tapiz",
    description: "Wallpapers de diseño para interiores residenciales, comerciales y hospitality.",
    image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1200&q=85"
  },
  {
    title: "Baños",
    description: "Piezas contemporáneas, accesorios y superficies para baños con carácter.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=85"
  },
  {
    title: "Plantas & Naturaleza",
    description: "Verde decorativo y elementos naturales para suavizar la arquitectura.",
    image: "https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?auto=format&fit=crop&w=1200&q=85"
  },
  {
    title: "Accesorios",
    description: "Objetos, detalles y acentos que completan una atmósfera.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85"
  },
  {
    title: "Fuentes",
    description: "Elementos de agua decorativos para interiores, patios y exteriores.",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85"
  }
];

export const products = [
  {
    name: "Panel Roble Lineal",
    category: "Paneles",
    description: "Panel decorativo de apariencia cálida para acentuar salas, habitaciones y áreas sociales.",
    image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85"
    ]
  },
  {
    name: "Wallpaper Lino Arena",
    category: "Wallpapers",
    description: "Papel tapiz de textura textil para crear fondos suaves, elegantes y fáciles de combinar.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=900&q=85"
    ]
  },
  {
    name: "Revestimiento Piedra Clara",
    category: "Revestimientos",
    description: "Superficie mineral para muros protagonistas, recibidores y espacios comerciales.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=900&q=85"
    ]
  },
  {
    name: "Set Decorativo Niebla",
    category: "Accesorios",
    description: "Piezas decorativas para mesas, consolas y estanterías con una lectura sobria y contemporánea.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?auto=format&fit=crop&w=900&q=85"
    ]
  },
  {
    name: "Olivo Decorativo Interior",
    category: "Plantas decorativas",
    description: "Elemento vegetal de gran formato para dar altura, frescura y proporción al ambiente.",
    image: "https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=900&q=85"
    ]
  },
  {
    name: "Fuente Patio Serena",
    category: "Fuentes",
    description: "Pieza de agua decorativa para crear una sensación de calma en terrazas, patios o interiores amplios.",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85"
    ]
  }
];

export const textures = [
  {
    name: "Madera",
    description: "Calidez visual y ritmo arquitectónico.",
    image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=1200&q=85",
    tint: "bg-[#7b5f49]/55"
  },
  {
    name: "Piedra",
    description: "Presencia mineral para muros protagonistas.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
    tint: "bg-[#b8aea1]/55"
  },
  {
    name: "Wallpaper",
    description: "Patrones y textura para atmósferas suaves.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    tint: "bg-[#a48f7d]/55"
  },
  {
    name: "Panel arquitectónico",
    description: "Volumen, sombra y composición.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    tint: "bg-[#51483f]/55"
  }
];

export const spaces = [
  {
    title: "Sala",
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1300&q=85"
  },
  {
    title: "Comedor",
    image: "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1300&q=85"
  },
  {
    title: "Dormitorio",
    image: "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1300&q=85"
  },
  {
    title: "Baño",
    image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1300&q=85"
  },
  {
    title: "Espacios comerciales",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1300&q=85"
  }
];

export const inspiration = [
  {
    name: "Sala contemporánea",
    application: "Revestimientos + accesorios",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1300&q=85",
    detail: "Muros con textura, piezas neutras y acentos naturales para un espacio social sereno."
  },
  {
    name: "Dormitorio cálido",
    application: "Wallpaper + paneles",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1300&q=85",
    detail: "Capas suaves de color, textura textil y madera para una habitación íntima."
  },
  {
    name: "Baño sofisticado",
    application: "Baños + superficies",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1300&q=85",
    detail: "Materiales sobrios, accesorios precisos y una sensación de spa contemporáneo."
  },
  {
    name: "Espacio comercial",
    application: "Revestimientos + plantas",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1300&q=85",
    detail: "Texturas memorables para recepciones, oficinas, restaurantes y estudios."
  }
];
