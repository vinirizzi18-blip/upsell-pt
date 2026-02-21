import React, { useEffect } from 'react';
import { CheckCircle2, AlertTriangle, Star } from 'lucide-react';
import { TESTIMONIALS } from './constants';

const App: React.FC = () => {
  useEffect(() => {
    const initHotmart = () => {
      // @ts-ignore
      if (window.checkoutElements) {
        // @ts-ignore
        window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
      }
    };
    const timer = setTimeout(initHotmart, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] pb-20 text-slate-900">
      <div className="bg-[#ff0000] py-2 px-4 text-center">
        <p className="text-white font-black text-xs md:text-sm tracking-tighter flex items-center justify-center gap-2 uppercase">
          <AlertTriangle size={16} fill="white" className="text-red-600" />
          ESPERA! A TUA ENCOMENDA AINDA NÃO FOI FINALIZADA...
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-4 mt-6 text-center">
        <p className="text-green-600 text-sm font-bold flex items-center justify-center gap-1">
          <CheckCircle2 size={16} /> Passo 2 de 3
        </p>
        <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden border border-slate-300 mt-2">
          <div className="h-full bg-green-500 w-[80%]"></div>
        </div>
        <p className="text-xs font-bold text-slate-500 mt-1">80%</p>
      </div>

      <main className="max-w-6xl mx-auto px-4 mt-12 text-center">
        <h1 className="text-2xl md:text-5xl font-extrabold text-slate-800 leading-tight mb-10">
          Já tens as receitas… mas sabes como <span className="text-green-600">organizar o congelador</span> para garantir refeições prontas durante os próximos 2 meses?
        </h1>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=1000" className="rounded-[2.5rem] shadow-2xl w-full" alt="Mulher saudável" />
          <img src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=1000" className="rounded-[2.5rem] shadow-2xl w-full" alt="Calendário" />
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-left space-y-8 text-slate-700">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <p className="text-lg mb-4">Ter 250 receitas é o primeiro passo. Mas sem um plano de execução, o teu congelador vai continuar vazio.</p>
            <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-green-500 italic font-bold">
              "Como é que organizo as compras e o preparo para cozinhar apenas uma vez?"
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-[#fff9f2] border-l-[6px] border-[#f97316] rounded-r-2xl p-8 shadow-sm">
            <p className="text-xl md:text-2xl text-slate-800 font-semibold">
              🎯 Fora desta página é <span className="text-red-600 line-through">97€</span>, hoje você leva por apenas <span className="text-green-600 font-extrabold">17€</span>.
            </p>
          </div>
        </div>

        <div id="hotmart-sales-funnel" className="mt-12 w-full max-w-2xl mx-auto"></div>
      </main>
    </div>
  );
};

export default App;
