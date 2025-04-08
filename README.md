# SteelNovo Blacksmith Website

A Vue.js-powered website for SteelNovo, a blacksmith company run by two brothers showcasing their metalwork through a photo gallery, sharing their work ethic, and providing contact information for potential clients.

## Features

- **Home Page**: Introduction to SteelNovo with featured works and testimonials
- **Gallery**: Filterable gallery showcasing the brothers' metalwork projects
- **About**: Information about the brothers, their story, and craft philosophy
- **Contact**: Contact form and information for potential clients

## Tech Stack

- **Vue.js 3**: Frontend framework
- **Vue Router 4**: For SPA routing
- **Bootstrap 5**: For responsive styling
- **Pinia**: For state management (if needed in future development)
- **Vite**: Build tool for fast development

## Development Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run development server:
   ```bash
   npm run dev
   ```

## Production Build

To build the project for production:

```bash
npm run build
```

The build output will be in the `dist` folder, ready to be deployed to Vercel or any other hosting platform.

## Deployment on Vercel

This project is configured to be easily deployed on Vercel:

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Import the project in Vercel dashboard
3. Configure as needed (environment variables, etc.)
4. Deploy

## Project Structure

- `/src` - Source code
  - `/assets` - Static assets
  - `/components` - Vue components
  - `/router` - Vue Router configuration
  - `/views` - Page components

## License

All Rights Reserved - SteelNovo Blacksmith
