import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Decorative wave shapes */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] overflow-hidden">
        <svg viewBox="0 0 1440 400" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
          <path d="M0,300 C200,250 400,350 600,280 C800,210 1000,320 1200,260 C1300,230 1400,280 1440,260 L1440,400 L0,400Z" fill="hsl(210 80% 20%)" opacity="0.3" />
          <path d="M0,320 C180,280 380,370 580,300 C780,230 980,340 1180,280 C1320,240 1400,300 1440,280 L1440,400 L0,400Z" fill="hsl(190 70% 40%)" opacity="0.4" />
          <path d="M0,350 C160,310 360,380 560,330 C760,280 960,360 1160,310 C1340,270 1420,330 1440,310 L1440,400 L0,400Z" fill="hsl(210 80% 15%)" opacity="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16">
        <p className="font-heading text-base font-semibold text-primary tracking-wide mb-6 lowercase">kubbo</p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] text-foreground">
          Sistemas y
          <br />
          aplicaciones de
          <br />
          gestión{" "}
          <span className="bg-primary text-primary-foreground px-3 py-1 inline-block">a medida.</span>
        </h1>

        <p className="mt-8 font-heading text-2xl md:text-4xl font-bold text-foreground/80 leading-tight">
          Orden, control y<br />
          tiempo, para tu<br />
          negocio.
        </p>

        <a
          href="#servicios"
          className="mt-10 inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-full transition-colors text-sm font-semibold hover:bg-primary/90"
        >
          Conocé más
          <ArrowRight size={16} />
        </a>
      </div>

      <a
        href="#servicios"
        className="absolute bottom-8 left-6 z-10 text-foreground/50 hover:text-foreground transition-colors"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
