const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30),
  year: Joi.number().min(2000),
  author: Joi.string(),
  summary: Joi.string(),
  publisher: Joi.string(),
  pageCount: Joi.number(),
  readPage: Joi.number(),
  reading: Joi.boolean(),
});

module.exports = schema;
