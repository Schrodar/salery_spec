import { NextApiRequest, NextApiResponse } from 'next';
import CreateUserDto from '../../dtos/adduser-dtos';
import User from '../../model/user';
import connectMongodb from '../../utils/connectMongo';

const bcrypt = require('bcrypt');

export default async function addUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongodb();
    const { name, email, password } = req.body as CreateUserDto;
    const newPass: string = await bcrypt.hash(password, 8);

    let user = {
      name,
      email,
      newPass,
      tokens: [],
    };
    let user2 = User.findByCredentials(password);
    console.log(user2);

    res.json({ user });
  } catch (error) {
    res.status(500);
  }
}
