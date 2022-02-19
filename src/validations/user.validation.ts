import Joi from "joi";

export const LoginValidation = Joi.object({
  email: Joi.string().email().min(5).max(255).required(),
  password: Joi.string().min(4).max(255).required(),
});

export const RegisterValidation = Joi.object({
  name: Joi.string().min(3).max(255).required(),
  email: Joi.string().email().min(5).max(255).required(),
  password: Joi.string().min(4).max(255).required(),
  passwordConfirmation: Joi.ref("password"),
});
