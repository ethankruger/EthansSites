# Ethan's Portfolio Site

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Project Overview

This is a professional portfolio and business website showcasing web design and development services for Eau Claire businesses.

## Technologies Used

This project is built with:

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React** - UI component library
- **shadcn-ui** - High-quality UI components
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Framer Motion** - Animation library

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd ethans-portfolio-site

# Install dependencies
npm install

# Start the development server
npm run dev
```

The development server will start at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── lib/           # Utility functions
└── main.tsx       # Application entry point
```

## Deployment

This project can be deployed to any static hosting service such as:

- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

Simply run `npm run build` and deploy the contents of the `dist` folder.

## License

Private - All rights reserved
