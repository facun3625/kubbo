import { MessageCircle, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="dark-section py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-4">CONTACTO</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
          Trabajemos juntos
        </h2>
        <p className="text-white/60 text-lg max-w-lg mx-auto mb-12">
          Conectá con nuestro equipo para explorar cómo podemos potenciar tu negocio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5493413551507"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-400 text-primary px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-green-300 transition-colors"
          >
            <MessageCircle size={18} />
            Escribinos por WhatsApp
          </a>
          <a
            href="mailto:hello@kubbo.com"
            className="inline-flex items-center gap-3 border border-white/20 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white/5 transition-colors"
          >
            <Mail size={18} />
            Envianos un email
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
