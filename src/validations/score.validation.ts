import Joi from 'joi';

export const scoreSchema = Joi.object({
  name: Joi.string().required(),
  score: Joi.number().required(),
});
