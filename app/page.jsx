import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Home - Bali Pyro 2',
};

export default function Home() {
  return (
    <>
      {/* Slider area start */}
      <section className="slider-area">
        <div className="container-flex">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image
                  src="/img/index/IMG20230608162615.jpg"
                  className="d-block w-100"
                  alt="Event lighting"
                  width={1920}
                  height={1080}
                  priority
                />
                <div className="carousel-caption">
                  <h5 data-aos="fade-right" data-aos-duration="600" data-aos-delay="600">
                    Hi! Welcome
                  </h5>
                  <h2 data-aos="fade-right" data-aos-duration="600" data-aos-delay="1200">
                    Illuminate Your Event Now With Bali Pyro 2!
                  </h2>
                </div>
              </div>
              <div className="carousel-item">
                <Image
                  src="/img/index/IMG_4192.jpg"
                  className="d-block w-100"
                  alt="Event stage"
                  width={1920}
                  height={1080}
                />
                <div className="carousel-caption">
                  <h5>Hi! Welcome</h5>
                  <h2>Together, we light up the stages - your event partner</h2>
                </div>
              </div>
              <div className="carousel-item">
                <Image
                  src="/img/index/SNY00213.JPG"
                  className="d-block w-100"
                  alt="Event production"
                  width={1920}
                  height={1080}
                />
                <div className="carousel-caption">
                  <h5>Hi! Welcome</h5>
                  <h2>Crafting masterpiece lighting for your event</h2>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      {/* Slider area end */}

      {/* About area start */}
      <div className="about-area bg-white mt-5 mb-5 pt-5 pb-5">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-xl-7 col-lg-8 justify-content-center">
              <div
                className="about-title text-start"
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <h2>Meet Balipyro 2</h2>
              </div>
              <div
                className="about-slogan mb-5 text-start"
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay="200"
              >
                <h5>Iluminating Moments, Creating Memories</h5>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-xl-7 col-lg-8 justify-content-center">
              <div
                className="about-content text-start"
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay="300"
              >
                <p>
                  We are a lighting rental service provider based in Bali, Indonesia. We can provide
                  installation & arrangement for many types of stages and events. With approximately 10
                  years of experience, we have the various services you need to make your moments special
                  and unforgettable. Book yours now & illuminate your moments!
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 justify-content-center">
              <div
                className="about-logo text-center"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <Image
                  src="/img/logo/logo-transparent.png"
                  alt="Bali Pyro 2 Logo"
                  width={365}
                  height={365}
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-start">
            <div className="col-12 text-start">
              <div
                className="about-btn"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <Link className="btn btn-primary mt-4" href="/our-event">
                  See our portofolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About area end */}

      {/* Services area */}
      <div className="services-area bg-white mt-5 mb-5 pt-5 pb-5">
        <div className="container-fluid">
          <div className="row text-center justify-content-center">
            {/* Our Services Column */}
            <div className="col-xxl-5 col-xl-5 col-md-6 mb-4 px-3" style={{ marginLeft: '15px', marginRight: '5px' }}>
              <div
                className="services-title text-center mb-5"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <h2>Our Services</h2>
              </div>
              <div className="row text-center">
                <div
                  className="services-thumb mt-lg-4"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="200"
                >
                  <Image
                    src="/img/S__38207507.jpg"
                    alt="Our services"
                    className="img-fluid"
                    width={850}
                    height={450}
                    style={{ maxWidth: '100%' }}
                  />
                </div>
              </div>
              <div className="row text-center mb-5">
                <div
                  className="services-btn"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay="300"
                >
                  <Link className="btn btn-primary mt-4" href="/services">
                    See more
                  </Link>
                </div>
              </div>
            </div>

            {/* Our Events Column */}
            <div className="col-xxl-5 col-xl-5 col-md-6 mb-4 px-3" style={{ marginLeft: '15px', marginRight: '5px' }}>
              <div
                className="services-title text-center mb-5"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <h2>Our Events</h2>
              </div>
              <div className="row text-center">
                <div
                  className="services-thumb mt-lg-4 rounded-3"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="200"
                >
                  <Image
                    src="/img/index/S__1630227.jpg"
                    alt="Our events"
                    className="img-fluid"
                    width={850}
                    height={450}
                    style={{ maxWidth: '100%' }}
                  />
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
                    See more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
