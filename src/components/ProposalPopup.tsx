import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronLeft, CheckCircle2, Smartphone, Box, Globe, Zap, Truck, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface ProposalPopupProps {
    isOpen: boolean;
    onClose: () => void;
    initialServiceId?: string | null;
}

const SERVICES = [
    { id: "webapp", label: "Web App", desc: "Plataformas y sistemas web a medida", icon: Smartphone, color: "text-blue-400" },
    { id: "excel", label: "Excel a Sistema", desc: "Digitalizar procesos manuales o planillas", icon: Box, color: "text-kubbo-green" },
    { id: "sitio", label: "Sitio Web", desc: "Presencia digital corporativa o landing", icon: Globe, color: "text-orange-400" },
    { id: "mobile", label: "App Móvil", desc: "Aplicación nativa iOS y/o Android", icon: Zap, color: "text-indigo-400" },
    { id: "legado", label: "Sistema Legado", desc: "Modernizar un sistema o software existente", icon: Truck, color: "text-rose-400" },
    { id: "ia", label: "Inteligencia Artificial", desc: "Automatizar procesos con IA", icon: Shield, color: "text-violet-400" },
];

const STEP2_OPTIONS: Record<string, { question: string; options: string[] }> = {
    webapp: {
        question: "¿Qué tipo de web app necesitás?",
        options: ["Una plataforma nueva desde cero", "Mejorar o ampliar una existente", "Integrar herramientas que no se conectan", "Panel de control / dashboard"],
    },
    excel: {
        question: "¿Qué proceso querés digitalizar?",
        options: ["Finanzas y contabilidad", "Recursos Humanos", "Logística o inventario", "Ventas y CRM"],
    },
    sitio: {
        question: "¿Qué tipo de sitio necesitás?",
        options: ["Sitio corporativo o institucional", "Landing page para captar clientes", "E-commerce / tienda online", "Portfolio o catálogo"],
    },
    mobile: {
        question: "¿Para qué plataforma?",
        options: ["iOS (iPhone/iPad)", "Android", "Ambas (iOS y Android)", "No sé todavía, necesito asesoramiento"],
    },
    legado: {
        question: "¿Qué necesitás modernizar?",
        options: ["Software de escritorio antiguo", "Sistema en tecnología obsoleta", "Migrar datos a una nueva plataforma", "Algo a medida, tengo más detalles"],
    },
    ia: {
        question: "¿Qué proceso querés automatizar con IA?",
        options: ["Atención al cliente (chatbot)", "Análisis de datos y reportes", "Generación de documentos o contenido", "Clasificación o predicción de datos"],
    },
};

const URGENCY_OPTIONS = [
    { label: "Solo estoy explorando", emoji: "👀" },
    { label: "Me gustaría resolverlo en los próximos meses", emoji: "📅" },
    { label: "Necesito empezar en las próximas semanas", emoji: "🚀" },
];

export const ProposalPopup = ({ isOpen, onClose, initialServiceId }: ProposalPopupProps) => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        service: "",
        detail: "",
        urgency: "",
        name: "",
        company: "",
        whatsapp: ""
    });

    useEffect(() => {
        if (isOpen) {
            if (initialServiceId) {
                setStep(2);
                setFormData({
                    service: initialServiceId,
                    detail: "",
                    urgency: "",
                    name: "",
                    company: "",
                    whatsapp: ""
                });
            } else {
                setStep(1);
                setFormData({ service: "", detail: "", urgency: "", name: "", company: "", whatsapp: "" });
            }
            setIsSuccess(false);
            setIsSubmitting(false);
        }
    }, [isOpen, initialServiceId]);

    const handleNext = () => setStep((s) => s + 1);
    const handleBack = () => setStep((s) => s - 1);

    const updateField = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const serviceLabel = SERVICES.find(s => s.id === formData.service)?.label || formData.service;

        try {
            const response = await fetch("https://api.brevo.com/v3/smtp/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "api-key": import.meta.env.VITE_BREVO_API_KEY,
                },
                body: JSON.stringify({
                    sender: { name: "Kubbo Sitio Web", email: "info@kubbo.com.ar" },
                    to: [{ email: "info@kubbo.com.ar", name: "Kubbo" }],
                    subject: `Nueva solicitud de propuesta — ${serviceLabel}`,
                    htmlContent: `
                        <h2>Nueva solicitud de propuesta 🚀</h2>
                        <table cellpadding="8" style="border-collapse:collapse;width:100%">
                            <tr><td><strong>Servicio</strong></td><td>${serviceLabel}</td></tr>
                            <tr><td><strong>Detalle</strong></td><td>${formData.detail}</td></tr>
                            <tr><td><strong>Urgencia</strong></td><td>${formData.urgency}</td></tr>
                            <tr><td><strong>Nombre</strong></td><td>${formData.name}</td></tr>
                            <tr><td><strong>Empresa</strong></td><td>${formData.company}</td></tr>
                            <tr><td><strong>WhatsApp</strong></td><td>${formData.whatsapp}</td></tr>
                        </table>
                    `,
                }),
            });

            if (!response.ok) throw new Error("Error al enviar");
            setIsSuccess(true);
            setTimeout(() => onClose(), 3500);
        } catch (err) {
            console.error("Error enviando propuesta:", err);
            alert("Hubo un error al enviar. Por favor contactanos por WhatsApp.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const stepVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 }
    };

    const selectedService = SERVICES.find(s => s.id === formData.service);
    const step2Config = formData.service ? STEP2_OPTIONS[formData.service] : null;

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-background/80 backdrop-blur-md"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-2xl bg-card border border-border shadow-2xl rounded-3xl overflow-hidden z-10"
                >
                    {/* Header */}
                    <div className="p-6 flex items-center justify-between border-b border-border bg-muted/30">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 bg-kubbo-green rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-kubbo-green/20 text-sm">K</div>
                            <div>
                                <h3 className="text-base font-bold tracking-tight">Propuesta Kubbo</h3>
                                {selectedService && (
                                    <span className={`text-xs font-medium ${selectedService.color}`}>{selectedService.label}</span>
                                )}
                            </div>
                        </div>
                        <button onClick={onClose} className="p-2 rounded-full hover:bg-muted transition-colors text-foreground/50 hover:text-foreground">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="p-8 min-h-[400px] flex flex-col">
                        {!isSuccess ? (
                            <>
                                {/* Progress */}
                                <div className="flex gap-2 mb-8">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${i <= step ? "bg-kubbo-green" : "bg-muted"}`} />
                                    ))}
                                </div>

                                <AnimatePresence mode="wait">

                                    {/* STEP 1 — Elegí el servicio */}
                                    {step === 1 && (
                                        <motion.div key="step1" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-5">
                                            <div className="space-y-1">
                                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-kubbo-green">Paso 1</span>
                                                <h4 className="text-xl font-light leading-tight">¿Qué servicio estás buscando?</h4>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {SERVICES.map((svc) => {
                                                    const Icon = svc.icon;
                                                    return (
                                                        <button
                                                            key={svc.id}
                                                            onClick={() => { updateField("service", svc.id); handleNext(); }}
                                                            className="text-left p-4 rounded-xl border border-border bg-muted/30 hover:border-kubbo-green/60 hover:bg-muted/60 transition-all duration-300 group flex items-start gap-3"
                                                        >
                                                            <Icon className={`w-5 h-5 mt-0.5 ${svc.color} flex-shrink-0`} />
                                                            <div>
                                                                <p className="font-semibold text-sm">{svc.label}</p>
                                                                <p className="text-xs text-foreground/50 mt-0.5 font-light">{svc.desc}</p>
                                                            </div>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* STEP 2 — Detalle condicional */}
                                    {step === 2 && step2Config && (
                                        <motion.div key="step2" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-5">
                                            <div className="space-y-1">
                                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-kubbo-green">Paso 2</span>
                                                <h4 className="text-xl font-light leading-tight">{step2Config.question}</h4>
                                            </div>
                                            <div className="grid gap-3">
                                                {step2Config.options.map((opt, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => { updateField("detail", opt); handleNext(); }}
                                                        className={`text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group ${formData.detail === opt ? "bg-kubbo-green/10 border-kubbo-green text-kubbo-green" : "bg-muted/30 border-border hover:border-kubbo-green/50 hover:bg-muted/50"}`}
                                                    >
                                                        <span className="text-[14px] font-light">{opt}</span>
                                                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                                                    </button>
                                                ))}
                                            </div>
                                            <button onClick={handleBack} className="flex items-center gap-2 text-sm text-foreground/40 hover:text-foreground transition-colors pt-2">
                                                <ChevronLeft className="w-4 h-4" /> Volver
                                            </button>
                                        </motion.div>
                                    )}

                                    {/* STEP 3 — Urgencia */}
                                    {step === 3 && (
                                        <motion.div key="step3" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-5">
                                            <div className="space-y-1">
                                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-kubbo-green">Paso 3</span>
                                                <h4 className="text-xl font-light leading-tight">¿Qué tan urgente es?</h4>
                                            </div>
                                            <div className="grid gap-3">
                                                {URGENCY_OPTIONS.map((opt, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => { updateField("urgency", opt.label); handleNext(); }}
                                                        className={`text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 group ${formData.urgency === opt.label ? "bg-kubbo-green/10 border-kubbo-green" : "bg-muted/30 border-border hover:border-kubbo-green/50 hover:bg-muted/50"}`}
                                                    >
                                                        <span className="text-2xl">{opt.emoji}</span>
                                                        <span className="text-[14px] font-light">{opt.label}</span>
                                                    </button>
                                                ))}
                                            </div>
                                            <button onClick={handleBack} className="flex items-center gap-2 text-sm text-foreground/40 hover:text-foreground transition-colors pt-2">
                                                <ChevronLeft className="w-4 h-4" /> Volver
                                            </button>
                                        </motion.div>
                                    )}

                                    {/* STEP 4 — Contacto */}
                                    {step === 4 && (
                                        <motion.div key="step4" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                                            <div className="space-y-1">
                                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-kubbo-green">Paso 4</span>
                                                <h4 className="text-xl font-light leading-tight">Casi listo, contanos de vos</h4>
                                            </div>
                                            <form onSubmit={handleSubmit} className="space-y-4">
                                                <div className="space-y-3">
                                                    <div className="space-y-1.5">
                                                        <label className="text-xs font-bold uppercase tracking-wider text-foreground/40 px-1">Nombre</label>
                                                        <Input required placeholder="Tu nombre completo" value={formData.name} onChange={(e) => updateField("name", e.target.value)} className="bg-muted/30 border-border focus:border-kubbo-green h-12 rounded-xl text-base" />
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <label className="text-xs font-bold uppercase tracking-wider text-foreground/40 px-1">Empresa</label>
                                                        <Input required placeholder="Nombre de tu empresa" value={formData.company} onChange={(e) => updateField("company", e.target.value)} className="bg-muted/30 border-border focus:border-kubbo-green h-12 rounded-xl text-base" />
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <label className="text-xs font-bold uppercase tracking-wider text-foreground/40 px-1">WhatsApp</label>
                                                        <Input required type="tel" placeholder="+54 9 11 ..." value={formData.whatsapp} onChange={(e) => updateField("whatsapp", e.target.value)} className="bg-muted/30 border-border focus:border-kubbo-green h-12 rounded-xl text-base" />
                                                    </div>
                                                </div>
                                                <div className="pt-4 flex flex-col gap-3">
                                                    <Button disabled={isSubmitting} className="bg-kubbo-green hover:bg-kubbo-green/90 text-kubbo-dark font-bold h-14 rounded-xl text-base shadow-xl shadow-kubbo-green/20">
                                                        {isSubmitting ? (
                                                            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-kubbo-dark border-t-transparent rounded-full" />
                                                        ) : "Enviar solicitud"}
                                                    </Button>
                                                    <button type="button" onClick={handleBack} className="flex items-center justify-center gap-2 text-sm text-foreground/40 hover:text-foreground transition-colors">
                                                        <ChevronLeft className="w-4 h-4" /> Volver
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
                                        Nos pondremos en contacto muy pronto por WhatsApp. ¡Gracias por confiar en Kubbo!
                                    </p>
                                </div>
                                <Button onClick={onClose} variant="outline" className="rounded-full px-8 h-12 mt-4">Cerrar</Button>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};
