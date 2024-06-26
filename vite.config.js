import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    define: {
      "process.env.API_KEY": JSON.stringify(env.API_KEY),
      "process.env.OPENAI_API_KEY": JSON.stringify(env.OPENAI_API_KEY),
    },
  };
});
