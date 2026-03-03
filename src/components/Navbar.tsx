import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-kubbo-violet rounded-lg flex items-center justify-center text-white font-bold text-xl">
            K
          </div>
          <span className="text-2xl font-bold tracking-tight text-kubbo-dark">
            Kubbo
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-slate-600 hover:text-kubbo-violet transition-colors">Servicios</a>
          <a href="#technology" className="text-sm font-medium text-slate-600 hover:text-kubbo-violet transition-colors">Tecnología</a>
          <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-kubbo-violet transition-colors">Precios</a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex">Ingresar</Button>
          <Button className="bg-kubbo-violet hover:bg-kubbo-violet/90 text-white gap-2">
            Comenzar <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
