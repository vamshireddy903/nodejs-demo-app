const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>CI/CD Node App</title>
      <style>
        body {
          background: linear-gradient(135deg, #667eea, #764ba2);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: white;
          text-align: center;
          padding-top: 100px;
        }
        h1 {
          font-size: 3rem;
        }
        p {
          font-size: 1.2rem;
          margin-top: 20px;
        }
        .container {
          background-color: rgba(255, 255, 255, 0.1);
          padding: 40px;
          border-radius: 15px;
          display: inline-block;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 CI/CD Node.js App</h1>
        <p>Successfully Deployed via GitHub Actions & DockerHub</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
