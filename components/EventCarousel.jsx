import Image from 'next/image';

export default function EventCarousel({ carouselId, images, event }) {
  return (
    <div className="our-event">
      {event.showMonth && <h1>{event.month}</h1>}
      <div className="row justify-content-around align-items-center bg-black bg-opacity-10 shadow">
        <div className="col-lg-5 col-md-8 justify-content-center">
          <div className="slider-area-events">
            <div
              id={carouselId}
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target={`#${carouselId}`}
                    data-bs-slide-to={index}
                    className={index === 0 ? 'active' : ''}
                    aria-current={index === 0 ? 'true' : 'false'}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
              <div className="carousel-inner">
                {images.map((img, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <Image
                      src={img}
                      className="img-fluid"
                      alt={`${event.title} - Image ${index + 1}`}
                      width={800}
                      height={600}
                    />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#${carouselId}`}
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#${carouselId}`}
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-8 justify-content-center">
          <div className="our-event-carousel-text text-start mb-md-5">
            <dl>
              <dt>Event</dt>
              <dd>{event.title}</dd>
              <dt>Venue</dt>
              <dd>{event.venue}</dd>
              <dt>Date</dt>
              <dd>{event.date}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
