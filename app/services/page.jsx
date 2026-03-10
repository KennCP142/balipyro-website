import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Services - Bali Pyro 2",
};

export default function Services() {
  return (
    <>
      {/* Banner area — uses Image fill so Vercel optimizer serves AVIF/WebP */}
      <section
        className="services-banner mb-5"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <Image
          src="/img/portofolio/porto-4.jpg"
          alt="Services banner"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
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
        </div>
      </section>

      {/* Content */}
      <section className="services-header mt-5 mb-5 pt-4 pb-3">
        <div className="container mt-5">
          <div
            className="row text-center justify-content-center"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
          >
            <h1 className="text-center">What we offer</h1>
          </div>
          <div className="services-area bg-white mb-5 pt-5 pb-5">
            <div className="container">
              <div className="row justify-content-center align-items-center g-4 py-4">
                {/* Lighting */}
                <div
                  className="col-6 col-sm-4 col-md-4 col-lg"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="100"
                >
                  <div className="text-center">
                    <div
                      className="services-thumb d-flex justify-content-center align-items-center mx-auto"
                      style={{
                        width: "200px",
                        height: "200px",
                      }}
                    >
                      <Image
                        src="/img/elements/lighting_new.jpg"
                        alt="Lighting"
                        width={280}
                        height={280}
                        sizes="(max-width: 576px) 50vw, 200px"
                        loading="lazy"
                        style={{
                          objectFit: "contain",
                          maxWidth: "100%",
                          maxHeight: "100%",
                        }}
                      />
                    </div>
                    <div className="services-label mt-3">
                      <h5>LIGHTING</h5>
                    </div>
                  </div>
                </div>

                {/* Genset */}
                <div
                  className="col-6 col-sm-4 col-md-4 col-lg"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="200"
                >
                  <div className="text-center">
                    <div
                      className="services-thumb d-flex justify-content-center align-items-center mx-auto"
                      style={{
                        width: "200px",
                        height: "200px",
                      }}
                    >
                      <Image
                        src="/img/elements/genset_new.jpg"
                        alt="Genset"
                        width={280}
                        height={280}
                        sizes="(max-width: 576px) 50vw, 200px"
                        loading="lazy"
                        style={{
                          objectFit: "contain",
                          maxWidth: "100%",
                          maxHeight: "100%",
                        }}
                      />
                    </div>
                    <div className="services-label mt-3">
                      <h5>GENSET</h5>
                    </div>
                  </div>
                </div>

                {/* Sound */}
                <div
                  className="col-6 col-sm-4 col-md-4 col-lg"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="300"
                >
                  <div className="text-center">
                    <div
                      className="services-thumb d-flex justify-content-center align-items-center mx-auto"
                      style={{
                        width: "200px",
                        height: "200px",
                      }}
                    >
                      <Image
                        src="/img/elements/sound_new.jpg"
                        alt="Sound"
                        width={280}
                        height={280}
                        sizes="(max-width: 576px) 50vw, 200px"
                        loading="lazy"
                        style={{
                          objectFit: "contain",
                          maxWidth: "100%",
                          maxHeight: "100%",
                        }}
                      />
                    </div>
                    <div className="services-label mt-3">
                      <h5>SOUND</h5>
                    </div>
                  </div>
                </div>

                {/* LED Screen */}
                <div
                  className="col-6 col-sm-6 col-md-4 col-lg"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="400"
                >
                  <div className="text-center">
                    <div
                      className="services-thumb d-flex justify-content-center align-items-center mx-auto"
                      style={{
                        width: "200px",
                        height: "200px",
                      }}
                    >
                      <Image
                        src="/img/elements/led_screen_new.jpg"
                        alt="LED Screen"
                        width={280}
                        height={280}
                        sizes="(max-width: 576px) 50vw, 200px"
                        loading="lazy"
                        style={{
                          objectFit: "contain",
                          maxWidth: "100%",
                          maxHeight: "100%",
                        }}
                      />
                    </div>
                    <div className="services-label mt-3">
                      <h5>LED SCREEN</h5>
                    </div>
                  </div>
                </div>

                {/* Effects */}
                <div
                  className="col-6 col-sm-6 col-md-4 col-lg"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="500"
                >
                  <div className="text-center">
                    <div
                      className="services-thumb d-flex justify-content-center align-items-center mx-auto"
                      style={{
                        width: "200px",
                        height: "200px",
                      }}
                    >
                      <Image
                        src="/img/elements/effect_new.jpg"
                        alt="Effects"
                        width={280}
                        height={280}
                        sizes="(max-width: 576px) 50vw, 200px"
                        loading="lazy"
                        style={{
                          objectFit: "contain",
                          maxWidth: "100%",
                          maxHeight: "100%",
                        }}
                      />
                    </div>
                    <div className="services-label mt-3">
                      <h5>EFFECTS</h5>
                    </div>
                  </div>
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
