import { useEffect, useState } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        const startPosition = window.scrollY;

        animate(startPosition, 0, {
            duration: 1.0,
            ease: [0.76, 0, 0.24, 1],
            onUpdate: (latest) => window.scrollTo(0, latest),
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-10 right-10 z-[100] w-12 h-12 rounded-full bg-kubbo-green text-white shadow-2xl flex items-center justify-center hover:bg-kubbo-dark hover:text-white transition-colors duration-300"
                    aria-label="Back to top"
                >
                    <ArrowUp className="w-6 h-6" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};
