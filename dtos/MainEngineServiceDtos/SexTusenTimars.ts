import NextSeviceClass from "./nextServiceClass-dto";

export const SexTusenTimmarsService = new NextSeviceClass(
  "Sex tusen timmars service", // serviceName
  "Sex tusen timmars service lägg till mer text här", // overView
  true, // byteAvOlja
  true, // renGoringAvCentrifugaloljeRenare
  true, // byteAvOljeFilter
  true, // byteAvOljeFilterInsatts
  true, // byteAvOfferAnoder
  true, // kontrolAvImpeller
  true, // RenaKylSysytemBytaGlyckol
  true, // kontroleraLuftRenarensUndertryckIndikator
  true, // byteAvLuftrenareFilterInsatts
  true, // byteAvLuftrenarensSäckerhetsFilter
  true, // byteAvLuftfilterMedEjUtbytbarInsats
  true, // byteAvDiselFilter
  true, // kontrolOchJusteringAvVentilSpel
  true // kontrolAvDrivRem
);
