import { useState } from "react";
import { Cloud, BarChart3, Brain, Shield, Headphones, GitBranch, Cpu } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Integración de Sistemas",
    description: "Conectamos tus herramientas y procesos para centralizar la información de tu negocio.",
  },
  {
    icon: Cloud,
    title: "Plataformas Cloud",
    description: "Diseñamos aplicaciones web modernas, escalables y seguras adaptadas a tu operación.",
  },
  {
    icon: BarChart3,
    title: "Dashboards a Medida",
    description: "Paneles operativos para monitorear métricas y tomar decisiones en tiempo real.",
  },
  {
    icon: Brain,
    title: "Automatización",
    description: "Automatizamos flujos de trabajo para reducir errores y ahorrar tiempo en tareas repetitivas.",
  },
  {
    icon: Shield,
    title: "Seguridad",
    description: "Protección integral de datos con estándares de seguridad avanzados.",
  },
  {
    icon: Headphones,
    title: "Soporte Continuo",
    description: "Acompañamiento permanente para garantizar estabilidad y evolución de tus sistemas.",
  },
  {
    icon: GitBranch,
    title: "Consultoría",
    description: "Análisis estratégico y roadmap tecnológico para llevar tu negocio al siguiente nivel.",
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState(1);

  return (
    <section id="servicios" className="dark-section py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-4">SERVICIOS</p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
              {services[active].title}
            </h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-lg">
              {services[active].description}
            </p>
            <p className="mt-6 text-xs text-white/40 font-medium">
              SERVICIOS {active + 1} / {services.length}
            </p>
          </div>

          <div className="space-y-3">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isActive = i === active;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-full text-left px-5 py-4 rounded-xl border transition-all flex items-center gap-4 ${
                    isActive
                      ? "bg-white/10 border-white/20 text-white"
                      : "bg-transparent border-white/10 text-white/50 hover:border-white/20 hover:text-white/80"
                  }`}
                >
                  <Icon size={20} className={isActive ? "text-green-400" : ""} />
                  <span className="text-sm font-medium">{service.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
