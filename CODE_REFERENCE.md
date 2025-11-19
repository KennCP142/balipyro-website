# 📝 COMPLETE CODE REFERENCE

This document contains all the major code files for quick reference.

---

## 📦 PACKAGE.JSON

```json
{
  "name": "balipyro-website",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.15",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "bootstrap": "^5.3.2"
  },
  "devDependencies": {
    "eslint": "^8",
    "eslint-config-next": "14.2.15",
    "sass": "^1.69.5"
  }
}
```

---

## ⚙️ NEXT.CONFIG.JS

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
  },
}

module.exports = nextConfig
```

---

## 🎯 JSCONFIG.JSON

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

---

## 📱 APP/LAYOUT.JSX

```jsx
import { Nunito, Barlow } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BootstrapClient from '@/components/BootstrapClient';
import AOSInit from '@/components/AOSInit';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-nunito',
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['900'],
  variable: '--font-barlow',
});

export const metadata = {
  title: 'Bali Pyro 2 - Illuminating Moments, Creating Memories',
  description: 'We are a lighting rental service provider based in Bali, Indonesia...',
  icons: {
    icon: '/img/logo/logo_icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunito.variable} ${barlow.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <BootstrapClient />
        <AOSInit />
      </body>
    </html>
  );
}
```

---

## 🏠 APP/PAGE.JSX (HOME)

```jsx
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Home - Bali Pyro 2',
};

export default function Home() {
  return (
    <>
      {/* Hero Carousel */}
      <section className="slider-area">
        <div className="container-flex">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            {/* Carousel content */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className="about-area bg-white mt-5 mb-5 pt-5 pb-5">
        {/* About content */}
      </div>

      {/* Services Preview */}
      <div className="services-area bg-white mt-5 mb-5 pt-5 pb-5">
        {/* Services content */}
      </div>
    </>
  );
}
```

---

## 🧩 COMPONENTS/HEADER.JSX

```jsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => pathname === path;

  return (
    <>
      <div className="header-area">
        <div id="sticky-header" className="main-header-area">
          <nav className={`navbar navbar-expand-lg navbar-dark ${isScrolled ? 'navbar-scroll shadow' : 'sticky-top'}`}>
            <div className="container">
              <Link className="navbar-brand" href="/">
                <Image src="/img/logo/logo-invert-transparent.png" alt="Logo" width={120} height={120} priority />
                <h5>Illuminating Moments, Creating Memories</h5>
              </Link>
              {/* Navigation menu */}
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} href="/">Home</Link>
                </li>
                {/* More nav items */}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
```

---

## 🧩 COMPONENTS/FOOTER.JSX

```jsx
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer-area bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row">
          <div className="footer-brand col-md-12 col-lg-4 col-xl-4 mx-auto mt-3">
            <Link className="footer-logo" href="/">
              <Image src="/img/logo/logo-alt-transparent.png" alt="Logo" width={250} height={100} />
            </Link>
            <p>Get more information on our social media</p>
            {/* Social media links */}
          </div>
          <div className="footer-sitemap col-md-4 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="footer-label">Sitemap</h5>
            <p className="footer-nav"><Link href="/about">Our Company</Link></p>
            <p className="footer-nav"><Link href="/services">Our Services</Link></p>
            {/* More links */}
          </div>
          <div className="footer-contact col-md-6 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="footer-label">Contact</h5>
            <p>+62 813-3930-7111</p>
            <p>teddywirawan78@yahoo.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

---

## 🧩 COMPONENTS/BOOTSTRAPCLIENT.JSX

```jsx
'use client';

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null;
}
```

---

## 🧩 COMPONENTS/AOSINIT.JSX

```jsx
'use client';

import { useEffect } from 'react';

export default function AOSInit() {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({
        duration: 600,
        once: false,
      });
    });
  }, []);

  return null;
}
```

---

## 📧 APP/INQUIRY/PAGE.JSX

```jsx
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
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We'll contact you soon at ${formData.email}`);
    setFormData({ name: '', email: '', waNumber: '', event: '', specialReq: '' });
  };

  return (
    <>
      {/* Banner */}
      <section className="inquiry-banner" style={{ backgroundImage: 'url(/img/index/IMG20230608162615.jpg)' }}>
        <h1>Inquiries</h1>
        <h3>We are happy to hear from you. Contact us today!</h3>
      </section>

      {/* Form */}
      <div className="inquiry-area">
        <form onSubmit={handleSubmit}>
          <input type="text" id="name" value={formData.name} onChange={handleChange} required />
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
          {/* More fields */}
          <button type="submit">Get in touch</button>
        </form>
      </div>
    </>
  );
}
```

---

## 🎪 COMPONENTS/EVENTCAROUSEL.JSX

```jsx
import Image from 'next/image';

export default function EventCarousel({ carouselId, images, event }) {
  return (
    <div className="our-event">
      {event.showMonth && <h1>{event.month}</h1>}
      <div className="row">
        {/* Carousel */}
        <div className="col-lg-5">
          <div id={carouselId} className="carousel slide">
            <div className="carousel-inner">
              {images.map((img, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <Image src={img} alt={event.title} width={800} height={600} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Event details */}
        <div className="col-lg-6">
          <dl>
            <dt>Event</dt><dd>{event.title}</dd>
            <dt>Venue</dt><dd>{event.venue}</dd>
            <dt>Date</dt><dd>{event.date}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
```

---

## 🎪 APP/OUR-EVENT/PAGE.JSX

```jsx
import EventCarousel from '@/components/EventCarousel';

export const metadata = {
  title: 'Our Events - Bali Pyro 2',
};

const events = [
  {
    id: 'eventOct2023',
    month: 'OCTOBER 2023',
    showMonth: true,
    title: '78th Birthday',
    venue: 'Hongkong Garden Restaurant Bali',
    date: '23 October 2023',
    images: ['/img/Event B/88101.jpg', '/img/Event B/88102.jpg'],
  },
  // More events...
];

export default function OurEvent() {
  return (
    <>
      <section className="our-event-banner" style={{ backgroundImage: 'url(/img/index/IMG_4192.jpg)' }}>
        <h1>Our Events Portofolio</h1>
      </section>

      <section className="our-event-area">
        <div className="container">
          {events.map((event) => (
            <EventCarousel key={event.id} carouselId={event.id} images={event.images} event={event} />
          ))}
        </div>
      </section>
    </>
  );
}
```

---

## 🎨 GLOBALS.CSS (EXCERPT)

```css
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@900&family=Nunito:...");
@import 'bootstrap/dist/css/bootstrap.min.css';
@import 'aos/dist/aos.css';

/* Hero Carousel */
.slider-area {
  font-family: "Barlow", sans-serif;
  font-weight: 900;
  margin-top: -120px;
}

.slider-area .carousel-item {
  height: 100vh;
  min-height: 300px;
  position: relative;
}

/* Header */
.header-area .navbar-scroll {
  position: fixed;
  background-color: #333333;
  transition: 0.5s;
  height: 70px;
}

/* Footer */
.footer-area {
  font-family: "Nunito", sans-serif;
}

/* Responsive */
@media only screen and (max-width: 992px) {
  .slider-area {
    margin-top: 0;
  }
}
```

---

## 📜 SETUP.SH

```bash
#!/bin/bash

echo "Moving images to public directory..."

mkdir -p public

if [ -d "img" ]; then
    mv img public/
    echo "✅ Images moved to public/img/"
else
    echo "⚠️  img/ folder not found."
fi

echo "Cleaning up old files..."
rm -f index.html about.html services.html inquiry.html our_event.html
rm -rf css/ scss/ js/

echo "✅ Cleanup complete!"
echo ""
echo "Next steps:"
echo "1. Run 'npm install'"
echo "2. Run 'npm run dev'"
echo "3. Open http://localhost:3000"
```

---

## 🚀 DEPLOYMENT COMMANDS

### Install Dependencies
```bash
npm install
```

### Development
```bash
npm run dev
# Opens on http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

---

## 📂 FILE TREE

```
balipyro-website/
├── app/
│   ├── about/page.jsx
│   ├── inquiry/page.jsx
│   ├── our-event/page.jsx
│   ├── services/page.jsx
│   ├── layout.jsx
│   ├── page.jsx
│   └── globals.css
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── EventCarousel.jsx
│   ├── BootstrapClient.jsx
│   └── AOSInit.jsx
├── public/
│   └── img/
├── .gitignore
├── jsconfig.json
├── next.config.js
├── package.json
├── README.md
├── MIGRATION_COMPLETE.md
├── CONVERSION_SUMMARY.md
├── CODE_REFERENCE.md (this file)
└── setup.sh
```

---

**End of Code Reference**

This document provides quick reference to all major code files.
For complete files, see the actual project files.

Last updated: November 19, 2025
