import express from "express";

import router from "./routes/visitor.routes.js";

const app = express();
app.use(express.json());

app.use("/", router)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Listening on port 3000"));
