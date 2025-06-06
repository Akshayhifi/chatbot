const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/chat', (req, res) => {
  const msg = req.body.message.toLowerCase();
  let reply = "Sorry, I didn't understand that.";

  if (msg.includes("hello")) reply = "Hi! How can I help you?";
  else if (msg.includes("your name")) reply = "I'm your chatbot assistant.";
  else if (msg.includes("time")) reply = new Date().toLocaleTimeString();
  else if (msg.includes("bye")) reply = "Goodbye!";

  res.json({ reply });
});

app.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});
