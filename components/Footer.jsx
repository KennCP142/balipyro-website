import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer-area bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row">
          <div className="footer-brand col-md-12 col-lg-4 col-xl-4 mx-auto mt-3 text-left">
            <Link className="footer-logo" href="/">
              <Image
                src="/img/logo/logo-alt-transparent.png"
                alt="Bali Pyro 2 Logo"
                width={250}
                height={100}
              />
            </Link>
            <p className="footer-text">
              Get more information and other updates on our contact and social media
            </p>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a className="btn btn-link text-white" href="#">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-link text-white" href="#">
                  <i className="bi bi-envelope-at"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-link text-white" href="#">
                  <i className="bi bi-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-sitemap col-md-4 col-lg-2 col-xl-2 mx-auto mt-3 text-left">
            <h5 className="footer-label">Sitemap</h5>
            <p className="footer-nav">
              <Link href="/about">Our Company</Link>
            </p>
            <p className="footer-nav">
              <Link href="/services">Our Services</Link>
            </p>
            <p className="footer-nav">
              <Link href="/our-event">Our Events</Link>
            </p>
            <p className="footer-nav">
              <Link href="/inquiry">Send Inquiries</Link>
            </p>
          </div>
          <div className="footer-contact col-md-6 col-lg-4 col-xl-4 mx-auto mt-3 text-left">
            <h5 className="footer-label">Contact</h5>
            <div className="row">
              <div className="col-2">
                <p><i className="bi bi-telephone"></i></p>
              </div>
              <div className="col-10">
                <p>+62 813-3930-7111</p>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <p><i className="bi bi-envelope-at"></i></p>
              </div>
              <div className="col-10">
                <p>teddywirawan78@yahoo.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
