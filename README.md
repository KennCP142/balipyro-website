# Bali Pyro 2 - Next.js Website

A fully converted Next.js website for Bali Pyro 2, a lighting rental service provider based in Bali, Indonesia.

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
# or
yarn install
```

2. **Move your images to the public folder:**
```bash
# The img/ folder needs to be moved to public/img/
chmod +x setup.sh
./setup.sh
```

Or manually:
```bash
mv img public/img
```

3. **Run the development server:**
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚢 Deploy to Vercel

### Method 1: Using Vercel CLI
```bash
npm install -g vercel
vercel
```

### Method 2: Using Vercel Dashboard
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

That's it! Vercel will automatically detect Next.js and configure everything.

## 📁 Project Structure

```
balipyro-website/
├── app/
│   ├── about/
│   │   └── page.jsx
│   ├── inquiry/
│   │   └── page.jsx
│   ├── our-event/
│   │   └── page.jsx
│   ├── services/
│   │   └── page.jsx
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
│       ├── logo/
│       ├── index/
│       ├── elements/
│       └── ... (all event images)
├── package.json
├── next.config.js
└── jsconfig.json
```

## ✨ Features

- ✅ Fully responsive design
- ✅ Next.js 14 with App Router
- ✅ Server-side rendering (SSR)
- ✅ Optimized images with next/image
- ✅ Bootstrap 5.3 integration
- ✅ AOS (Animate On Scroll) animations
- ✅ SEO optimized with metadata
- ✅ Client-side form handling
- ✅ Dynamic routing
- ✅ Reusable components

## 🛠️ Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **Bootstrap 5.3** - CSS framework
- **AOS** - Animation library
- **Sass** - CSS preprocessor (optional)

## 📱 Pages

- **Home (`/`)** - Landing page with hero carousel, about section, and service previews
- **About (`/about`)** - Company profile and information
- **Services (`/services`)** - Lighting, sound, genset, LED screen, and effects services
- **Our Events (`/our-event`)** - Portfolio of past events with image carousels
- **Inquiry (`/inquiry`)** - Contact form for inquiries

## 🚀 Production Checklist

Before deploying to production:

- [ ] Move `img/` folder to `public/img/`
- [ ] Update social media links in Footer component
- [ ] Integrate email service for the inquiry form
- [ ] Add analytics (Google Analytics, Vercel Analytics)
- [ ] Test on multiple devices and browsers
- [ ] Optimize images if needed
- [ ] Set up custom domain in Vercel
- [ ] Configure SEO metadata for each page

## 📝 Notes for Manual Adjustment

1. **Social Media Links**: Update in `components/Footer.jsx`
2. **Email Form**: Integrate with email service in `app/inquiry/page.jsx`
3. **Images**: Must move `img/` to `public/img/` before running

## 📄 License

This project is proprietary to Bali Pyro 2.

## 🤝 Support

For support, email: teddywirawan78@yahoo.com  
Phone: +62 813-3930-7111

---

**See MIGRATION_COMPLETE.md for detailed conversion notes and troubleshooting.**

## Template
### Main Color Template
- White - `#F5F5F5` (HEX)
- Black - `#0f0f0f`
- Darker Grey - `#2d2d2d`
- Dark Grey - `#333333`  
- Red - `#E81828`  

### Other Color Template
_Add other colors here_

### Branch Naming Convention

| Category Word | Meaning |
| --- | --- |
| `hotfix` | for quickly fixing critical issues, usually with a temporary solution |
| `bugfix` | for fixing a bug |
| `feature` | for adding, removing or modifying a feature |
| `test` | for experimenting something which is not an issue |
| `wip` | for a work in progress |

Branch Naming Format:
```
author-category-name
```

## Fonts
- [Barlow](https://fonts.google.com/specimen/Barlow?query=Barlow)  
- [Nunito](https://fonts.google.com/specimen/Nunito?query=Nunito)   
   
Code to use for `@import`:  
```
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@900&family=Nunito:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');
```
   
CSS rules to specify families:   
```
font-family: 'Barlow', sans-serif;
font-family: 'Nunito', sans-serif;
```
## Assets
### Logo
...
