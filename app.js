const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const userRoutes = require("./routes/userRoutes");
app.use(bodyParser.json()); // Middleware untuk parsing JSON


app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
