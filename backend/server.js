const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { loginRouter } = require("./routes/login");
const { postsRouter } = require("./routes/posts");

const app = express();
const port = 8000;

app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(
  cors({
    origin: "localhost:3000", // Be cautious in production, use specific domains instead of '*'
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Allow credentials (cookies)
  })
);

app.get("/", (req, res) => {
  res.send("working");
});

app.use("/api/login", loginRouter);
app.use("/api/posts", postsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
