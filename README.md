# Todo Summary Assistant 📝

A full-stack MERN app that helps you manage to-dos, generate summaries using OpenAI, and send those summaries to a Slack channel.

---

## 🚀 Features

- Add, edit, and delete to-do items.
- View a list of current to-dos.
- Click a button to:
- Summarize all pending todos using OpenAI GPT.
- Send the summary to a configured Slack channel.

---

## 🛠 Tech Stack

- **Frontend**: React, Axios, CSS
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **LLM Integration**: OpenAI GPT-3.5-Turbo
- **Slack**: Incoming Webhook
- **Hosting (Optional)**: Vercel (Frontend), Render/Supabase (Backend)

---

## 🔧 Setup Instructions

### 1. Clone the repo

```
git clone https://github.com/yourusername/todo-summary-assistant.git
cd todo-summary-assistant 
```
### 2. Install backend dependencies
```
   npm install
```
### 3. Install frontend dependencies
```
    cd client
    npm install
```
### 4. Create a .env file in the root folder
```
    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    OPENAI_API_KEY=your_openai_key_here
    SLACK_WEBHOOK_URL=your_slack_webhook_url_here
 ```
### 5. Start the backend
```
    npm run dev
```
### 6. Start the frontend
```
    cd client
    npm run dev
    Now open: http://localhost:5173
```

---

### 🔐 OpenAI Setup
1. Go to: https://platform.openai.com/account/api-keys

2. Create a free API key

3. Paste it into your .env file as OPENAI_API_KEY

---

### 💬 Slack Setup
1. Go to: https://api.slack.com/apps

2. Create a new app → Enable "Incoming Webhooks"

3. Generate a webhook URL

4. Paste it in .env as SLACK_WEBHOOK_URL

