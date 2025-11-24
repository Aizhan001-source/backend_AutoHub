import app from "./app.js";
import { connectDB, sequelize } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

await connectDB();

sequelize.sync({ alter: true })  
  .then(() => {
    console.log("Database synced");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error("Error syncing database:", err);
  });
