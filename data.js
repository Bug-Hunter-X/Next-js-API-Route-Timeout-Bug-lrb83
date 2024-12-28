```javascript
// pages/api/data.js
export default async function handler(req, res) {
  // This will cause an error if the request takes too long
  await new Promise(resolve => setTimeout(resolve, 5000)); 

  res.status(200).json({ text: 'Hello' });
}
```