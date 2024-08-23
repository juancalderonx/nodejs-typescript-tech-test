import 'dotenv/config';
import { z } from 'zod';

interface EnvVars {
  // APP
  PORT: number;
  ENVIRONMENT: string;

  // DATABASE
  DATABASE_HOST: string;
  DATABASE_NAME: string;
  DATABASE_USER: string;
  DATABASE_PASSWORD: string;
  DATABASE_PORT: number;
  DATABASE_SSL: boolean;
}

const MIN_PORT_NUMBER = 3000;
const MAX_PORT_NUMBER = 65536;

const envsSchema = z.object({
  PORT: z.coerce
    .number()
    .positive()
    .max(MAX_PORT_NUMBER, `Port should be >= 0 and < 65536`)
    .default(MIN_PORT_NUMBER),

  ENVIRONMENT: z.string().default('development'),

  DATABASE_HOST: z.string(),

  DATABASE_NAME: z.string(),

  DATABASE_USER: z.string(),

  DATABASE_PASSWORD: z.string(),

  DATABASE_PORT: z.coerce.number(),

  DATABASE_SSL: z.coerce.boolean(),
});

const envVars = envsSchema.parse({
  ...process.env,
}) as EnvVars;

export const Envs = {
  ENVIRONMENT: {
    PORT: envVars.PORT,
    ENVIRONMENT: envVars.ENVIRONMENT,
  },
  DATABASE: {
    HOST: envVars.DATABASE_HOST,
    NAME: envVars.DATABASE_NAME,
    USER: envVars.DATABASE_USER,
    PASSWORD: envVars.DATABASE_PASSWORD,
    PORT: envVars.DATABASE_PORT,
    SSL: envVars.DATABASE_SSL,
  },
};
