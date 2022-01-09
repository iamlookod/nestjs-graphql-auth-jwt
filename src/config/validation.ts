import * as Joi from 'joi';

export const validationSchema = Joi.object({
  IS_PRODUCTION: Joi.boolean().default(false),
  NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
  PORT: Joi.number(),
  DATABASE_URL: Joi.string().required(),
  REDIS_HOST: Joi.string().required(),
  REDIS_PORT: Joi.number().default(6379),
});
