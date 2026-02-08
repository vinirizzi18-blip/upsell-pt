
import React from 'react';
import { 
  CheckCircle2, 
  AlertTriangle,
  Star
} from 'lucide-react';
import { TESTIMONIALS, BONUSES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] pb-20 text-slate-900">
      {/* 1. Alerta Vermelho Superior */}
      <div className="bg-[#ff0000] py-2 px-4 text-center">
        <p className="text-white font-black text-xs md:text-sm tracking-tighter flex items-center justify-center gap-2 uppercase">
          <AlertTriangle size={16} fill="white" className="text-red-600" />
          ESPERE! A SUA ENCOMENDA AINDA NÃO ESTÁ CONCLUÍDA...
        </p>
      </div>

      {/* 2. Barra de Progresso */}
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

      {/* 3. Caixa de Aviso Amarela */}
      <div className="max-w-3xl mx-auto px-4 mt-8">
        <div className="bg-[#fff9db] border border-[#fadb5f] rounded-lg p-6 text-center space-y-3">
          <p className="text-slate-800 text-sm md:text-base leading-tight">
            <span className="font-bold">⚠️ Está prestes a concluir a sua encomenda.</span><br />
            Leia tudo com atenção — esta página desaparecerá se a fechar.
          </p>
          <p className="text-slate-800 text-sm md:text-base">
            A sua encomenda <span className="font-bold">ainda não está concluída.</span> Não feche esta página — esta oferta aparece apenas <span className="underline font-bold italic">uma vez!</span>
          </p>
        </div>
      </div>

      {/* 4. Headline e Imagens Lado a Lado */}
      <main className="max-w-6xl mx-auto px-4 mt-12 text-center">
        <h1 className="text-2xl md:text-5xl font-extrabold text-slate-800 leading-tight mb-10 max-w-5xl mx-auto">
          🥗 Descubra o <span className="text-green-600">Método Prático de 8 Semanas</span> que vai acelerar os seus resultados na perda de peso
        </h1>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Imagem da Mulher */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=1000&auto=format&fit=crop" 
              alt="Mulher saudável e feliz" 
              className="w-full h-auto block"
            />
          </div>

          {/* Mockup do Produto */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img 
              src="https://iili.io/fbyByEx.md.jpg" 
              alt="Mockup do Método de 8 Semanas" 
              className="w-full h-auto block"
            />
          </div>
        </div>

        {/* 5. Texto de Cópia e Benefícios */}
        <div className="mt-16 max-w-3xl mx-auto text-left space-y-8 text-slate-700 leading-relaxed">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <p className="text-xl font-medium text-slate-900 mb-4">
              Potencie os seus resultados com o <span className="text-green-600 font-bold">Método de 8 Semanas com Refeições Congeladas.</span>
            </p>
            <p className="text-lg">
              Esta ementa prática, com planos semanais prontos a usar, foi desenhada para acelerar a sua transformação sem sacrificar o seu tempo ou o prazer de comer bem.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-800">O que vai conseguir alcançar:</h3>
            <ul className="grid md:grid-cols-1 gap-4">
              {[
                "Perda de peso constante e natural em 8 semanas",
                "Poupança real de tempo (cozinhe apenas uma vez por semana)",
                "Controlo total das calorias com pratos deliciosos",
                "Receitas exclusivas testadas e aprovadas por nutricionistas",
                "Aumento imediato da energia e disposição diária"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                  <CheckCircle2 size={24} className="text-green-500 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 6. Box de Preço */}
        <div className="mt-16 max-w-3xl mx-auto px-4">
          <div className="bg-[#fff9f2] border-l-[6px] border-[#f97316] rounded-r-2xl p-6 md:p-8 shadow-sm flex items-center justify-center text-center">
            <p className="text-lg md:text-2xl text-slate-800 font-semibold leading-relaxed">
              <span className="mr-2">🎯</span>
              Fora desta página é <span className="text-red-600 line-through font-bold">97€</span>, hoje você leva por apenas <span className="text-green-600 font-extrabold">17€</span>.
            </p>
          </div>
        </div>

        {/* Imagem de Prova Social Extra */}
        <div className="mt-20 max-w-md mx-auto px-4">
          <img 
            src="https://iili.io/fbyHO5G.md.jpg" 
            alt="Resultados e Prova Social" 
            className="w-full h-auto rounded-[2.5rem] shadow-2xl"
          />
        </div>

        {/* 7. Depoimentos */}
        <section className="mt-20 bg-white rounded-[3rem] p-10 shadow-sm border border-slate-100">
          <h2 className="text-3xl font-black text-slate-800 mb-12">
            ✨ O que dizem as nossas clientes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-50 p-8 rounded-[2rem] text-left relative">
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 leading-relaxed italic mb-8">"{t.content}"</p>
                <div className="flex items-center gap-4 border-t pt-6">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full shadow-sm" />
                  <div>
                    <p className="font-bold text-slate-800">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Aviso de Atenção Modelado de acordo com a Imagem de Referência */}
        <div className="mt-20 max-w-4xl mx-auto px-4 text-center">
          <div className="bg-[#fff5f5] border border-[#ff4d4d] rounded-2xl p-10 md:p-14 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-[#b91c1c] flex items-center justify-center gap-3 mb-8">
              <span className="text-4xl">🔥</span> Atenção!
            </h2>
            <p className="text-lg md:text-2xl text-slate-700 leading-relaxed mb-8">
              Hoje, somente nesta página, você tem a oportunidade de adquirir o <br className="hidden md:block" />
              <span className="font-bold text-slate-900 uppercase">Método Prático de 8 Semanas + 3 Bónus</span> por apenas <span className="text-[#22c55e] font-black">17€</span>.
            </p>
            <p className="text-lg md:text-2xl font-bold text-[#b91c1c]">
              Se fechar ou sair desta página, não conseguirá mais esta promoção exclusiva.
            </p>
          </div>
        </div>

        {/* 8. Bónus Especiais */}
        <section className="mt-12 bg-[#f2fff6] border-4 border-green-200 rounded-[3.5rem] p-10 md:p-16 text-center">
          <h2 className="text-green-600 font-black text-3xl md:text-4xl uppercase mb-6">
            🎁 Bónus Exclusivos Gratuitos
          </h2>
          <p className="text-slate-600 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
            Ao garantir o <span className="font-bold">Plano de 8 Semanas por apenas 17€</span>, também receberá acesso a <span className="text-green-600 font-bold">3 bónus gratuitos</span> que aceleram ainda mais os seus resultados.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {BONUSES.map((b, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 flex flex-col items-center group transition-transform duration-300">
                <div className="w-full aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-slate-50">
                   <img src={b.img} alt={b.title} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-slate-800 text-lg mb-3">{b.icon} {b.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed text-center">{b.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 10. Call to Action Final - Limpo sem selos extras */}
        <section className="mt-24 space-y-12 flex flex-col items-center">
          <div className="w-full max-w-2xl">
            <button className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white py-8 px-4 rounded-[2rem] font-black text-2xl md:text-3xl shadow-2xl transform active:scale-95 transition-all uppercase tracking-tighter leading-tight">
              SIM! QUERO TER MAIS RESULTADOS COM O PLANO
            </button>
          </div>
          
          <button className="text-slate-400 hover:text-slate-600 font-bold text-sm md:text-base uppercase underline decoration-2 underline-offset-4 transition-colors max-w-xl">
            NÃO, NÃO QUERO TER MAIS RESULTADOS COM O PLANO.
          </button>
        </section>

      </main>
<!-- HOTMART - Sales Funnel Widget -->
<!--- sales funnel container --->
<div id="hotmart-sales-funnel"></div>
      <footer className="mt-40 border-t border-slate-200 py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-6 opacity-30">
           <p className="text-[10px] text-slate-500 font-medium uppercase tracking-[0.2em]">
             Aviso Legal: Os resultados podem variar. Consulte sempre um profissional de saúde.
           </p>
           <p className="text-[10px] text-slate-500 font-medium">
             © 2026 Método Prático 8 Semanas. Todos os direitos reservados.
           </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
