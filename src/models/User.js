import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    image: { type: String },
    phone: { type: String },
    stressAddress: { type: String },
    postalCode: { type: String },
    city: { type: String },
    country: { type: String },
  },
  { timestamps: true }
);

export const User = models?.User || model("User", UserSchema);