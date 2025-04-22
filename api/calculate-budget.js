module.exports = (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { totalBudget } = req.body;

  if (!totalBudget || typeof totalBudget !== "number") {
    return res.status(400).json({ error: "Invalid or missing totalBudget" });
  }

  const breakdown = {
    flights: totalBudget * 0.3,
    hotels: totalBudget * 0.4,
    rentalCars: totalBudget * 0.15,
    tours: totalBudget * 0.15,
  };

  res.status(200).json({ success: true, budget: breakdown });
};
