import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Portfolio } from "@/components/Portfolio";
import { TechStack } from "@/components/TechStack";
import { Button } from "@/components/ui/button";
import { MoveRight, Mail, Instagram, Linkedin, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ProposalPopup } from "@/components/ProposalPopup";

const Footer = ({ onOpenPopup }: { onOpenPopup: () => void }) => {
  const { t } = useTranslation();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 64,
        behavior: 'auto'
      });
    }
  };

  return (
    <footer className="bg-kubbo-dark text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-8 h-8 bg-kubbo-green rounded flex items-center justify-center font-bold text-white uppercase group-hover:scale-110 transition-transform">K</div>
              <span className="text-2xl font-bold tracking-tighter">Kubbo</span>
            </button>
            <p className="text-slate-400 leading-relaxed whitespace-pre-line text-sm md:text-base">
              {t('footer.desc')}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/kubbo.arg/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-kubbo-green hover:text-kubbo-dark transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold">{t('footer.explore')}</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#about" onClick={(e) => scrollToSection(e, "about")} className="hover:text-kubbo-green transition-colors lowercase">{t('nav.about')}</a></li>
              <li><a href="#features" onClick={(e) => scrollToSection(e, "features")} className="hover:text-kubbo-green transition-colors lowercase">{t('nav.services')}</a></li>
              <li><a href="#portfolio" onClick={(e) => scrollToSection(e, "portfolio")} className="hover:text-kubbo-green transition-colors lowercase">{t('nav.portfolio')}</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold">{t('footer.company')}</h4>
            <ul className="space-y-4 text-slate-400 mb-8">
              <li><a href="#technology" onClick={(e) => scrollToSection(e, "technology")} className="hover:text-kubbo-green transition-colors lowercase">{t('nav.technology')}</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="hover:text-kubbo-green transition-colors lowercase">{t('nav.contact')}</a></li>
            </ul>
            <Button
              onClick={onOpenPopup}
              className="bg-kubbo-green hover:bg-white text-kubbo-dark font-bold rounded-full px-8 h-12 border-none transition-all duration-300"
            >
              {t('footer.contactUs')}
            </Button>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold mb-6">{t('footer.newsletter')}</h4>
            <p className="text-slate-400 text-sm">{t('footer.newsletterDesc')}</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-kubbo-green/50"
              />
              <Button className="bg-kubbo-green hover:bg-kubbo-green/90 text-white">
                <MoveRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6 text-sm text-slate-500">
          <p>{t('footer.rights')}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Index = () => {
  const { t } = useTranslation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const onOpenPopup = () => setIsPopupOpen(true);

  return (
    <main className="relative min-h-screen font-body selection:bg-kubbo-green/20 selection:text-kubbo-green bg-background text-foreground transition-colors duration-500">
      <Navbar onOpenPopup={onOpenPopup} />
      <ProposalPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

      {/* Global Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 -right-[10%] -translate-y-1/2 w-[70%] h-[100%] opacity-0 dark:opacity-40 transition-opacity duration-1000">
          <div className="absolute inset-0 bg-kubbo-green blur-[150px] rounded-full animate-pulse-slow" />
          <div className="absolute inset-0 bg-kubbo-green/20 blur-[120px] rounded-full translate-x-10 -translate-y-10" />
        </div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-kubbo-green/0 dark:bg-kubbo-green/10 blur-[150px] rounded-full" />
        <div className="grain absolute inset-0 opacity-0 dark:opacity-10 pointer-events-none transition-opacity duration-500" />
      </div>

      <div className="relative z-10">
        <Hero onOpenPopup={onOpenPopup} />
        <About />
        <Features onOpenPopup={onOpenPopup} />
        <Portfolio onOpenPopup={onOpenPopup} />
        <TechStack onOpenPopup={onOpenPopup} />

        {/* CTA Section */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-kubbo-green -z-10" />
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/20 rounded-full blur-[120px]" />
          </div>

          <div className="container mx-auto px-6 text-center text-white space-y-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t('cta.desc')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                onClick={onOpenPopup}
                size="lg"
                className="bg-white text-kubbo-green hover:bg-kubbo-dark hover:text-white dark:hover:bg-kubbo-green dark:hover:text-kubbo-dark px-10 h-16 text-xl font-bold shadow-2xl transition-all duration-500"
              >
                {t('cta.demo')}
              </Button>
              <Button
                onClick={onOpenPopup}
                size="lg"
                variant="outline"
                className="text-white border-white/20 hover:bg-white hover:text-kubbo-green dark:hover:bg-kubbo-green dark:hover:text-kubbo-dark px-10 h-16 text-xl transition-all duration-500"
              >
                {t('cta.rates')}
              </Button>
            </div>
          </div>
        </section>

        <Footer onOpenPopup={onOpenPopup} />
      </div>
    </main>
  );
};

export default Index;
