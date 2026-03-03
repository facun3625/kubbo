import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { X, ChevronRight, ChevronLeft, Send, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface ProposalPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ProposalPopup = ({ isOpen, onClose }: ProposalPopupProps) => {
    const { t } = useTranslation();
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        situation: "",
        scenario: "",
        urgency: "",
        name: "",
        company: "",
        whatsapp: ""
    });

    // Reset state when opening
    useEffect(() => {
        if (isOpen) {
            setStep(1);
            setIsSuccess(false);
            setIsSubmitting(false);
        }
    }, [isOpen]);

    const handleNext = () => setStep((s) => s + 1);
    const handleBack = () => setStep((s) => s - 1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call or mailto logic
        // In a real scenario, this could be an API call to a backend or a service like Formspree
        console.log("Form Data:", formData);

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            // Optional: close after delay
            setTimeout(() => {
                onClose();
            }, 3000);
        }, 1500);
    };

    const updateField = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const stepVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-background/80 backdrop-blur-md"
                />

                {/* Modal content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-2xl bg-card border border-border shadow-2xl rounded-3xl overflow-hidden z-10"
                >
                    {/* Header */}
                    <div className="p-6 md:p-8 flex items-center justify-between border-b border-border bg-muted/30">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-kubbo-green rounded-xl flex items-center justify-center font-bold text-white uppercase shadow-lg shadow-kubbo-green/20">K</div>
                            <h3 className="text-xl font-bold tracking-tight">Propuesta Kubbo</h3>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full hover:bg-muted transition-colors text-foreground/50 hover:text-foreground"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="p-8 md:p-12 min-h-[400px] flex flex-col">
                        {!isSuccess ? (
                            <>
                                {/* Progress bar */}
                                <div className="flex gap-2 mb-10">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div
                                            key={i}
                                            className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${i <= step ? "bg-kubbo-green" : "bg-muted"
                                                }`}
                                        />
                                    ))}
                                </div>

                                <AnimatePresence mode="wait">
                                    {step === 1 && (
                                        <motion.div
                                            key="step1"
                                            variants={stepVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="space-y-6"
                                        >
                                            <div className="space-y-2">
                                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-kubbo-green">{t('popup.step1.title')}</span>
                                                <h4 className="text-2xl font-light leading-tight">{t('popup.step1.question')}</h4>
                                            </div>
                                            <div className="grid gap-3">
                                                {[1, 2, 3, 4, 5, 6].map((i) => {
                                                    const key = `option${i}` as keyof typeof t;
                                                    return (
                                                        <button
                                                            key={i}
                                                            onClick={() => {
                                                                updateField("situation", t(`popup.step1.option${i}`));
                                                                handleNext();
                                                            }}
                                                            className={`text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group ${formData.situation === t(`popup.step1.option${i}`)
                                                                    ? "bg-kubbo-green/10 border-kubbo-green text-kubbo-green"
                                                                    : "bg-muted/30 border-border hover:border-kubbo-green/50 hover:bg-muted/50"
                                                                }`}
                                                        >
                                                            <span className="text-[15px] font-light">{t(`popup.step1.option${i}`)}</span>
                                                            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                        </button>
                                                    )
                                                })}
                                            </div>
                                        </motion.div>
                                    )}

                                    {step === 2 && (
                                        <motion.div
                                            key="step2"
                                            variants={stepVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="space-y-6"
                                        >
                                            <div className="space-y-2">
                                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-kubbo-green">{t('popup.step2.title')}</span>
                                                <h4 className="text-2xl font-light leading-tight">{t('popup.step2.question')}</h4>
                                            </div>
                                            <div className="grid gap-3">
                                                {[1, 2, 3, 4].map((i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => {
                                                            updateField("scenario", t(`popup.step2.option${i}`));
                                                            handleNext();
                                                        }}
                                                        className={`text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group ${formData.scenario === t(`popup.step2.option${i}`)
                                                                ? "bg-kubbo-green/10 border-kubbo-green text-kubbo-green"
                                                                : "bg-muted/30 border-border hover:border-kubbo-green/50 hover:bg-muted/50"
                                                            }`}
                                                    >
                                                        <span className="text-[15px] font-light">{t(`popup.step2.option${i}`)}</span>
                                                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </button>
                                                ))}
                                            </div>
                                            <button onClick={handleBack} className="flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors pt-4">
                                                <ChevronLeft className="w-4 h-4" /> {t('popup.back')}
                                            </button>
                                        </motion.div>
                                    )}

                                    {step === 3 && (
                                        <motion.div
                                            key="step3"
                                            variants={stepVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="space-y-6"
                                        >
                                            <div className="space-y-2">
                                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-kubbo-green">{t('popup.step3.title')}</span>
                                                <h4 className="text-2xl font-light leading-tight">{t('popup.step3.question')}</h4>
                                            </div>
                                            <div className="grid gap-3">
                                                {[1, 2, 3].map((i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => {
                                                            updateField("urgency", t(`popup.step3.option${i}`));
                                                            handleNext();
                                                        }}
                                                        className={`text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group ${formData.urgency === t(`popup.step3.option${i}`)
                                                                ? "bg-kubbo-green/10 border-kubbo-green text-kubbo-green"
                                                                : "bg-muted/30 border-border hover:border-kubbo-green/50 hover:bg-muted/50"
                                                            }`}
                                                    >
                                                        <span className="text-[15px] font-light">{t(`popup.step3.option${i}`)}</span>
                                                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </button>
                                                ))}
                                            </div>
                                            <button onClick={handleBack} className="flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors pt-4">
                                                <ChevronLeft className="w-4 h-4" /> {t('popup.back')}
                                            </button>
                                        </motion.div>
                                    )}

                                    {step === 4 && (
                                        <motion.div
                                            key="step4"
                                            variants={stepVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="space-y-8"
                                        >
                                            <div className="space-y-2">
                                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-kubbo-green">{t('popup.step4.title')}</span>
                                                <h4 className="text-2xl font-light leading-tight">Casi listo, contanos de vos</h4>
                                            </div>

                                            <form onSubmit={handleSubmit} className="space-y-4">
                                                <div className="space-y-4">
                                                    <div className="space-y-2">
                                                        <label className="text-xs font-bold uppercase tracking-wider text-foreground/40 px-1">{t('popup.step4.name')}</label>
                                                        <Input
                                                            required
                                                            placeholder="Tu nombre completo"
                                                            value={formData.name}
                                                            onChange={(e) => updateField("name", e.target.value)}
                                                            className="bg-muted/30 border-border focus:border-kubbo-green h-12 rounded-xl text-base"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-xs font-bold uppercase tracking-wider text-foreground/40 px-1">{t('popup.step4.company')}</label>
                                                        <Input
                                                            required
                                                            placeholder="Nombre de tu empresa"
                                                            value={formData.company}
                                                            onChange={(e) => updateField("company", e.target.value)}
                                                            className="bg-muted/30 border-border focus:border-kubbo-green h-12 rounded-xl text-base"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-xs font-bold uppercase tracking-wider text-foreground/40 px-1">{t('popup.step4.whatsapp')}</label>
                                                        <Input
                                                            required
                                                            type="tel"
                                                            placeholder="+54 9 11 ..."
                                                            value={formData.whatsapp}
                                                            onChange={(e) => updateField("whatsapp", e.target.value)}
                                                            className="bg-muted/30 border-border focus:border-kubbo-green h-12 rounded-xl text-base"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="pt-6 flex flex-col gap-4">
                                                    <Button
                                                        disabled={isSubmitting}
                                                        className="bg-kubbo-green hover:bg-kubbo-green/90 text-kubbo-dark font-bold h-14 rounded-xl text-lg shadow-xl shadow-kubbo-green/20"
                                                    >
                                                        {isSubmitting ? (
                                                            <motion.div
                                                                animate={{ rotate: 360 }}
                                                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                                                className="w-6 h-6 border-2 border-kubbo-dark border-t-transparent rounded-full"
                                                            />
                                                        ) : (
                                                            <>{t('popup.step4.submit')}</>
                                                        )}
                                                    </Button>
                                                    <button type="button" onClick={handleBack} className="flex items-center justify-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors">
                                                        <ChevronLeft className="w-4 h-4" /> {t('popup.back')}
                                                    </button>
                                                </div>
                                            </form>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex-1 flex flex-col items-center justify-center text-center space-y-6"
                            >
                                <div className="w-20 h-20 bg-kubbo-green/10 rounded-full flex items-center justify-center text-kubbo-green">
                                    <CheckCircle2 className="w-10 h-10" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-3xl font-bold tracking-tight">¡Solicitud Enviada!</h4>
                                    <p className="text-lg text-foreground/50 font-light max-w-sm mx-auto">
                                        {t('popup.step4.success')}
                                    </p>
                                </div>
                                <Button
                                    onClick={onClose}
                                    variant="outline"
                                    className="rounded-full px-8 h-12 mt-4"
                                >
                                    Cerrar
                                </Button>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};
