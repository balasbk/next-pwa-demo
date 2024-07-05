import fs from 'fs';
import path from 'path';

export async function POST(req) {
  const date = new Date();
  const data = { date: date.toISOString() };

  const filePath = path.join(process.cwd(), 'data', 'date.json');

  // Ensure the data directory exists
  fs.mkdirSync(path.dirname(filePath), { recursive: true });

  // Write the date to the JSON file
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  return new Response(JSON.stringify({ message: 'Date written successfully', data }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
