const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const tools = [
  {
    functionDeclarations: [
      {
        name: "crearEvento",
        description: "Registra un nuevo evento en el calendario de Google",
        parameters: {
          type: "OBJECT",
          properties: {
            titulo: { type: "STRING" },
            fechaInicio: { type: "STRING", description: "Formato ISO (ej: 2026-05-10T10:00:00Z)" }
          },
          required: ["titulo", "fechaInicio"]
        }
      },
      {
        name: "guardarNota",
        description: "Guarda un recordatorio o tarea en la lista de pendientes",
        parameters: {
          type: "OBJECT",
          properties: {
            texto: { type: "STRING" }
          },
          required: ["texto"]
        }
      }
    ]
  }
];

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  tools
});

module.exports = model;