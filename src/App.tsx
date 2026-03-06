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
      { title: "Dashboard — Inicio", desc: "Panel principal con contador de tiempo juntos, estadísticas, gráfico de frecuencia y cuenta atrás del próximo aniversario.", img: "/screenshots/love/dashboard-inicio.png" },
      { title: "Dashboard — Vista completa", desc: "Vista expandida del dashboard con el gráfico de barras mensual de frecuencia de citas y todos los widgets.", img: "/screenshots/love/dashboard-completo.png" },
      { title: "Nuestras Citas", desc: "Galería de tarjetas con todas las citas registradas. Filtros por categoría y buscador.", img: "/screenshots/love/citas.png" },
      { title: "Nuestra Cartelera", desc: "Películas vistas juntos con carátulas y sistema de puntuación dual.", img: "/screenshots/love/cartelera.png" },
      { title: "Nuestro Pasaporte", desc: "Pasaporte digital con visados de países visitados, contador de países y meses de aventura.", img: "/screenshots/love/pasaporte.png" },
      { title: "Pasaporte — Detalle País", desc: "Vista detallada de un país visitado con resumen de ciudades, años y lugares visitados.", img: "/screenshots/love/pasaporte-detalle.png" },
      { title: "Lista de Deseos", desc: "Bucket list dividida en planes futuros y cartelera pendiente, con estados y eliminación.", img: "/screenshots/love/lista-deseos.png" },
      { title: "Nueva Cita — Modal", desc: "Formulario modal para añadir una nueva cita: fotos, título, fechas, lugar, categoría y comentario.", img: "/screenshots/love/nueva-cita.png" },
      { title: "Nueva Cita — Detalle", desc: "Vista adicional del formulario de creación de citas con campos extendidos.", img: "/screenshots/love/nueva-cita2.png" },
      { title: "Calendario", desc: "Vista de calendario mensual con las citas marcadas y panel lateral de detalles del día seleccionado.", img: "/screenshots/love/calendario.png" }
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
      { title: "Login", desc: "Pantalla de inicio de sesión con autenticación por usuario y contraseña.", img: "/screenshots/inclinometros/login.png" },
      { title: "Dashboard — Mapa general", desc: "Panel principal con mapa interactivo Leaflet mostrando la ubicación de los sensores.", img: "/screenshots/inclinometros/dashboard-mapa.png" },
      { title: "Selector de sensores", desc: "Dropdown organizado por ubicación con todos los inclinómetros categorizados.", img: "/screenshots/inclinometros/selector-sensores.png" },
      { title: "Sensor seleccionado", desc: "Vista de un inclinómetro específico con mapa centrado, foto de referencia y sliders de filtro.", img: "/screenshots/inclinometros/sensor-seleccionado.png" },
      { title: "Historial de versiones", desc: "Modal con el histórico de versiones de un sensor, mostrando periodos de datos.", img: "/screenshots/inclinometros/historial-versiones.png" },
      { title: "Perfiles de desplazamiento", desc: "Gráficos de perfiles Eje A y Eje B con múltiples series temporales superpuestas.", img: "/screenshots/inclinometros/perfiles-desplazamiento.png" },
      { title: "Modelo 3D", desc: "Visualización tridimensional interactiva del desplazamiento, renderizada con Plotly.js.", img: "/screenshots/inclinometros/modelo-3d.png" },
      { title: "Serie temporal", desc: "Gráfico de serie temporal del desplazamiento a 0.5m de profundidad (Eje A y B).", img: "/screenshots/inclinometros/serie-temporal.png" },
      { title: "Gráfico Polar", desc: "Gráfico polar con umbrales y lecturas de desplazamiento.", img: "/screenshots/inclinometros/polar.png" },
      { title: "Gestión de datos", desc: "Módulo de importación de CSV con selector de sensor/versión e historial de cargas.", img: "/screenshots/inclinometros/gestion-datos.png" },
      { title: "Gestión de datos — Detalle", desc: "Vista adicional del módulo de gestión con limpieza de datos y opciones avanzadas.", img: "/screenshots/inclinometros/gestion-datos2.png" },
      { title: "Panel de administración", desc: "Formularios de creación de usuarios (con roles) y alta de nuevos sensores.", img: "/screenshots/inclinometros/panel-admin.png" }
    ]
  },
  {
    id: 3,
    title: "Monitorización de Sensores",
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
      { title: "Login", desc: "Pantalla de conexión con branding Calsens + Constru-Care, interfaz en francés.", img: "/screenshots/construcare/login.png" },
      { title: "Visor de obra — Plano general", desc: "Plano 2D interactivo de la Catedral de Saint-Aubain con sensores posicionados y leyenda.", img: "/screenshots/construcare/visor-plano.png" },
      { title: "Visor — Gráficas de sensores", desc: "Gráficas temporales embebidas sobre el plano: inclinación, temperatura y humedad.", img: "/screenshots/construcare/visor-graficas.png" },
      { title: "Dashboard — Todos los sensores", desc: "Gráficos individuales de desplazamiento por sensor (CA01-CA08), filtro de fechas y periodo.", img: "/screenshots/construcare/dashboard-sensores.png" },
      { title: "Dashboard — Gráficas por variable", desc: "Vista agrupada: desplazamiento, inclinación, temperatura y humedad con múltiples sensores.", img: "/screenshots/construcare/dashboard-variables.png" },
      { title: "Generador de informes", desc: "Asistente paso a paso: selección de obra, periodo, sensores y formato de salida.", img: "/screenshots/construcare/generador-informes.png" },
      { title: "Generador de informes — Opciones", desc: "Vista adicional del generador con opciones de formato PDF, Excel y gráficos.", img: "/screenshots/construcare/generador-informes2.png" },
      { title: "Configurador de gráficos PDF", desc: "Modal para personalizar gráficos del informe: tipo, ejes, sensores y disposición.", img: "/screenshots/construcare/configurador-graficos.png" },
      { title: "Informe PDF generado", desc: "Informe de lecturas con tabla de datos (sensor, timestamp, variables) generado desde servidor.", img: "/screenshots/construcare/informe-pdf.png" },
      { title: "Informe gráfico PDF", desc: "Informe gráfico con series temporales integradas generado automáticamente.", img: "/screenshots/construcare/informe-pdf2.png" },
      { title: "Exportación Excel", desc: "Hoja de cálculo con columnas: sensor_id, timestamp, temperatura, humedad, desplazamiento.", img: "/screenshots/construcare/exportacion-excel.png" },
      { title: "Gestión de usuarios", desc: "Módulo CRUD: agregar usuario con nombre, email, contraseña y rol.", img: "/screenshots/construcare/gestion-usuarios.png" },
      { title: "Gestión de usuarios — Modificar", desc: "Vista de modificación y eliminación de usuarios existentes con dropdown.", img: "/screenshots/construcare/gestion-usuarios2.png" },
      { title: "Gestión de usuarios — Lista", desc: "Lista completa de usuarios del sistema con sus roles asignados.", img: "/screenshots/construcare/gestion-usuarios3.png" },
      { title: "Perfil de usuario", desc: "Vista de perfil con nombre de usuario, rol asignado y opciones de desconexión.", img: "/screenshots/construcare/perfil-usuario.png" }
    ]
  }
];

const skills = {
  "Lenguajes": ["TypeScript", "JavaScript", "PHP", "HTML5", "CSS3", "SQL"],
  "Frontend": ["React 19", "Tailwind CSS", "Bootstrap 5", "Chart.js", "Plotly.js", "Recharts", "Leaflet"],
  "Backend & BD": ["PostgreSQL", "Firebase (Firestore)", "API REST", "PDO", "FPDF", "PhpSpreadsheet"],
  "Herramientas": ["Git", "Vite", "Composer", "Vercel", "XAMPP"]
};

type Project = typeof projects[0];
type Screenshot = Project["screenshots"][0];

function ImageModal({ shot, onClose }: { shot: Screenshot; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }} onClick={onClose}>
      <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-10 right-0 text-white text-2xl hover:opacity-70 transition">×</button>
        <img src={shot.img} alt={shot.title} className="w-full rounded-xl shadow-2xl" />
        <div className="mt-3 text-center">
          <p className="text-white font-semibold">{shot.title}</p>
          <p className="text-white/60 text-sm mt-1">{shot.desc}</p>
        </div>
      </div>
    </div>
  );
}

function ScreenshotCard({ shot, color, onClickImage }: { shot: Screenshot; color: string; onClickImage: () => void }) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={onClickImage}>
      <div className="relative overflow-hidden" style={{ minHeight: 160, backgroundColor: '#f3f4f6' }}>
        <img src={shot.img} alt={shot.title} className="w-full h-44 object-cover object-top" loading="lazy" />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
          <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-3">
        <p className="text-xs font-semibold text-gray-800 mb-1">{shot.title}</p>
        <p className="text-xs text-gray-500 leading-relaxed">{shot.desc}</p>
      </div>
    </div>
  );
}

function GallerySection({ project }: { project: Project }) {
  const [showAll, setShowAll] = useState(false);
  const [modalShot, setModalShot] = useState<Screenshot | null>(null);
  const visible = showAll ? project.screenshots : project.screenshots.slice(0, 4);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-gray-900">Capturas de pantalla</h3>
        <span className="text-xs text-gray-400">{project.screenshots.length} pantallas</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {visible.map((s, i) => (
          <ScreenshotCard key={i} shot={s} color={project.color} onClickImage={() => setModalShot(s)} />
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
      {modalShot && <ImageModal shot={modalShot} onClose={() => setModalShot(null)} />}
    </div>
  );
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <div onClick={onClick} className="cursor-pointer group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
        <div className="px-4 pt-4 grid grid-cols-3 gap-1.5">
          {project.screenshots.slice(0, 3).map((s, i) => (
            <div key={i} className="rounded-lg overflow-hidden bg-gray-100" style={{ height: 56 }}>
              <img src={s.img} alt={s.title} className="w-full h-full object-cover object-top" loading="lazy" />
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

function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
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
  const [selected, setSelected] = useState<Project | null>(null);
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
                {[["3", "Proyectos"], ["3", "En producción"], ["15+", "Tecnologías"], ["37", "Pantallas"]].map(([n, l]) => (
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