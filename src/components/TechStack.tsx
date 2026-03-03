import { motion, Variants } from "framer-motion";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

const technologies = [
    "React", "Angular", "Next.js", "PostgreSQL", "MongoDB", "PHP", "Python", "HTML5", "CSS3", "Typescript", "Node.js", "Docker"
];

export const TechStack = ({ onOpenPopup }: { onOpenPopup: () => void }) => {
    const { t } = useTranslation();

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40, scale: 0.92 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section id="technology" className="py-24 bg-transparent overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-bold tracking-[0.4em] text-kubbo-green uppercase mb-2">Stack Tecnológico</h2>
                    <div className="w-12 h-[1px] bg-kubbo-green mx-auto mt-4 opacity-50" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-20 mb-20"
                >
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative"
                        >
                            <span className="text-2xl md:text-4xl font-light text-foreground/30 group-hover:text-kubbo-green transition-all duration-500 cursor-default tracking-tight">
                                {tech}
                            </span>
                            <div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-kubbo-green transition-all duration-500 group-hover:w-full opacity-50" />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <Button
                        onClick={onOpenPopup}
                        className="bg-foreground text-background dark:bg-white dark:text-kubbo-dark hover:bg-kubbo-green hover:text-kubbo-dark dark:hover:bg-kubbo-green dark:hover:text-kubbo-dark transition-all duration-500 rounded-full px-10 h-14 font-bold border-none shadow-xl"
                    >
                        {t('nav.start')}
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
