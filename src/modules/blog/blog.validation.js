import Joi from "joi";

export const blogSchema = Joi.object({
  content: Joi.string().min(3).max(300).required(),
  _id: Joi.string().hex().length(24),
});
