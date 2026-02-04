require("dotenv").config();   // FIRST
const connectDB = require("./config/db");
const app = require("./app");

connectDB();

app.listen(process.env.PORT, () => {
  console.log("Server running on", process.env.PORT);
});
