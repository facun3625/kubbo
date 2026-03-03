import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            es: {
                translation: {
                    nav: {
                        about: "Nosotros",
                        services: "Servicios",
                        technology: "Tecnología",
                        portfolio: "Portfolio",
                        contact: "Contacto",
                        start: "Solicitar propuesta"
                    },
                    hero: {
                        title1: "Sistemas que",
                        titleAccent: "impulsan",
                        title2: "tu negocio.",
                        cta: "Solicitar propuesta",
                        scroll: "Scroll"
                    },
                    about: {
                        title: "Somos Kubbo",
                        desc1: "Somos <strong>Santiago y Facundo</strong>. Fundamos Kubbo combinando experiencia en gestión y desarrollo de software aplicado a negocios.",
                        desc2: "Junto a nuestro equipo de desarrolladores, diseñamos sistemas a medida para organizaciones que necesitan ordenar su funcionamiento y automatizar procesos. Más de 25 años de experiencia en tecnología aplicada a negocios respaldan nuestro trabajo.",
                        years: "Años de Exp",
                        projects: "Proyectos",
                        custom_systems: "Sistemas a medida",
                        team: "Fundadores",
                        facundo: "Facundo Arteaga Solá",
                        santiago: "Santiago Cucher"
                    },
                    about_us: {
                        label: "Quiénes Somos",
                        title: "Pasión por la ",
                        titleAccent: "excelencia digital",
                        desc: "Somos un equipo multidisciplinario de expertos dedicados a crear soluciones tecnológicas que no solo funcionan, sino que transforman negocios.",
                        story_title: "Nuestra Historia",
                        story_desc: "Comenzamos como un pequeño grupo de desarrolladores con una gran ambición: democratizar el acceso a software de alta calidad. Hoy, somos socios estratégicos de empresas que buscan liderar la era digital.",
                        mission_title: "Nuestra Misión",
                        mission_desc: "Nuestra misión es potenciar a las empresas a través de la tecnología, simplificando procesos complejos y creando experiencias digitales memorables.",
                    },
                    features: {
                        label: "Nuestros Servicios",
                        title: "Soluciones que",
                        titleAccent: "transforman",
                        desc: "Desarrollamos herramientas digitales a medida para llevar tu negocio al siguiente nivel.",
                        f1_title: "Web Apps",
                        f1_desc: "Desarrollo de aplicaciones web escalables y de alto rendimiento.",
                        f2_title: "Excel a Sistemas",
                        f2_desc: "Transformamos tus procesos manuales y planillas en plataformas robustas y automatizadas.",
                        f3_title: "Sitios Web",
                        f3_desc: "Diseño y desarrollo de sitios web corporativos que destacan y convierten.",
                        f4_title: "Apps Móviles",
                        f4_desc: "Aplicaciones nativas fluidas para iOS y Android con las últimas tecnologías.",
                        f5_title: "Sistemas Legados",
                        f5_desc: "Modernizamos tus herramientas heredadas a arquitecturas modernas sin perder datos.",
                        f6_title: "Inteligencia Artificial",
                        f6_desc: "Potenciamos tu negocio con soluciones personalizadas de IA integradas a tus flujos."
                    },
                    portfolio: {
                        label: "Portfolio",
                        title: "Proyectos que",
                        titleAccent: "hablan por nosotros",
                        p1_title: "SGO - CASF",
                        p1_category: "Web App",
                        p1_desc: "Sistema integral de gestión para el Colegio de Abogados de Santa Fe.",
                        p1_detail: "Desarrollado para modernizar la gestión administrativa del colegio. El sistema centraliza matriculaciones, pagos, trámites éticos y legajos digitales en una plataforma rápida y segura. Reemplazó procesos manuales y sistemas obsoletos, mejorando la eficiencia operativa en un 70%.",
                        p1_tech: ["React", "Next.js", "PostgreSQL", "Tailwind CSS"],
                        p2_title: "ProFly",
                        p2_category: "Plataforma SaaS",
                        p2_desc: "Generador Inteligente de Exámenes con algoritmo de balanceo dinámico.",
                        p2_detail: "Plataforma SaaS multitenant diseñada para automatizar la creación y gestión de evaluaciones académicas profesionales. Innovación: Algoritmo de balanceo dinámico que genera exámenes únicos combinando niveles de dificultad y tipos de preguntas (opción múltiple, V/F, abierta) de forma inteligente. Funcionalidad: Exportación profesional a PDF con branding institucional dinámico, firmas digitales de seguridad y log de auditoría completo.",
                        p2_tech: ["Next.js 14", "NestJS", "Prisma", "PostgreSQL"],
                        p3_title: "Macher S.A.S.",
                        p3_category: "Gestión Logística",
                        p3_desc: "Control total de flotas y optimización de despachos en tiempo real.",
                        p3_detail: "Plataforma integral diseñada para la optimización crítica de la cadena de suministro. El sistema centraliza la gestión de despachos, control de carga y telemetría avanzada de unidades. Implementamos algoritmos de optimización de rutas y un panel de control intuitivo que reduce los tiempos de coordinación operativa en un 40%, transformando la logística tradicional en una operación inteligente y escalable.",
                        p3_tech: ["React", "Next.js 14", "NestJS", "PostgreSQL", "Google Maps API"],
                        p4_title: "Logística Predictiva",
                        p4_category: "Web App",
                        p4_desc: "Sistema centralizado para la gestión de flotas y optimización de rutas mediante algoritmos de IA.",
                        p5_title: "E-commerce Headless",
                        p5_category: "Web Sites",
                        p5_desc: "Arquitectura moderna y ultra-rápida para retail de moda con integración total de stock.",
                        p6_title: "Health & Care App",
                        p6_category: "Apps Móviles",
                        p6_desc: "Aplicación nativa para la gestión de turnos y telemedicina con experiencia de usuario simplificada.",
                        cta: "Solicitar propuesta",
                    },
                    cta: {
                        title: "¿Listo para llevar tu logística al siguiente nivel?",
                        desc: "Unite a las marcas que están creciendo más rápido con Kubbo. Sin contratos complicados, tecnología de punta y el mejor equipo.",
                        demo: "Solicitar propuesta",
                        rates: "Ver Tarifas"
                    },
                    footer: {
                        desc: "Sistemas que\nimpulsan\ntu negocio.",
                        newsletter: "Suscribite al Newsletter",
                        newsletterDesc: "Recibí las últimas novedades sobre desarrollo y tecnología.",
                        emailPlaceholder: "Tu email",
                        rights: "© 2024 Kubbo Technologies. Todos los derechos reservados.",
                        terms: "Términos y condiciones",
                        privacy: "Privacidad",
                        explore: "Explorá",
                        company: "Empresa",
                        contactUs: "contactanos"
                    },
                    popup: {
                        step1: {
                            title: "Paso 1",
                            question: "¿Cuál de estas situaciones describe mejor tu negocio hoy?",
                            option1: "La información está desordenada y necesito centralizarla",
                            option2: "Pierdo tiempo en tareas repetitivas",
                            option3: "Necesito integrar herramientas que no se conectan",
                            option4: "No tengo control claro sobre lo que está pasando en el negocio",
                            option5: "Quiero aplicar IA pero no sé cómo",
                            option6: "Necesito mejorar o reemplazar el sistema actual"
                        },
                        step2: {
                            title: "Paso 2",
                            question: "¿En qué situación estás?",
                            option1: "Lo gestionamos con Excel, WhatsApp o procesos manuales",
                            option2: "Tenemos un sistema pero no nos alcanza",
                            option3: "Estamos creciendo y la operación se está desordenando",
                            option4: "Queremos profesionalizar la operación"
                        },
                        step3: {
                            title: "Paso 3",
                            question: "¿Qué tan urgente es?",
                            option1: "Solo estoy explorando",
                            option2: "Me gustaría resolverlo en los próximos meses",
                            option3: "Necesito empezar en las próximas semanas"
                        },
                        step4: {
                            title: "Paso 4",
                            name: "Nombre",
                            company: "Empresa",
                            whatsapp: "WhatsApp",
                            submit: "Enviar",
                            success: "¡Gracias! Tu solicitud ha sido enviada. Nos pondremos en contacto pronto."
                        },
                        next: "Siguiente",
                        back: "Atrás"
                    }
                },
            },
            en: {
                translation: {
                    nav: {
                        about: "About Us",
                        services: "Services",
                        technology: "Technology",
                        portfolio: "Portfolio",
                        contact: "Contact",
                        start: "Request Proposal"
                    },
                    hero: {
                        title1: "Systems that",
                        titleAccent: "drive",
                        title2: "your business.",
                        cta: "Request Proposal",
                        scroll: "Scroll"
                    },
                    about: {
                        title: "We are Kubbo",
                        desc1: "We are <strong>Santiago & Facundo</strong>. We founded Kubbo by combining experience in management and software development applied to business.",
                        desc2: "Together with our team of developers, we design custom systems for organizations that need to organize their operations and automate processes. More than 25 years of experience in technology applied to business support our work.",
                        years: "Years of Exp",
                        projects: "Projects",
                        custom_systems: "Custom Systems",
                        team: "Founders",
                        facundo: "Facundo Arteaga Solá",
                        santiago: "Santiago Cucher"
                    },
                    about_us: {
                        label: "Who We Are",
                        title: "Passion for ",
                        titleAccent: "digital excellence",
                        desc: "We are a multidisciplinary team of experts dedicated to creating technological solutions that not only work but transform businesses.",
                        story_title: "Our Story",
                        story_desc: "We started as a small group of developers with a big ambition: to democratize access to high-quality software. Today, we are strategic partners for companies looking to lead the digital era.",
                        mission_title: "Our Mission",
                        mission_desc: "Our mission is to empower businesses through technology, simplifying complex processes and creating memorable digital experiences.",
                    },
                    features: {
                        label: "Our Services",
                        title: "Solutions that",
                        titleAccent: "transform",
                        desc: "We develop custom digital tools to take your business to the next level.",
                        f1_title: "Web Apps",
                        f1_desc: "High-performance and scalable web application development.",
                        f2_title: "Excel to Systems",
                        f2_desc: "We transform your manual processes and spreadsheets into robust automated platforms.",
                        f3_title: "Websites",
                        f3_desc: "Design and development of corporate websites that stand out and convert.",
                        f4_title: "Mobile Apps",
                        f4_desc: "Smooth native applications for iOS and Android using the latest technologies.",
                        f5_title: "Legacy Systems",
                        f5_desc: "We modernize your legacy tools to modern architectures without data loss.",
                        f6_title: "Artificial Intelligence",
                        f6_desc: "Power your business with custom AI solutions integrated into your workflows."
                    },
                    portfolio: {
                        label: "Portfolio",
                        title: "Projects that",
                        titleAccent: "speak for us",
                        p1_title: "SGO - CASF",
                        p1_category: "Web App",
                        p1_desc: "Comprehensive management system for the Santa Fe Bar Association.",
                        p1_detail: "Developed to modernize the association's administrative management. The system centralizes registrations, payments, ethical procedures, and digital files into a fast and secure platform. It replaced manual processes and obsolete systems, improving operational efficiency by 70%.",
                        p1_tech: ["React", "Next.js", "PostgreSQL", "Tailwind CSS"],
                        p2_title: "ProFly",
                        p2_category: "SaaS Platform",
                        p2_desc: "Intelligent Exam Generator with dynamic balancing algorithm.",
                        p2_detail: "Multitenant SaaS platform designed to automate the creation and management of professional academic evaluations. Innovation: Dynamic balancing algorithm that generates unique exams by intelligently combining difficulty levels and question types (multiple choice, T/F, open). Functionality: Professional PDF export with dynamic institutional branding, security digital signatures, and full audit log.",
                        p2_tech: ["Next.js 14", "NestJS", "Prisma", "PostgreSQL"],
                        p3_title: "Macher S.A.S.",
                        p3_category: "Logistics Management",
                        p3_desc: "Full fleet control and real-time dispatch optimization.",
                        p3_detail: "Comprehensive platform designed for critical supply chain optimization. The system centralizes dispatch management, cargo control, and advanced unit telemetry. We implemented route optimization algorithms and an intuitive dashboard that reduces operational coordination times by 40%, transforming traditional logistics into an intelligent and scalable operation.",
                        p3_tech: ["React", "Next.js 14", "NestJS", "PostgreSQL", "Google Maps API"],
                        p4_title: "Predictive Logistics",
                        p4_category: "Web App",
                        p4_desc: "Centralized system for fleet management and route optimization using AI algorithms.",
                        p5_title: "Headless E-commerce",
                        p5_category: "Web Sites",
                        p5_desc: "Modern and ultra-fast architecture for fashion retail with full stock integration.",
                        p6_title: "Health & Care App",
                        p6_category: "Mobile Apps",
                        p6_desc: "Native application for appointment management and telemedicine with simplified user experience.",
                        cta: "Request Proposal",
                    },
                    cta: {
                        title: "Ready to take your logistics to the next level?",
                        desc: "Join the brands that are growing fastest with Kubbo. No complicated contracts, cutting-edge technology, and the best team.",
                        demo: "Request Proposal",
                        rates: "View Rates"
                    },
                    footer: {
                        desc: "Systems that\ndrive\nyour business.",
                        newsletter: "Subscribe to Newsletter",
                        newsletterDesc: "Get the latest news on development and technology.",
                        emailPlaceholder: "Your email",
                        rights: "© 2024 Kubbo Technologies. All rights reserved.",
                        terms: "Terms and conditions",
                        privacy: "Privacy",
                        explore: "Explore",
                        company: "Company",
                        contactUs: "contact us"
                    },
                    popup: {
                        step1: {
                            title: "Step 1",
                            question: "Which of these situations best describes your business today?",
                            option1: "Information is messy and I need to centralize it",
                            option2: "I waste time on repetitive tasks",
                            option3: "I need to integrate tools that don't connect",
                            option4: "I don't have clear control over what's happening in the business",
                            option5: "I want to apply AI but don't know how",
                            option6: "I need to improve or replace the current system"
                        },
                        step2: {
                            title: "Step 2",
                            question: "What's your current situation?",
                            option1: "We manage with Excel, WhatsApp, or manual processes",
                            option2: "We have a system but it's not enough",
                            option3: "We are growing and operations are getting disorganized",
                            option4: "We want to professionalize operations"
                        },
                        step3: {
                            title: "Step 3",
                            question: "How urgent is it?",
                            option1: "I'm just exploring",
                            option2: "I'd like to solve it in the coming months",
                            option3: "I need to start in the coming weeks"
                        },
                        step4: {
                            title: "Step 4",
                            name: "Name",
                            company: "Company",
                            whatsapp: "WhatsApp",
                            submit: "Send",
                            success: "Thank you! Your request has been sent. We will contact you soon."
                        },
                        next: "Next",
                        back: "Back"
                    }
                },
            },
        },
    });

export default i18n;
