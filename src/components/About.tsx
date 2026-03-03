import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { AnimatedCounter } from "./AnimatedCounter";
import { Linkedin } from "lucide-react";

export const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="relative min-h-screen flex flex-col md:flex-row bg-transparent overflow-hidden">
            {/* Left Column - Image */}
            <motion.div
                initial={{ opacity: 0, x: -60, scale: 0.96 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="relative w-full md:w-1/2 h-[50vh] md:h-screen"
            >
                <img
                    src="/quienes.png"
                    alt="Equipo Kubbo"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 dark:opacity-70 transition-opacity duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent md:bg-gradient-to-b md:from-transparent md:to-transparent" />
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-24 relative z-10"
            >
                <div className="max-w-xl space-y-12">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-sm font-bold tracking-[0.4em] text-kubbo-green uppercase">{t('nav.about')}</h2>
                            <div className="w-12 h-[1px] bg-kubbo-green opacity-50" />
                        </div>
                        <h3 className="text-3xl md:text-5xl font-light tracking-tight text-foreground leading-tight">
                            {t('about.title')}
                        </h3>

                        <p
                            className="text-lg md:text-xl text-foreground/50 leading-relaxed font-light"
                            dangerouslySetInnerHTML={{ __html: t('about.desc1') }}
                        />

                        <p
                            className="text-lg md:text-xl text-foreground/50 leading-relaxed font-light"
                            dangerouslySetInnerHTML={{ __html: t('about.desc2') }}
                        />

                        <div className="pt-4 space-y-4">
                            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-kubbo-green">{t('about.team')}</p>
                            <div className="flex flex-wrap gap-8">
                                <a
                                    href="https://www.linkedin.com/in/facundo-arteaga-sol%C3%A1-656ab3187/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 text-lg font-light text-foreground/70 hover:text-kubbo-green transition-all duration-300"
                                >
                                    <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-kubbo-green/10 transition-colors">
                                        <Linkedin className="w-4 h-4" />
                                    </div>
                                    <span>{t('about.facundo')}</span>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/santiago-cucher/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 text-lg font-light text-foreground/70 hover:text-kubbo-green transition-all duration-300"
                                >
                                    <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-kubbo-green/10 transition-colors">
                                        <Linkedin className="w-4 h-4" />
                                    </div>
                                    <span>{t('about.santiago')}</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-12 gap-y-8 pt-6">
                        <div className="space-y-1">
                            <p className="text-4xl font-light text-foreground tracking-tighter">
                                <AnimatedCounter value={25} />+
                            </p>
                            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-foreground/30">{t('about.years')}</p>
                        </div>
                        <div className="w-[1px] h-12 bg-foreground/10 hidden md:block" />
                        <div className="space-y-1">
                            <p className="text-4xl font-light text-foreground tracking-tighter">
                                <AnimatedCounter value={200} />+
                            </p>
                            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-foreground/30">{t('about.projects')}</p>
                        </div>
                        <div className="w-[1px] h-12 bg-foreground/10 hidden md:block" />
                        <div className="space-y-1">
                            <p className="text-4xl font-light text-foreground tracking-tighter">
                                <AnimatedCounter value={100} />%
                            </p>
                            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-foreground/30">{t('about.custom_systems')}</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
