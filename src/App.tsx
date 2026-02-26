/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  CheckCircle2, 
  Star, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  X,
  Instagram
} from 'lucide-react';

// --- Configuration & Data ---
const CONFIG = {
  clinicName: "RENOVAR",
  doctorName: "Dra. Taciane Maria",
  profession: "Odontologia & Estética",
  city: "Pouso Alegre, MG",
  mapsUrl: "https://maps.app.goo.gl/CtZ1s3BbY5KDZ1K3A",
  whatsappUrl: "https://api.whatsapp.com/send?phone=5535999241804",
  instagramUrl: "https://www.instagram.com/renovar_clinic/",
  images: {
    logo: "https://i.imgur.com/BtBEEJe.jpeg",
    hero: "https://i.imgur.com/lyYr0z6.png",
    about: "https://i.imgur.com/amhbiJU.png",
    clinic: "https://i.imgur.com/Ed43ETZ.png",
    results: [
      "https://i.imgur.com/BCn06Ov.png",
      "https://i.imgur.com/X95YG0M.png",
      "https://i.imgur.com/TE7j1J5.png"
    ]
  }
};

// --- Components ---

const Button = ({ children, className = "", variant = "primary", href, ...props }: any) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg cursor-pointer";
  const variants = {
    primary: "bg-stone-900 text-white hover:bg-stone-800 shadow-stone-900/20",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-green-900/20",
    maps: "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-900/20",
    outline: "border border-stone-300 text-stone-800 hover:bg-stone-50"
  };

  const linkHref = href || CONFIG.whatsappUrl;

  return (
    <a 
      href={linkHref} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

const Section = ({ children, className = "", id = "" }: any) => (
  <section id={id} className={`py-16 md:py-24 px-6 md:px-8 ${className}`}>
    <div className="max-w-3xl mx-auto">
      {children}
    </div>
  </section>
);

const FadeIn = ({ children, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

// --- Main Application ---

export default function App() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (lightboxImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [lightboxImage]);

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-stone-800 font-sans selection:bg-stone-200">
      
      {/* 1. HERO SECTION */}
      <header className="relative min-h-[90vh] flex flex-col justify-end pb-12 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={CONFIG.images.hero} 
            alt="Dra. Renovar" 
            className="w-full h-full object-cover object-top md:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent" />
        </div>

        <div className="relative z-10 px-6 max-w-3xl mx-auto w-full text-white">
          <FadeIn>
            <div className="inline-block px-3 py-1 mb-4 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm">
              <span className="text-xs font-medium tracking-wider uppercase text-stone-100">
                {CONFIG.profession} • {CONFIG.city}
              </span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] mb-4">
              Somos a clínica Renovar
            </h1>
            
            <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-lg font-light leading-relaxed">
              Transformamos seu sorriso com segurança e naturalidade. Atendimento exclusivo focado na sua autoestima.
            </p>

            <div className="flex flex-col gap-3">
              <Button variant="whatsapp" className="w-full md:w-auto text-lg">
                <MessageCircle className="w-5 h-5" />
                Agendar primeira consulta gratuita
              </Button>
              <p className="text-xs text-stone-400 text-center md:text-left flex items-center justify-center md:justify-start gap-1.5">
                <Clock className="w-3 h-3" /> Resposta rápida • Sem compromisso
              </p>
            </div>
          </FadeIn>
        </div>
      </header>

      {/* 2. QUEM SOU EU (Autoridade) */}
      <Section className="bg-white">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={CONFIG.images.about} 
                  alt="Dra. Renovar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="font-serif text-3xl md:text-4xl mb-6 text-stone-900">
                Muito prazer, <span className="italic text-stone-500">{CONFIG.doctorName}</span>
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                Minha missão é proporcionar um atendimento odontológico que vai além do tratamento clínico. Acredito que cada sorriso conta uma história, e meu objetivo é ajudar você a contar a sua com mais confiança.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Especialista em Odontologia Estética",
                  "Atendimento humanizado e sem pressa",
                  "Tecnologia de ponta para seu conforto"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-700">
                    <CheckCircle2 className="w-5 h-5 text-stone-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* 3. RESULTADOS REAIS (Galeria) */}
      <Section className="bg-stone-50">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-3">Resultados Reais</h2>
            <p className="text-stone-500">Transformações que devolvem a confiança.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CONFIG.images.results.map((img, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-md group"
                onClick={() => setLightboxImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Resultado ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 text-white font-medium px-4 py-2 bg-black/30 backdrop-blur-md rounded-full transition-opacity">
                    Ver detalhes
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <p className="text-xs text-stone-400 text-center mt-6 italic">
            * Resultados podem variar de pessoa para pessoa. Imagens meramente ilustrativas de casos reais.
          </p>
        </FadeIn>
      </Section>

      {/* 4. POR QUE CONFIAR (Diferenciais) */}
      <Section className="bg-white">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl mb-10 text-center">Por que me escolher?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Avaliação Honesta",
                desc: "Transparência total sobre o que você realmente precisa, sem tratamentos desnecessários."
              },
              {
                icon: <MessageCircle className="w-6 h-6" />,
                title: "Comunicação Clara",
                desc: "Explico cada etapa do seu tratamento de forma simples, sem 'odontologês'."
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Foco no Resultado",
                desc: "Planejamento detalhado para alcançar a estética e função que você deseja."
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Respeito ao seu Tempo",
                desc: "Consultas agendadas com intervalo adequado para um atendimento exclusivo."
              }
            ].map((card, i) => (
              <div key={i} className="p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:border-stone-200 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-stone-800 shadow-sm mb-4">
                  {card.icon}
                </div>
                <h3 className="font-serif text-xl mb-2 text-stone-900">{card.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-20 px-6 bg-stone-900 text-white text-center">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Sua saúde bucal não pode esperar
          </h2>
          <p className="text-stone-300 mb-8 max-w-xl mx-auto">
            Agende agora sua avaliação inicial. É gratuita, sem compromisso e o primeiro passo para o sorriso que você merece.
          </p>
          <Button variant="whatsapp" className="w-full md:w-auto">
            <MessageCircle className="w-5 h-5" />
            Quero agendar minha consulta grátis
          </Button>
        </FadeIn>
      </section>

      {/* 6. COMO FUNCIONA */}
      <Section className="bg-white">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center">Como funciona</h2>
          <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-stone-100 md:before:hidden">
            {[
              {
                step: "01",
                title: "Envie uma mensagem",
                desc: "Clique no botão do WhatsApp e fale diretamente com nossa equipe."
              },
              {
                step: "02",
                title: "Agendamento Flexível",
                desc: "Escolhemos juntos o melhor horário para sua rotina."
              },
              {
                step: "03",
                title: "Avaliação Gratuita",
                desc: "Venha ao consultório, conheça a estrutura e receba seu plano de tratamento."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 relative">
                <div className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center font-serif font-medium shrink-0 z-10 ring-4 ring-white">
                  {item.step}
                </div>
                <div className="pt-1">
                  <h3 className="font-serif text-xl mb-2 text-stone-900">{item.title}</h3>
                  <p className="text-stone-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 p-4 bg-stone-50 rounded-lg text-center border border-stone-100">
            <p className="text-stone-600 font-medium flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              Primeira consulta 100% gratuita e sem compromisso
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* 7. MAIS PROVAS (Ambiente) */}
      <Section className="bg-stone-50">
        <FadeIn>
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl mb-3">Nosso Espaço</h2>
            <p className="text-stone-500">Um ambiente moderno e acolhedor esperando por você.</p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={CONFIG.images.clinic} 
              alt="Ambiente da Clínica" 
              className="w-full h-auto object-cover"
            />
            <div className="bg-white p-6">
              <p className="text-stone-600 italic text-center">
                "Preparamos cada detalhe para que você se sinta em casa."
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* 7.5. LOCALIZAÇÃO */}
      <Section className="bg-white">
        <FadeIn>
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl mb-3">Onde Estamos</h2>
            <p className="text-stone-500">Fácil acesso em Pouso Alegre</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 p-8 bg-stone-50 rounded-2xl border border-stone-100">
            <div className="w-16 h-16 rounded-full bg-stone-200 flex items-center justify-center text-stone-600">
              <MapPin className="w-8 h-8" />
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl text-stone-900 mb-2">{CONFIG.clinicName}</h3>
              <p className="text-stone-600 mb-6">{CONFIG.city}</p>
              <Button variant="maps" href={CONFIG.mapsUrl} className="w-full md:w-auto">
                <MapPin className="w-5 h-5" />
                Ver no Google Maps
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* 8. CTA FINAL */}
      <section className="py-24 px-6 bg-white text-center">
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">
              Vamos renovar seu sorriso?
            </h2>
            <p className="text-stone-600 text-lg mb-10">
              Não adie mais o cuidado que você merece. Clique abaixo e garanta seu horário exclusivo.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Button variant="whatsapp" className="w-full md:w-auto text-lg px-10 py-5 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                <MessageCircle className="w-6 h-6" />
                Agendar Primeira Consulta Gratuita
              </Button>
              <p className="text-sm text-stone-400 mt-2">
                Poucos horários disponíveis para esta semana
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="bg-stone-900 text-stone-400 py-12 px-6 border-t border-stone-800">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 mx-auto md:mx-0 border-2 border-stone-700">
               <img src={CONFIG.images.logo} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-white font-serif text-xl mb-1">{CONFIG.clinicName}</h3>
            <p className="text-sm mb-1">{CONFIG.profession}</p>
            <p className="text-sm flex items-center justify-center md:justify-start gap-1">
              <MapPin className="w-3 h-3" /> {CONFIG.city}
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href={CONFIG.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-stone-700 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href={CONFIG.whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-stone-700 hover:text-white transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-stone-800 text-center text-xs text-stone-600">
          <p>&copy; {new Date().getFullYear()} {CONFIG.clinicName}. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setLightboxImage(null)}
          >
            <button 
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImage} 
              alt="Zoom" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button (Mobile Only) */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-6 right-6 z-40 md:hidden"
      >
        <a 
          href={CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-green-900/30 hover:scale-110 transition-transform"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </motion.div>

    </div>
  );
}
