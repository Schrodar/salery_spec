import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { HmDto } from '../../dtos/adduser-dtos';
import Hmsb from '../../model/Hmsb';
import connectMongodb from '../../utils/connectMongo';

export default async function hmSb(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectMongodb();
    const {
      name,
      oil,
      oilCapacity,
      oilFilter,
      fuelFilter,
      machineNumber,
      airFilter,
      coolant,
      coolantCapacity,
      workingHours,
    } = req.body as HmDto;

    const Hm = new Hmsb({
      workingHours,
      name,
      oil,
      oilCapacity,
      oilFilter,
      fuelFilter,
      machineNumber,
      airFilter,
      coolant,
      coolantCapacity,
    });

    await Hm.save();

    res.send(Hm);
  } catch (error) {
    console.log(error);
  }
}
