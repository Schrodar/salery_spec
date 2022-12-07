import { Document, Model } from 'mongoose';

export interface UserDocument extends Document {
  email: string;
  name: string;
  password: string;
}

export interface UserModel extends UserDocument {
  comparePassword(password: string): boolean;
}

export interface UserStatic extends Model<UserModel> {
  hashPassword(password: string): string;
  findByCredentials(email: string): string;
}
