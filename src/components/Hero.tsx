import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
import { motion, animate } from "framer-motion";

export const Hero = ({ onOpenPopup }: { onOpenPopup: (serviceId?: string) => void }) => {
    const { t } = useTranslation();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'auto'
            });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.96 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1] as any
            }
        }
    };

    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-transparent">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-5xl space-y-12"
                >
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-[1.1] flex flex-col">
                            <span>{t('hero.title1')}</span>
                            <span className="text-kubbo-green">{t('hero.titleAccent')}</span>
                            <span>{t('hero.title2')}</span>
                        </h1>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 pt-8">
                        <Button
                            onClick={() => onOpenPopup()}
                            size="lg"
                            className="bg-kubbo-dark text-white dark:bg-white dark:text-kubbo-dark hover:bg-kubbo-green hover:text-kubbo-dark dark:hover:bg-kubbo-green dark:hover:text-kubbo-dark px-8 md:px-10 h-12 md:h-16 text-sm md:text-lg font-medium rounded-full transition-all duration-500 shadow-2xl shadow-white/5 border-none"
                        >
                            {t('hero.cta')}
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

        </section>
    );
};
