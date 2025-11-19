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
