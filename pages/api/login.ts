import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../model/User';
import connectMongodb from '../../utils/connectMongo';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectMongodb();
    const { password, email } = req.body;
    const user = await User.getUserByEmail(email, password);

    if (user) {
      res.send(200);
    }

    throw new Error('login failed');
  } catch (error) {
    res.status(500);
  }
}
