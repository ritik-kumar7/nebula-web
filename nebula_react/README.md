# Nebula Finserv

A modern React web application for market analysis, portfolio management, and financial reporting. Built with React 19, Vite, and React Router for a fast and seamless user experience.

## Features

- **Home Page** - Main landing page with overview information
- **Market Analysis** - Real-time market data and analysis tools
- **Portfolio Management** - Track and manage investment portfolios
- **Financial Reports** - Generate and view detailed financial reports
- **Responsive Navigation** - Top navigation bar with bottom navigation for easy access
- **Fast Development** - Built with Vite for rapid development and optimized production builds

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 14 or higher)
- **npm** or **yarn** package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ritik-kumar7/nebula-web.git
cd nebula-web
```

2. Install dependencies:
```bash
npm install
```

or if you prefer yarn:
```bash
yarn install
```

## Getting Started

### Development Server

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be generated in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Lint Code

Run ESLint to check for code quality issues:

```bash
npm run lint
```

## Project Structure

```
nebula_react/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   │   ├── market_img/    # Market page images
│   │   ├── port_img/      # Portfolio page images
│   │   └── report_img/    # Report page images
│   ├── components/        # Reusable components
│   │   ├── Navbar.jsx     # Top navigation bar
│   │   └── BottomNav.jsx  # Bottom navigation bar
│   ├── pages/            # Page components
│   │   ├── Home.jsx      # Home page
│   │   ├── Market.jsx    # Market analysis page
│   │   ├── Portfolio.jsx # Portfolio management page
│   │   └── Report.jsx    # Financial reports page
│   ├── App.jsx           # Main app component
│   ├── App.css           # Global app styles
│   ├── index.css         # Global styles
│   └── main.jsx          # Application entry point
├── eslint.config.js       # ESLint configuration
├── vite.config.js         # Vite configuration
├── package.json           # Project dependencies and scripts
├── index.html             # HTML entry point
└── README.md              # This file
```

## Technologies Used

- **React** (^19.2.0) - UI library for building user interfaces
- **React Router DOM** (^7.13.0) - Client-side routing and navigation
- **Vite** (^7.2.4) - Next generation frontend tooling for fast builds
- **ESLint** (^9.39.1) - Code quality and consistency tool
- **CSS** - Styling with dedicated stylesheets

## Available Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page |
| `/market` | Market | Market analysis and data |
| `/portfolio` | Portfolio | Portfolio management tools |
| `/report` | Report | Financial reporting |

## Development Notes

- The application uses React Router for client-side navigation
- Navigation is available through both top (`Navbar`) and bottom (`BottomNav`) components
- Each page has its own dedicated CSS file for styling
- Images are organized by page in the `assets/` directory
- The project is configured with ESLint for code quality standards

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.



**Happy coding!** 🚀
