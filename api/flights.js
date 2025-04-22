export default async function handler(req, res) {
  const { origin = "LHR", destination = "KEF", currency = "usd" } = req.query;

  const token = "2352229ce17e3f55dda5315050907762";
  const url = `https://api.travelpayouts.com/v2/prices/latest?origin=${origin}&destination=${destination}&currency=${currency}&token=${token}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch flights", details: err });
  }
}
