import mongoose, { Schema, model } from 'mongoose';
const bcrypt = require('bcrypt');
import { UserStatic, UserModel, UserDocument } from '../interface/UserDocument';

export const userSchema: Schema = new Schema({
  email: { type: String, index: { unique: true }, required: true },
  name: { type: String, index: { unique: true }, required: true },
  password: { type: String, required: true },
});

userSchema.method('comparePassword', function (password: string): boolean {
  if (bcrypt.compareSync(password, this.password)) return true;
  return false;
});

userSchema.static('findByCredentials', async (email: string) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error('Unable to login');
  }

  return user;
});

userSchema.static('hashPassword', (password: string): string => {
  return bcrypt.hashSync(password);
});

export const User = model<UserModel, UserStatic>('User', userSchema);

export default User;
