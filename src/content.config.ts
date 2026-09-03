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

    location: z.string(),

    description: z.string(),

    cover: z.string().optional(),

    tags: z.array(z.string()).default([]),

    rating: z.coerce.number().min(0).max(6).default(0),
  }),
});

export const collections = {
  entries,
};