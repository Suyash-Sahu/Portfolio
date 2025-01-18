# 3D Portfolio Website

A modern and interactive portfolio website built with React.js and Three.js. This project showcases my skills, projects, and experience in web development through a unique 3D interface.

## Features

- Modern UI/UX with a dark theme
- Interactive 3D elements using Three.js
- Fully responsive design
- Animated sections and components
- Contact form with EmailJS integration
- 3D models and animations
- Performance optimized

## Tech Stack

- React.js
- Three.js
- TailwindCSS
- Framer Motion
- EmailJS
- React Three Fiber
- React Three Drei

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/3d-portfolio.git
```

2. Install dependencies:
```bash
cd 3d-portfolio
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm start
```

5. Build for production:
```bash
npm run build
```

## Project Structure

- `/src/components` - React components
- `/src/assets` - Images, icons, and 3D models
- `/src/constants` - Configuration and data files
- `/src/styles` - Global styles and Tailwind configuration
- `/src/utils` - Utility functions and helpers
- `/public` - Static files and 3D models

## 3D Models

The project uses several 3D models:
- Computer model in the Hero section
- Earth model in the Contact section
- Technology balls in the Tech section

Models should be placed in the `/public` directory.

## Customization

1. Update personal information in `/src/constants/index.js`
2. Replace images and icons in `/src/assets`
3. Modify styles in `/src/styles.js` and `/src/index.css`
4. Update 3D models in `/public`

## Deployment

The project can be deployed to platforms like:
- Vercel
- Netlify
- GitHub Pages

Follow the respective platform's deployment guides for detailed instructions.

## Credits

- 3D Models from [Sketchfab](https://sketchfab.com)
- Icons from various sources with appropriate licenses
- Inspiration from various portfolio websites

## License

This project is open source and available under the MIT License.
