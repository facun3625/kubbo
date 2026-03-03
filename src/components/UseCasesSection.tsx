import { useState } from "react";
import { Activity, Gauge, ShieldCheck, Wrench, Building2, Sparkles } from "lucide-react";

const useCases = [
  {
    icon: Activity,
    title: "Control de Pedidos",
    short: "Seguimiento en tiempo real del estado de cada pedido.",
    long: "Gestión completa del ciclo de vida de pedidos, desde la recepción hasta la entrega, con visibilidad total.",
  },
  {
    icon: Gauge,
    title: "Gestión de Stock",
    short: "Control de inventario automatizado y preciso.",
    long: "Alertas de stock bajo, movimientos automáticos y reportes para mantener tu inventario optimizado.",
  },
  {
    icon: ShieldCheck,
    title: "Facturación",
    short: "Emisión y seguimiento de facturas simplificado.",
    long: "Generación automática de facturas, integración con sistemas contables y seguimiento de cobros.",
  },
  {
    icon: Wrench,
    title: "CRM a Medida",
    short: "Gestión de clientes adaptada a tu negocio.",
    long: "Seguimiento de interacciones, historial de compras y segmentación inteligente de tu cartera.",
  },
  {
    icon: Building2,
    title: "Multi-Sucursal",
    short: "Control centralizado de múltiples ubicaciones.",
    long: "Panel unificado para supervisar y gestionar operaciones en distintas sucursales.",
  },
  {
    icon: Sparkles,
    title: "Reportes Inteligentes",
    short: "Insights automáticos para decisiones estratégicas.",
    long: "Dashboards con métricas clave y reportes personalizados para entender tu negocio en profundidad.",
  },
];

const UseCasesSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="casos" className="dark-section py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-4">CASOS DE USO</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
          Aplicaciones
        </h2>
        <p className="text-white/60 text-lg mb-12 max-w-xl">
          Soluciones diseñadas para resolver desafíos operativos reales.
        </p>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
          <div className="grid sm:grid-cols-2 gap-3">
            {useCases.map((uc, i) => {
              const Icon = uc.icon;
              const isActive = i === active;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`text-left p-5 rounded-xl border transition-all ${
                    isActive
                      ? "bg-white/10 border-white/20"
                      : "bg-transparent border-white/10 hover:border-white/20"
                  }`}
                >
                  <Icon size={20} className={isActive ? "text-green-400 mb-3" : "text-white/40 mb-3"} />
                  <h4 className="font-heading text-sm font-semibold text-white mb-1">{uc.title}</h4>
                  <p className="text-xs text-white/50 leading-relaxed">{uc.short}</p>
                </button>
              );
            })}
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-8 flex flex-col justify-center">
            <span className="text-green-400 text-xs font-mono mb-3">0{active + 1}</span>
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              {useCases[active].title}
            </h3>
            <p className="text-white/60 leading-relaxed">
              {useCases[active].long}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
