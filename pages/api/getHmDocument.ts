import next, { NextApiRequest, NextApiResponse } from 'next';
import Hmsb from '../../model/MainEngineStarbord';
import connectMongodb from '../../utils/connectMongo';

export default async function getHmDocument(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongodb();
    const _id: string = '63c1ab7b08b87a2d97b03987';
    const doc = await Hmsb.getDocument(_id);
    const nextService = await doc.nextService();
    console.log(nextService);
    res.send(JSON.stringify({ nextService, doc }));
  } catch (error) {
    console.log(error);
  }
}
