import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Button } from "@/components/ui/button";
import { MoveRight, Mail, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-kubbo-dark text-white pt-24 pb-12">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-kubbo-violet rounded flex items-center justify-center font-bold text-white uppercase">K</div>
            <span className="text-2xl font-bold tracking-tighter">Kubbo</span>
          </div>
          <p className="text-slate-400 leading-relaxed">
            La plataforma de fulfillment inteligente líder en Latinoamérica y Europa.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="hover:bg-white/10 text-white">
              <Instagram className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-white/10 text-white">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-white/10 text-white">
              <Twitter className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Soluciones</h4>
          <ul className="space-y-4 text-slate-400">
            <li><a href="#" className="hover:text-kubbo-green transition-colors">Fulfillment</a></li>
            <li><a href="#" className="hover:text-kubbo-green transition-colors">Entregas en el día</a></li>
            <li><a href="#" className="hover:text-kubbo-green transition-colors">B2B & Retail</a></li>
            <li><a href="#" className="hover:text-kubbo-green transition-colors">Cross Border</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Compañía</h4>
          <ul className="space-y-4 text-slate-400">
            <li><a href="#" className="hover:text-kubbo-green transition-colors">Sobre nosotros</a></li>
            <li><a href="#" className="hover:text-kubbo-green transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-kubbo-green transition-colors">Carreras</a></li>
            <li><a href="#" className="hover:text-kubbo-green transition-colors">Contacto</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold mb-6">Suscribite al Newsletter</h4>
          <p className="text-slate-400 text-sm">Recibí las últimas novedades sobre logística y e-commerce.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Tu email"
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-kubbo-violet/50"
            />
            <Button className="bg-kubbo-violet hover:bg-kubbo-violet/90 text-white">
              <MoveRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6 text-sm text-slate-500">
        <p>© 2024 Kubbo Technologies. Todos los derechos reservados.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Términos y condiciones</a>
          <a href="#" className="hover:text-white transition-colors">Privacidad</a>
        </div>
      </div>
    </div>
  </footer>
);

const Index = () => {
  return (
    <main className="min-h-screen font-body selection:bg-kubbo-violet/20 selection:text-kubbo-violet">
      <Navbar />
      <Hero />
      <Features />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-kubbo-violet -z-10" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-kubbo-green rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 text-center text-white space-y-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">
            ¿Listo para llevar tu logística al siguiente nivel?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Unite a las marcas que están creciendo más rápido con Kubbo. Sin contratos complicados, tecnología de punta y el mejor equipo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="bg-white text-kubbo-violet hover:bg-slate-100 px-10 h-16 text-xl font-bold shadow-2xl">
              Agendar Demo
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 px-10 h-16 text-xl">
              Ver Tarifas
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
