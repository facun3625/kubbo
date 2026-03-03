import { Diamond } from "lucide-react";

const capabilities = [
  "Aplicaciones web a medida",
  "Integración con sistemas existentes",
  "Dashboards operativos personalizados",
  "Automatización de procesos",
  "Seguridad y protección de datos",
  "Soporte y mantenimiento continuo",
  "Consultoría tecnológica",
];

const SolutionSection = () => {
  return (
    <section id="solucion" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <p className="section-label mb-4">OVERVIEW</p>
        <h3 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-6">
          La Solución
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-16">
          Diseñamos e implementamos sistemas de gestión a medida que organizan, automatizan y potencian tu operación. Cada solución se adapta a tus procesos y necesidades reales.
        </p>

        <div className="bg-primary/20 border border-border/30 rounded-2xl p-8 md:p-12 mb-16">
          <h4 className="font-heading text-xl font-bold text-foreground mb-2">
            Plataforma de Gestión
          </h4>
          <p className="text-muted-foreground text-sm mb-8">
            Vista unificada de tu operación: pedidos, clientes, métricas y control en un solo lugar.
          </p>
          <div className="w-full h-48 md:h-72 bg-primary/10 rounded-lg flex items-center justify-center border border-border/30">
            <span className="text-muted-foreground text-sm font-medium">Dashboard Preview</span>
          </div>
        </div>

        <p className="section-label mb-6">CAPACIDADES CLAVE</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {capabilities.map((cap, i) => (
            <div key={i} className="flex items-start gap-3 py-3">
              <Diamond size={14} className="text-primary mt-1 shrink-0" />
              <span className="text-foreground text-sm font-medium">{cap}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
