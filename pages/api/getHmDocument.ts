import next, { NextApiRequest, NextApiResponse } from 'next';
import Hmsb from '../../model/Hmsb';
import connectMongodb from '../../utils/connectMongo';

export default async function getHmDocument(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongodb();
    const _id: string = '63bef59895154666f1a568a2';
    const doc = await Hmsb.getDocument(_id);
    const nextService = await doc.nextService();
    console.log(nextService);
    res.send(JSON.stringify(nextService));
  } catch (error) {
    console.log(error);
  }
}
