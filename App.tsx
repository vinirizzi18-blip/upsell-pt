import React, { useEffect } from 'react';
import { CheckCircle2, AlertTriangle, Star } from 'lucide-react';

const App = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // @ts-ignore
      if (window.checkoutElements) {
        // @ts-ignore
        window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    { name: "Beatriz Antunes", content: "As 250 receitas são ótimas, mas o que realmente mudou a minha rotina foi este Guia. Agora faço as compras em 15 min.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100" },
    { name: "Mariana Fonseca", content: "Consigo preparar as refeições da semana toda em pouco mais de 2 horas. O meu congelador nunca esteve tão organizado.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" },
    { name: "Catarina Sobral", content: "Ter os macros detalhados de cada prato facilitou tudo. É o manual de instruções que faltava às receitas.", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100" }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] pb-20 text-slate-900 font-sans">
      {/* 1. Alerta Vermelho */}
      <div className="bg-[#ff0000] py-2 px-4 text-center">
        <p className="text-white font-black text-xs md:text-sm tracking-tighter flex items-center justify-center gap-2 uppercase">
          <AlertTriangle size={16} fill="white" className="text-red-600" />
          ESPERA! A TUA ENCOMENDA AINDA NÃO FOI FINALIZADA...
        </p>
      </div>

      {/* 2. Progresso */}
      <div className="max-w-2xl mx-auto px-4 mt-6">
        <div className="flex flex-col items-center gap-2">
          <p className="text-green-600 text-sm font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Passo 2 de 3
          </p>
          <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden border border-slate-300">
            <div className="h-full bg-green-500 w-[80%]"></div>
          </div>
          <p className="text-xs font-bold text-slate-500 mt-1">80%</p>
        </div>
      </div>

      {/* 3. Aviso Amarelo */}
      <div className="max-w-3xl mx-auto px-4 mt-8">
        <div className="bg-[#fff9db] border border-[#fadb5f] rounded-lg p-6 text-center">
          <p className="text-slate-800 text-sm md:text-base font-bold">⚠️ Estás prestes a finalizar a tua encomenda.</p>
          <p className="text-slate-800 text-sm md:text-base mt-2">Não feches esta página — esta oferta está disponível apenas agora.</p>
        </div>
      </div>

      {/* 4. Headline */}
      <main className="max-w-6xl mx-auto px-4 mt-12 text-center">
        <h1 className="text-2xl md:text-5xl font-extrabold text-slate-800 leading-tight mb-10">
          Já tens as receitas… mas sabes como <span className="text-green-600">organizar o congelador</span> para garantir refeições prontas?
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <img src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=1000" className="rounded-[2.5rem] shadow-2xl" alt="Saúde" />
          <img src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=1000" className="rounded-[2.5rem] shadow-2xl" alt="Calendário" />
        </div>

        {/* 5. Benefícios */}
        <div className="max-w-3xl mx-auto text-left space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <p className="text-lg">Ter 250 receitas é o primeiro passo. Mas sem um plano de execução, o teu congelador vai continuar vazio.</p>
          </div>
          <div className="grid gap-4">
            {["Calendário de Preparação", "Listas de Compras Inteligentes", "Contagem de Macros"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <CheckCircle2 className="text-green-500" />
                <span className="font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Preço */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-[#fff9f2] border-l-[6px] border-[#f97316] rounded-r-2xl p-8 shadow-sm">
            <p className="text-xl md:text-2xl font-bold">
              🎯 De <span className="text-red-600 line-through">97€</span> por apenas <span className="text-green-600 text-3xl">17€</span>.
            </p>
          </div>
        </div>

        {/* 7. Depoimentos */}
        <section className="mt-20 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-left">
              <p className="text-slate-600 italic mb-6">"{t.content}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} className="w-10 h-10 rounded-full" alt={t.name} />
                <span className="font-bold text-sm">{t.name}</span>
              </div>
            </div>
          ))}
        </section>

        {/* 8. Aviso de Atenção */}
        <div className="mt-20 bg-[#fff5f5] border border-[#ff4d4d] rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-[#b91c1c] mb-4">🔥 Atenção!</h2>
          <p className="text-lg">Se sair desta página, perderá esta promoção exclusiva de 17€.</p>
        </div>

        {/* 9. Hotmart */}
        <div id="hotmart-sales-funnel" className="mt-16 min-h-[200px]"></div>
      </main>
    </div>
  );
};

export default App;
