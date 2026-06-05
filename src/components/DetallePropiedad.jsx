import React, { useState, useEffect, useRef } from "react";
import "./detail.css";

// Comprehensive property details data dictionary
const PROPERTIES_DATA = {
  "casa-alma-verde": {
    name: "Casa Alma Verde",
    type: "Casa",
    location: "Calle 10 #43-15, El Poblado, Medellín, Antioquia",
    price: "COP 850.000.000",
    priceSub: "≈ USD 211.000 · Negociable",
    priceRaw: "COP 850M",
    tags: ["Venta", "Casa", "⭐ Destacada", "El Poblado"],
    rating: "4.9 · 18 reseñas",
    published: "Publicado hace 3 días",
    specs: {
      beds: "4",
      baths: "3",
      area: "320 m²",
      garden: "120 m²",
      parking: "2",
      year: "2018",
      stratum: "Estrato 6",
      status: "Al día"
    },
    description: [
      "Casa Alma Verde es una propiedad única en el corazón de El Poblado diseñada para quienes buscan vivir en armonía con la naturaleza sin renunciar al confort y la exclusividad de uno de los sectores más valorados de Medellín.",
      "Con 320 m² de construcción distribuidos en dos niveles, esta residencia cuenta con espacios amplios, techos de doble altura y grandes ventanales que permiten el paso de la luz natural durante todo el día. Los acabados en madera natural, piedra y materiales de bajo impacto ambiental le dan una identidad propia que la diferencia de cualquier otro inmueble del mercado."
    ],
    highlights: [
      { icon: "fa-leaf", text: "Jardín privado de 120 m² con especies nativas, sistema de riego automatizado y zona de hamacas. El espacio perfecto para reconectarte." },
      { icon: "fa-sun", text: "Orientación sur-oriente que garantiza iluminación natural óptima durante todo el día y ventilación cruzada permanente." },
      { icon: "fa-shield", text: "Seguridad 24/7 con circuito cerrado, portería y sistema de alarma. Además cuenta con planta eléctrica de respaldo." }
    ],
    amenities: [
      { icon: "fa-wifi", text: "WiFi de alta velocidad" },
      { icon: "fa-fire-burner", text: "Cocina gourmet" },
      { icon: "fa-droplet", text: "Piscina privada" },
      { icon: "fa-dumbbell", text: "Zona de ejercicio" },
      { icon: "fa-tree", text: "Jardín nativo" },
      { icon: "fa-solar-panel", text: "Paneles solares" },
      { icon: "fa-car", text: "Parqueadero cubierto" },
      { icon: "fa-shield-halved", text: "Seguridad 24/7" },
      { icon: "fa-snowflake", text: "A/C en habitaciones" },
      { icon: "fa-tv", text: "Smart home" },
      { icon: "fa-bottle-water", text: "Agua filtrada" },
      { icon: "fa-bolt", text: "Planta eléctrica" },
      { icon: "fa-couch", text: "Sala de cine" },
      { icon: "fa-utensils", text: "BBQ exterior" },
      { icon: "fa-mug-hot", text: "Terraza zen" }
    ],
    map: {
      label: "El Poblado, Medellín",
      sub: "Calle 10 #43-15 · Antioquia, Colombia",
      chips: ["🏫 Colegio 500m", "🏥 Clínica 1.2km", "🛒 CC 800m", "✈️ Aeropuerto 14km"],
      places: ["🏫 The Columbus School · 500m", "🏥 Clínica El Rosario · 1.2km", "🛒 CC El Tesoro · 800m", "🍽 Zona Rosa · 400m"],
      transport: ["🚇 Metro El Poblado · 1.5km", "🚌 SITVA · 200m", "🚗 Av. El Poblado · 300m", "✈️ JMC Aeropuerto · 14km"]
    },
    financial: {
      cuotaInicial: "COP 255M",
      montoFinanciar: "COP 595M",
      cuotaAprox: "COP 5.2M",
      plazo: "15 años",
      valorizacion: "+12.4%",
      precioM2: "COP 7.2M",
      costoAdmin: "COP 1.1M/mes",
      predial: "COP 2.8M/año",
      roi: "8–11% anual"
    },
    photos: [
      { bg: "linear-gradient(145deg,#3a5a3c,#1a3820)", icon: "🌿", label: "Fachada principal" },
      { bg: "linear-gradient(145deg,#4a6c4c,#2a4c2c)", icon: "🌳", label: "Jardín trasero" },
      { bg: "linear-gradient(145deg,#5a7c5e,#3a5c3c)", icon: "🏡", label: "Sala principal" },
      { bg: "linear-gradient(145deg,#3a6a3c,#1a4a1c)", icon: "🛋", label: "Comedor" },
      { bg: "linear-gradient(145deg,#4a7a4d,#2a5c2d)", icon: "🍃", label: "Cocina gourmet" },
      { bg: "linear-gradient(145deg,#5a8a5c,#2a5a2c)", icon: "🛏", label: "Habitación principal" },
      { bg: "linear-gradient(145deg,#6a8c5a,#3a5c30)", icon: "🚿", label: "Baño principal" },
      { bg: "linear-gradient(145deg,#3a5a3c,#1a3820)", icon: "🌊", label: "Piscina" },
      { bg: "linear-gradient(145deg,#4a7c4c,#1a4c1c)", icon: "🌱", label: "Terraza" },
      { bg: "linear-gradient(145deg,#5a7d5e,#2a5a2c)", icon: "🏊", label: "Zona húmeda" },
      { bg: "linear-gradient(145deg,#3a6c3c,#1a4c1c)", icon: "🔥", label: "BBQ" },
      { bg: "linear-gradient(145deg,#4a7a4c,#2a5c2c)", icon: "🌙", label: "Vista nocturna" }
    ],
    galleryBadges: ["g1", "g2", "g3"]
  },
  "apto-bosque-alto": {
    name: "Apto Bosque Alto",
    type: "Apartamento",
    location: "Carrera 25 #38-95, Envigado, Antioquia",
    price: "COP 480.000.000",
    priceSub: "≈ USD 119.000 · Administracion baja",
    priceRaw: "COP 480M",
    tags: ["Venta", "Apartamento", "Vista Verde", "Envigado"],
    rating: "4.8 · 12 reseñas",
    published: "Publicado hace 5 días",
    specs: {
      beds: "3",
      baths: "2",
      area: "110 m²",
      garden: "0 m² (Balcón)",
      parking: "1",
      year: "2020",
      stratum: "Estrato 5",
      status: "Al día"
    },
    description: [
      "Apartamento moderno con una increíble vista verde y campestre en Envigado. Ideal para parejas jóvenes o familias pequeñas que valoran el silencio y la frescura natural de la zona.",
      "El edificio cuenta con áreas sociales sustentables y recolección de agua lluvia para zonas comunes. Dentro del inmueble, el diseño escandinavo aprovecha cada metro cuadrado con iluminación LED de bajo consumo."
    ],
    highlights: [
      { icon: "fa-leaf", text: "Balcón amplio con vista directa a reserva forestal protegida, ideal para avistamiento de aves." },
      { icon: "fa-sun", text: "Ventilación cruzada natural y excelente iluminación en todas las habitaciones." },
      { icon: "fa-shield", text: "Vigilancia privada las 24 horas y parqueadero cubierto en sótano." }
    ],
    amenities: [
      { icon: "fa-wifi", text: "WiFi de alta velocidad" },
      { icon: "fa-fire-burner", text: "Cocina integral" },
      { icon: "fa-dumbbell", text: "Gimnasio común" },
      { icon: "fa-tree", text: "Sendero ecológico" },
      { icon: "fa-car", text: "Parqueadero cubierto" },
      { icon: "fa-shield-halved", text: "Seguridad 24/7" },
      { icon: "fa-bolt", text: "Planta eléctrica" }
    ],
    map: {
      label: "Envigado, Antioquia",
      sub: "Carrera 25 #38-95 · Antioquia, Colombia",
      chips: ["🏫 Colegio 1.2km", "🏥 Clínica 2.0km", "🛒 CC 1.5km", "✈️ Aeropuerto 16km"],
      places: ["🏫 Colegio Benedictinos · 1.2km", "🏥 Hospital MUA · 2.0km", "🛒 CC City Plaza · 1.5km", "🌳 Parque Envigado · 3km"],
      transport: ["🚇 Metro Ayurá · 3.5km", "🚌 Buses Envigado · 100m", "🚗 Av. Las Vegas · 2km", "✈️ JMC Aeropuerto · 16km"]
    },
    financial: {
      cuotaInicial: "COP 144M",
      montoFinanciar: "COP 336M",
      cuotaAprox: "COP 3.0M",
      plazo: "15 años",
      valorizacion: "+10.1%",
      precioM2: "COP 4.3M",
      costoAdmin: "COP 450.000/mes",
      predial: "COP 1.5M/año",
      roi: "7–9% anual"
    },
    photos: [
      { bg: "linear-gradient(145deg,#4a7a4d,#2a5c2d)", icon: "🍃", label: "Balcón" },
      { bg: "linear-gradient(145deg,#3a5a3c,#1a3820)", icon: "🌿", label: "Vista exterior" },
      { bg: "linear-gradient(145deg,#5a7c5e,#3a5c3c)", icon: "🏡", label: "Sala comedor" },
      { bg: "linear-gradient(145deg,#3a6a3c,#1a4a1c)", icon: "🛋", label: "Cocina abierta" },
      { bg: "linear-gradient(145deg,#4a6c4c,#2a4c2c)", icon: "🛏", label: "Habitación" }
    ],
    galleryBadges: ["g2", "g1", "g3"]
  },
  "villa-natura": {
    name: "Villa Natura",
    type: "Finca",
    location: "Vereda Don Diego, Retiro, Antioquia",
    price: "COP 1.200.000.000",
    priceSub: "≈ USD 298.000 · Clima templado",
    priceRaw: "COP 1.2B",
    tags: ["Venta", "Finca", "Piscina", "Retiro"],
    rating: "5.0 · 24 reseñas",
    published: "Publicado hace 1 día",
    specs: {
      beds: "5",
      baths: "4",
      area: "520 m²",
      garden: "1500 m²",
      parking: "4",
      year: "2021",
      stratum: "Estrato 5 (Rural)",
      status: "Al día"
    },
    description: [
      "Espectacular villa campestre en el exclusivo sector de Retiro, Antioquia. Diseñada con un estilo biofílico que disuelve las fronteras entre el interior y la exuberante naturaleza exterior.",
      "Cuenta con 1500 m² de lote propio con frutales, huerta orgánica y zona de fogata nocturna. Los techos son altos y tiene aislamiento termoacústico para disfrutar del clima fresco de la montaña."
    ],
    highlights: [
      { icon: "fa-leaf", text: "Terreno de 1500 m² con árboles frutales, sendero privado y zona para fogatas." },
      { icon: "fa-droplet", text: "Piscina climatizada con borde infinito y vistas panorámicas a la cordillera." },
      { icon: "fa-shield", text: "Ubicada en parcelación cerrada con vigilancia física las 24 horas." }
    ],
    amenities: [
      { icon: "fa-wifi", text: "WiFi satelital de alta velocidad" },
      { icon: "fa-fire-burner", text: "Cocina gourmet" },
      { icon: "fa-droplet", text: "Piscina climatizada" },
      { icon: "fa-tree", text: "Huerto y frutales" },
      { icon: "fa-car", text: "Parqueadero múltiple" },
      { icon: "fa-shield-halved", text: "Seguridad 24/7" },
      { icon: "fa-utensils", text: "BBQ exterior" }
    ],
    map: {
      label: "Retiro, Antioquia",
      sub: "Don Diego, Retiro · Antioquia, Colombia",
      chips: ["🏫 Colegio 3.0km", "🏥 Clínica 5.0km", "🛒 CC 4.0km", "✈️ Aeropuerto 12km"],
      places: ["🏫 Vermont School · 3.0km", "🏥 San Vicente Fundación · 12km", "🛒 Mall Carabanchel · 4.0km"],
      transport: ["🚌 Transporte Intermunicipal · 500m", "🚗 Vía Las Palmas · 1.5km", "✈️ JMC Aeropuerto · 12km"]
    },
    financial: {
      cuotaInicial: "COP 360M",
      montoFinanciar: "COP 840M",
      cuotaAprox: "COP 7.5M",
      plazo: "15 años",
      valorizacion: "+14.8%",
      precioM2: "COP 2.3M",
      costoAdmin: "COP 600.000/mes",
      predial: "COP 2.2M/año",
      roi: "9–12% anual"
    },
    photos: [
      { bg: "linear-gradient(145deg,#5a7c5e,#3a5c3c)", icon: "🏡", label: "Vista panorámica" },
      { bg: "linear-gradient(145deg,#3a5a3c,#1a3820)", icon: "🌊", label: "Piscina infinity" },
      { bg: "linear-gradient(145deg,#4a6c4c,#2a4c2c)", icon: "🌳", label: "Fachada lateral" },
      { bg: "linear-gradient(145deg,#3a6a3c,#1a4a1c)", icon: "🛋", label: "Área social" }
    ],
    galleryBadges: ["g3", "g1", "g2"]
  },
  "loft-jardin-zen": {
    name: "Loft Jardín Zen",
    type: "Loft",
    location: "Circular 4 #72-18, Laureles, Medellín",
    price: "COP 380.000.000",
    priceSub: "≈ USD 94.000 · Rentas cortas permitidas",
    priceRaw: "COP 380M",
    tags: ["Venta", "Loft", "Terraza", "Laureles"],
    rating: "4.7 · 9 reseñas",
    published: "Publicado hace 6 días",
    specs: {
      beds: "1",
      baths: "1",
      area: "75 m²",
      garden: "20 m² (Terraza)",
      parking: "1",
      year: "2022",
      stratum: "Estrato 5",
      status: "Al día"
    },
    description: [
      "Loft industrial de concepto abierto ubicado en el tradicional barrio Laureles. Cuenta con una maravillosa terraza Zen decorada con plantas y bambú.",
      "Excelente oportunidad de inversión con alto retorno debido a su diseño óptimo para Airbnb y turismo ejecutivo. Alturas de triple metro con acabados en concreto expuesto."
    ],
    highlights: [
      { icon: "fa-leaf", text: "Terraza privada de 20 m² ambientada para meditación y descanso." },
      { icon: "fa-sun", text: "Excelente entrada de luz natural por ventanales de piso a techo." },
      { icon: "fa-shield", text: "Edificio tecnológico con cerraduras inteligentes y CCTV." }
    ],
    amenities: [
      { icon: "fa-wifi", text: "WiFi de alta velocidad" },
      { icon: "fa-fire-burner", text: "Cocina abierta" },
      { icon: "fa-snowflake", text: "A/C integrado" },
      { icon: "fa-tv", text: "Smart home" },
      { icon: "fa-mug-hot", text: "Terraza zen" }
    ],
    map: {
      label: "Laureles, Medellín",
      sub: "Circular 4 #72-18 · Antioquia, Colombia",
      chips: ["🏫 Univ. UPB 400m", "🏥 Clínica Conquistadores 1.0km", "🛒 CC Unicentro 800m"],
      places: ["🏫 Universidad UPB · 400m", "🏥 Clínica Conquistadores · 1km", "🛒 CC Unicentro · 800m", "🌳 Parques del Río · 1.5km"],
      transport: ["🚇 Metro Estadio · 1.2km", "🚌 Rutas Circulares · 100m", "🚗 Av. Nutibara · 200m"]
    },
    financial: {
      cuotaInicial: "COP 114M",
      montoFinanciar: "COP 266M",
      cuotaAprox: "COP 2.4M",
      plazo: "15 años",
      valorizacion: "+11.5%",
      precioM2: "COP 5.0M",
      costoAdmin: "COP 320.000/mes",
      predial: "COP 1.2M/año",
      roi: "10–14% anual (AirBnb)"
    },
    photos: [
      { bg: "linear-gradient(145deg,#3a6a3c,#1a4a1c)", icon: "🪴", label: "Terraza Zen" },
      { bg: "linear-gradient(145deg,#5a7c5e,#3a5c3c)", icon: "🛋", label: "Interior del Loft" },
      { bg: "linear-gradient(145deg,#4a7a4d,#2a5c2d)", icon: "🍃", label: "Cocina" }
    ],
    galleryBadges: ["g3", "g2", "g1"]
  },
  "casa-tierra-viva": {
    name: "Casa Tierra Viva",
    type: "Casa",
    location: "Km 4 Vía Santa Fe de Antioquia, Antioquia",
    price: "$5.500.000 / mes",
    priceSub: "COP · Arriendo campestre",
    priceRaw: "$5.5M/mes",
    tags: ["Arriendo", "Casa", "Campo", "Santa Fe"],
    rating: "4.9 · 15 reseñas",
    published: "Publicado hace 4 días",
    specs: {
      beds: "3",
      baths: "3",
      area: "200 m²",
      garden: "800 m²",
      parking: "3",
      year: "2019",
      stratum: "Estrato 5",
      status: "Incluida admin"
    },
    description: [
      "Hermosa casa campestre disponible para alquiler mensual en el cálido clima de Santa Fe de Antioquia. Completamente amoblada y lista para disfrutar fines de semana o teletrabajo en paz.",
      "El condominio cuenta con senderos ecológicos, acceso directo al río y seguridad total. La propiedad incluye piscina inflable grande, quiosco BBQ y hamacas bajo los árboles de mango."
    ],
    highlights: [
      { icon: "fa-leaf", text: "Lote campestre de 800 m² con árboles de mango, limón y espacio para mascotas." },
      { icon: "fa-sun", text: "Kiosco social externo techado con BBQ de carbón y hamacas." },
      { icon: "fa-shield", text: "Portería vigilada y ambiente de total tranquilidad rural." }
    ],
    amenities: [
      { icon: "fa-wifi", text: "WiFi satelital" },
      { icon: "fa-fire-burner", text: "Cocina y BBQ" },
      { icon: "fa-snowflake", text: "Aire Acondicionado" },
      { icon: "fa-tree", text: "Jardín privado" },
      { icon: "fa-car", text: "Parqueadero" }
    ],
    map: {
      label: "Santa Fe de Antioquia",
      sub: "Km 4 Vía Principal · Antioquia, Colombia",
      chips: ["🛒 Supermercado 2km", "🏥 Hospital 3.5km", "🌉 Puente Occidente 6km"],
      places: ["⛪ Centro Histórico · 3km", "🛒 Éxito Vecino · 2km", "🌉 Puente de Occidente · 6km"],
      transport: ["🚌 Terminal Transporte · 3km", "🚗 Vía al Mar · 1km"]
    },
    financial: {
      cuotaInicial: "N/A",
      montoFinanciar: "N/A",
      cuotaAprox: "N/A",
      plazo: "Contrato mínimo 6 meses",
      valorizacion: "N/A",
      precioM2: "N/A",
      costoAdmin: "Incluido en arriendo",
      predial: "N/A",
      roi: "N/A"
    },
    photos: [
      { bg: "linear-gradient(145deg,#5a8a5c,#2a5a2c)", icon: "🌲", label: "Fachada" },
      { bg: "linear-gradient(145deg,#4a7c4c,#1a4c1c)", icon: "🌱", label: "Kiosco social" },
      { bg: "linear-gradient(145deg,#3a5a3c,#1a3820)", icon: "🌊", label: "Piscina inflable" }
    ],
    galleryBadges: ["g1", "g2", "g3"]
  },
  "estudio-raiz": {
    name: "Estudio Raíz",
    type: "Estudio",
    location: "Avenida Niquía #50-12, Bello, Antioquia",
    price: "COP 290.000.000",
    priceSub: "≈ USD 72.000 · Entrega inmediata",
    priceRaw: "COP 290M",
    tags: ["Venta", "Estudio", "Nuevo", "Bello"],
    rating: "4.6 · 5 reseñas",
    published: "Publicado hace 7 días",
    specs: {
      beds: "1",
      baths: "1",
      area: "55 m²",
      garden: "0 m²",
      parking: "1",
      year: "2023",
      stratum: "Estrato 4",
      status: "Al día"
    },
    description: [
      "Apartamento tipo estudio a estrenar en el norte del Valle de Aburrá. Perfecto para solteros, estudiantes o profesionales independientes que buscan conectividad y comodidad.",
      "El edificio cuenta con áreas comunes tipo coworking, sala de reuniones y terraza panorámica en el piso 18. Ubicación estratégica a pocos pasos del centro comercial."
    ],
    highlights: [
      { icon: "fa-leaf", text: "Acabados modernos a estrenar con cocina abierta y barra americana." },
      { icon: "fa-sun", text: "Piso alto con gran iluminación y vista hacia el cerro Quitasol." },
      { icon: "fa-shield", text: "Edificio moderno con vigilancia, coworking y zonas sociales completas." }
    ],
    amenities: [
      { icon: "fa-wifi", text: "WiFi en zonas comunes" },
      { icon: "fa-car", text: "Parqueadero privado" },
      { icon: "fa-shield-halved", text: "Seguridad 24/7" },
      { icon: "fa-couch", text: "Sala Coworking" }
    ],
    map: {
      label: "Bello, Antioquia",
      sub: "Avenida Niquía #50-12 · Antioquia, Colombia",
      chips: ["🏫 Univ. San Buenaventura 1.5km", "🛒 CC Parque Fabricato 300m", "🚇 Metro Niquía 400m"],
      places: ["🛒 CC Parque Fabricato · 300m", "🏫 Univ. San Buenaventura · 1.5km"],
      transport: ["🚇 Estación Metro Niquía · 400m", "🚗 Autopista Norte · 200m"]
    },
    financial: {
      cuotaInicial: "COP 87M",
      montoFinanciar: "COP 203M",
      cuotaAprox: "COP 1.8M",
      plazo: "15 años",
      valorizacion: "+8.9%",
      precioM2: "COP 5.2M",
      costoAdmin: "COP 250.000/mes",
      predial: "COP 800.000/año",
      roi: "6–8% anual"
    },
    photos: [
      { bg: "linear-gradient(145deg,#4a7c4c,#1a4c1c)", icon: "🌱", label: "Fachada" },
      { bg: "linear-gradient(145deg,#5a8a5c,#2a5a2c)", icon: "🌲", label: "Coworking" },
      { bg: "linear-gradient(145deg,#3a5a3c,#1a3820)", icon: "🛋", label: "Interior" }
    ],
    galleryBadges: ["g3", "g1", "g2"]
  }
};

// Helper to convert names to key IDs
const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/ /g, "-")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export default function DetallePropiedad({ propertyId, onBack, onNavigateToProperty }) {
  // Safe load of property data
  const currentKey = PROPERTIES_DATA[propertyId] ? propertyId : "casa-alma-verde";
  const prop = PROPERTIES_DATA[currentKey];

  // Get dynamic suggestions excluding current key
  const suggestedProperties = Object.entries(PROPERTIES_DATA)
    .filter(([key]) => key !== currentKey)
    .slice(0, 4)
    .map(([key, data], index) => ({
      id: key,
      name: data.name,
      location: data.map.label,
      price: data.priceRaw,
      tags: [`${data.specs.beds} hab`, data.specs.area],
      icon: data.photos[0]?.icon || "🌿",
      bg: `si${(index % 4) + 1}`,
    }));

  const [activeTab, setActiveTab] = useState("desc");
  const [activeSlot, setActiveSlot] = useState("Lun 9 Jun");
  const [gmIdx, setGmIdx] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [visitaConfirmada, setVisitaConfirmada] = useState(false);

  const visitaRef = useRef(null);

  // Scroll to top on load or property change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [propertyId]);

  // Gallery keyboard navigations
  useEffect(() => {
    if (!isGalleryOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setGmIdx((prev) => (prev + 1) % prop.photos.length);
      } else if (e.key === "ArrowLeft") {
        setGmIdx((prev) => (prev - 1 + prop.photos.length) % prop.photos.length);
      } else if (e.key === "Escape") {
        setIsGalleryOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isGalleryOpen, prop.photos.length]);

  const openGallery = (index) => {
    setGmIdx(index);
    setIsGalleryOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    document.body.style.overflow = "";
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${prop.name} — Terralma.co`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("¡Enlace copiado al portapapeles!");
    }
  };

  const scrollToVisita = () => {
    if (visitaRef.current) {
      visitaRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const confirmVisita = () => {
    setVisitaConfirmada(true);
    setTimeout(() => setVisitaConfirmada(false), 4000);
  };

  // Setup Scroll Reveal animation observers for this view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("v");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".rv");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [propertyId]);

  return (
    <>


      {/* GALLERY GRID */}
      <div className="gallery" id="galleryGrid">
        <div className="gallery-main" onClick={() => openGallery(0)}>
          <div className="gallery-ph g1">
            {prop.photos[0]?.icon || "🌿"}
            <div className="gallery-overlay"></div>
          </div>
          <div className="gallery-badge">Destacada</div>
          <div className="gallery-more gallery-more-mobile">
            <i className="fa-solid fa-images"></i> Ver {prop.photos.length} fotos
          </div>
        </div>
        <div className="gallery-sm" onClick={() => openGallery(1)}>
          <div className="gallery-ph g2" style={{ fontSize: "42px" }}>
            {prop.photos[1]?.icon || "🌳"}
            <div className="gallery-overlay"></div>
          </div>
        </div>
        <div className="gallery-sm" onClick={() => openGallery(2)} style={{ position: "relative" }}>
          <div className="gallery-ph g3" style={{ fontSize: "42px" }}>
            {prop.photos[2]?.icon || "🏡"}
            <div className="gallery-overlay"></div>
          </div>
          <div className="gallery-more">
            <i className="fa-solid fa-images"></i> Ver {prop.photos.length} fotos
          </div>
        </div>
      </div>

      {/* GALLERY MODAL (LIGHTBOX) */}
      {isGalleryOpen && (
        <div id="gal-modal" className="open" onClick={(e) => { if (e.target.id === "gal-modal") closeGallery(); }}>
          <button className="gm-close" onClick={closeGallery}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="gm-title">{prop.name} — Galería completa</div>
          <div className="gm-main" id="gmMain" style={{ background: prop.photos[gmIdx]?.bg }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              id="gmImg"
            >
              <span style={{ fontSize: "100px", margin: "auto" }}>{prop.photos[gmIdx]?.icon}</span>
            </div>
            <div className="gm-nav">
              <button className="gm-btn" onClick={() => setGmIdx((prev) => (prev - 1 + prop.photos.length) % prop.photos.length)}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button className="gm-btn" onClick={() => setGmIdx((prev) => (prev + 1) % prop.photos.length)}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <div className="gm-thumbs" id="gmThumbs">
            {prop.photos.map((photo, index) => (
              <div
                key={index}
                className={`gm-thumb ${index === gmIdx ? "active" : ""}`}
                style={{ background: photo.bg }}
                onClick={() => setGmIdx(index)}
              >
                {photo.icon}
              </div>
            ))}
          </div>
          <div className="gm-counter" id="gmCounter">
            {gmIdx + 1} / {prop.photos.length} · {prop.photos[gmIdx]?.label}
          </div>
        </div>
      )}

      {/* DETAIL MAIN */}
      <div className="detail-main">
        {/* LEFT COLUMN */}
        <div>
          <div className="prop-header rv">
            <div className="prop-tags">
              {prop.tags.map((tag, idx) => (
                <span key={idx} className={`prop-tag ${tag.includes("⭐") ? "gold" : ""}`}>
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="prop-name">
              {prop.name.split(" ")[0]} <em>{prop.name.split(" ").slice(1).join(" ")}</em>
            </h1>
            <div className="prop-loc">
              <i className="fa-solid fa-location-dot"></i> {prop.location}
            </div>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <div style={{ display: "flex", gap: "2px", color: "var(--gold)", fontSize: "13px" }}>★★★★★</div>
              <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>{prop.rating}</span>
              <span style={{ fontSize: "11px", color: "var(--text-muted)", marginLeft: "8px" }}>· {prop.published}</span>
            </div>
          </div>

          <div className="prop-price-row rv">
            <div>
              <div className="prop-price">
                {prop.price} <span style={{ fontSize: "14px" }}>COP</span>
              </div>
              <div className="prop-price-sub">{prop.priceSub}</div>
            </div>
            <div className="prop-price-badge">🔥 Alta demanda</div>
          </div>

          {/* SPECS */}
          <div className="specs-grid rv">
            <div className="spec">
              <span className="spec-icon">🛏</span>
              <span className="spec-val">{prop.specs.beds}</span>
              <span className="spec-label">Habitaciones</span>
            </div>
            <div className="spec">
              <span className="spec-icon">🚿</span>
              <span className="spec-val">{prop.specs.baths}</span>
              <span className="spec-label">Baños</span>
            </div>
            <div className="spec">
              <span className="spec-icon">📐</span>
              <span className="spec-val">{prop.specs.area}</span>
              <span className="spec-label">Área total</span>
            </div>
            {prop.specs.garden && (
              <div className="spec">
                <span className="spec-icon">🌿</span>
                <span className="spec-val">{prop.specs.garden}</span>
                <span className="spec-label">Jardín</span>
              </div>
            )}
            <div className="spec">
              <span className="spec-icon">🚗</span>
              <span className="spec-val">{prop.specs.parking}</span>
              <span className="spec-label">Parqueaderos</span>
            </div>
            <div className="spec">
              <span className="spec-icon">🏗</span>
              <span className="spec-val">{prop.specs.year}</span>
              <span className="spec-label">Año construido</span>
            </div>
            <div className="spec">
              <span className="spec-icon">🏙</span>
              <span className="spec-val">{prop.specs.stratum}</span>
              <span className="spec-label">Estrato</span>
            </div>
            <div className="spec">
              <span className="spec-icon">✅</span>
              <span className="spec-val">{prop.specs.status}</span>
              <span className="spec-label">Admin/impuestos</span>
            </div>
          </div>

          {/* TABS */}
          <div className="tabs rv">
            <button className={`tab ${activeTab === "desc" ? "active" : ""}`} onClick={() => setActiveTab("desc")}>
              Descripción
            </button>
            <button className={`tab ${activeTab === "amenidades" ? "active" : ""}`} onClick={() => setActiveTab("amenidades")}>
              Amenidades
            </button>
            <button className={`tab ${activeTab === "ubicacion" ? "active" : ""}`} onClick={() => setActiveTab("ubicacion")}>
              Ubicación
            </button>
            <button className={`tab ${activeTab === "financiero" ? "active" : ""}`} onClick={() => setActiveTab("financiero")}>
              Financiero
            </button>
          </div>

          {/* TAB CONTENT: DESCRIPTION */}
          <div id="desc" className={`tab-content ${activeTab === "desc" ? "active" : ""} rv`}>
            {prop.description.map((paragraph, index) => (
              <p key={index} className="desc-text">
                {paragraph}
              </p>
            ))}
            {prop.highlights.map((h, index) => (
              <div key={index} className="desc-highlight">
                <i className={`fa-solid ${h.icon} dh-icon`}></i>
                <div className="dh-text">{h.text}</div>
              </div>
            ))}
          </div>

          {/* TAB CONTENT: AMENITIES */}
          <div id="amenidades" className={`tab-content ${activeTab === "amenidades" ? "active" : ""}`}>
            <div className="amenidades-grid">
              {prop.amenities.map((am, index) => (
                <div key={index} className="amenidad">
                  <i className={`fa-solid ${am.icon}`}></i>
                  <span>{am.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TAB CONTENT: LOCATION */}
          <div id="ubicacion" className={`tab-content ${activeTab === "ubicacion" ? "active" : ""}`}>
            <div className="map-placeholder">
              <div className="map-pin">📍</div>
              <div className="map-label">{prop.map.label}</div>
              <div className="map-sub">{prop.map.sub}</div>
              <div className="map-chips">
                {prop.map.chips.map((chip, index) => (
                  <span key={index} className="map-chip">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="map-info-grid">
              <div style={{ padding: "14px", background: "var(--cream)", borderRadius: "12px", border: "1px solid var(--beige2)" }}>
                <div style={{ fontSize: "11px", fontWeight: "700", color: "var(--brown)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: "10px" }}>
                  Lugares cercanos
                </div>
                <div style={{ fontSize: "12px", color: "var(--text-muted)", lineHeight: "2" }}>
                  {prop.map.places.map((place, idx) => (
                    <React.Fragment key={idx}>
                      {place}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div style={{ padding: "14px", background: "var(--cream)", borderRadius: "12px", border: "1px solid var(--beige2)" }}>
                <div style={{ fontSize: "11px", fontWeight: "700", color: "var(--brown)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: "10px" }}>
                  Transporte
                </div>
                <div style={{ fontSize: "12px", color: "var(--text-muted)", lineHeight: "2" }}>
                  {prop.map.transport.map((trans, idx) => (
                    <React.Fragment key={idx}>
                      {trans}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* TAB CONTENT: FINANCIAL */}
          <div id="financiero" className={`tab-content ${activeTab === "financiero" ? "active" : ""}`}>
            <div className="financial-grid">
              <div style={{ padding: "18px", background: "var(--cream)", borderRadius: "14px", border: "1px solid var(--beige2)" }}>
                <div style={{ fontSize: "10px", fontWeight: "700", textTransform: "uppercase", letterSpacing: ".12em", color: "var(--text-muted)", marginBottom: "12px" }}>
                  Simulación de crédito
                </div>
                <div style={{ fontSize: "12px", lineHeight: "2.2", color: "var(--brown)" }}>
                  <b>Precio:</b> {prop.priceRaw}
                  <br />
                  <b>Cuota inicial (30%):</b> {prop.financial.cuotaInicial}
                  <br />
                  <b>Monto a financiar:</b> {prop.financial.montoFinanciar}
                  <br />
                  <b>Cuota aprox/mes:</b> {prop.financial.cuotaAprox}
                  <br />
                  <b>Plazo:</b> {prop.financial.plazo}
                </div>
              </div>
              <div style={{ padding: "18px", background: "var(--green-pale)", borderRadius: "14px", border: "1px solid rgba(61,90,64,.15)" }}>
                <div style={{ fontSize: "10px", fontWeight: "700", textTransform: "uppercase", letterSpacing: ".12em", color: "var(--text-muted)", marginBottom: "12px" }}>
                  Valorización
                </div>
                <div style={{ fontSize: "12px", lineHeight: "2.2", color: "var(--brown)" }}>
                  <b>Valorización 2024:</b> {prop.financial.valorizacion}
                  <br />
                  <b>Precio m² zona:</b> {prop.financial.precioM2}
                  <br />
                  <b>Costo administración:</b> {prop.financial.costoAdmin}
                  <br />
                  <b>Impuesto predial:</b> {prop.financial.predial}
                  <br />
                  <b>ROI estimado:</b> {prop.financial.roi}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (SIDEBAR) */}
        <div className="sidebar">
          <div className="sidebar-sticky">
            {/* PRICE CARD */}
            <div className="card">
              <div className="price-card">
                <div className="pc-price">
                  {prop.priceRaw} <span>COP</span>
                </div>
                <div className="pc-note">{prop.priceSub}</div>
                <button className="pc-btn-main" onClick={scrollToVisita}>
                  <i className="fa-solid fa-calendar-check"></i> Agendar visita
                </button>
                <a
                  className="pc-btn-wa"
                  href={`https://wa.me/573001234567?text=Hola! Me interesa la ${prop.name} en ${prop.map.label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-whatsapp"></i> Preguntar por WhatsApp
                </a>
                <button className="pc-btn-out">
                  <i className="fa-solid fa-phone"></i> Solicitar llamada
                </button>
                <hr className="pc-divider" />
                <div className="pc-features">
                  <div className="pc-feat">
                    <span className="pc-feat-l">Tipo</span>
                    <span className="pc-feat-r">{prop.type} residencial</span>
                  </div>
                  <div className="pc-feat">
                    <span className="pc-feat-l">Estado</span>
                    <span className="pc-feat-r">Usado · Excelente</span>
                  </div>
                  <div className="pc-feat">
                    <span className="pc-feat-l">Administración</span>
                    <span className="pc-feat-r">{prop.financial.costoAdmin}</span>
                  </div>
                  <div className="pc-feat">
                    <span className="pc-feat-l">Escritura</span>
                    <span className="pc-feat-r">Libre</span>
                  </div>
                  <div className="pc-feat">
                    <span className="pc-feat-l">Código</span>
                    <span className="pc-feat-r">#TL-2024-089</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ASESOR CARD */}
            <div className="card">
              <div className="asesor-card">
                <div className="asesor-header">
                  <div className="asesor-av">LR</div>
                  <div>
                    <div className="asesor-name">Laura Restrepo</div>
                    <div className="asesor-role">Asesora senior · Terralma</div>
                    <div className="asesor-badge">
                      <i className="fa-solid fa-circle-check"></i> Verificada
                    </div>
                  </div>
                </div>
                <div className="asesor-stats">
                  <div className="ast">
                    <div className="ast-n">48</div>
                    <div className="ast-l">Propiedades</div>
                  </div>
                  <div className="ast">
                    <div className="ast-n">4.9★</div>
                    <div className="ast-l">Calificación</div>
                  </div>
                </div>
                <button className="pc-btn-out" style={{ marginTop: 0 }}>
                  <i className="fa-solid fa-message"></i> Ver perfil del asesor
                </button>
              </div>
            </div>

            {/* VISITA SLOT BOOKING CARD */}
            <div className="card" ref={visitaRef}>
              <div className="visita-card">
                <div className="vc-label">Agenda tu visita</div>
                <div className="vc-title">Elige una fecha disponible</div>
                <div className="vc-slots">
                  {["Lun 9 Jun", "Mar 10 Jun", "Mié 11 Jun", "Vie 13 Jun"].map((slot) => (
                    <div
                      key={slot}
                      className={`vc-slot ${activeSlot === slot ? "active" : ""}`}
                      onClick={() => setActiveSlot(slot)}
                    >
                      {slot}
                    </div>
                  ))}
                </div>
                <button className="vc-btn" onClick={confirmVisita}>
                  {visitaConfirmada ? (
                    <>
                      <i className="fa-solid fa-check"></i> ¡Cita Confirmada!
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-calendar-check"></i> Confirmar visita
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SUGGESTED / SIMILAR PROPERTIES */}
      <section className="sugeridas">
        <div className="sug-header rv">
          <div>
            <div
              className="section-label"
              style={{
                fontSize: "10px",
                fontWeight: "600",
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "8px",
              }}
            >
              También te puede interesar
            </div>
            <h2 className="sug-title">
              Propiedades <em>similares</em>
            </h2>
          </div>
          <a href="#" className="sug-ver-mas" onClick={(e) => { e.preventDefault(); onBack(); }}>
            Ver todas <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="sug-grid">
          {suggestedProperties.map((sug, index) => (
            <div
              key={sug.id}
              className={`sug-card rv rv-d${index + 1}`}
              onClick={() => onNavigateToProperty(sug.id)}
            >
              <div className={`sug-img ${sug.bg}`} style={{ position: "relative" }}>
                {sug.icon}
                <div className="sug-overlay">
                  <span>Ver propiedad</span>
                </div>
              </div>
              <div className="sug-info">
                <div className="sug-name">{sug.name}</div>
                <div className="sug-loc">
                  <i className="fa-solid fa-location-dot"></i> {sug.location}
                </div>
                <div className="sug-bottom">
                  <span className="sug-price">{sug.price}</span>
                  <div className="sug-tags">
                    {sug.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="sug-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
