
import React, { useState } from 'react';
import { getObjectionResponse } from '../services/geminiService';

const ObjectionHandler: React.FC = () => {
  const [doubt, setDoubt] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!doubt.trim()) return;
    
    setLoading(true);
    const response = await getObjectionResponse(doubt);
    setAnswer(response);
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-200">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <span className="text-blue-600">✨</span> Ainda tem alguma dúvida? Pergunte ao nosso Assistente
      </h3>
      <p className="text-slate-600 mb-6">
        Escreva a sua maior preocupação abaixo e veja como o Plano de 8 Semanas o pode ajudar.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={doubt}
          onChange={(e) => setDoubt(e.target.value)}
          placeholder="Ex: Não sei se terei tempo de preparar tudo..."
          className="w-full p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
          rows={3}
        />
        <button
          type="submit"
          disabled={loading || !doubt.trim()}
          className="w-full py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 disabled:opacity-50 transition-colors"
        >
          {loading ? 'A analisar...' : 'Obter Resposta Agora'}
        </button>
      </form>

      {answer && (
        <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-100 animate-fade-in text-left">
          <p className="text-green-900 leading-relaxed italic">"{answer}"</p>
        </div>
      )}
    </div>
  );
};

export default ObjectionHandler;
