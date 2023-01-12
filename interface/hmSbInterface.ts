import { HydratedDocument, Model } from 'mongoose';

export interface InterfaceHmSb {
  name: string;
  oil: string;
  oilCapacity: number;
  oilFilter: string;
  fuelFilter: string;
  machineNumber: string;
  airFilter: string;
  coolant: string;
  coolantCapacity: number;
  workingHours: number;
  lastService: string;
}

export interface HmSbMethods {
  add(amount: number, operand: string): void;
  removeAmount(amount: number, operand: string): void;
  set(amount: number | string, operand: string): void;
  // nextService vill use this. and it will refer to the document HMSB in the doucemnt workingHouers exist
  // it will give aboute tim to next service
  nextService(): Promise<HydratedDocument<InterfaceHmSb>>;
}

export interface HmSbModel extends Model<InterfaceHmSb, {}, HmSbMethods> {
  getDocument(
    _id: string
  ): Promise<HydratedDocument<InterfaceHmSb, HmSbMethods>>;
}
