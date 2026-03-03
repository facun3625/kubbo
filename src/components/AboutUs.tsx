import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Users, Target, Rocket } from "lucide-react";

export const AboutUs = () => {
    const { t } = useTranslation();

    const stats = [
        {
            title: t('about_us.story_title'),
            description: t('about_us.story_desc'),
            icon: Users,
            color: "bg-blue-500",
        },
        {
            title: t('about_us.mission_title'),
            description: t('about_us.mission_desc'),
            icon: Target,
            color: "bg-kubbo-green",
        },
        {
            title: "Visión",
            description: "Ser el referente global en transformación digital, impulsando la innovación constante en cada proyecto que emprendemos.",
            icon: Rocket,
            color: "bg-orange-500",
        },
    ];

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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1]
            }
        }
    };

    return (
        <section id="about-us" className="py-24 bg-transparent">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto mb-20 space-y-6"
                >
                    <h2 className="text-sm font-bold tracking-[0.3em] text-kubbo-green uppercase">{t('about_us.label')}</h2>
                    <h3 className="text-4xl md:text-6xl font-light tracking-tight text-foreground leading-tight">
                        {t('about_us.title')} <span className="text-kubbo-green font-normal">{t('about_us.titleAccent')}</span>
                    </h3>
                    <p className="text-xl md:text-2xl text-foreground/50 font-light max-w-2xl mx-auto leading-relaxed">
                        {t('about_us.desc')}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="p-10 rounded-3xl border border-border bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 group"
                        >
                            <div className={`w-12 h-12 ${stat.color}/10 rounded-full flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform`}>
                                <stat.icon className={`w-6 h-6 ${stat.color.replace('bg-', 'text-')}`} />
                            </div>
                            <h4 className="text-2xl font-light text-foreground mb-4 leading-tight group-hover:text-kubbo-green transition-colors">{stat.title}</h4>
                            <p className="text-lg text-foreground/50 font-light leading-relaxed">{stat.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
