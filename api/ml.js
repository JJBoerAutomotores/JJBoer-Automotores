export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'Missing url' });
  try {
    const response = await fetch(decodeURIComponent(url));
    const text = await response.text();
    res.status(200).send(text);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
