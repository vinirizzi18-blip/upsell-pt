import React, { useEffect } from 'react';
import { CheckCircle2, AlertTriangle, Star } from 'lucide-react';
import { TESTIMONIALS } from './constantes';

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

      <div className="max-w-2xl mx-auto px-4 mt-6">
        <div className="flex flex-col items-center gap-2">
          <p className="text-green-600 text-sm font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Passo 2 de 3
          </p>
          <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden border border-slate-300">
            <div className="h-full bg-green-500 w-[80%] transition-all duration-1000"></div>
          </div>
          <p className="text-xs font-bold text-slate-500 mt-1">80%</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-8">
        <div className="bg-[#fff9db] border border-[#fadb5f] rounded-lg p-6 text-center space-y-3">
          <p className="text-slate-800 text-sm md:text-base leading-tight">
            <span className="font-bold">⚠️ Estás prestes a finalizar a tua encomenda.</span><br />
            Lê com atenção — se fechares esta página, perderás esta oferta.
          </p>
          <p className="text-slate-800 text-sm md:text-base">
            A tua encomenda <span className="font-bold">ainda não está concluída.</span> Não feches esta página — esta oferta está disponível apenas agora.
          </p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 mt-12 text-center">
        <h1 className="text-2xl md:text-5xl font-extrabold text-slate-800 leading-tight mb-10 max-w-5xl mx-auto">
          Já tens as receitas… mas sabes como <span className="text-green-600">organizar o congelador</span> para garantir refeições prontas durante os próximos 2 meses?
        </h1>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=1000" alt="Mulher" className="w-full h-auto block" />
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=1000" alt="Calendário" className="w-full h-auto block" />
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-left space-y-8 text-slate-700 leading-relaxed">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-6">
            <p className="text-lg">Ter 250 receitas é o primeiro passo. Mas sem um plano de execução, o teu congelador vai continuar vazio.</p>
            <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-green-500 italic font-bold text-slate-900">
              "Como é que organizo as compras e o preparo para cozinhar apenas uma vez e ter a semana toda resolvida?"
            </div>
            <p className="text-lg">Para resolver isto, criei o <span className="text-green-600 font-bold">Guia de Organização Pro</span>.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-800">O que vais receber:</h3>
            <ul className="grid gap-4">
              <li className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <CheckCircle2 size={24} className="text-green-500 flex-shrink-0 mt-1" />
                <div><span className="font-bold text-slate-900">Calendário de Preparação:</span> Cozinha a semana toda em 2h.</div>
              </li>
              <li className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <CheckCircle2 size={24} className="text-green-500 flex-shrink-0 mt-1" />
                <div><span className="font-bold text-slate-900">Listas de Compras Inteligentes:</span> Quantidades exatas para o mercado.</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto px-4">
          <div className="bg-[#fff9f2] border-l-[6px] border-[#f97316] rounded-r-2xl p-8 shadow-sm">
            <p className="text-xl md:text-2xl text-slate-800 font-semibold">
              🎯 Fora desta página é <span className="text-red-600 line-through">97€</span>, hoje você leva por apenas <span className="text-green-600 font-extrabold">17€</span>.
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-md mx-auto">
          <img src="https://iili.io/qFCDIEb.png" alt="Prova Social" className="w-full h-auto rounded-[2.5rem] shadow-2xl" />
        </div>

        <section className="mt-20 bg-white rounded-[3rem] p-10 shadow-sm border border-slate-100">
          <h2 className="text-3xl font-black text-slate-800 mb-12">✨ O que dizem as nossas clientes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-50 p-8 rounded-[2rem] text-left">
                <p className="text-slate-600 italic mb-8">"{t.content}"</p>
                <div className="flex items-center gap-4 border-t pt-6">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="font-bold text-slate-800">{t.name}</p>
                    <div className="flex text-yellow-400"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-20 max-w-4xl mx-auto px-4">
          <div className="bg-[#fff5f5] border border-[#ff4d4d] rounded-2xl p-10 md:p-14 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-[#b91c1c] mb-8">🔥 Atenção!</h2>
            <p className="text-lg md:text-2xl text-slate-700 mb-8">
              Hoje, somente nesta página, você tem a oportunidade de adquirir o <span className="font-bold uppercase">Guia de Organização Pro</span> por apenas <span className="text-[#22c55e] font-black">17€</span>.
            </p>
            <p className="text-lg md:text-2xl font-bold text-[#b91c1c]">Se fechar ou sair desta página, não conseguirá mais esta promoção exclusiva.</p>
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <div id="hotmart-sales-funnel" className="w-full max-w-2xl"></div>
        </div>
      </main>

      <footer className="mt-40 border-t border-slate-200 py-20 text-center opacity-30">
        <p className="text-[10px] uppercase tracking-widest">© 2026 Guia de Organização Pro. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
