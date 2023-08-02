const { Schema, model } = require("mongoose");

const Joi = require("joi");

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: String,
  },
  { versionKey: false }
);

const joiUserSchema = Joi.object({
  password: Joi.string().min(6).max(30).required(),
  email: Joi.string().min(5).max(30).required().email(),
  subscription: Joi.string().valid("starter", "pro", "business"),
  token: Joi.string(),
});



const UserModel = model("user", userSchema);

module.exports = { UserModel, joiUserSchema };