# Resume Analyzer - Frontend

A modern React-based frontend application for analyzing resumes and managing user authentication. Built with Vite, React 19, and Tailwind CSS.

## 🚀 Features

- **Landing Page** - Engaging landing page showcasing the application's capabilities
- **User Authentication** - Secure login and registration system
- **Modern UI** - Clean, responsive design built with Tailwind CSS
- **Fast Performance** - Powered by Vite for lightning-fast development and builds

## 🛠️ Tech Stack

| Technology | Description |
|-------------|-------------|
| **React 19** | Modern React library for building user interfaces |
| **Vite 7** | Next-generation frontend build tool |
| **Tailwind CSS 4** | Utility-first CSS framework |
| **ESLint** | JavaScript/JSX linting for code quality |

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)

## 🏃‍♂️ Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd vite-project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
vite-project/
├── public/                  # Static assets
├── src/
│   ├── assets/             # Images, fonts, and other assets
│   ├── components/
│   │   ├── Auth/           # Authentication components
│   │   │   ├── login.jsx
│   │   │   └── register.jsx
│   │   └── landingPage/    # Landing page components
│   │       └── landing.jsx
│   ├── App.jsx             # Main application component
│   ├── App.css             # Application styles
│   ├── index.css           # Global styles
│   └── main.jsx            # Application entry point
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
├── package.json            # Project dependencies
└── README.md               # Project documentation
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build the application for production |
| `npm run lint` | Run ESLint to check for code issues |
| `npm run preview` | Preview the production build locally |

## 🎨 Customization

### Tailwind CSS

This project uses Tailwind CSS v4. To customize the styling:

1. Edit `src/index.css` to modify Tailwind imports
2. Update Tailwind configuration as needed

### Adding New Components

Create new components in the `src/components/` directory and import them in your application as needed.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React](https://react.dev/) - The library for web and native user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
