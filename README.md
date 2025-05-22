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


---

## 🔧 Setup Instructions

### 1. Clone the repo
``` 
git clone https://github.com/yourusername/todo-summary-assistant.git
cd todo-summary-assistant
```
### 2. Install backend dependencies
npm install

### 3. Install frontend dependencies
cd client
    npm install

### 4. Create a .env file in the root folder
PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    OPENAI_API_KEY=your_openai_key_here
    SLACK_WEBHOOK_URL=your_slack_webhook_url_here

### 5. Start the backend
npm run dev

### 6. Start the frontend
cd client
    npm run dev
    Now open: http://localhost:5173


---

###  OpenAI Setup
1. Go to: https://platform.openai.com/account/api-keys

2. Create a free API key

3. Paste it into your .env file as OPENAI_API_KEY

---
### Requirements:
- **OpenAI API key** with active credits for AI summarization.
- Sign up at [OpenAI Platform](https://platform.openai.com/) to get your own API key.
- **Note**: You must use your own OpenAI API key to run this project, as the provided one may not work due to usage limits or security reasons.

---

### Slack Setup
- Go to Slack API:

- Visit Slack API.

- Create a New App:

- Click Create New App.

- Select From Scratch.

- Choose an app name and your Slack workspace.

- Enable Incoming Webhooks:

- Under Add features and functionality, click Incoming Webhooks.

- Toggle the Activate Incoming Webhooks switch to "On".

- Generate Webhook URL:

- Click Add New Webhook to Workspace.

- Choose the Slack channel where you want to send the summary.

- After selecting the channel, click Allow.

- Copy the generated Webhook URL.

- Update Your .env File:

- Open the .env file in your project and paste the Webhook URL like this:

SLACK_WEBHOOK_URL=your-slack-webhook-url-here

- Test the Slack Integration:

- Once the webhook is set up and the .env file is updated, the app will send summaries to the specified Slack channel.