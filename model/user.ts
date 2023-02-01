import mongoose, { Schema, model } from "mongoose";
const bcrypt = require("bcrypt");
import {
  IUser,
  UserModel,
  IUserMethods,
} from "../interface/userInterface/IUser";

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
      },
    },
  ],
});

userSchema.static(
  "hashPassword",
  function hashPassword(password: string): string {
    return bcrypt.hashSync(password);
  }
);

userSchema.static(
  "getUserByEmail",
  async function getUserByEmail(email: string, password: string) {
    try {
      const user = await User.findOne({ email }, "password");

      if (user?.password !== undefined && !user) {
        throw new Error("No user found");
      }

      return user;
    } catch (error) {
      console.log(error);
    }
  }
);

userSchema.method(
  "comparePassword",
  async function comparePassword(password: string, userPwd: string) {
    const isvalid = await bcrypt.compare(password, userPwd);

    return isvalid;
  }
);

const User =
  (mongoose.models.User as UserModel) ||
  model<IUser, UserModel>("User", userSchema);

export default User;
