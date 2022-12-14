import { NextApiRequest, NextApiResponse } from 'next';
import UserDto from '../../dtos/adduser-dtos';
import User from '../../model/User';
import connectMongodb from '../../utils/connectMongo';

const bcrypt = require('bcrypt');

export default async function addUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongodb();
    const { name, email, password } = req.body as UserDto;
    const newPass: string = await bcrypt.hash(password, 8);

    let user = new User({
      name,
      email,
      password: newPass,
      tokens: [],
    });

    await user
      .save()
      .then()
      .catch((error: any) => console.log(error));
    res.json({ user });
  } catch (error) {
    res.status(500);
  }
}
