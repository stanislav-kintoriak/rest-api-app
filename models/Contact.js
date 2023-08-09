const { Schema, model } = require("mongoose");
const Joi = require("joi");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false }
);

const patchSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const postSchema = Joi.object({
  name: Joi.string().required().min(1).max(30),
  email: Joi.string().required().email(),
  phone: Joi.string().required().min(6).max(14),
});

const ContactModel = model("contact", contactSchema);

const joiSchemas = {
  patchSchema,
  postSchema,
};

module.exports = {
  ContactModel,
  joiSchemas,
};
