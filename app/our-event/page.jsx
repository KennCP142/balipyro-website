import EventCarousel from '@/components/EventCarousel';

export const metadata = {
  title: 'Our Events - Bali Pyro 2',
};

// Event data organized by month
const events = [
  {
    id: 'eventOct2023',
    month: 'OCTOBER 2023',
    showMonth: true,
    title: '78th Birthday',
    venue: 'Hongkong Garden Restaurant Bali',
    date: '23 October 2023',
    images: [
      '/img/Event B/88101.jpg',
      '/img/Event B/88102.jpg',
      '/img/Event B/88103.jpg',
    ],
  },
  {
    id: 'eventNov2023',
    month: 'NOVEMBER 2023',
    showMonth: true,
    title: 'Pertamuda by Pertamina Awarding Night',
    venue: 'Patra Jasa Hotel Kuta Bali',
    date: '29 November 2023',
    images: [
      '/img/event A/88104.jpg',
      '/img/event A/88105.jpg',
      '/img/event A/88106.jpg',
    ],
  },
  {
    id: 'eventDec2023',
    month: 'DECEMBER 2023',
    showMonth: true,
    title: 'BCA Company Meeting',
    venue: 'The Renaissance Nusa Dua',
    date: '15 Desember 2023',
    images: ['/img/Event D/88098.jpg'],
  },
  {
    id: 'eventJan2024',
    month: 'JANUARY 2024',
    showMonth: true,
    title: 'SunLife Company Meeting',
    venue: 'Four Points Ungasan Jimbaran',
    date: '22-23 January 2024',
    images: [
      '/img/Event C/88107.jpg',
      '/img/Event C/88108.jpg',
    ],
  },
  {
    id: 'eventFeb2024_1',
    month: 'FEBRUARY 2024',
    showMonth: true,
    title: 'The Wedding of Kennedy & Natasha',
    venue: 'The Renaissance Resort & Villa, Nusa Dua Bali',
    date: '2 February 2024',
    images: [
      '/img/Febuari/222024-1.jpg',
      '/img/Febuari/222024-2.jpg',
      '/img/Febuari/222024-3.jpg',
    ],
  },
  {
    id: 'eventFeb2024_2',
    showMonth: false,
    title: 'Private Party',
    venue: 'TT Beach Club Bali ( Tropical Temptation )',
    date: '17-18 February 2024',
    images: ['/img/Febuari/1722024-2.jpg'],
  },
  {
    id: 'eventFeb2024_3',
    showMonth: false,
    title: 'The Wedding of Yosua & Wina',
    venue: 'Sofitel Nusa Dua Bali',
    date: '24 February 2024',
    images: [
      '/img/Febuari/2422024-1.jpg',
      '/img/Febuari/2422024-2.jpg',
      '/img/Febuari/2422024-3.jpg',
    ],
  },
  {
    id: 'eventFeb2024_4',
    showMonth: false,
    title: 'The Wedding of Irvan & Verent',
    venue: 'Trans Resort Hotel Bali',
    date: '25 February 2024',
    images: [
      '/img/Febuari/2522024-1.jpg',
      '/img/Febuari/2522024-2.jpg',
    ],
  },
  {
    id: 'eventFeb2024_5',
    showMonth: false,
    title: "Mrs. Aling's Fabulous 67th Birthday Party",
    venue: 'Vivara Villa Bali',
    date: '27 February 2024',
    images: ['/img/Febuari/2722024-2.jpg'],
  },
  {
    id: 'eventFeb2024_6',
    showMonth: false,
    title: 'IMP Summit Awarding Night 2024',
    venue: 'The Stone Hotel Bali',
    date: '29 February 2024',
    images: [
      '/img/Febuari/2922024-1.jpg',
      '/img/Febuari/2922024-2.jpg',
      '/img/Febuari/2422024-3.jpg',
    ],
  },
  {
    id: 'eventMar2024_1',
    month: 'MARCH 2024',
    showMonth: true,
    title: 'IMP Summit Gala Dinner & Farewell Night',
    venue: 'The Stones Hotel Bali',
    date: '1 March 2024',
    images: [
      '/img/Maret/132024-1.jpg',
      '/img/Maret/132024-2.jpg',
      '/img/Maret/132024-3.jpg',
    ],
  },
  {
    id: 'eventMar2024_2',
    showMonth: false,
    title: 'The Wedding of Steven & Pauline',
    venue: 'Six Senses Uluwatu',
    date: '23 March 2024',
    images: [
      '/img/Maret/2332024-1.jpg',
      '/img/Maret/2332024-2.jpg',
      '/img/Maret/2332024-3.jpg',
    ],
  },
  {
    id: 'eventMar2024_3',
    showMonth: false,
    title: 'AfterParty at Rimba',
    venue: 'Rimba Hotel Jimbaran',
    date: '30 March 2024',
    images: ['/img/Maret/3032024-2.jpg'],
  },
  {
    id: 'eventApr2024_1',
    month: 'APRIL 2024',
    showMonth: true,
    title: 'Miss Mega Bintang 2024',
    venue: 'Living World Mall Denpasar',
    date: '20 April 2024',
    images: ['/img/April/2042024-1.jpg'],
  },
  {
    id: 'eventApr2024_2',
    showMonth: false,
    title: 'The Wedding of Yudha & Gabby',
    venue: 'Prama Sanur Hotel',
    date: '20 April 2024',
    images: ['/img/April/20420242-1.jpg'],
  },
  {
    id: 'eventMay2024_1',
    month: 'MAY 2024',
    showMonth: true,
    title: 'Company Gathering',
    venue: 'Garuda Wisnu Kencana Cultural Park',
    date: '5 May 2024',
    images: [
      '/img/Mei/552024-1.jpg',
      '/img/Mei/552024-2.jpg',
      '/img/Mei/552024-3.jpg',
    ],
  },
  {
    id: 'eventMay2024_2',
    showMonth: false,
    title: 'The Wedding of Ryan & Adelia',
    venue: 'Conrad Bali',
    date: '18 May 2024',
    images: ['/img/Mei/1852024-1.jpg'],
  },
  {
    id: 'eventJun2024_1',
    month: 'JUNE 2024',
    showMonth: true,
    title: 'The Wedding of Cevin & Gabriella',
    venue: 'Jumeirah Bali',
    date: '1 June 2024',
    images: [
      '/img/Juni_1/162024-1.jpg',
      '/img/Juni_1/162024-2.jpg',
      '/img/Juni_1/162024-3.jpg',
    ],
  },
  {
    id: 'eventJun2024_2',
    showMonth: false,
    title: 'The Wedding of Benny & Christine',
    venue: 'Samabe Bali Resort & Villas',
    date: '2 June 2024',
    images: [
      '/img/Juni_1/262024-1.jpg',
      '/img/Juni_1/262024-2.jpg',
    ],
  },
  {
    id: 'eventJun2024_3',
    showMonth: false,
    title: 'RAN Concert @iconbalimall Grand Opening',
    venue: 'Icon Mall Bali',
    date: '7-9 June 2024',
    images: [
      '/img/2024_2025_update/JUNE 24/RAN Concert @iconbalimall Grand Opening/RAN03.jpg',
      '/img/2024_2025_update/JUNE 24/RAN Concert @iconbalimall Grand Opening/RAN04.jpg',
    ],
  },
  {
    id: 'eventJun2024_4',
    showMonth: false,
    title: 'EDP DLC 2024',
    venue: 'Bali Intercontinental Resort',
    date: '11 June 2024',
    images: [
      '/img/2024_2025_update/JUNE 24/EDP DLC 2024/EDP01.jpg',
      '/img/2024_2025_update/JUNE 24/EDP DLC 2024/EDP02.jpg',
      '/img/2024_2025_update/JUNE 24/EDP DLC 2024/EDP04.jpg',
    ],
  },
  {
    id: 'eventJun2024_5',
    showMonth: false,
    title: 'After Party at Locca Seahouse',
    venue: 'Locca Seahouse Bali',
    date: '15 June 2024',
    images: [
      '/img/2024_2025_update/JUNE 24/Afterparty @Locca/LOCCA01.jpg',
      '/img/2024_2025_update/JUNE 24/Afterparty @Locca/LOCCA02.jpg',
      '/img/2024_2025_update/JUNE 24/Afterparty @Locca/LOCCA03.jpg',
      '/img/2024_2025_update/JUNE 24/Afterparty @Locca/LOCCA04.jpg',
      '/img/2024_2025_update/JUNE 24/Afterparty @Locca/LOCCA05.jpg',
    ],
  },
  {
    id: 'eventJun2024_6',
    showMonth: false,
    title: 'AfterParty at Rimba Ballroom',
    venue: 'Rimba by Ayana Bali',
    date: '15 June 2024',
    images: [
      '/img/2024_2025_update/JUNE 24/Afterparty @Rimba/RIMBA04.jpg',
      '/img/2024_2025_update/JUNE 24/Afterparty @Rimba/RIMBA06.jpg',
    ],
  },
  {
    id: 'eventJun2024_7',
    showMonth: false,
    title: 'The Wedding of Dicky & Bunga',
    venue: 'The Trans Resort Hotel',
    date: '29 June 2024',
    images: [
      '/img/2024_2025_update/JUNE 24/Wedding Dicky Bunga/DICKYBUNGA02.jpg',
      '/img/2024_2025_update/JUNE 24/Wedding Dicky Bunga/DICKYBUNGA03.jpg',
      '/img/2024_2025_update/JUNE 24/Wedding Dicky Bunga/DICKYBUNGA04.jpg',
    ],
  },
  {
    id: 'eventJun2024_8',
    showMonth: false,
    title: 'After Party at The Royal Santrian',
    venue: 'The Royal Santrian Villas Bali',
    date: '29 June 2024',
    images: [
      '/img/2024_2025_update/JUNE 24/Afterparty @RoyalSantrian/ROYALSANTRIAN01.jpg',
    ],
  },
  {
    id: 'eventJul2024_1',
    month: 'JULY 2024',
    showMonth: true,
    title: 'Wedding @St.Regis',
    venue: 'St. Regis Bali Resort',
    date: '8 July 2024',
    images: [
      '/img/2024_2025_update/JULY 24/STREGIS/STREGIS1.jpg',
      '/img/2024_2025_update/JULY 24/STREGIS/STREGIS2.jpg',
      '/img/2024_2025_update/JULY 24/STREGIS/STREGIS3.jpg',
      '/img/2024_2025_update/JULY 24/STREGIS/STREGIS4.jpg',
      '/img/2024_2025_update/JULY 24/STREGIS/STREGIS5.jpg',
    ],
  },
  {
    id: 'eventJul2024_2',
    showMonth: false,
    title: 'IDB Graduation',
    venue: 'LivingWorld Mall Denpasar',
    date: '18 July 2024',
    images: [
      '/img/2024_2025_update/JULY 24/IDB Living World/IDB01.jpg',
      '/img/2024_2025_update/JULY 24/IDB Living World/IDB02.jpg',
      '/img/2024_2025_update/JULY 24/IDB Living World/IDB03.jpg',
    ],
  },
  {
    id: 'eventJul2024_3',
    showMonth: false,
    title: 'After Party @RIMBA',
    venue: 'Rimba Ballroom Bali',
    date: '20 July 2024',
    images: [
      '/img/2024_2025_update/JULY 24/AfterParty @RIMBA/RIMBA01.jpg',
      '/img/2024_2025_update/JULY 24/AfterParty @RIMBA/RIMBA02.jpg',
      '/img/2024_2025_update/JULY 24/AfterParty @RIMBA/RIMBA03.jpg',
      '/img/2024_2025_update/JULY 24/AfterParty @RIMBA/RIMBA04.jpg',
    ],
  },
  {
    id: 'eventJul2024_4',
    showMonth: false,
    title: 'X9 Pro Audio 11th Anniversary',
    venue: 'RiverSide Convention Center',
    date: '27 July 2024',
    images: [
      '/img/2024_2025_update/JULY 24/X9 Audio Anniv/X9AUDIO01.jpg',
      '/img/2024_2025_update/JULY 24/X9 Audio Anniv/X9AUDIO02.jpg',
      '/img/2024_2025_update/JULY 24/X9 Audio Anniv/X9AUDIO03.jpg',
      '/img/2024_2025_update/JULY 24/X9 Audio Anniv/X9AUDIO04.jpg',
    ],
  },
  {
    id: 'eventAug2024_1',
    month: 'AUGUST 2024',
    showMonth: true,
    title: 'Wedding Event @Apurva',
    venue: 'The Apurva Kempinski Bali',
    date: '10 August 2024',
    images: [
      '/img/2024_2025_update/AGUSTUS 24/Wedding @Apurva/SnapInsta.to_456441979_350923584755885_1594244188473977835_n.jpg',
    ],
  },
  {
    id: 'eventAug2024_2',
    showMonth: false,
    title: 'Coinfest Asia 2024',
    venue: 'Nuanu Beach Bali',
    date: '23 August 2024',
    images: [
      '/img/2024_2025_update/AGUSTUS 24/Coinfest/Coinfest01.jpg',
      '/img/2024_2025_update/AGUSTUS 24/Coinfest/Coinfest02.jpg',
    ],
  },
  {
    id: 'eventAug2024_3',
    showMonth: false,
    title: 'The Wedding of Juan & Benita',
    venue: 'The Stones Villa Bali',
    date: '31 August 2024',
    images: [
      '/img/2024_2025_update/AGUSTUS 24/JuanBenita/SnapInsta.to_583288080_17926633737144912_1098287919338829054_n.jpg',
    ],
  },
  {
    id: 'eventAug2024_4',
    showMonth: false,
    title: 'Wedding of Calvin & Christine',
    venue: 'The Apurva Kempinski Bali',
    date: '31 August 2024',
    images: [
      '/img/2024_2025_update/AGUSTUS 24/Wedding Calvin & Christine/CalvinChristine01.jpg',
      '/img/2024_2025_update/AGUSTUS 24/Wedding Calvin & Christine/CalvinChristine02.jpg',
      '/img/2024_2025_update/AGUSTUS 24/Wedding Calvin & Christine/CalvinChristine03.jpg',
      '/img/2024_2025_update/AGUSTUS 24/Wedding Calvin & Christine/CalvinChristine04.jpg',
    ],
  },
  {
    id: 'eventSep2024_1',
    month: 'SEPTEMBER 2024',
    showMonth: true,
    title: 'The Wedding of Ken & Joy',
    venue: 'SKY at Ayana Resort',
    date: '5 September 2024',
    images: [
      '/img/2024_2025_update/SEPTEMBER 24/KEN N JOY/ken&joy1.jpg',
    ],
  },
  {
    id: 'eventSep2024_2',
    showMonth: false,
    title: 'Ji Pin Technology China 13th Anniversary',
    venue: 'Legong Cafe Jimbaran',
    date: '9 September 2024',
    images: [
      '/img/2024_2025_update/SEPTEMBER 24/JIPIN TECH/jipin1.jpg',
      '/img/2024_2025_update/SEPTEMBER 24/JIPIN TECH/jipin2.jpg',
      '/img/2024_2025_update/SEPTEMBER 24/JIPIN TECH/jipin3.jpg',
      '/img/2024_2025_update/SEPTEMBER 24/JIPIN TECH/jipin4.jpg',
    ],
  },
  {
    id: 'eventOct2024_1',
    month: 'OCTOBER 2024',
    showMonth: true,
    title: 'Wedding & AfterParty @SKY AYANA',
    venue: 'SKY by Ayana Bali',
    date: '26 October 2024',
    images: [
      '/img/2024_2025_update/OKTOBER 24/Wedding @SKY AYANA/skyayana01.jpg',
      '/img/2024_2025_update/OKTOBER 24/Wedding @SKY AYANA/skyayana02.jpg',
    ],
  },
  {
    id: 'eventNov2024_1',
    month: 'NOVEMBER 2024',
    showMonth: true,
    title: 'BCA Economic Research Forum',
    venue: 'Padma Resort Legian Bali',
    date: '28 November 2024',
    images: [
      '/img/2024_2025_update/NOVEMBER 24/BCA/bca01.jpg',
      '/img/2024_2025_update/NOVEMBER 24/BCA/bca02.jpg',
      '/img/2024_2025_update/NOVEMBER 24/BCA/bca03.jpg',
      '/img/2024_2025_update/NOVEMBER 24/BCA/bca04.jpg',
    ],
  },
  {
    id: 'eventDec2024_1',
    month: 'DECEMBER 2024',
    showMonth: true,
    title: 'The Wedding of Ronald & Gio',
    venue: 'Desa Dusun Bali',
    date: '4 December 2024',
    images: [
      '/img/2024_2025_update/DESEMBER 24/DESA DUSUN/desadusun01.jpg',
      '/img/2024_2025_update/DESEMBER 24/DESA DUSUN/desadusun02.jpg',
    ],
  },
  {
    id: 'eventJan2025_1',
    month: 'JANUARY 2025',
    showMonth: true,
    title: '50th Birthday Party',
    venue: 'The RitzCarlton Bali',
    date: '11 January 2025',
    images: [
      '/img/2024_2025_update/JANUARI 25/50th Bday Party/50bday01.jpg',
      '/img/2024_2025_update/JANUARI 25/50th Bday Party/50bday02.jpg',
      '/img/2024_2025_update/JANUARI 25/50th Bday Party/50bday03.jpg',
      '/img/2024_2025_update/JANUARI 25/50th Bday Party/50bday05.jpg',
    ],
  },
  {
    id: 'eventJan2025_2',
    showMonth: false,
    title: 'The Wedding of Nicholas & Jennifer',
    venue: 'The RitzCarlton Bali',
    date: '25 January 2025',
    images: [
      '/img/2024_2025_update/JANUARI 25/Wedding of Nicholas & Jennifer/nicholasjennifer01.jpg',
      '/img/2024_2025_update/JANUARI 25/Wedding of Nicholas & Jennifer/nicholasjennifer02.jpg',
      '/img/2024_2025_update/JANUARI 25/Wedding of Nicholas & Jennifer/nicholasjennifer03.jpg',
      '/img/2024_2025_update/JANUARI 25/Wedding of Nicholas & Jennifer/nicholasjennifer04.jpg',
      '/img/2024_2025_update/JANUARI 25/Wedding of Nicholas & Jennifer/nicholasjennifer05.jpg',
      '/img/2024_2025_update/JANUARI 25/Wedding of Nicholas & Jennifer/nicholasjennifer06.jpg',
      '/img/2024_2025_update/JANUARI 25/Wedding of Nicholas & Jennifer/nicholasjennifer07.jpg',
    ],
  },
  {
    id: 'eventFeb2025_1',
    month: 'FEBRUARY 2025',
    showMonth: true,
    title: 'JasaMarga Gathering',
    venue: 'Sofitel Nusa Dua',
    date: '6 February 2025',
    images: [
      '/img/2024_2025_update/FEBRUARI 25/Jasamarga Gathering/jasamarga01.jpg',
    ],
  },
  {
    id: 'eventApr2025_1',
    month: 'APRIL 2025',
    showMonth: true,
    title: 'The Wedding of Wilmana & Kemala',
    venue: 'Prime Plaza Hotel Sanur',
    date: '17 April 2025',
    images: [
      '/img/2024_2025_update/APRIL 25/WilmanaKemala/WilmanaKemala01.jpg',
    ],
  },
  {
    id: 'eventApr2025_2',
    showMonth: false,
    title: 'Wedding Event @Hongkong Garden',
    venue: 'Hongkong Garden Restaurant',
    date: '19 April 2025',
    images: [
      '/img/2024_2025_update/APRIL 25/Wedding HK Garden/HKGarden01.jpg',
    ],
  },
  {
    id: 'eventMay2025_1',
    month: 'MAY 2025',
    showMonth: true,
    title: 'SMOPC 2025',
    venue: 'Intercontinental Bali Resort Jimbaran',
    date: '9 May 2025',
    images: [
      '/img/2024_2025_update/MAY 25/SMOPC/SMOPC01.mp4',
      '/img/2024_2025_update/MAY 25/SMOPC/SMOPC02.mp4',
    ],
  },
  {
    id: 'eventMay2025_2',
    showMonth: false,
    title: 'The Wedding of Surya & Clarissa',
    venue: 'Glamp Nusa Bali',
    date: '10 May 2025',
    images: [
      '/img/2024_2025_update/MAY 25/SuryaClarissa/SuryaClarissa01.jpg',
      '/img/2024_2025_update/MAY 25/SuryaClarissa/SuryaClarissa02.jpg',
      '/img/2024_2025_update/MAY 25/SuryaClarissa/SuryaClarissa03.jpg',
      '/img/2024_2025_update/MAY 25/SuryaClarissa/SuryaClarissa05.jpg',
    ],
  },
  {
    id: 'eventMay2025_3',
    showMonth: false,
    title: 'The Wedding of Jason & Sonia',
    venue: 'The SKY by Ayana Bali',
    date: '16 May 2025',
    images: [
      '/img/2024_2025_update/MAY 25/JasonSonia/JasonSonia01.jpg',
      '/img/2024_2025_update/MAY 25/JasonSonia/JasonSonia02.jpg',
      '/img/2024_2025_update/MAY 25/JasonSonia/JasonSonia03.jpg',
      '/img/2024_2025_update/MAY 25/JasonSonia/JasonSonia04.jpg',
      '/img/2024_2025_update/MAY 25/JasonSonia/JasonSonia05.jpg',
      '/img/2024_2025_update/MAY 25/JasonSonia/JasonSonia06.jpg',
      '/img/2024_2025_update/MAY 25/JasonSonia/JasonSonia07.jpg',
    ],
  },
  {
    id: 'eventMay2025_4',
    showMonth: false,
    title: 'The Wedding of Michael & Patricia',
    venue: 'The Meru Sanur',
    date: '18 May 2025',
    images: [
      '/img/2024_2025_update/MAY 25/MichaelPatricia/MichaelPatricia01.jpg',
      '/img/2024_2025_update/MAY 25/MichaelPatricia/MichaelPatricia02.jpg',
      '/img/2024_2025_update/MAY 25/MichaelPatricia/MichaelPatricia03.jpg',
      '/img/2024_2025_update/MAY 25/MichaelPatricia/MichaelPatricia04.jpg',
      '/img/2024_2025_update/MAY 25/MichaelPatricia/MichaelPatricia05.jpg',
    ],
  },
  {
    id: 'eventMay2025_5',
    showMonth: false,
    title: 'The Wedding of TingTing & Jan',
    venue: 'The SKY Ayana Bali',
    date: '25 May 2025',
    images: [
      '/img/2024_2025_update/MAY 25/TingTingJan/TingTingJan01.jpg',
      '/img/2024_2025_update/MAY 25/TingTingJan/TingTingJan02.jpg',
      '/img/2024_2025_update/MAY 25/TingTingJan/TingTingJan03.jpg',
      '/img/2024_2025_update/MAY 25/TingTingJan/TingTingJan04.jpg',
      '/img/2024_2025_update/MAY 25/TingTingJan/TingTingJan05.jpg',
    ],
  },
  {
    id: 'eventJun2025_1',
    month: 'JUNE 2025',
    showMonth: true,
    title: 'The Wedding of Ivan & Fenny',
    venue: 'Trans Resort Bali',
    date: '22 June 2025',
    images: [
      '/img/2024_2025_update/JUNE 25/IvanFenny/Ivanfenny01.jpg',
      '/img/2024_2025_update/JUNE 25/IvanFenny/Ivanfenny02.jpg',
      '/img/2024_2025_update/JUNE 25/IvanFenny/Ivanfenny03.jpg',
    ],
  },
  {
    id: 'eventJul2025_1',
    month: 'JULY 2025',
    showMonth: true,
    title: 'The Wedding of Charles & Jessica',
    venue: 'Candani Villa Bali',
    date: '10 July 2025',
    images: [
      '/img/2024_2025_update/JULY 25/Wedding Charles & Jessica/Charlesjessica01.jpg',
      '/img/2024_2025_update/JULY 25/Wedding Charles & Jessica/Charlesjessica02.jpg',
      '/img/2024_2025_update/JULY 25/Wedding Charles & Jessica/Charlesjessica03.jpg',
      '/img/2024_2025_update/JULY 25/Wedding Charles & Jessica/Charlesjessica04.jpg',
      '/img/2024_2025_update/JULY 25/Wedding Charles & Jessica/Charlesjessica05.jpg',
    ],
  },
  {
    id: 'eventJul2025_2',
    showMonth: false,
    title: 'Musyawarah Daerah XI DPD Partai Golkar Provinsi Bali',
    venue: 'The Meru Sanur',
    date: '13 July 2025',
    images: [
      '/img/2024_2025_update/JULY 25/Musyawarah Daerah XI DPD Partai Golkar Provinsi Bali/golkar01.jpg',
      '/img/2024_2025_update/JULY 25/Musyawarah Daerah XI DPD Partai Golkar Provinsi Bali/golkar02.jpg',
    ],
  },
  {
    id: 'eventJul2025_3',
    showMonth: false,
    title: 'SPLASH By Bank Indonesia Provinsi Bali',
    venue: 'HolidayInn Baruna Resort',
    date: '18 July 2025',
    images: [
      '/img/2024_2025_update/JULY 25/SPLASH/SPLASH01.jpg',
      '/img/2024_2025_update/JULY 25/SPLASH/SPLASH02.jpg',
      '/img/2024_2025_update/JULY 25/SPLASH/SPLASH03.jpg',
      '/img/2024_2025_update/JULY 25/SPLASH/SPLASH04.jpg',
    ],
  },
  {
    id: 'eventAug2025_1',
    month: 'AUGUST 2025',
    showMonth: true,
    title: 'PSDP at Poltekpar Nusa Dua Bali',
    venue: 'Politeknik Pariwisata Nusa Dua Bali',
    date: '1 August 2025',
    images: [
      '/img/2024_2025_update/AGUSTUS 25/PSDP at Poltekpar Nusa Dua Bali/PSDP01.jpg',
    ],
  },
  {
    id: 'eventAug2025_2',
    showMonth: false,
    title: 'Diesteria Instiki 2025',
    venue: 'Lapangan Niti Mandala Denpasar',
    date: '3 August 2025',
    images: [
      '/img/2024_2025_update/AGUSTUS 25/Diesteria Instiki/Diesteria01.jpg',
    ],
  },
  {
    id: 'eventSep2025_1',
    month: 'SEPTEMBER 2025',
    showMonth: true,
    title: 'Wedding Event @Hongkong Garden',
    venue: 'Hongkong Garden Restaurant',
    date: '20 September 2025',
    images: [
      '/img/2024_2025_update/SEPTEMBER 25/WEDDING @HKGARDEN/weddinghkg01.jpg',
    ],
  },
  {
    id: 'eventSep2025_2',
    showMonth: false,
    title: 'Icon Beach Festival',
    venue: 'Icon Mall Bali Sanur',
    date: '20-21 September 2025',
    images: [
      '/img/2024_2025_update/SEPTEMBER 25/Icon Beach Fest/icon01.jpg',
      '/img/2024_2025_update/SEPTEMBER 25/Icon Beach Fest/icon02.jpg',
    ],
  },
  {
    id: 'eventSep2025_3',
    showMonth: false,
    title: 'Gathering Event @Roosterfish',
    venue: 'Rooster Fish Pandawa',
    date: '21 September 2025',
    images: [
      '/img/2024_2025_update/SEPTEMBER 25/Gathering @Roosterfish/gatheringrooster01.jpg',
    ],
  },
  {
    id: 'eventOct2025_1',
    month: 'OCTOBER 2025',
    showMonth: true,
    title: 'The 16th Makardhi Job Fair',
    venue: 'Politeknik Pariwisata Bali - Nusa Dua',
    date: '23-24 October 2025',
    images: [
      '/img/2024_2025_update/OKTOBER 25/Makardhi JobFair/Makardhi01.jpg',
    ],
  },
  {
    id: 'eventOct2025_2',
    showMonth: false,
    title: 'The Wedding of Awen & March',
    venue: 'The Stone Villa Uluwatu',
    date: '25 October 2025',
    images: [
      '/img/2024_2025_update/OKTOBER 25/Wedding Awen & March/AwenMarch01.jpg',
      '/img/2024_2025_update/OKTOBER 25/Wedding Awen & March/AwenMarch02.jpg',
    ],
  },
  {
    id: 'eventOct2025_3',
    showMonth: false,
    title: 'The Wedding of Ryan & Sheila',
    venue: 'Six Senses Uluwatu Bali',
    date: '25 October 2025',
    images: [
      '/img/2024_2025_update/OKTOBER 25/Wedding Ryan Sheila/RyanSheila01.jpg',
      '/img/2024_2025_update/OKTOBER 25/Wedding Ryan Sheila/RyanSheila02.jpg',
    ],
  },
  {
    id: 'eventNov2025_1',
    month: 'NOVEMBER 2025',
    showMonth: true,
    title: 'LV C&C Management 25th Anniversary',
    venue: 'Hongkong Garden Restaurant Bali',
    date: '16 November 2025',
    images: [
      '/img/2024_2025_update/NOVEMBER 25/LVCNC Anniversary/LVCNC01.jpg',
      '/img/2024_2025_update/NOVEMBER 25/LVCNC Anniversary/LVCNC02.jpg',
      '/img/2024_2025_update/NOVEMBER 25/LVCNC Anniversary/LVCNC03.jpg',
      '/img/2024_2025_update/NOVEMBER 25/LVCNC Anniversary/LVCNC04.jpg',
    ],
  },
];

export default function OurEvent() {
  return (
    <>
      {/* Banner area */}
            <section
        className="our-event-banner mb-5"
        style={{ backgroundImage: 'url(/img/index/IMG_4192.jpg)' }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <h1
                className="text-center mb-4"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="600"
              >
                Our Events Portofolio
              </h1>
              <h3
                className="text-center"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="1200"
              >
                See our portfolio of unforgettable events!
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Our event area start */}
      <section className="our-event-area">
        <div className="container justify-content-center">
          {events.map((event) => (
            <EventCarousel
              key={event.id}
              carouselId={event.id}
              images={event.images}
              event={event}
            />
          ))}
        </div>
      </section>
    </>
  );
}
