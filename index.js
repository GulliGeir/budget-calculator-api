const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("Budget Calculator API is running");
});

// Budget calculation example (just dummy data for now)
app.post("/calculate-budget", (req, res) => {
  const { totalBudget } = req.body;

  const breakdown = {
    flights: totalBudget * 0.3,
    hotels: totalBudget * 0.4,
    rentalCars: totalBudget * 0.15,
    tours: totalBudget * 0.15,
  };

  res.json({ success: true, budget: breakdown });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
