import { HydratedDocument, Model } from 'mongoose';

export interface tvaTusenTimmars {
  sericeName: { type: String; required: true };
  overView: { type: String; required: true };
  workingHours: { type: Number };
  byteAvOlja: { type: Boolean; required: true };
  renGoringAvCentrifugaloljeRenare: { type: Boolean; required: true };
  byteAvOljeFilter: { type: Boolean; required: true };
  byteAvOfferAnoder: { type: Boolean; required: true };
  kontrolAvImpeller: { type: Boolean; required: true };
  kontroleraLuftRenarensUndertryckIndikator: { type: Boolean; required: true };
  RenaKylSysytemBytaGlyckol: { type: Boolean; required: true };
  byteAvLuftrenareFilterInsatts: { type: Boolean; required: true };
  byteAvLuftrenarensSäckerhetsFilter: { type: Boolean; required: true };
  byteAvLuftfilterMedEjUtbytbarInsats: { type: Boolean; required: true };
  byteAvDiselFilter: { type: Boolean; required: true };
  kontrolOchJusteringAvVentilSpel: { type: Boolean; required: true };
  kontrolAvDrivRem: { type: Boolean; required: true };
}
