import NextSeviceClass from './nextServiceClass-dto';

export const TusenTimmarsService = new NextSeviceClass(
  'Tusen timmars Service', // serviceName
  'Tusen Timmars', // overView
  true, // byteAvOlja
  true, // renGoringAvCentrifugaloljeRenare
  true, // byteAvOljeFilter
  true, // byteAvOljeFilterInsatts
  true, // byteAvOfferAnoder
  true, // kontrolAvImpeller
  false, // RenaKylSysytemBytaGlyckol
  true, // kontroleraLuftRenarensUndertryckIndikator
  false, // byteAvLuftrenareFilterInsatts
  false, // byteAvLuftrenarensSäckerhetsFilter
  false, // byteAvLuftfilterMedEjUtbytbarInsats
  true, // byteAvDiselFilter
  false, // kontrolOchJusteringAvVentilSpel
  true // kontrolAvDrivRem
);
