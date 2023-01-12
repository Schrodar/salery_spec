export default class NextSeviceClass {
  serviceName: string;
  overView: string;
  byteAvOlja: boolean;
  renGoringAvCentrifugaloljeRenare: boolean;
  byteAvOljeFilter: boolean;
  byteAvOljeFilterInsatts: boolean;
  byteAvOfferAnoder: boolean;
  kontrolAvImpeller: boolean;
  RenaKylSysytemBytaGlyckol: boolean;
  kontroleraLuftRenarensUndertryckIndikator: boolean;
  byteAvLuftrenareFilterInsatts: boolean;
  byteAvLuftrenarensSäckerhetsFilter: boolean;
  byteAvLuftfilterMedEjUtbytbarInsats: boolean;
  byteAvDiselFilter: boolean;
  kontrolOchJusteringAvVentilSpel: boolean;
  kontrolAvDrivRem: boolean;

  constructor(
    serviceName: string,
    overView: string,
    byteAvOlja: boolean,
    renGoringAvCentrifugaloljeRenare: boolean,
    byteAvOljeFilter: boolean,
    byteAvOljeFilterInsatts: boolean,
    byteAvOfferAnoder: boolean,
    kontrolAvImpeller: boolean,
    RenaKylSysytemBytaGlyckol: boolean,
    kontroleraLuftRenarensUndertryckIndikator: boolean,
    byteAvLuftrenareFilterInsatts: boolean,
    byteAvLuftrenarensSäckerhetsFilter: boolean,
    byteAvLuftfilterMedEjUtbytbarInsats: boolean,
    byteAvDiselFilter: boolean,
    kontrolOchJusteringAvVentilSpel: boolean,
    kontrolAvDrivRem: boolean
  ) {
    this.serviceName = serviceName;
    this.overView = overView;
    this.byteAvOlja = byteAvOlja;
    this.renGoringAvCentrifugaloljeRenare = renGoringAvCentrifugaloljeRenare;
    this.byteAvOljeFilter = byteAvOljeFilter;
    this.byteAvOljeFilterInsatts = byteAvOljeFilterInsatts;
    this.byteAvOfferAnoder = byteAvOfferAnoder;
    this.kontrolAvImpeller = kontrolAvImpeller;
    this.RenaKylSysytemBytaGlyckol = RenaKylSysytemBytaGlyckol;
    this.kontroleraLuftRenarensUndertryckIndikator =
      kontroleraLuftRenarensUndertryckIndikator;
    this.byteAvLuftrenareFilterInsatts = byteAvLuftrenareFilterInsatts;
    this.byteAvLuftrenarensSäckerhetsFilter =
      byteAvLuftrenarensSäckerhetsFilter;
    this.byteAvLuftfilterMedEjUtbytbarInsats =
      byteAvLuftfilterMedEjUtbytbarInsats;
    this.byteAvDiselFilter = byteAvDiselFilter;
    this.kontrolOchJusteringAvVentilSpel = kontrolOchJusteringAvVentilSpel;
    this.kontrolAvDrivRem = kontrolAvDrivRem;
  }
}
