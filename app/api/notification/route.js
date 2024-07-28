// app/api/notification/route.js

import webPush from 'web-push';
import { NextResponse } from 'next/server';

webPush.setVapidDetails(
  `mailto:${process.env.WEB_PUSH_EMAIL}`,
  process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY,
  process.env.WEB_PUSH_PRIVATE_KEY
);

export async function POST(request) {
  try {
    const { subscription } = await request.json();

    await webPush.sendNotification(
      subscription,
      JSON.stringify({ title: 'Hello Web Push', message: 'Your web push notification is here!' })
    );

    return NextResponse.json({ message: 'Notification sent successfully' });
  } catch (err) {
    console.error('Error sending notification:', err);

    if (err.statusCode) {
      return new NextResponse(err.body, {
        status: err.statusCode,
        headers: err.headers,
      });
    }

    return NextResponse.json({ message: 'Failed to send notification' }, { status: 500 });
  }
}
