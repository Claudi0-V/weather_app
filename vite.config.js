import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "src",
  base: "/weather_app/",
  build: {
    outDir: "../dist", 
    emptyOutDir: true,
  },
});
