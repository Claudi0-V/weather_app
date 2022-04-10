import { defineConfig } from "vite";
import path from "path";

const SERVER = "http://localhost:8080"

export default defineConfig({
  root: 'src',
    build: {
    // Relative to the root
    outDir: '../dist',
  },

});