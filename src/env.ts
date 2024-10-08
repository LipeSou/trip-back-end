import { z } from "zod";

import dotenv from 'dotenv';

dotenv.config();


const envSchema = z.object({
    DATABASE_URL: z.string().url(),
    API_BASE_URL: z.string().url(),
    WEB_BASE_URL: z.string().url(),
    PORT: z.coerce.number().default(3333),
})


const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error('Invalid environment variables:', _env.error.format());
  throw new Error('Invalid environment variables');
}

export const env = _env.data;