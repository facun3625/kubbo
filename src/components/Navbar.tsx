import { Button } from "./ui/button";
import { Moon, Sun, Globe, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Navbar = ({ onOpenPopup }: { onOpenPopup: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  };

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('es') ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { href: "#about", label: t('nav.about'), id: "about" },
    { href: "#features", label: t('nav.services'), id: "features" },
    { href: "#portfolio", label: t('nav.portfolio'), id: "portfolio" },
    { href: "#technology", label: t('nav.technology'), id: "technology" },
    { href: "#contact", label: t('nav.contact'), id: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-xl border-b border-foreground/5 py-4"
          : "bg-transparent py-8"
          }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity z-10"
          >
            <span className="text-2xl font-bold tracking-tight text-[#204783] dark:text-white transition-colors duration-500 lowercase">
              kubbo
            </span>
          </button>

          {/* Desktop Navigation - Updated to lg (1024px) */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-[15px] font-medium text-[#204783] dark:text-white/70 hover:text-kubbo-green dark:hover:text-kubbo-green transition-all duration-300 lowercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 lg:gap-6">
            {/* Controls - Shared Desktop/Mobile */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="group px-3 py-1.5 rounded-full text-[11px] font-bold hover:bg-kubbo-green hover:text-kubbo-dark transition-all duration-300 flex items-center gap-2 text-[#204783] dark:text-white border border-black/10 dark:border-white/5"
              >
                <Globe className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
                <span className="uppercase">{i18n.language.startsWith('es') ? 'en' : 'es'}</span>
              </button>

              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-kubbo-green hover:text-kubbo-dark transition-colors relative"
                aria-label="Toggle theme"
              >
                {mounted && (
                  <div className="relative w-6 h-6">
                    <Sun className={`w-6 h-6 text-foreground transition-all duration-500 absolute inset-0 ${theme === 'dark' ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0'}`} />
                    <Moon className={`w-6 h-6 text-foreground transition-all duration-500 absolute inset-0 ${theme === 'dark' ? 'scale-0 -rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}`} />
                  </div>
                )}
              </button>
            </div>

            <Button
              onClick={onOpenPopup}
              className="hidden sm:flex bg-foreground text-background dark:bg-white dark:text-kubbo-dark hover:bg-kubbo-green hover:text-kubbo-dark dark:hover:bg-kubbo-green dark:hover:text-kubbo-dark transition-all duration-500 rounded-full px-8 font-bold border-none"
            >
              {t('nav.start')}
            </Button>

            {/* Hamburger Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay — outside nav to avoid stacking context issues */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-0 top-[64px] bottom-0 bg-background lg:hidden z-[99] flex flex-col p-8 overflow-y-auto"
          >
            <div className="flex flex-col gap-8 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="text-xl font-medium tracking-tight text-foreground hover:text-kubbo-green transition-colors lowercase"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Controls below nav links — same style as desktop */}
            <div className="pt-6 mt-6 border-t border-border flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleLanguage}
                  className="group px-3 py-1.5 rounded-full text-[11px] font-bold hover:bg-kubbo-green hover:text-kubbo-dark transition-all duration-300 flex items-center gap-2 text-foreground border border-black/10 dark:border-white/5"
                >
                  <Globe className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
                  <span className="uppercase">{i18n.language.startsWith('es') ? 'en' : 'es'}</span>
                </button>

                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full hover:bg-kubbo-green hover:text-kubbo-dark transition-colors relative"
                  aria-label="Toggle theme"
                >
                  {mounted && (
                    <div className="relative w-5 h-5">
                      <Sun className={`w-5 h-5 text-foreground transition-all duration-500 absolute inset-0 ${theme === 'dark' ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0'}`} />
                      <Moon className={`w-5 h-5 text-foreground transition-all duration-500 absolute inset-0 ${theme === 'dark' ? 'scale-0 -rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}`} />
                    </div>
                  )}
                </button>
              </div>

              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenPopup();
                }}
                className="w-full bg-foreground text-background dark:bg-white dark:text-kubbo-dark hover:bg-kubbo-green hover:text-kubbo-dark font-bold rounded-full border-none"
              >
                {t('nav.start')}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
