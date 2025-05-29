to run code: npm run dev

<!-- npm installs -->
vue-router
swiper

📋 Project Requirements Checklist:
1. Frontend (React):
- Create landing page with profile information
- Blog/image feed section
- Individual post page (optional lightbox for images)
- Form to upload new post (only for admin)
- Login page for admin
- Responsive layout
- Connect to backend API for data

2. Backend (Flask or Django):
- Set up REST API (Flask-RESTful or Flask-RESTX)
- User authentication (JWT or session)
- Image upload route
- Store images locally or use a cloud provider (e.g., Cloudinary, S3)
- Blog post model (title, content, image paths, date)
- Admin-only endpoints for post creation and deletion
- Serve static files (or use a CDN)

3. Database:
- Use SQLite for development, PostgreSQL for production

    Tables:

    Users (id, username, password hash)

    Posts (id, title, content, image_urls, created_at)

4. Deployment:
- Host frontend (Vercel, Netlify, or any static host)
- Host backend (Render, Railway, Heroku, or DigitalOcean)
- Use .env for managing secrets and environment variables

5. Bonus Features:
- Tagging system for blog posts or image categories
- Pagination or infinite scroll
- Dark/light theme toggle
- Search functionality