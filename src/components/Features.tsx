import { Truck, Box, Shield, Zap, Globe, Smartphone } from "lucide-react";

const features = [
    {
        title: "Fulfillment Global",
        description: "Guardamos, preparamos y enviamos tus productos desde nuestros centros estratégicos.",
        icon: Box,
        color: "bg-blue-500",
    },
    {
        title: "Entregas en el Día",
        description: "Aumentá tus ventas hasta un 63% ofreciendo envíos same-day y next-day.",
        icon: Zap,
        color: "bg-kubbo-green",
    },
    {
        title: "Tecnología Propia",
        description: "Integración nativa con Shopify, WooCommerce, VTEX y los principales marketplaces.",
        icon: Smartphone,
        color: "bg-kubbo-violet",
    },
    {
        title: "Red de Transporte",
        description: "Conectamos con las mejores transportistas nacionales e internacionales.",
        icon: Globe,
        color: "bg-orange-500",
    },
    {
        title: "Seguridad Total",
        description: "Tus productos están protegidos con la mejor infraestructura y seguros del mercado.",
        icon: Shield,
        color: "bg-indigo-500",
    },
    {
        title: "Logística Inversa",
        description: "Gestionamos cambios y devoluciones de manera ágil para mejorar el trust.",
        icon: Truck,
        color: "bg-rose-500",
    },
];

export const Features = () => {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-sm font-bold tracking-widest text-kubbo-violet uppercase">Nuestros Servicios</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-kubbo-dark leading-tight">
                        Todo lo que necesitás para que tu <span className="text-kubbo-green">logística vuele</span>
                    </h3>
                    <p className="text-lg text-slate-500">
                        Una solución integral diseñada para marcas que quieren escalar sin límites.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-kubbo-violet/10 transition-all duration-300 group"
                        >
                            <div className={`w-14 h-14 ${feature.color}/10 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                                <feature.icon className={`w-7 h-7 ${feature.color.replace('bg-', 'text-')}`} />
                            </div>
                            <h4 className="text-xl font-bold text-kubbo-dark mb-3 leading-tight">{feature.title}</h4>
                            <p className="text-slate-500 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
