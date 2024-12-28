```javascript
// pages/api/dataSolution.js
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const response = await fetch('https://your-worker-url.com/api/data', { //Replace with your actual worker url
      method: 'POST',
      body: request.body
    });
    return NextResponse.json(await response.json())
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to process request.' }, { status: 500 });
  }
}
```