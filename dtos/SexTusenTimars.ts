import NextSeviceClass from './nextServiceClass-dto';

export const SexTusenTimmarsService = new NextSeviceClass(
  'FemhundraTimmars', // serviceName
  'FemhundraTimmars lägg till mer text här', // overView
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
