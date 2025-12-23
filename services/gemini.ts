
import { GoogleGenAI } from "@google/genai";
import { BRAND_INFO, OUTLETS, SAMPLE_MENU } from "../data";

// Initialize the GoogleGenAI client using the API key from environment variables as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the "CDH Concierge", an AI assistant for Café Delhi Heights (CDH).
Your tone is friendly, warm, energetic, and professional.
Context about CDH:
- Founded: ${BRAND_INFO.founded} by ${BRAND_INFO.founders.join(' & ')}.
- Philosophy: Comfort dining, vibrant ambiance, inclusivity.
- Signature Dishes: Juicy Lucy Burger, Butter Chicken Pasta, ISBT Makhani Maggi.
- Locations: ${OUTLETS.map(o => o.name).join(', ')}.
- Menu style: Global comfort with Indian twists.

Guidelines:
1. Use the provided context to answer questions about store locations, hours, and brand history.
2. If asked for recommendations, suggest items from the sample menu or describe the general style (Indian classics, fusion, burgers).
3. If the user asks about something not in the data, politely say you're focusing on CDH but can try to help generally.
4. Keep responses concise and engaging.
`;

export const getGeminiResponse = async (userPrompt: string, history: { role: string; parts: string[] }[] = []) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({ role: h.role === 'model' ? 'model' : 'user', parts: [{ text: h.parts[0] }] })),
        { parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    // Access the text property directly from the GenerateContentResponse.
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble connecting right now, but I'm here to help with all things Café Delhi Heights! Please try again in a moment.";
  }
};

export const getMenuRecommendation = async (preferences: string) => {
  try {
    // Fix: Using standard JSON.stringify instead of incorrect tsStringify on line 48.
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User preferences: ${preferences}. Based on the menu: ${JSON.stringify(SAMPLE_MENU)}, suggest 3 specific items with descriptions.`,
      config: {
        systemInstruction: "You are a gourmet food recommender for Café Delhi Heights. Be appetizing.",
      }
    });
    return response.text;
  } catch (error) {
    return "The Juicy Lucy Burger is always a great choice!";
  }
};
