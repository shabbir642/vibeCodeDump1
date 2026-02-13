# Valentine's Proposal App

A romantic Valentine's Day proposal web application built with Next.js 15, React, TypeScript, and Tailwind CSS. This app creates an interactive and visually appealing proposal experience with floating hearts and animated components.

## ✨ Features

- **Interactive Proposal Card**: Engaging proposal interface with animated buttons
- **Floating Hearts Animation**: Beautiful floating hearts background effect
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Modern Tech Stack**: Built with Next.js 15, React, TypeScript, and Tailwind CSS
- **Korean-Inspired Aesthetics**: Romantic design elements inspired by Korean culture
- **Smooth Animations**: CSS transitions and animations for enhanced user experience

## 🏗️ Project Structure

```
dump-app/
├── app/                    # Next.js 15 App Router
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── src/
│   ├── components/        # React components
│   │   ├── Button.tsx     # Reusable button component
│   │   ├── FloatingHearts.tsx # Animated hearts background
│   │   ├── Footer.tsx     # Footer component
│   │   ├── Header.tsx     # Header component
│   │   ├── ProposalCard.tsx # Main proposal interface
│   │   └── ProposalPage.tsx # Main proposal page layout
│   ├── styles/
│   │   └── globals.css    # Global CSS styles
│   └── utils/
│       ├── randomPosition.ts # Random positioning utilities
│       └── theme.ts       # Theme configuration
├── public/
│   └── favicon.ico        # App favicon
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── postcss.config.js      # PostCSS configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or later)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd dump-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Building for Production

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x
- **UI**: React 19
- **Development**: ESLint for code quality

## 🎨 Components

- **ProposalPage**: Main page component with layout
- **ProposalCard**: Interactive proposal interface
- **FloatingHearts**: Animated floating hearts background
- **Button**: Reusable button component with styling
- **Header/Footer**: Navigation and footer components

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Korean culture and aesthetic inspiration
- Next.js team for the amazing framework
- Tailwind CSS for utility-first styling
- React team for the powerful UI library
