# Next.js API Route Timeout Bug

This repository demonstrates a timeout issue in Next.js API routes and a solution using a worker.

Next.js API routes have a built-in timeout of 15 seconds. If a request takes longer than this, it results in a timeout error, which impacts the application's reliability.  This example shows how to exceed that limit and demonstrates a proper fix.

## Bug

The `pages/api/data.js` file contains a simple API route that introduces a 5-second delay using `setTimeout`.  When the delay exceeds the Next.js timeout, the request will fail.

## Solution

The solution is to run this API call in a worker.  Refer to the `pages/api/dataSolution.js` file.  This approach will offload the task and prevent the Next.js server from timing out the request.