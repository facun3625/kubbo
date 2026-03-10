import { Truck, Box, Shield, Zap, Globe, Smartphone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export const Features = ({ onOpenPopup }: { onOpenPopup: (serviceId?: string) => void }) => {
    const { t } = useTranslation();

    const features = [
        {
            id: "webapp",
            title: t('features.f1_title'),
            description: t('features.f1_desc'),
            icon: Smartphone,
            color: "bg-blue-500",
        },
        {
            id: "excel",
            title: t('features.f2_title'),
            description: t('features.f2_desc'),
            icon: Box,
            color: "bg-kubbo-green",
        },
        {
            id: "sitio",
            title: t('features.f3_title'),
            description: t('features.f3_desc'),
            icon: Globe,
            color: "bg-orange-500",
        },
        {
            id: "mobile",
            title: t('features.f4_title'),
            description: t('features.f4_desc'),
            icon: Zap,
            color: "bg-indigo-500",
        },
        {
            id: "legado",
            title: t('features.f5_title'),
            description: t('features.f5_desc'),
            icon: Truck,
            color: "bg-rose-500",
        },
        {
            id: "ia",
            title: t('features.f6_title'),
            description: t('features.f6_desc'),
            icon: Shield,
            color: "bg-indigo-500",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as any
            }
        }
    };

    return (
        <section id="features" className="py-24 bg-transparent">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto mb-20 space-y-6"
                >
                    <div className="space-y-2">
                        <h2 className="text-sm font-bold tracking-[0.4em] text-kubbo-green uppercase">{t('features.label')}</h2>
                        <div className="w-12 h-[1px] bg-kubbo-green mx-auto opacity-50" />
                    </div>
                    <h3 className="text-4xl md:text-6xl font-light tracking-tight text-foreground leading-tight">
                        {t('features.title')} <span className="text-kubbo-green font-normal">{t('features.titleAccent')}</span>
                    </h3>
                    <p className="text-xl md:text-2xl text-foreground/50 font-light max-w-2xl mx-auto leading-relaxed">
                        {t('features.desc')}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card hover:shadow-xl hover:border-kubbo-green/20 transition-[background-color,border-color,box-shadow] duration-300 group"
                        >
                            <div className={`w-14 h-14 ${feature.color}/10 rounded-xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform`}>
                                <feature.icon className={`w-7 h-7 ${feature.color.replace('bg-', 'text-')}`} />
                            </div>
                            <h4 className="text-2xl font-light text-foreground mb-4 leading-tight group-hover:text-kubbo-green transition-colors">{feature.title}</h4>
                            <p className="text-lg text-foreground/50 font-light leading-relaxed mb-8">{feature.description}</p>
                            <Button
                                onClick={() => onOpenPopup(feature.id)}
                                className="bg-foreground text-background dark:bg-white dark:text-kubbo-dark hover:bg-kubbo-green hover:text-kubbo-dark dark:hover:bg-kubbo-green dark:hover:text-kubbo-dark transition-all duration-500 rounded-full px-6 md:px-8 h-10 md:h-12 font-bold border-none text-sm"
                            >
                                {t('nav.start')}
                            </Button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
