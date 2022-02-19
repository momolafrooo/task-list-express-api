import Joi from "joi";

export const StoreTaskValidation = Joi.object({
  name: Joi.string().min(3).max(255).required(),
});

export const UpdateTaskValidation = Joi.object({
  name: Joi.string().min(3).max(255).required(),
  status: Joi.string().min(4).max(7),
});
