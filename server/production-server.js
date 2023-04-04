const express = require('express');
const app = express();
const path = require("path");

const PORT = 8080;
const distPath = path.join(__dirname, "..", "dist");

app.use(express.static(distPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => console.log(`The app is available at http://localhost:${PORT}\n`));
