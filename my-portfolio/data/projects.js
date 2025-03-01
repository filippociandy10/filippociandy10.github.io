const projects = [
    {
      id: 'featured-1',
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website built with Next.js and Framer Motion to showcase my projects and skills. Features smooth animations, a dark theme, and responsive design.',
      longDescription: `This portfolio website is built using Next.js and modern web technologies to create a fast, responsive, and visually appealing showcase of my work. The site features:
  
      • Server-side rendering for optimal performance
      • Responsive design that works on all devices
      • Smooth page transitions and UI animations using Framer Motion
      • Dark mode support with theme toggle
      • Optimized images and assets for fast loading times`,
      tags: ['Next.js', 'React', 'Framer Motion', 'Tailwind CSS'],
      image: '/projects/portfolio.jpg',
      github: 'https://github.com/yourusername/portfolio',
      external: 'https://yourwebsite.com',
      featured: true,
    },
    {
      id: 'featured-2',
      title: 'E-commerce Dashboard',
      description:
        'A comprehensive admin dashboard for e-commerce businesses to manage products, track sales, and analyze customer data. Includes dark mode, data visualization, and real-time updates.',
      longDescription: `This e-commerce dashboard provides business owners with a complete overview of their online store's performance. Key features include:
      
      • Real-time sales and inventory tracking
      • Customer behavior analytics with visualizations
      • Product management interface
      • Order processing and fulfillment tracking
      • User authentication and role-based permissions
      • Dark/light theme modes for different environments`,
      tags: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
      image: '/projects/dashboard.jpg',
      github: 'https://github.com/yourusername/ecommerce-dashboard',
      external: 'https://dashboard-demo.yourwebsite.com',
      featured: true,
    },
    {
      id: 'featured-3',
      title: 'Mobile Weather App',
      description:
        'A beautiful weather application that provides current conditions and forecasts for any location. Uses geolocation for automatic detection and allows users to save favorite locations.',
      longDescription: `This weather application was designed with user experience in mind, providing accurate weather information in a visually appealing interface. Features include:
      
      • Current conditions and 7-day forecast for any location
      • Automatic location detection using geolocation
      • Save and track multiple favorite locations
      • Detailed weather data including humidity, wind speed, and UV index
      • Animated weather icons and background effects that match current conditions
      • Offline support with cached data`,
      tags: ['React Native', 'TypeScript', 'OpenWeather API', 'Styled Components'],
      image: '/projects/weather-app.jpg',
      github: 'https://github.com/yourusername/weather-app',
      external: 'https://weather.yourwebsite.com',
      featured: true,
    },
    {
      id: 'other-1',
      title: 'Developer Blog',
      description: 'A technical blog built with Next.js and MDX where I share tutorials, code snippets, and thoughts on web development.',
      tags: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
      image: '/projects/blog.jpg',
      github: 'https://github.com/yourusername/dev-blog',
      external: 'https://blog.yourwebsite.com',
      featured: false,
    },
    {
      id: 'other-2',
      title: 'Task Management App',
      description: 'A Kanban-style task management application with drag-and-drop functionality, task categorization, and team collaboration features.',
      tags: ['React', 'Redux', 'Firebase', 'Drag-and-Drop API'],
      image: '/projects/task-app.jpg',
      github: 'https://github.com/yourusername/task-manager',
      external: 'https://tasks.yourwebsite.com',
      featured: false,
    },
    {
      id: 'other-3',
      title: 'Recipe Finder',
      description: 'A web application that helps users discover recipes based on ingredients they have in their kitchen. Includes filters for dietary restrictions.',
      tags: ['JavaScript', 'CSS', 'Recipe API', 'Local Storage'],
      image: '/projects/recipe-app.jpg',
      github: 'https://github.com/yourusername/recipe-finder',
      external: 'https://recipes.yourwebsite.com',
      featured: false,
    },
    {
      id: 'other-4',
      title: 'Cryptocurrency Dashboard',
      description: 'Real-time cryptocurrency tracking dashboard with price alerts, portfolio management, and historical data visualization.',
      tags: ['React', 'WebSockets', 'Chart.js', 'Crypto API'],
      image: '/projects/crypto-dashboard.jpg',
      github: 'https://github.com/yourusername/crypto-dashboard',
      external: 'https://crypto.yourwebsite.com',
      featured: false,
    },
    {
      id: 'other-5',
      title: 'Movie Database App',
      description: 'A movie browsing application with features like searching, filtering, watchlists, and detailed information about movies and TV shows.',
      tags: ['React', 'Redux', 'TMDB API', 'Styled Components'],
      image: '/projects/movie-app.jpg',
      github: 'https://github.com/yourusername/movie-database',
      external: 'https://movies.yourwebsite.com',
      featured: false,
    },
    {
      id: 'other-6',
      title: 'URL Shortener Service',
      description: 'A simple but powerful URL shortening service with custom aliases, click tracking, and QR code generation.',
      tags: ['Node.js', 'Express', 'MongoDB', 'Redis'],
      image: '/projects/url-shortener.jpg',
      github: 'https://github.com/yourusername/url-shortener',
      external: 'https://short.yourwebsite.com',
      featured: false,
    },
  ];
  
  export default projects;