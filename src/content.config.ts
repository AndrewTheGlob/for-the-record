import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const entries = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/data/entries",
  }),

  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum([
      "TRAVEL",
      "FILM",
      "FOOD",
      "MUSIC",
      "LIFE",
    ]),
    location: z.string(),
    description: z.string(),
    cover: z.string().optional(),
  }),
});

export const collections = {
  entries,
};