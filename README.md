# APURA Landing Page - Machine Test Submission

This repository contains the implementation of the APURA landing page, developed as part of the Thumbstack MERN stack Front-End Machine Test.

## Tech Stack
- **Framework**: ReactJS
- **Build Tool**: Vite
- **Language**: JavaScript
- **Styling**: Vanilla CSS (Custom Design System)
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
To start the development server:
```bash
npm run dev
```

### Building for Production
To create a production build:
```bash
npm run build
```

## Implementation Highlights

### 1. Design Fidelity
- Followed the Figma design closely, including specialized fonts (Inter/Outfit) and the signature color palette.
- Implemented the custom "Europe Stars" visual in the Mission section using CSS positioning.

### 2. Responsiveness
- Implemented a mobile-first approach for the grid systems (Product Cards, Roadmap, Footer).
- Used CSS Flexbox and Grid to ensure components adapt gracefully to different screen sizes.

### 3. Polish & Interactions
- Added entry animations to the Hero and Roadmap sections using Framer Motion.
- Implemented hover effects on all interactive elements (Cards, Buttons, Nav links).
- Used backdrop-filter for a modern glassmorphism navbar.

## Deployment
This project is ready to be deployed to **Vercel** or **Netlify**. Simply connect your GitHub repository and follow the standard build settings:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
