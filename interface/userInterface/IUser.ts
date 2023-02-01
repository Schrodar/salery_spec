import { HydratedDocument, Model } from "mongoose";

export interface IUser {
  email: {
    type: String;
    unique: true;
    required: true;
  };
  name: {
    type: String;
    required: true;
  };
  password: {
    type: String;
    required: true;
  };
  tokens: [
    {
      token: {
        type: String;
        required: true;
      };
    }
  ];
}

export interface IUserMethods {
  comparePassword(
    password: string,
    userPwd: string | { type: String; required: true }
  ): boolean;
}

export interface UserModel extends Model<IUser, {}, IUserMethods> {
  hashPassword(
    password: string
  ): Promise<HydratedDocument<IUser, IUserMethods>>;
  getUserByEmail(
    email: string,
    password: string
  ): Promise<HydratedDocument<IUser, IUserMethods>>;
}
