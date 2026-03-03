import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export const FloatingActions = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const openWhatsApp = () => {
        const message = encodeURIComponent("Hola! Vengo desde el sitio web y me gustaría solicitar una propuesta.");
        window.open(`https://wa.me/5493425450660?text=${message}`, "_blank");
    };

    return (
        <>
            {/* Scroll to Top - Bottom Left */}
            <div className="fixed bottom-8 left-8 z-[100] pointer-events-none">
                <AnimatePresence>
                    {isVisible && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8, x: -20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.8, x: -20 }}
                            onClick={scrollToTop}
                            className="pointer-events-auto p-4 rounded-full bg-background/50 backdrop-blur-md border border-white/10 text-foreground hover:bg-kubbo-green hover:text-kubbo-dark hover:border-kubbo-green transition-all duration-300 shadow-xl group"
                        >
                            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>

            {/* WhatsApp - Bottom Right */}
            <div className="fixed bottom-8 right-8 z-[100] pointer-events-none">
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    onClick={openWhatsApp}
                    className="pointer-events-auto p-4 rounded-full bg-[#25D366] text-white hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.4)] group relative"
                >
                    <MessageCircle className="w-6 h-6 fill-current" />
                    <span className="absolute -top-12 right-0 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl border border-gray-100">
                        ¡Chateemos! 🚀
                    </span>
                </motion.button>
            </div>
        </>
    );
};
