import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://andrewtheglob.github.io",
  base: "/for-the-record",
  trailingSlash: "always",

  devToolbar: {
    enabled: false,
  },
});