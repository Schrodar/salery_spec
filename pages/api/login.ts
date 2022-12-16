import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../model/User';
import connectMongodb from '../../utils/connectMongo';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectMongodb();
    const { password, email } = req.body;
    const user = await User.getUserByEmail(email, password);
    const haveMatch = user.comparePassword(password, user.password);
    if (haveMatch) {
      res.send(200);
    }
    throw new Error('wrong password');
  } catch (error) {
    res.status(405).end();
  }
}
