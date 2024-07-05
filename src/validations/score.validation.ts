import Joi from 'joi';

export const scoreSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.base': 'Name must be a string.',
    'string.empty': 'Name cannot be empty.',
    'any.required': 'Name is a required field.',
  }),
  score: Joi.number().required().messages({
    'number.base': 'Score must be a number.',
    'number.empty': 'Score cannot be empty.',
    'any.required': 'Score is a required field.',
  }),
});
