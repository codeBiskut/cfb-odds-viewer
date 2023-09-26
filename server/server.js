// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB (you'll need to replace the URL with your own)
// mongoose.connect('mongodb://localhost:27017/cfb-odds', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
