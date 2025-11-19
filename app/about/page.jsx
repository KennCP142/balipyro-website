import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About - Bali Pyro 2',
};

export default function About() {
  return (
    <>
      {/* Banner area */}
            <section
        className="about-banner mb-5"
        style={{ backgroundImage: 'url(/img/index/SNY00213.JPG)' }}
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
                About Us
              </h1>
              <h3
                className="text-center"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="1200"
              >
                Get to know more about us!
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* About area start */}
      <div className="about-area bg-white mt-5 mb-5 pt-3 pb-3">
        <div className="container-fluid">
          <div className="row m-5 justify-content-center">
            <div className="col-lg-6 p-4">
              <h1
                className="about-title text-uppercase"
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                BALIPYRO 2 PROFILE
              </h1>
              <div className="col-12 text-start">
                <div className="about-btn">
                  <Link
                    className="btn btn-primary mt-4"
                    href="/inquiry"
                    data-aos="fade-right"
                    data-aos-duration="600"
                    data-aos-delay="200"
                  >
                    GET IN TOUCH
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="about-content text-center col-lg-6 p-4 bg-black bg-opacity-75 shadow"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <Image
                className="img-fluid mb-4"
                src="/img/logo/logo-alt-transparent.png"
                alt="Bali Pyro 2 Logo"
                width={250}
                height={100}
              />
              <p className="text-center" style={{ color: 'white' }}>
                We are a lighting rental service provider based in Bali, Indonesia. We can provide
                installation & arrangement for many types of stages and events. With approximately 10
                years of experience, we have the various services you need to make your moments special
                and unforgettable. Book yours now & illuminate your moments!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* About area end */}
    </>
  );
}
