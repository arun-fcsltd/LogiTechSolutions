import { GoogleGenAI } from "@google/genai";

// Initialize the API client. 
// We handle the case where the key is missing gracefully in the UI.
const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({ apiKey });
};

export const chatWithGemini = async (userMessage: string): Promise<string> => {
  const client = getClient();
  
  // Simulation for demo purposes if no key is present or error occurs
  if (!client) {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate latency
    return "I am the LogiTech AI Assistant. Since I'm currently running in a demo mode without an active API key, I can tell you that we offer comprehensive TMS solutions, custom driver apps, and fleet management software. Please contact our sales team for a full personalized demo!";
  }

  try {
    const model = client.models;
    // Using flash model for quick responses suitable for a chat widget
    const response = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: "You are a helpful, professional AI sales assistant for 'LogiTech Solutions', a technology agency for the trucking and logistics industry. You answer questions about custom software, CRMs, mobile apps for drivers, and fleet management dashboards. You are polite, concise, and always encourage the user to 'Book a Demo' or 'Contact Sales' for complex inquiries. Do not make up specific pricing.",
      }
    });

    return response.text || "I apologize, I didn't catch that. Could you please rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently experiencing high traffic. Please try again later or contact our support team directly.";
  }
};