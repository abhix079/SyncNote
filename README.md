# SyncNote 

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)  ![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)  ![Express](https://img.shields.io/badge/Server-Express-lightgrey?logo=express)  ![MongoDB](https://img.shields.io/badge/Database-MongoDB-darkgreen?logo=mongodb)    ![CSS](https://img.shields.io/badge/Styling-CSS-blue?logo=css3)  ![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)  ![Render](https://img.shields.io/badge/Backend%20on-Render-purple?logo=render)  

A full-stack cloud-based note-taking application with secure authentication, protected routes, and a modern dashboard. SyncNote allows users to create, edit, delete, and organize notes seamlessly across devices.  

---

## 🚀 Features  
- **Authentication** – Signup/Login with JWT tokens.  
- **Protected Routes** – Only authenticated users can access notes.  
- **Notes CRUD** – Add, edit, delete, and view notes.  
- **Categories** – Organize notes into categories.  
- **Cloud Storage** – MongoDB Atlas ensures persistence.  
- **Contact Form** – Messages stored in DB with backend handling.  
- **Responsive UI** – Built with plain CSS.  

---

## 🛠 Tech Stack  
**Frontend (client):** React (Vite), CSS, Axios  
**Backend (server):** Node.js, Express.js, MongoDB, JWT Authentication  
**Database:** MongoDB Atlas  
**Deployment:** Vercel (frontend), Render/Railway (backend)  

---

## Project Structure  
SyncNote/<br>
│<br>
├── client/ <br>
│ ├── public/<br>
│ ├── src/<br>
│ │ ├── assets/ <br>
│ │ ├── components/ <br>
│ │ ├── App.jsx <br>
│ │ ├── main.jsx <br>
│ │ └── App.css <br>
│ ├── index.html <br>
│ ├── vite.config.js <br>
│ ├── package.json <br>
│ └── vercel.json <br>
│<br>
├── server/ <br>
│ ├── controllers/ <br>
│ │ ├── authController.js<br>
│ │ ├── contactController.js<br>
│ │ └── noteController.js<br>
│ ├── middleware/ <br>
│ │ └── authMiddleware.js<br>
│ ├── models/<br>
│ │ ├── Contact.js<br>
│ │ ├── Note.js<br>
│ │ └── User.js<br>
│ ├── routes/ <br>
│ │ ├── authRoute.js<br>
│ │ ├── contactRoutes.js<br>
│ │ └── noteRoute.js<br>
│ ├── app.js<br>
│ ├── package.json <br>
│ └── LICENSE<br>
│<br>
├── .gitignore<br>
└── README.md<br>



---

## ⚙️ Installation  

### 1. Clone the Repository  
```bash
git clone https://github.com/your-username/syncnote.git
cd syncnote
```

### 2. Project Setup Guide

#### a. Backend Setup (server)

```bash
cd server
npm install

```

#### b. .env file setup (server)

```bash
MONGO_URI=your_mongodb_atlas_url
JWT_SECRET=your_secret_key
PORT=5000

```
#### c. Run backend
```bash
nodemon app.js
```

### d. Frontend Setup

```bash
npm install
```

### e. Run frontend
```bash
npm run dev
```







