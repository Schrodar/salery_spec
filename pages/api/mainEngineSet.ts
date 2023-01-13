import { NextApiRequest, NextApiResponse } from 'next';
import Hmsb from '../../model/MainEngineStarbord';
import connectMongodb from '../../utils/connectMongo';

export default async function mainEngineSet(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongodb();
    console.log('in set');
    const _id: string = '63c1abb008b87a2d97b0398a';
    const doc = await Hmsb.getDocument(_id);
    const setWorkingHours = await doc.set(9540, 'lastService');
    console.log(setWorkingHours);
    res.send(JSON.stringify(setWorkingHours));
  } catch (error) {
    console.log(error);
  }
}
