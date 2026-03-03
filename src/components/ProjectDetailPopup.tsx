import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Globe, Layers, Cpu } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
import { Badge } from "./ui/badge";

interface ProjectDetailPopupProps {
    project: any;
    isOpen: boolean;
    onClose: () => void;
    onOpenConsultation: () => void;
}

export const ProjectDetailPopup = ({ project, isOpen, onClose, onOpenConsultation }: ProjectDetailPopupProps) => {
    const { t } = useTranslation();

    if (!project || !isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[250] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-background/90 backdrop-blur-xl"
                />

                {/* Modal content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 30 }}
                    className="relative w-full max-w-4xl bg-card border border-border shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-[2.5rem] overflow-hidden z-10 max-h-[90vh] flex flex-col"
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-3 rounded-full bg-background/50 backdrop-blur-md border border-white/10 hover:bg-kubbo-green hover:text-kubbo-dark transition-all duration-300 z-20 group"
                    >
                        <X className="w-5 h-5 group-hover:scale-110" />
                    </button>

                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                        {/* Hero Image */}
                        <div className="relative h-64 md:h-96 w-full">
                            <img
                                src={project.image}
                                alt={t(project.titleKey)}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-8 md:bottom-10 md:left-12">
                                <Badge className="bg-kubbo-green text-kubbo-dark font-bold px-4 py-1.5 rounded-full border-none mb-4 uppercase tracking-widest text-[10px]">
                                    {t(project.categoryKey)}
                                </Badge>
                                <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white">{t(project.titleKey)}</h3>
                            </div>
                        </div>

                        <div className="p-8 md:p-12 space-y-12">
                            <div className="grid md:grid-cols-3 gap-12">
                                {/* Main description */}
                                <div className="md:col-span-2 space-y-6">
                                    <h4 className="text-xl font-bold flex items-center gap-2">
                                        <Globe className="w-5 h-5 text-kubbo-green" />
                                        Sobre el proyecto
                                    </h4>
                                    <p className="text-lg text-foreground/70 font-light leading-relaxed whitespace-pre-line">
                                        {t(project.detailKey || project.descKey)}
                                    </p>
                                </div>

                                {/* Tech & Specs */}
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/40 flex items-center gap-2">
                                            <Cpu className="w-4 h-4 text-kubbo-green" />
                                            Tecnologías
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {(t(project.techKey, { returnObjects: true }) as string[] || ["React", "Node.js", "PostgreSQL"]).map((tech: string) => (
                                                <span key={tech} className="px-3 py-1 bg-muted rounded-lg text-xs font-medium border border-border">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/40 flex items-center gap-2">
                                            <Layers className="w-4 h-4 text-kubbo-green" />
                                            Tipo
                                        </h4>
                                        <p className="text-base font-light">{t(project.categoryKey)}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Final CTA */}
                            <div className="bg-muted/30 border border-border rounded-3xl p-8 md:p-10 flex flex-col md:row items-center justify-between gap-8">
                                <div className="space-y-2 text-center md:text-left">
                                    <h4 className="text-2xl font-bold tracking-tight">¿Tenés un proyecto similar?</h4>
                                    <p className="text-foreground/50 font-light">Podemos ayudarte a digitalizar y potenciar tus procesos.</p>
                                </div>
                                <Button
                                    onClick={() => {
                                        onClose();
                                        onOpenConsultation();
                                    }}
                                    className="bg-kubbo-green hover:bg-kubbo-green/90 text-kubbo-dark font-bold px-8 h-12 rounded-full shadow-lg shadow-kubbo-green/20"
                                >
                                    Solicitar propuesta <ChevronRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};
