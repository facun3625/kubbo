import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MoveRight, Play } from "lucide-react";

export const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
            {/* Background patterns */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[1000px] h-[1000px] bg-kubbo-violet/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[800px] h-[800px] bg-kubbo-green/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 animate-fade-in">
                        <Badge variant="outline" className="px-4 py-1.5 border-kubbo-violet/20 text-kubbo-violet font-medium bg-kubbo-violet/5">
                            Logistics on Auto-Pilot 🚀
                        </Badge>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-kubbo-dark leading-[1.1]">
                            Escalá tu E-commerce con <span className="text-kubbo-violet">Logística Inteligente</span>
                        </h1>

                        <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                            Fulfillment, envíos el mismo día y tecnología avanzada para que te enfoques en vender mientras nosotros nos encargamos del resto.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-kubbo-violet hover:bg-kubbo-violet/90 text-white px-8 h-14 text-lg gap-2 shadow-lg shadow-kubbo-violet/20">
                                Contactar Ventas <MoveRight className="w-5 h-5" />
                            </Button>
                            <Button size="lg" variant="outline" className="px-8 h-14 text-lg gap-2 border-slate-200 hover:bg-white">
                                Ver Demo <Play className="w-5 h-5 fill-current" />
                            </Button>
                        </div>

                        <div className="flex items-center gap-8 pt-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                                        <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-slate-500">
                                <span className="font-bold text-kubbo-dark">+500 brands</span> confían en nuestra infraestructura
                            </p>
                        </div>
                    </div>

                    <div className="relative animate-fade-in-right">
                        <div className="relative z-20 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                            <img
                                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
                                alt="Logística Kubbo"
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-kubbo-dark/40 to-transparent" />
                        </div>

                        {/* Decors */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-kubbo-green rounded-2xl -z-10 animate-pulse-slow opacity-20" />
                        <div className="absolute -bottom-10 -left-10 p-6 bg-white rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                            <div className="w-12 h-12 bg-kubbo-green/10 rounded-full flex items-center justify-center text-kubbo-green">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-kubbo-dark">Entrega Exitosa</p>
                                <p className="text-xs text-slate-500">Mismo día - 14:30 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
