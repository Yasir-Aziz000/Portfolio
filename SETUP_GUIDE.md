# Portfolio Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 14.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

To verify installation, run:
```bash
node --version
npm --version
```

## Quick Start

### Step 1: Navigate to the project directory
```bash
cd portfolio
```

### Step 2: Install dependencies
```bash
npm install
```

This will install:
- React 18.2.0
- React DOM 18.2.0
- React Scripts 5.0.1
- Web Vitals

### Step 3: Start the development server
```bash
npm start
```

The application will automatically open in your browser at `http://localhost:3000`

### Step 4: Build for production (optional)
```bash
npm run build
```

## File Structure Verification

Ensure all these files exist in your project:

```
portfolio/
├── package.json
├── README.md
├── SETUP_GUIDE.md
├── public/
│   └── index.html
└── src/
    ├── index.js
    ├── index.css
    ├── App.js
    ├── App.css
    └── components/
        ├── Header.js
        ├── Header.css
        ├── Hero.js
        ├── Hero.css
        ├── About.js
        ├── About.css
        ├── Skills.js
        ├── Skills.css
        ├── Experience.js
        ├── Experience.css
        ├── Projects.js
        ├── Projects.css
        ├── Education.js
        ├── Education.css
        ├── Contact.js
        ├── Contact.css
        ├── Footer.js
        └── Footer.css
```

## Customization

### Update Contact Information
Edit `src/components/Contact.js` and update:
- Email address
- Phone number
- LinkedIn URL
- GitHub URL
- Location

### Modify Content
- **About section**: Edit `src/components/About.js`
- **Skills**: Edit `src/components/Skills.js`
- **Experience**: Edit `src/components/Experience.js`
- **Projects**: Edit `src/components/Projects.js`
- **Education**: Edit `src/components/Education.js`

### Change Colors/Theme
Edit the CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #2563eb;  /* Main blue color */
  --secondary-color: #10b981; /* Green accent */
  /* ... other variables */
}
```

## Deployment Options

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Option 2: Netlify
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `build` folder

### Option 3: GitHub Pages
1. Install: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

## Troubleshooting

### Port 3000 already in use
```bash
# Kill the process using port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill
```

### Dependencies installation fails
```bash
# Clear npm cache
npm cache clean --force
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json
# Reinstall
npm install
```

### Build errors
- Ensure all import statements are correct
- Check for missing CSS files
- Verify React version compatibility

## Browser Compatibility

The portfolio is compatible with:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## Performance Tips

- The site uses lazy loading for images
- CSS animations are GPU-accelerated
- Intersection Observer API for efficient scroll animations
- Minimal JavaScript for fast load times

## Support

For issues or questions:
- Email: ahmed.yasir3000@gmail.com
- GitHub: [github.com/Yasir-Aziz000](https://github.com/Yasir-Aziz000)

---

**Good luck with your portfolio! 🚀**
