# Stella Wachira — Portfolio

A modern, full-stack developer portfolio built with React.js and Node.js, featuring a project showcase, contact form, and a secure admin panel for content management.

 **Live Demo**: [https://future-fs-01-navy-alpha.vercel.app/]   **GitHub**: [https://github.com/Stella-wach/FUTURE_FS_01](https://github.com/Stella-wach/FUTURE_FS_01)

---

## Features

- Responsive, animated portfolio with dark/light mode
- Projects showcase with category filtering and detail pages
- Contact form with MongoDB storage
- Secure admin panel to add, edit, and delete projects
- JWT-based authentication for admin access
- Skills section, About page, and CV download

---

## Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React.js | UI framework |
| Vite | Build tool |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| React Router DOM | Navigation |
| Shadcn/UI + Radix UI | UI components |
| TanStack Query | Data fetching |

### Backend
| Technology | Purpose |
|---|---|
| Node.js | Runtime |
| Express.js | Server framework |
| MongoDB + Mongoose | Database |
| JWT | Authentication |
| Bcryptjs | Password hashing |
| CORS | Cross-origin requests |

---

## Projects Featured

| Project | Stack | Links |
|---|---|---|
| Event App System | React, Node.js, MongoDB, M-PESA | [GitHub](https://github.com/Stella-wach/Event-Project.git) · [Live](https://quickeventsfrontend.vercel.app/) |
| Weather App | HTML5, Tailwind CSS, JavaScript, OpenWeatherMap API | [GitHub](https://github.com/Stella-wach/Weather-App.git) · [Live](https://weather-app-eight-psi-93.vercel.app/) |
| Hotel Booking System | Laravel, PHP, MySQL, M-PESA | [GitHub](https://github.com/Stella-wach/Hotel-Booking-System.git) |
| Globe App | Flutter, Dart, Firebase, M-PESA | [GitHub](https://github.com/Stella-wach/Go-Cart_Flutter.git) · [Live](https://globe-app-8da95.web.app/) |

---

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)

### 1. Clone the repo
```bash
git clone https://github.com/Stella-wach/FUTURE_FS_01.git
cd FUTURE_FS_01
```

### 2. Setup the frontend
```bash
npm install
npm run dev
```
Frontend runs on `http://localhost:8080`

### 3. Setup the backend
```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/Portfolio
JWT_SECRET=your_secret_key_here
ADMIN_EMAIL=your@email.com
ADMIN_PASSWORD=yourpassword
```

Start the backend:
```bash
npm run dev
```
Backend runs on `http://localhost:5000`

### 4. Create your admin account (run once)
```bash
curl -X POST http://localhost:5000/api/auth/seed
```

### 5. Access the admin panel
Go to `http://localhost:8080` and click the subtle ⚙ icon next to the social links, or navigate directly to `/admin/login`.

---

## API Endpoints

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/login` | Admin login |
| POST | `/api/auth/seed` | Create admin account (run once) |

### Projects
| Method | Endpoint | Description | Auth |
|---|---|---|---|
| GET | `/api/projects` | Get all projects | Public |
| POST | `/api/projects` | Add new project | Admin only |
| PUT | `/api/projects/:id` | Update project | Admin only |
| DELETE | `/api/projects/:id` | Delete project | Admin only |

### Contact
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | Get all messages |

---

## Folder Structure
```
FUTURE_FS_01/
├── src/                    # Frontend React app
│   ├── components/         # Reusable UI components
│   ├── pages/              # Page components
│   ├── contexts/           # Auth context
│   ├── services/           # API service layer
│   ├── data/               # Local project data
│   ├── hooks/              # Custom hooks
│   └── assets/             # Images and static files
├── backend/                # Express.js API
│   └── src/
│       ├── controllers/    # Route handlers
│       ├── models/         # MongoDB schemas
│       ├── routes/         # API routes
│       └── middleware/     # Auth middleware
├── public/                 # Static assets
└── package.json            # Frontend dependencies
```

---

## Deployment

- **Frontend**: Deploy to Vercel — connect your GitHub repo and set root directory to `/`
- **Backend**: Deploy to Render — set root directory to `backend/`, add environment variables
- **Database**: Use MongoDB Atlas for production

---

## Author

**Stella Wachira**  
Full-Stack Software Developer · Nairobi, Kenya  
[GitHub](https://github.com/Stella-wach) · [LinkedIn](https://linkedin.com/in/stella-wachira) · wstellawambui@gmail.com

---

## License

This project is open source and available under the [MIT License](LICENSE).