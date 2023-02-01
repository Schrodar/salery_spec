import NextSeviceClass from "./nextServiceClass-dto";

export const TowTusenTimmarsService = new NextSeviceClass(
  "Två tusen timmars service", // serviceName
  "Två tusen timmars service lägg till mer text här", // overView
  true, // byteAvOlja
  true, // renGoringAvCentrifugaloljeRenare
  true, // byteAvOljeFilter
  true, // byteAvOljeFilterInsatts
  true, // byteAvOfferAnoder
  true, // kontrolAvImpeller
  false, // RenaKylSysytemBytaGlyckol
  true, // kontroleraLuftRenarensUndertryckIndikator
  true, // byteAvLuftrenareFilterInsatts
  true, // byteAvLuftrenarensSäckerhetsFilter
  true, // byteAvLuftfilterMedEjUtbytbarInsats
  true, // byteAvDiselFilter
  true, // kontrolOchJusteringAvVentilSpel
  true // kontrolAvDrivRem
);
