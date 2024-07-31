import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req) {
  try {
    const { subscription, notificationTime } = await req.json();
    const dataDir = path.join(process.cwd(), 'data');
    const dataPath = path.join(dataDir, 'notifications.json');

    try {
      // Ensure the directory exists
      await fs.mkdir(dataDir, { recursive: true });

      // Check if the file exists
      await fs.access(dataPath);
    } catch (error) {
      // If the file doesn't exist, initialize it with an empty array
      await fs.writeFile(dataPath, JSON.stringify([]));
    }
      
    const data = await fs.readFile(dataPath, 'utf-8');
    const notifications = JSON.parse(data);

    notifications.push({ subscription, notificationTime });
    await fs.writeFile(dataPath, JSON.stringify(notifications, null, 2));

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error handling POST request:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export function GET(req) {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
