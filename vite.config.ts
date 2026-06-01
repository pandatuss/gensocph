

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isVercel = process.env.NITRO_PRESET === "vercel" || !!process.env.VERCEL;

export default defineConfig(
  isVercel
    ? {
        nitro: {
          preset: "vercel",
          output: {
            dir: ".vercel/output",
            serverDir: ".vercel/output/functions/__server.func",
            publicDir: ".vercel/output/static",
          },
        },
      }
    : {},
);
