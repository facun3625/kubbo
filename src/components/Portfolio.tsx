import { motion, animate, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useState } from "react";
import { ProjectDetailPopup } from "./ProjectDetailPopup";
import { Plus } from "lucide-react";

const projects = [
    {
        id: 1,
        titleKey: 'portfolio.p1_title',
        categoryKey: 'portfolio.p1_category',
        descKey: 'portfolio.p1_desc',
        detailKey: 'portfolio.p1_detail',
        techKey: 'portfolio.p1_tech',
        image: '/sgo-casf.png',
    },
    {
        id: 2,
        titleKey: 'portfolio.p2_title',
        categoryKey: 'portfolio.p2_category',
        descKey: 'portfolio.p2_desc',
        detailKey: 'portfolio.p2_detail',
        techKey: 'portfolio.p2_tech',
        image: '/profly.png',
    },
    {
        id: 3,
        titleKey: 'portfolio.p3_title',
        categoryKey: 'portfolio.p3_category',
        descKey: 'portfolio.p3_desc',
        detailKey: 'portfolio.p3_detail',
        techKey: 'portfolio.p3_tech',
        image: '/mache.png',
    },
    {
        id: 4,
        titleKey: 'portfolio.p4_title',
        categoryKey: 'portfolio.p4_category',
        descKey: 'portfolio.p4_desc',
        detailKey: 'portfolio.p4_detail',
        techKey: 'portfolio.p4_tech',
        image: '/lsf.png',
    },
    {
        id: 5,
        titleKey: 'portfolio.p5_title',
        categoryKey: 'portfolio.p5_category',
        descKey: 'portfolio.p5_desc',
        detailKey: 'portfolio.p5_detail',
        techKey: 'portfolio.p5_tech',
        image: '/eureka.png',
    },
    {
        id: 6,
        titleKey: 'portfolio.p6_title',
        categoryKey: 'portfolio.p6_category',
        descKey: 'portfolio.p6_desc',
        detailKey: 'portfolio.p6_detail',
        techKey: 'portfolio.p6_tech',
        image: '/est.png',
    }
];

export const Portfolio = ({ onOpenPopup }: { onOpenPopup: () => void }) => {
    const { t } = useTranslation();
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 64,
                behavior: 'auto'
            });
        }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
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
        <section id="portfolio" className="py-32 bg-transparent">
            {selectedProject && (
                <ProjectDetailPopup
                    isOpen={!!selectedProject}
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                    onOpenConsultation={() => onOpenPopup()}
                />
            )}

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto mb-24 space-y-6"
                >
                    <div className="space-y-2">
                        <h2 className="text-sm font-bold tracking-[0.4em] text-kubbo-green uppercase">{t('portfolio.label')}</h2>
                        <div className="w-12 h-[1px] bg-kubbo-green mx-auto opacity-50" />
                    </div>
                    <h3 className="text-4xl md:text-6xl font-light tracking-tight text-foreground leading-tight">
                        {t('portfolio.title')} <span className="text-kubbo-green font-normal">{t('portfolio.titleAccent')}</span>
                    </h3>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="group relative"
                        >
                            <div className="relative overflow-hidden rounded-3xl aspect-[4/3] bg-muted shadow-2xl transition-all duration-500 group-hover:shadow-kubbo-green/20">
                                <img
                                    src={project.image}
                                    alt={t(project.titleKey)}
                                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-kubbo-dark/20 group-hover:bg-kubbo-dark/0 transition-colors duration-500" />

                                <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <Badge className="bg-kubbo-green text-kubbo-dark font-bold px-4 py-1.5 rounded-full border-none">
                                        {t(project.categoryKey)}
                                    </Badge>
                                </div>
                            </div>

                            <div className="mt-8 space-y-3 px-2">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-2xl font-light tracking-tight group-hover:text-kubbo-green transition-colors duration-300">
                                        {t(project.titleKey)}
                                    </h4>
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="p-2 rounded-full border border-foreground/20 hover:bg-kubbo-green hover:text-kubbo-dark hover:border-kubbo-green transition-all duration-300 group/btn"
                                    >
                                        <Plus className="w-4 h-4 text-foreground group-hover/btn:text-kubbo-dark group-hover/btn:rotate-90 transition-all duration-500" />
                                    </button>
                                </div>
                                <p className="text-foreground/50 leading-relaxed font-light line-clamp-2 group-hover:text-foreground/80 transition-colors duration-300">
                                    {t(project.descKey)}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center"
                >
                    <Button
                        onClick={() => onOpenPopup()}
                        size="lg"
                        className="bg-kubbo-dark text-white dark:bg-white dark:text-kubbo-dark hover:bg-kubbo-green hover:text-kubbo-dark dark:hover:bg-kubbo-green dark:hover:text-kubbo-dark px-10 h-16 text-lg font-medium rounded-full transition-all duration-500 border-none lowercase"
                    >
                        {t('portfolio.cta')}
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
