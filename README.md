# Nebula Financial Services - React Application

A modern, high-performance web application for **Nebula Financial Services Ltd**, built with **React 19** and **Vite**. This platform provides a comprehensive trading environment interface, including real-time market data, educational resources, trading calculators, and instrument details.

![Nebula Banner](src/assets/logo.png)

## 🚀 Key Features

*   **Modern Aesthetics**: Premium dark-themed design with golden accents, glassmorphism effects, and smooth shimmer animations.
*   **Responsive Layout**: Fully responsive interface optimized for desktop, tablet, and mobile devices.
*   **Comprehensive Informational Pages**:
    *   **Home**: Dynamic landing page with live ticker, "Why Us" benefits, and quick start guide.
    *   **About Us**: Company mission, vision, and core values.
    *   **Contact**: Integrated contact form and location details with Google Maps integration possibilities.
*   **Trading Instruments**: Detailed pages for Forex, Metals, Oil & Commodities, Spot Indices, and Cryptocurrencies.
*   **Traders' Tools**:
    *   **Calculators**: Interactive Margin and Profit calculators with instant results.
    *   **Academy**: Educational resources and market terminology.
    *   **Economic Calendar & Market News**: (Placeholder/Integration ready) for live financial updates.
*   **Navigation**: Dynamic dropdown menus and breadcrumb navigation for seamless user experience.

## 🛠️ Tech Stack

*   **Framework**: [React](https://react.dev/) (v19)
*   **Build Tool**: [Vite](https://vitejs.dev/) - For lightning-fast development and building.
*   **Routing**: [React Router](https://reactrouter.com/) (v7) - Client-side routing.
*   **Styling**: Pure CSS3 with extensive usage of CSS Variables, Flexbox, Grid, and Animations.
*   **Linting**: ESLint.

## 📦 Installation & Setup

Follow these steps to get the project up and running locally:

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm or yarn

### Steps

1.  **Clone the repository** (if applicable) or navigate to the project directory:
    ```bash
    cd nebula_react
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Run Development Server**:
    Start the local development server with hot-reload:
    ```bash
    npm run dev
    ```
    The app will basically run at `http://localhost:5173` (or the port shown in your terminal).

4.  **Build for Production**:
    To create an optimized production build:
    ```bash
    npm run build
    ```
    The output will be in the `dist` folder.

5.  **Preview Production Build**:
    ```bash
    npm run preview
    ```

## 📂 Project Structure

```
nebula_react/
├── public/              # Static assets (favicons, manifests)
├── src/
│   ├── assets/          # Images, background textures, icons
│   ├── components/      # Reusable UI components (Navbar, Footer, TickerBar, etc.)
│   ├── pages/           # Full page views (Home, About, Contact, etc.)
│   ├── App.jsx          # Main application component & Routing setup
│   ├── main.jsx         # Entry point
│   ├── index.css        # Global styles & Variables
│   ├── About.css        # Specific page styles
│   ├── Academy.css      # Specific page styles
│   ├── Contact.css      # Specific page styles
│   └── ...
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies and scripts
```

## 🎨 Theme & Customization

The project uses CSS variables defined in `index.css` for easy theming. key variables include:

*   **Colors**:
    *   `--bg-dark`: Main background color.
    *   `--gold-light`, `--gold-medium`: Primary accent colors.
    *   `--text-white`, `--text-muted`: Typography colors.
*   **Fonts**:
    *   `--font-heading`: Used for all headers (Outfit/Serif).
    *   `--font-body`: Used for content text (Inter/Sans-serif).

## 📄 License

Proprietary software for **Nebula Financial Services Ltd**. All rights reserved.
