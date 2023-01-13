import { NextApiRequest, NextApiResponse } from 'next';
import UserDto from '../../dtos/userDtos/adduser-dtos';
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
    const uniqueEmail = await User.findOne({ email });
    const newPass: string = await bcrypt.hash(password, 8);

    if (uniqueEmail) {
      res.status(401).json({ message: 'Allready have a user with that email' });
    } else {
      let user = new User({
        name,
        email,
        password: newPass,
        tokens: [],
      });

      await user.save().then(() => res.send(200));
    }
  } catch (err: any) {
    console.log(err);
  }
}
