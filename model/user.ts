import mongoose, { Model, Schema, HydratedDocument, model } from 'mongoose';
const bcrypt = require('bcrypt');

interface IUser {
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

interface IUserMethods {
  comparePassword(password: string, userPwd: string): string;
}

interface UserModel extends Model<IUser, {}, IUserMethods> {
  hashPassword(
    password: string
  ): Promise<HydratedDocument<IUser, IUserMethods>>;
  getUserByEmail(
    email: string,
    password: string
  ): Promise<HydratedDocument<IUser, IUserMethods>>;
}

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
  'hashPassword',
  function hashPassword(password: string): string {
    return bcrypt.hashSync(password);
  }
);

userSchema.static(
  'getUserByEmail',
  async function getUserByEmail(email: string, password: string) {
    try {
      const user = await User.findOne({ email }, 'password');

      if (!user) {
        throw new Error('No user found');
      }

      const isvalid = user.comparePassword(password, user.password);

      if (isvalid) {
        return user;
      }

      throw new Error('password was incorect');
    } catch (error) {
      console.log(error);
    }
  }
);

userSchema.method(
  'comparePassword',
  async function comparePassword(password: string, userPwd: string) {
    const isvalid = await bcrypt.compareSync(password, userPwd);
    return isvalid;
  }
);

// pga   så syns inte

const User =
  (mongoose.models.User as UserModel) ||
  model<IUser, UserModel>('User', userSchema);

export default User;
