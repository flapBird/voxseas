import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guideSchema = z.object({
  title: z.string(),
  shortTitle: z.string(),
  description: z.string(),
  eyebrow: z.string(),
  icon: z.string(),
  updated: z.string(),
  updatedISO: z.iso.date().optional(),
  art: z.object({ alt: z.string(), source: z.url() }).optional(),
  quickAnswer: z.string(),
  quickAnswerLink: z.object({ href: z.string(), label: z.string() }).optional(),
  related: z.array(z.string()).default([]),
  faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: guideSchema,
});

const en = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/en' }),
  schema: guideSchema,
});

export const collections = { guides, en };
