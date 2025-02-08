```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // Add this line to handle OPTIONS requests
  if (req.method === 'OPTIONS') {
    res.setHeader('Allow', 'GET, POST, OPTIONS');
    res.status(200).end();
    return;
  }

  res.status(200).json({ name: 'John Doe' });
}
```