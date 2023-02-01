import mongoose, { Schema, model } from "mongoose";
import NextSeviceClass from "../dtos/MainEngineServiceDtos/nextServiceClass-dto";
import { FemhundraTimmarsService } from "../dtos/MainEngineServiceDtos/FemhundraTimmars";
import {
  InterfaceHmSb,
  HmSbMethods,
  HmSbModel,
} from "../interface/hmSbInterface";
import { TusenTimmarsService } from "../dtos/MainEngineServiceDtos/TusenTimarsService";
import { TowTusenTimmarsService } from "../dtos/MainEngineServiceDtos/TowTusenTimars";
import { SexTusenTimmarsService } from "../dtos/MainEngineServiceDtos/SexTusenTimars";

const mainEngineStarbord = new Schema<InterfaceHmSb, HmSbModel, HmSbMethods>({
  workingHours: { type: Number },
  lastService: { type: Number },
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

mainEngineStarbord.method(
  "set",
  async function set(this: HmSbMethods, amount: number, operand: string) {
    try {
      if (operand === "lastService") {
        this.lastService = amount;
        await this.save();
        return this;
      }

      if (this === undefined || this === null)
        throw new Error("no document found");

      if (operand === "add") {
        this.workingHours = this.workingHours + amount;
        await this.save();
        return this;
      }

      if (operand === "remove") {
        this.workingHours = this.workingHours - amount;
        await this.save();
        return this;
      }

      if (operand === "set") {
        this.workingHours = amount;
        await this.save();
        return this;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

mainEngineStarbord.method(
  "nextService",
  async function nextService(this: HmSbMethods) {
    let lastService: number = this.lastService;
    let nextService: number = lastService + 500;
    let leftToService = this.workingHours - this.lastService;
    type Dto = {
      nextService: number;
      leftToService: number;
      serviceTyp: NextSeviceClass | null;
    };

    let nextServiceDto: Dto = {
      nextService,
      leftToService,
      serviceTyp: null,
    };

    if (this === undefined || this === null)
      throw new Error("no document found");

    var numb: number = this.workingHours;
    // get number of digits in number
    var numberOfDigits: number = Math.floor(Math.log(numb) / Math.LN10 + 1);

    if (numberOfDigits === 5) {
      let LoweNumbers: string = numb.toString();
      // remove first letter of LoweNumbers string
      LoweNumbers = LoweNumbers.slice(1);
      let backToNumber: number = parseInt(LoweNumbers);
      var numb: number = backToNumber;
    }

    if (numberOfDigits <= 2) {
      nextServiceDto.serviceTyp = FemhundraTimmarsService;
      return nextServiceDto;
    }

    if (numberOfDigits === 3) {
      if (numb < 500) {
        nextServiceDto.serviceTyp = FemhundraTimmarsService;
        return nextServiceDto;
      } else {
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

      // save first latter of string
      let getFirstDiget: string = numb.toString();
      getFirstDiget = getFirstDiget.slice(0, 1);

      // convert getFirstDiget to number
      let getFirstDiget2 = parseInt(getFirstDiget);

      // now we have the first diget of the number
      // lets find next service
      if (numb3 < 500) {
        nextServiceDto.serviceTyp = FemhundraTimmarsService;
        return nextServiceDto;
      } else {
        // 1 3 5 7 9 all corespond to 1000 hours service
        if (
          getFirstDiget2 === 1 ||
          getFirstDiget2 === 3 ||
          getFirstDiget2 === 5 ||
          getFirstDiget2 === 7 ||
          getFirstDiget2 === 9
        ) {
          nextServiceDto.serviceTyp = TusenTimmarsService;
          return nextServiceDto;
        }
        // 2 4 8 all corespond to 2000 hours service
        if (
          getFirstDiget2 === 2 ||
          getFirstDiget2 === 4 ||
          getFirstDiget2 === 8
        ) {
          nextServiceDto.serviceTyp = TowTusenTimmarsService;
          return nextServiceDto;
        }
        // 6 corespond to 6000 hours service
        if (getFirstDiget2 === 6) {
          nextServiceDto.serviceTyp = SexTusenTimmarsService;
          return nextServiceDto;
        }
      }
    }
  }
);

mainEngineStarbord.static("getDocument", async (_id: string) => {
  try {
    const document = await Hmsb.findById(_id);
    if (!document) throw new Error("no Document found!");
    return document;
  } catch (error) {
    console.log(error);
  }
});

const Hmsb =
  (mongoose.models.Hmsb as HmSbModel) ||
  model<InterfaceHmSb, HmSbModel>("Hmsb", mainEngineStarbord);

export default Hmsb;
