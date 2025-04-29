import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "thryve.ai", // Unique app ID
  name: "Thryve.ai", // App name
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
