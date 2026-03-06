import { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Love Analytics",
    subtitle: "Plataforma interactiva de pareja",
    category: "Full Stack · Frontend Heavy",
    color: "#E63946",
    gradient: "from-rose-500 to-pink-600",
    icon: "❤️",
    description: "Plataforma web interactiva diseñada para que una pareja pueda registrar, organizar y analizar sus experiencias compartidas. Combina un diario digital detallado con un panel analítico (dashboard) que visualiza estadísticas sobre vivencias conjuntas.",
    features: [
      "Gestión y categorización de recuerdos (Viajes, Comida, Cine, Hitos)",
      "Registro detallado con títulos, fechas, ubicaciones, galerías de imágenes y campos dinámicos",
      "Sistema de valoración cruzada independiente por cada miembro",
      "Bucket List con seguimiento visual de objetivos",
      "Calendario interactivo integrado",
      "Pasaporte de viajes con visados y países visitados",
      "Cartelera de películas con puntuaciones duales",
      "Exportación/importación JSON para sincronización local"
    ],
    tech: {
      frontend: ["React 19", "TypeScript", "Tailwind CSS", "Recharts", "React Router DOM", "Vite"],
      backend: ["Firebase Firestore (NoSQL)", "Firebase Storage", "Firebase Analytics"],
      deploy: ["Vercel (CI/CD)"]
    },
    highlights: [
      { label: "Tipo", value: "SPA" },
      { label: "Lenguaje", value: "TypeScript" },
      { label: "Base de datos", value: "Firestore" },
      { label: "Deploy", value: "Vercel" }
    ],
    screenshots: [
      { title: "Dashboard — Inicio", desc: "Panel principal con contador de tiempo juntos, estadísticas (citas totales, km de viaje, cine), gráfico de frecuencia, cuenta atrás del próximo aniversario y récord de la pareja.", color: "#FEE2E2" },
      { title: "Dashboard — Vista completa", desc: "Vista expandida del dashboard con el gráfico de barras mensual de frecuencia de citas y todos los widgets de estadísticas.", color: "#FECDD3" },
      { title: "Nuestras Citas", desc: "Galería de tarjetas con todas las citas registradas: viajes, comidas, cine. Cada tarjeta muestra foto, categoría, fecha, ubicación y descripción. Filtros por categoría y buscador.", color: "#FEE2E2" },
      { title: "Nuestra Cartelera", desc: "Sección de películas vistas juntos con carátulas, lugar, y sistema de puntuación dual (María y Guillem con estrellas independientes).", color: "#FECDD3" },
      { title: "Nuestro Pasaporte", desc: "Pasaporte digital de la pareja con datos personalizados, visados de países visitados (Francia), contador de países y meses de aventura.", color: "#FEE2E2" },
      { title: "Pasaporte — Detalle País", desc: "Vista detallada de un país visitado (Francia) con resumen de ciudades, años, lugares visitados y mapa con marcador de nota.", color: "#FECDD3" },
      { title: "Lista de Deseos", desc: "Bucket list dividida en planes futuros (Viaje a Japón, Curso de baile) y cartelera pendiente (Gladiator 2, Wicked), con estados y eliminación.", color: "#FEE2E2" },
      { title: "Nueva Cita — Modal", desc: "Formulario modal para añadir una nueva cita: fotos, título, fechas, lugar, categoría, km recorridos y comentario descriptivo.", color: "#FECDD3" },
      { title: "Calendario", desc: "Vista de calendario mensual con las citas marcadas en los días correspondientes y panel lateral de detalles del día seleccionado.", color: "#FEE2E2" }
    ]
  },
  {
    id: 2,
    title: "Gestión de Inclinómetros",
    subtitle: "Plataforma de datos geotécnicos",
    category: "Full Stack · Data Visualization",
    color: "#2563EB",
    gradient: "from-blue-600 to-indigo-700",
    icon: "📐",
    description: "Plataforma web para la visualización, gestión y análisis de datos generados por inclinómetros — sensores utilizados en ingeniería civil y geotecnia para medir desplazamientos del terreno o de estructuras en profundidad. Automatiza la carga de lecturas y transforma datos brutos en representaciones gráficas interactivas.",
    features: [
      "Dashboard con geolocalización de sensores en mapa interactivo (Leaflet)",
      "Gráficos científicos: perfiles de desplazamiento, series temporales, polares y modelos 3D",
      "Módulo de subida y parsing automático de archivos CSV",
      "Historial de cargas con posibilidad de revertir importaciones erróneas",
      "Filtros dinámicos (sliders) por rangos de fechas y profundidades",
      "Exportación de datos filtrados a CSV",
      "Control de acceso basado en roles (cliente / admin / superAdmin)",
      "Gestión del ciclo de vida del sensor con versionado"
    ],
    tech: {
      frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Plotly.js", "Leaflet", "noUiSlider", "Axios", "SweetAlert2"],
      backend: ["PHP (XAMPP)", "PostgreSQL (PDO)", "API REST centralizada", "Sesiones nativas PHP"],
      deploy: ["Servidor local (XAMPP)"]
    },
    highlights: [
      { label: "Tipo", value: "Cliente-Servidor" },
      { label: "Lenguaje", value: "PHP + JS" },
      { label: "Base de datos", value: "PostgreSQL" },
      { label: "Seguridad", value: "Roles + Sesiones" }
    ],
    screenshots: [
      { title: "Login", desc: "Pantalla de inicio de sesión con autenticación por usuario y contraseña, interfaz limpia con branding de Calsens.", color: "#DBEAFE" },
      { title: "Dashboard — Mapa general", desc: "Panel principal con mapa interactivo Leaflet mostrando la ubicación de los sensores sobre el territorio. Panel lateral con selector de inclinómetro y filtros.", color: "#BFDBFE" },
      { title: "Selector de sensores", desc: "Dropdown organizado por ubicación (Canal / Colector) con todos los inclinómetros disponibles categorizados.", color: "#DBEAFE" },
      { title: "Sensor seleccionado", desc: "Vista de un inclinómetro específico (IN-28) con mapa centrado, foto de referencia, datos del sensor y sliders de rango de fechas y profundidad.", color: "#BFDBFE" },
      { title: "Historial de versiones", desc: "Modal con el histórico de versiones de un sensor (SC12_IN-10), mostrando periodos de datos y opciones de visualización.", color: "#DBEAFE" },
      { title: "Perfiles de desplazamiento", desc: "Gráficos de perfiles Eje A y Eje B con múltiples series temporales superpuestas, profundidad (m) vs desplazamiento (mm). Leyenda con todas las fechas.", color: "#BFDBFE" },
      { title: "Modelo 3D", desc: "Visualización tridimensional interactiva del desplazamiento del inclinómetro, renderizada con Plotly.js.", color: "#DBEAFE" },
      { title: "Serie temporal + Polar", desc: "Gráfico de serie temporal del desplazamiento a 0.5m de profundidad (Eje A y B) y gráfico polar con umbrales y lecturas.", color: "#BFDBFE" },
      { title: "Gestión de datos", desc: "Módulo de importación de CSV con selector de sensor/versión, limpieza de datos y historial de cargas con opción de borrado.", color: "#DBEAFE" },
      { title: "Panel de administración", desc: "Formularios de creación de usuarios (con roles) y alta de nuevos sensores con coordenadas, nivel freático, ubicación y foto.", color: "#BFDBFE" }
    ]
  },
  {
    id: 3,
    title: "Constru-Care",
    subtitle: "Monitorización de sensores en obras",
    category: "Full Stack · Producción Real",
    color: "#0F766E",
    gradient: "from-teal-600 to-emerald-700",
    icon: "🏗️",
    description: "Sistema integral de monitorización remota de redes de sensores desplegados en obras civiles, edificios históricos e infraestructuras. Actualmente en uso real por la empresa Calsens en proyectos como la Catedral de Saint-Aubain en Namur, Bélgica. Combina datos telemáticos, bases de datos relacionales y configuración dinámica por obra.",
    features: [
      "Autenticación con roles y registro de accesos en base de datos",
      "Mapa interactivo general + visor de obra con planos 2D y sensores superpuestos",
      "Dashboard analítico con gráficas temporales avanzadas (día/semana/mes/personalizado)",
      "Generador de informes: PDF con gráficos y exportación a Excel (.xlsx)",
      "Panel de alarmas (críticas y avisos) con comentarios de seguimiento",
      "Internacionalización nativa (ES/FR, próximamente EN)",
      "Tema claro/oscuro persistente",
      "CRUD de usuarios desde perfil administrador",
      "Configuración dinámica por obra mediante archivos JSON (sin tocar código)"
    ],
    tech: {
      frontend: ["HTML5", "CSS3 (variables CSS)", "JavaScript", "Leaflet", "Chart.js", "Flatpickr", "SlimSelect"],
      backend: ["PHP (API REST)", "PostgreSQL", "FPDF (informes PDF)", "PhpSpreadsheet + Composer (Excel)", "Parámetros preparados (anti SQL injection)"],
      deploy: ["Servidor de producción (uso real por empresa)"]
    },
    highlights: [
      { label: "Estado", value: "En producción" },
      { label: "Cliente", value: "Calsens" },
      { label: "Base de datos", value: "PostgreSQL" },
      { label: "Idiomas", value: "ES, FR" }
    ],
    screenshots: [
      { title: "Login", desc: "Pantalla de conexión con branding Calsens + Constru-Care, interfaz en francés para el cliente.", color: "#CCFBF1" },
      { title: "Visor de obra — Plano general", desc: "Plano 2D interactivo de la Catedral de Saint-Aubain con todos los sensores posicionados. Panel lateral con lista de capteurs y leyenda de signos de desplazamiento.", color: "#99F6E4" },
      { title: "Visor — Gráficas de sensores", desc: "Gráficas temporales embebidas sobre el plano: inclinación A/B, temperatura y humedad con series de tiempo interactivas.", color: "#CCFBF1" },
      { title: "Dashboard — Todos los sensores", desc: "Vista semana con gráficos individuales de desplazamiento para cada sensor (CA01-CA08), filtro de fechas y selector de periodo.", color: "#99F6E4" },
      { title: "Dashboard — Gráficas por variable", desc: "Vista agrupada: desplazamiento, inclinación A, inclinación B, temperatura y humedad — cada una con múltiples sensores superpuestos.", color: "#CCFBF1" },
      { title: "Sensores individuales expandidos", desc: "Gráficas ampliadas por sensor individual (CA01-CA08) con detalle de desplazamiento en mm a lo largo del tiempo.", color: "#99F6E4" },
      { title: "Generador de informes", desc: "Asistente paso a paso: selección de obra, periodo, sensores y formato de salida (PDF datos, Excel, gráficos configurables).", color: "#CCFBF1" },
      { title: "Configurador de gráficos PDF", desc: "Modal para personalizar gráficos del informe: tipo (línea/barra), ejes, sensores y disposición. Opciones de descarga PNG y generación PDF.", color: "#99F6E4" },
      { title: "Informe PDF generado", desc: "Ejemplo de informe de lecturas con tabla de datos (sensor, timestamp, variables) y informe gráfico con series temporales integradas.", color: "#CCFBF1" },
      { title: "Exportación Excel", desc: "Hoja de cálculo generada con columnas: sensor_id, timestamp, temperatura, humedad, desplazamiento, inclinación A/B.", color: "#99F6E4" },
      { title: "Mapa general de obras", desc: "Vista cartográfica con Leaflet mostrando la ubicación de todas las obras monitorizadas en España y Europa, con tema oscuro y claro.", color: "#CCFBF1" },
      { title: "Gestión de usuarios", desc: "Módulo CRUD: agregar usuario (nombre, email, contraseña, rol) y modificar/eliminar usuarios existentes con dropdown.", color: "#99F6E4" },
      { title: "Perfil de usuario", desc: "Vista de perfil con nombre de usuario y rol asignado. Menú con opciones de perfil y desconexión.", color: "#CCFBF1" }
    ]
  }
];

const skills = {
  "Lenguajes": ["TypeScript", "JavaScript", "PHP", "HTML5", "CSS3", "SQL"],
  "Frontend": ["React 19", "Tailwind CSS", "Bootstrap 5", "Chart.js", "Plotly.js", "Recharts", "Leaflet"],
  "Backend & BD": ["PostgreSQL", "Firebase (Firestore)", "API REST", "PDO", "FPDF", "PhpSpreadsheet"],
  "Herramientas": ["Git", "Vite", "Composer", "Vercel", "XAMPP"]
};

function ScreenshotCard({ shot, color }: { shot: { title: string; desc: string; color: string }; color: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="relative" style={{ backgroundColor: shot.color, minHeight: 160 }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <div className="w-10 h-10 rounded-lg bg-white/60 flex items-center justify-center mb-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <span className="text-xs font-medium text-center" style={{ color: color }}>{shot.title}</span>
        </div>
      </div>
      <div className="p-3">
        <p className="text-xs font-semibold text-gray-800 mb-1">{shot.title}</p>
        <p className="text-xs text-gray-500 leading-relaxed">{shot.desc}</p>
      </div>
    </div>
  );
}

function GallerySection({ project }: { project: typeof projects[0] }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? project.screenshots : project.screenshots.slice(0, 4);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-gray-900">Capturas de pantalla</h3>
        <span className="text-xs text-gray-400">{project.screenshots.length} pantallas</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {visible.map((s, i) => (
          <ScreenshotCard key={i} shot={s} color={project.color} />
        ))}
      </div>
      {project.screenshots.length > 4 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-3 w-full py-2.5 rounded-xl text-sm font-medium border border-gray-200 text-gray-600 hover:bg-gray-50 transition"
        >
          {showAll ? "Mostrar menos" : `Ver las ${project.screenshots.length - 4} capturas restantes`}
        </button>
      )}
    </div>
  );
}

function ProjectCard({ project, onClick }: { project: typeof projects[0]; onClick: () => void }) {
  return (
    <div onClick={onClick} className="cursor-pointer group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
        {/* Mini preview of screenshots */}
        <div className="px-4 pt-4 grid grid-cols-3 gap-1.5">
          {project.screenshots.slice(0, 3).map((s, i) => (
            <div key={i} className="rounded-lg overflow-hidden" style={{ backgroundColor: s.color, height: 48 }}>
              <div className="w-full h-full flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        <div className="p-5 pt-3">
          <div className="flex items-start justify-between mb-2">
            <span className="text-2xl">{project.icon}</span>
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full" style={{ backgroundColor: project.color + '15', color: project.color }}>
              {project.category}
            </span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-0.5">{project.title}</h3>
          <p className="text-xs text-gray-500 mb-2">{project.subtitle}</p>
          <p className="text-sm text-gray-600 leading-relaxed">{project.description.substring(0, 120)}...</p>
          <div className="mt-3 flex flex-wrap gap-1">
            {project.tech.frontend.slice(0, 2).concat(project.tech.backend.slice(0, 1)).map((t, i) => (
              <span key={i} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md">{t.split(' (')[0].split(' +')[0]}</span>
            ))}
            <span className="text-xs px-2 py-0.5 bg-gray-50 text-gray-400 rounded-md">+más</span>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-gray-400">{project.screenshots.length} capturas</span>
            <span className="flex items-center text-sm font-medium gap-1 group-hover:gap-2 transition-all" style={{ color: project.color }}>
              Ver proyecto <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectDetail({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  const [tab, setTab] = useState("info");

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} onClick={onClose}>
      <div className="bg-white w-full max-w-3xl my-6 mx-4 rounded-2xl shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className={`bg-gradient-to-r ${project.gradient} p-7 text-white relative`}>
          <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white text-lg transition">×</button>
          <span className="text-4xl mb-2 block">{project.icon}</span>
          <h2 className="text-2xl font-bold mb-0.5">{project.title}</h2>
          <p className="text-white/80 text-sm">{project.subtitle}</p>
          <span className="inline-block mt-2 text-xs font-medium px-3 py-1 rounded-full bg-white/20">{project.category}</span>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-100 px-7">
          <div className="flex gap-1 -mb-px">
            {[["info", "Información"], ["gallery", `Capturas (${project.screenshots.length})`], ["tech", "Stack"]].map(([k, l]) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition ${tab === k ? 'border-current text-gray-900' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
                style={tab === k ? { borderColor: project.color, color: project.color } : {}}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <div className="p-7">
          {tab === "info" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-2">Descripción</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.highlights.map((h, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-3 text-center">
                    <p className="text-xs text-gray-400 mb-0.5">{h.label}</p>
                    <p className="text-sm font-semibold text-gray-800">{h.value}</p>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-3">Funcionalidades</h3>
                <div className="grid gap-2">
                  {project.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: project.color }} />
                      <span className="text-sm text-gray-600">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === "gallery" && <GallerySection project={project} />}

          {tab === "tech" && (
            <div className="space-y-4">
              {Object.entries(project.tech).map(([cat, techs]) => (
                <div key={cat}>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    {cat === 'frontend' ? 'Frontend' : cat === 'backend' ? 'Backend & BD' : 'Despliegue'}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {techs.map((t, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded-lg font-medium" style={{ backgroundColor: project.color + '12', color: project.color }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);
  const [section, setSection] = useState("projects");

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
  }, [selected]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">María</h1>
            <p className="text-xs text-gray-400">Ingeniera Informática</p>
          </div>
          <nav className="flex gap-1">
            {[["projects", "Proyectos"], ["skills", "Tecnologías"], ["about", "Sobre mí"]].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSection(key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${section === key ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-100'}`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {section === "projects" && (
          <>
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">Mis Proyectos</h2>
              <p className="text-lg text-gray-500 max-w-2xl">
                Desarrollo web full stack — desde aplicaciones personales hasta plataformas en producción real para empresas de ingeniería civil.
              </p>
              <div className="flex gap-6 mt-6">
                {[["3", "Proyectos"], ["1", "En producción"], ["15+", "Tecnologías"], ["30+", "Pantallas"]].map(([n, l]) => (
                  <div key={l} className="text-center">
                    <p className="text-3xl font-bold text-gray-900">{n}</p>
                    <p className="text-xs text-gray-400">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} onClick={() => setSelected(p)} />
              ))}
            </div>

            {/* Timeline */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Evolución Técnica</h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
                {[
                  { color: "#E63946", title: "Love Analytics", desc: "Primera SPA con React 19, TypeScript, y Firebase. Aprendizaje de arquitectura moderna de componentes, tipado estático y BaaS.", tech: "React · TypeScript · Firebase · Vite" },
                  { color: "#2563EB", title: "Gestión de Inclinómetros", desc: "Salto a backend con PHP y PostgreSQL. Diseño de API REST, modelo relacional robusto, visualización científica 3D y control de roles.", tech: "PHP · PostgreSQL · Plotly.js · Leaflet" },
                  { color: "#0F766E", title: "Constru-Care", desc: "Plataforma en producción real. Generación de informes (PDF/Excel), internacionalización, configuración dinámica por proyecto y gestión de alarmas.", tech: "PHP · PostgreSQL · Chart.js · FPDF · PhpSpreadsheet" }
                ].map((item, i) => (
                  <div key={i} className="relative pl-12 pb-8">
                    <div className="absolute left-2.5 w-3.5 h-3.5 rounded-full border-2 bg-white" style={{ borderColor: item.color }} />
                    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                      <p className="text-xs text-gray-400 mt-2">{item.tech}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {section === "skills" && (
          <>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Stack Tecnológico</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([cat, items]) => (
                <div key={cat} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4">{cat}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((s, i) => (
                      <span key={i} className="px-3 py-1.5 bg-gray-50 text-gray-700 text-sm rounded-lg border border-gray-100 font-medium">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Competencias demostradas</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Diseño y consumo de APIs REST",
                  "Modelado de bases de datos relacionales (PostgreSQL)",
                  "Bases de datos NoSQL (Firebase Firestore)",
                  "Autenticación y control de acceso basado en roles",
                  "Visualización de datos científicos (2D, 3D, polares)",
                  "Generación de informes (PDF y Excel) desde servidor",
                  "Internacionalización (i18n) multi-idioma",
                  "Despliegue continuo (Vercel)",
                  "Diseño responsivo y accesible",
                  "Parsing y procesamiento de archivos CSV",
                  "Prevención de SQL injection (parámetros preparados)",
                  "Configuración dinámica sin intervención en código"
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {section === "about" && (
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre mí</h2>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Soy estudiante de Ingeniería Informática con experiencia práctica en desarrollo web full stack. He trabajado tanto en proyectos personales como en plataformas en producción real para empresas del sector de la ingeniería civil.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Mi trayectoria muestra una evolución desde aplicaciones frontend con React y TypeScript hasta sistemas completos con backend en PHP, bases de datos PostgreSQL, generación de informes y despliegue en producción.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Me apasiona construir herramientas que resuelvan problemas reales — ya sea visualizar datos de sensores geotécnicos para ingenieros civiles o crear experiencias digitales con significado personal.
              </p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-400">Este portfolio refleja los proyectos desarrollados como parte de mi Trabajo de Fin de Grado (TFG).</p>
              </div>
            </div>
          </div>
        )}
      </main>

      {selected && <ProjectDetail project={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}