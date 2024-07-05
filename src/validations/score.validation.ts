import Joi from 'joi';

export const scoreSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.base': 'Имя должно быть строкой.',
    'string.empty': 'Имя не может быть пустым.',
    'any.required': 'Имя является обязательным полем.',
  }),
  score: Joi.number().required().messages({
    'number.base': 'Очки должны быть числом.',
    'number.empty': 'Очки не могут быть пустыми.',
    'any.required': 'Очки являются обязательным полем.',
  }),
});
