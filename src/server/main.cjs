const express = require("express");
const ViteExpress = require("vite-express");
const morgan = require("morgan");


const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", require("../server/api/index.cjs"));
app.use("/auth", require("../server/auth/index.cjs"));

const PORT = process.env.PORT || 3000;
ViteExpress.listen(app, PORT, () =>
  console.log("Server is listening on port 3000...")
);
