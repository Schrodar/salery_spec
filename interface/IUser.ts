import { HydratedDocument, Model } from 'mongoose';

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
    email: string
  ): Promise<HydratedDocument<IUser, IUserMethods>>;
}

export interface UserModel extends Model<IUser, {}, IUserMethods> {
  hashPassword(
    password: string
  ): Promise<HydratedDocument<IUser, IUserMethods>>;
}
