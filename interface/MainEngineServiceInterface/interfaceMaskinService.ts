import { HydratedDocument, Model } from "mongoose";

export interface interfaceMaskinService {
  sericeName: string;
  overView: string;
  workingHours: number;
  byteAvOlja: boolean;
  renGoringAvCentrifugaloljeRenare: boolean;
  byteAvOljeFilter: boolean;
  byteAvOfferAnoder: boolean;
  kontrolAvImpeller: boolean;
  kontroleraLuftRenarensUndertryckIndikator: boolean;
  RenaKylSysytemBytaGlyckol: boolean;
  byteAvLuftrenareFilterInsatts: boolean;
  byteAvLuftrenarensSäckerhetsFilter: boolean;
  byteAvLuftfilterMedEjUtbytbarInsats: boolean;
  byteAvDiselFilter: boolean;
  kontrolOchJusteringAvVentilSpel: boolean;
  kontrolAvDrivRem: boolean;
}

export interface maskinServiceMethods {
  nextService(): number;
  workingHours(time: number): void;
}

export interface maskinServiceModel
  extends Model<interfaceMaskinService, {}, maskinServiceMethods> {
  getDocument(
    id: string
  ): Promise<HydratedDocument<interfaceMaskinService, maskinServiceMethods>>;
}
