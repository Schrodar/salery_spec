// creating data transfer objekt
export default interface UserDto {
  name: string;
  password: string;
  email: string;
}

export interface HmDto {
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
}
