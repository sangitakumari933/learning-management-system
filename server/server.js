import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./configs/mongodb.js";
import { clerkWebhooks } from "./controllers/webhooks.js";

//initialize express
const app = express();

//connect to database
await connectDb();

//middlewares

app.use(cors());


app.post("/clerk", express.json(), clerkWebhooks, (req, res) => { 
    // 3. Runs only if next() is called
    console.log("Route reached");
    res.send("data sent");
  });

//routes
app.get("/", (req, res) => {
  res.send("API working");
});

//Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
