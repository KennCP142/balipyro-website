import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Services - Bali Pyro 2',
};

export default function Services() {
  return (
    <>
      {/* Banner area */}
      <section
        className="services-banner mb-5"
        style={{ backgroundImage: 'url(/img/portofolio/porto-4.jpg)' }}
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
                Our Services
              </h1>
              <h3
                className="text-center"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="1200"
              >
                See what kind of services we offer for our customers!
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="services-header mt-5 mb-5 pt-4 pb-3">
        <div className="container-flex mt-5">
          <div
            className="row text-center justify-content-center"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
          >
            <h1 className="text-center">What we offer</h1>
          </div>
          <div className="services-area bg-white mb-5 pt-5 pb-5">
            <div className="row justify-content-center text-center px-1">
              {/* Lighting */}
              <div
                className="col-md-4 col-lg-4"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <div className="services-thumb mt-lg-4 square-image-container px-2">
                  <Image
                    src="/img/elements/lighting.png"
                    alt="Lighting"
                    className="img-fluid"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="services-label mt-4">
                  <h5>LIGHTING</h5>
                </div>
              </div>

              {/* Genset */}
              <div
                className="col-md-4 col-lg-4"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="200"
              >
                <div className="services-thumb mt-lg-4 square-image-container px-2">
                  <Image
                    src="/img/elements/genset.png"
                    alt="Genset"
                    className="img-fluid"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="services-label mt-4">
                  <h5>GENSET</h5>
                </div>
              </div>

              {/* Sound */}
              <div
                className="col-md-4 col-lg-4"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="300"
              >
                <div className="services-thumb mt-lg-4 square-image-container">
                  <Image
                    src="/img/elements/sound.png"
                    alt="Sound"
                    className="img-fluid"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="services-label mt-4">
                  <h5>SOUND</h5>
                </div>
              </div>

              {/* LED Screen */}
              <div
                className="col-md-4 col-lg-4"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="400"
              >
                <div className="services-thumb mt-lg-4 square-image-container px-2">
                  <Image
                    src="/img/elements/led_screen.png"
                    alt="LED Screen"
                    className="img-fluid"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="services-label mt-4">
                  <h5>LED SCREEN</h5>
                </div>
              </div>

              {/* Effects */}
              <div
                className="col-md-4 col-lg-4"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="500"
              >
                <div className="services-thumb mt-lg-4 square-image-container px-2">
                  <Image
                    src="/img/elements/effect.png"
                    alt="Effects"
                    className="img-fluid"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="services-label mt-4">
                  <h5>EFFECTS</h5>
                </div>
              </div>
            </div>
            <div className="row text-center">
              <div
                className="services-btn"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="300"
              >
                <Link className="btn btn-primary mt-4" href="/our-event">
                  See our events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
