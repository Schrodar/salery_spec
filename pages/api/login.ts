import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../model/user';

export default async function addUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { password, email } = req.body;

    let user = await User.findByCredentials(email);
    console.log(user);
    res.send(200);
  } catch (error) {
    res.status(500);
  }
}
