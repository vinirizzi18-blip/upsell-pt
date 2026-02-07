
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getObjectionResponse = async (userDoubt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `O utilizador está numa página de upsell de um "Plano de Perda de Peso com Refeições Congeladas (8 semanas)".
      O produto oferece:
      - Ementa completa para 8 semanas (pequeno-almoço, almoço e jantar).
      - Receitas práticas como Omelete de Espinafres, Almôndegas de Peru e Papas de Aveia Proteicas.
      - Foco em praticidade (cozinhar uma vez e ter comida para a semana).
      - Refeições entre 250kcal e 450kcal.
      
      Dúvida do utilizador: "${userDoubt}"
      
      Responda em Português de Portugal (PT-PT) nativo. Seja motivador e resolva a dúvida em até 3 frases. Reforce que este método foi feito para pessoas ocupadas que querem perder peso sem abdicar do sabor. Use termos como 'pequeno-almoço' e 'ementa'.`,
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "Este plano foi desenhado para ser o caminho mais rápido e prático para o seu novo corpo. Aproveite a oportunidade!";
  } catch (error) {
    return "A nossa equipa de nutricionistas garante: este é o método mais prático que alguma vez viu. Vamos começar?";
  }
};
