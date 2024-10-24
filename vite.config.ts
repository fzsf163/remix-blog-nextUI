import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import dotenv from "dotenv";
dotenv.config(); // load env vars from .env
export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
  define: {
    // CLOUDINARY_CLOUD_NAME: `"${process.env.CLOUDINARY_CLOUD_NAME}"`,
    // CLOUDINARY_CLOUD_PRESET: `"${process.env.CLOUDINARY_CLOUD_PRESET}"`,
    // SESSION_SECRET: `"${process.env.SESSION_SECRET}"`,
    "process.env.SESSION_SECRET": `"${process.env.SESSION_SECRET}"`,
    "process.env.CLOUDINARY_CLOUD_NAME": `"${process.env.CLOUDINARY_CLOUD_NAME}"`,
    "process.env.CLOUDINARY_CLOUD_PRESET": `"${process.env.CLOUDINARY_CLOUD_PRESET}"`,
  },
});
