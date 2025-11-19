'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Inquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    waNumber: '',
    event: '',
    specialReq: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // For now, just show an alert. In production, you'd integrate with an email service
    alert(`Thank you ${formData.name}! We'll contact you soon at ${formData.email}`);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      waNumber: '',
      event: '',
      specialReq: '',
    });
  };

  return (
    <>
      {/* Banner area start */}
            <section
        className="inquiry-banner mb-5"
        style={{ backgroundImage: 'url(/img/index/IMG20230608162615.jpg)' }}
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
                Inquiries
              </h1>
              <h3
                className="text-center"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="1200"
              >
                We are happy to hear from you. Contact us today!
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry area start */}
      <div className="inquiry-area mt-5 mb-5 pt-5 pb-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-xl-6">
              <div
                className="inquiry-map mb-4"
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <Image
                  src="/img/logo/logo-transparent.png"
                  alt="Bali Pyro 2 Logo"
                  width={500}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div
                className="inquiry-slogan mb-4"
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay="200"
              >
                <h2>Illuminate your events now!</h2>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 justify-content-center">
              <form onSubmit={handleSubmit}>
                <div className="contact-form mb-3">
                  <label
                    htmlFor="name"
                    className="form-label"
                    data-aos="fade-left"
                    data-aos-duration="800"
                    data-aos-delay="100"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    data-aos="fade-left"
                    data-aos-duration="800"
                    data-aos-delay="200"
                  />
                </div>
                <div className="contact-form mb-3">
                  <label
                    htmlFor="email"
                    className="form-label"
                    data-aos="fade-left"
                    data-aos-duration="800"
                    data-aos-delay="300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    data-aos="fade-left"
                    data-aos-duration="800"
                    data-aos-delay="400"
                  />
                </div>
                <div className="contact-form mb-3">
                  <label
                    htmlFor="waNumber"
                    className="form-label"
                    data-aos="fade-left"
                    data-aos-duration="800"
                    data-aos-delay="500"
                  >
                    Whatsapp Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="waNumber"
                    required
                    placeholder="0812345678"
                    value={formData.waNumber}
                    onChange={handleChange}
                    data-aos="fade-left"
                    data-aos-duration="800"
                    data-aos-delay="600"
                  />
                </div>
                <div className="contact-form mb-3">
                  <label
                    htmlFor="event"
                    className="form-label"
                    data-aos="fade-left"
                    data-aos-duration="800"
                    data-aos-delay="700"
                  >
                    Event
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="event"
                    required
                    placeholder="Your Event"
                    value={formData.event}
                    onChange={handleChange}
                    data-aos="fade-left"
                    data-aos-duration="800"
                    data-aos-delay="700"
                  />
                </div>
                <div className="contact-form mb-3">
                  <label
                    htmlFor="specialReq"
                    className="form-label"
                    data-aos="fade-left"
                    data-aos-duration="800"
                    data-aos-delay="700"
                  >
                    Special Request
                  </label>
                  <textarea
                    className="form-control"
                    id="specialReq"
                    rows="6"
                    placeholder="Write any special request here!"
                    required
                    value={formData.specialReq}
                    onChange={handleChange}
                    data-aos="fade-left"
                    data-aos-duration="800"
                    data-aos-delay="700"
                  ></textarea>
                </div>
                <div className="inquiry-btn">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-aos="fade-left"
                    data-aos-duration="800"
                    data-aos-delay="600"
                  >
                    Get in touch
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Inquiry area end */}
    </>
  );
}
