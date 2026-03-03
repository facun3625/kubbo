const steps = [
  { num: 1, title: "Relevamiento", desc: "Analizamos tu operación, procesos y necesidades para diseñar la solución ideal." },
  { num: 2, title: "Diseño", desc: "Creamos la arquitectura y el diseño visual de la plataforma, adaptada a tu negocio." },
  { num: 3, title: "Desarrollo", desc: "Construimos la aplicación con tecnología moderna, escalable y segura." },
  { num: 4, title: "Integración", desc: "Conectamos con tus sistemas existentes para centralizar la información." },
  { num: 5, title: "Puesta en Marcha", desc: "Implementamos la solución, capacitamos al equipo y acompañamos la transición." },
  { num: 6, title: "Evolución", desc: "Mantenimiento continuo, nuevas funcionalidades y mejoras basadas en el uso real." },
];

const TechnologySection = () => {
  return (
    <section id="tecnologia" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <p className="section-label mb-4">PROCESO</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
          Cómo trabajamos
        </h2>
        <p className="text-muted-foreground text-lg mb-16 max-w-xl">
          Un proceso claro y ordenado, de principio a fin.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="relative p-6 rounded-xl border border-border/30 hover:border-primary/50 transition-colors group bg-card/30">
              <span className="text-primary/30 font-heading text-5xl font-extrabold absolute top-4 right-5 group-hover:text-primary/50 transition-colors">
                {step.num}
              </span>
              <p className="text-xs text-muted-foreground mb-2 font-medium">Paso {step.num}</p>
              <h4 className="font-heading text-base font-bold text-foreground mb-3 pr-10">
                {step.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
