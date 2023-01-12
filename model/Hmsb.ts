import mongoose, { Schema, model } from 'mongoose';
import NextSeviceClass from '../dtos/nextServiceClass-dto';
import { FemhundraTimmarsService } from '../dtos/FemhundraTimmars';
import {
  InterfaceHmSb,
  HmSbMethods,
  HmSbModel,
} from '../interface/hmSbInterface';
import { TusenTimmarsService } from '../dtos/TusenTimarsService';
import { TowTusenTimmarsService } from '../dtos/TowTusenTimars';
import { SexTusenTimmarsService } from '../dtos/SexTusenTimars';

const hmSbSchema = new Schema<InterfaceHmSb, HmSbModel, HmSbMethods>({
  workingHours: { type: Number },
  lastService: { type: String },
  name: { type: String },
  oil: { type: String },
  oilCapacity: { type: Number },
  oilFilter: { type: String },
  fuelFilter: { type: String },
  machineNumber: { type: String },
  airFilter: { type: String },
  coolant: { type: String },
  coolantCapacity: { type: Number },
});

hmSbSchema.method(
  'add',
  async function add(amount: number, operand: string) {}
);

hmSbSchema.method(
  'removeAmount',
  async function removeAmount(this: unknown, amount: number, operand: string) {}
);

hmSbSchema.method(
  'set',
  async function set(this: unknown, amount: number | string, operand: string) {}
);

hmSbSchema.method('nextService', async function nextService(this: unknown) {
  type Dto = {
    leftToService: number | null;
    serviceTyp: NextSeviceClass | null;
  };

  let nextServiceDto: Dto = {
    leftToService: null,
    serviceTyp: null,
  };

  if (this === undefined || this === null) throw new Error('no document found');

  var numb: number = this.workingHours;
  // get number of digits in number
  let numberOfDigits: number = Math.floor(Math.log(numb) / Math.LN10 + 1);

  if (numberOfDigits === 5) {
    let LoweNumbers: string = numb.toString();
    // remove first letter of LoweNumbers string
    LoweNumbers = LoweNumbers.slice(1);
    let backToNumber: number = parseInt(LoweNumbers);
    var numb: number = backToNumber;
  }

  if (numberOfDigits === 1) {
    let leftToService: number = 500 - numb;
    nextServiceDto.leftToService = leftToService;
    nextServiceDto.serviceTyp = FemhundraTimmarsService;
    return nextServiceDto;
  }

  if (numberOfDigits === 2) {
    let leftToService: number = 500 - numb;
    nextServiceDto.leftToService = leftToService;
    nextServiceDto.serviceTyp = FemhundraTimmarsService;
    return nextServiceDto;
  }

  if (numberOfDigits === 3) {
    if (numb < 500) {
      let leftToService: number = 500 - numb;
      nextServiceDto.leftToService = leftToService;
      nextServiceDto.serviceTyp = FemhundraTimmarsService;
      return nextServiceDto;
    } else {
      let leftToService: number = 1000 - numb;
      nextServiceDto.leftToService = leftToService;
      nextServiceDto.serviceTyp = TusenTimmarsService;
      return nextServiceDto;
    }
  }

  if (numberOfDigits === 4 || numberOfDigits === 5) {
    // convert numb to string
    let numb2: string = numb.toString();

    // remove first letter of numb2 string
    numb2 = numb2.slice(1);

    // convert numb2 to number
    let numb3 = parseInt(numb2);

    let getFirstDiget: string = numb.toString();
    // save first latter of string
    getFirstDiget = getFirstDiget.slice(0, 1);

    // convert getFirstDiget to number
    let getFirstDiget2 = parseInt(getFirstDiget);

    if (numb3 < 500) {
      let leftToService: number = 500 - numb3;
      nextServiceDto.leftToService = leftToService;
      nextServiceDto.serviceTyp = TusenTimmarsService;
      return nextServiceDto;
    } else {
      if (getFirstDiget2 === 1) {
        let leftToService: number = 1000 - numb3;
        nextServiceDto.leftToService = leftToService;
        nextServiceDto.serviceTyp = TowTusenTimmarsService;
        return nextServiceDto;
      }

      if (getFirstDiget2 === 2) {
        let leftToService: number = 1000 - numb3;
        nextServiceDto.leftToService = leftToService;
        nextServiceDto.serviceTyp = TusenTimmarsService;
        return nextServiceDto;
      }

      if (getFirstDiget2 === 3) {
        let leftToService: number = 1000 - numb3;
        nextServiceDto.leftToService = leftToService;
        nextServiceDto.serviceTyp = TowTusenTimmarsService;
        return nextServiceDto;
      }

      if (getFirstDiget2 === 4) {
        let leftToService: number = 1000 - numb3;
        nextServiceDto.leftToService = leftToService;
        nextServiceDto.serviceTyp = TusenTimmarsService;
        return nextServiceDto;
      }

      if (getFirstDiget2 === 5) {
        let leftToService: number = 1000 - numb3;
        nextServiceDto.leftToService = leftToService;
        nextServiceDto.serviceTyp = SexTusenTimmarsService;
        return nextServiceDto;
      }

      if (getFirstDiget2 === 6) {
        let leftToService: number = 1000 - numb3;
        nextServiceDto.leftToService = leftToService;
        nextServiceDto.serviceTyp = TusenTimmarsService;
        return nextServiceDto;
      }

      if (getFirstDiget2 === 7) {
        let leftToService: number = 1000 - numb3;
        nextServiceDto.leftToService = leftToService;
        nextServiceDto.serviceTyp = TowTusenTimmarsService;
        return nextServiceDto;
      }

      if (getFirstDiget2 === 8) {
        let leftToService: number = 1000 - numb3;
        nextServiceDto.leftToService = leftToService;
        nextServiceDto.serviceTyp = TusenTimmarsService;
        return nextServiceDto;
      }

      if (getFirstDiget2 === 9) {
        let leftToService: number = 1000 - numb3;
        nextServiceDto.leftToService = leftToService;
        nextServiceDto.serviceTyp = TowTusenTimmarsService;
        return nextServiceDto;
      }

      let leftToService: number = 1000 - numb3;
      return leftToService;
    }
  }
});

hmSbSchema.static('getDocument', async (_id: string) => {
  try {
    const document = await Hmsb.findById(_id);
    if (!document) throw new Error('no Document found!');
    return document;
  } catch (error) {
    console.log(error);
  }
});

const Hmsb =
  (mongoose.models.Hmsb as HmSbModel) ||
  model<InterfaceHmSb, HmSbModel>('Hmsb', hmSbSchema);

export default Hmsb;
