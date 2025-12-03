# Ergo Admin

A modern admin interface for the Ergo 360° system.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Login.tsx      # Login page component
│   │   └── Login.css      # Login page styles
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
└── vite.config.ts         # Vite configuration
```

## Features

- **Login Page**: Beautiful login interface with email and password fields
- **Password Visibility Toggle**: Show/hide password functionality
- **Remember Me**: Checkbox to remember user credentials
- **Forgot Password**: Link to password recovery
- **Responsive Design**: Works on desktop and mobile devices

## Technologies

- React 18
- TypeScript
- Vite
- CSS3

