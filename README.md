# 🤖 Zonilla ; AI-Integrated Chat App

![React](https://img.shields.io/badge/React-17.x-blue.svg)
![FastAPI](https://img.shields.io/badge/FastAPI-0.10x-cyan.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas_or_Local-green.svg)
![Status](https://img.shields.io/badge/Status-Inactive-red)

Zonilla AI Chat App is a full-stack conversational AI application that enables users to chat with an intelligent assistant. It features a **React** frontend, **FastAPI** backend, and **MongoDB** for persisting conversation history and user data.

---

## 📋 Table of Contents

1. 🚀[Quick Start](#-quick-start)
2. ✨[Highlights](#-highlights)
3. ⚙️[Prerequisites](#️-prerequisites)
4. 📥[Installation & Setup](#-installation--setup)
5. 🧭[Project Structure](#-project-structure)
6. 🔧[Usage & API Endpoints](#-usage--api-endpoints)
7. 📦[Dependencies](#-dependencies)
8. ⚒️[Customization & Extensions](#%EF%B8%8F-customization--extensions)
9. 🐛[Troubleshooting](#-troubleshooting)
10. 📫[Contact & License](#-contact--license)

---

## 🚀 Quick Start

```bash
git clone https://github.com/04yashgautam/zonilla-ai-chat-app.git

# Backend setup
cd zonilla-ai-chat-app/backend
python -m venv venv
source venv/bin/activate     # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload

# Frontend setup
cd ../frontend
npm install
npm start
```

Frontend runs at **[http://localhost:3000](http://localhost:3000)**, backend at **[http://localhost:8000](http://localhost:8000)**.

---

## ✨ Highlights

* 🧠 Seamless AI conversation interface powered by FastAPI and React
* 🗃️ Persist chat sessions, prompts & responses using MongoDB
* 🔁 Dynamic streaming of AI responses (via WebSockets or long polling)
* 🛠️ Stateless server architecture for easy scaling and deployment

---

## ⚙️ Prerequisites

* Python 3.8+
* Node.js 14+ & npm or yarn
* MongoDB (Atlas or local deployment)
* Git

---

## 📥 Installation & Setup

1. **Clone the repo:**

   ```bash
   git clone https://github.com/04yashgautam/zonilla-ai-chat-app.git
   ```

2. **Backend Setup:**

   ```bash
   cd zonilla-ai-chat-app/backend
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   export MONGO_URL="mongodb://localhost:27017"
   uvicorn main:app --reload
   ```

3. **Frontend Setup:**

   ```bash
   cd ../frontend
   npm install
   npm start
   ```

Access the application at **[http://localhost:3000](http://localhost:3000)**.

---

## 🧭 Project Structure

* **backend/** – FastAPI server, models, and MongoDB connection logic
* **frontend/** – React client with chat UI and integration logic
* **shared/** (optional) – DTOs, schemas or constants shared across frontend and API

---

## 🔧 Usage & API Endpoints

### Backend REST endpoints:

* `POST /api/chat`: send user message → returns AI response
* `GET /api/history`: fetch saved chat sessions
* `DELETE /api/history/{session_id}`: delete conversation by session ID

### Frontend Features:

* Interactive chat interface with streaming replies
* Session management: users can view or delete previous chats
* Responsive, mobile-friendly layout

---

## 📦 Dependencies

**backend/requirements.txt:**

```
fastapi>=0.70.0
uvicorn[standard]>=0.18.0
motor>=3.1.0           # MongoDB driver (or ODMantic)
pydantic>=1.9.0
python-dotenv
```

**frontend/package.json (partial):**

```json
{
  "dependencies": {
    "react": "^17.0.0",
    "axios": "^0.24.0",
    "react-router-dom": "^6.x",
    "react-scripts": "latest"
  }
}
```

---

## ⚒️ Customization & Extensions

* Integrate OpenAI or other LLM APIs for dynamic response generation
* Add authentication (JWT-based session handling)
* Use WebSocket for real-time response streaming
* Extend frontend with voice assistant or file-to-AI features
* Containerize entire app with Docker + Docker Compose for streamlined deployment

---

## 🐛 Troubleshooting

* **MongoDB connection issues** → check `MONGO_URL`
* **CORS errors** → configure `CORSMiddleware` in FastAPI
* **Frontend errors** → ensure correct Node.js and npm versions
* **Port conflicts** → default ports: backend `8000`, frontend `3000`; adjust if needed

---

## 📫 Contact & License

Built by **Yash Gautam**. Reach me via [GitHub](https://github.com/04yashgautam) for feedback or collaboration ideas.

Licensed under the **MIT License**.
⭐ If you find this useful, please star the repo!

---

