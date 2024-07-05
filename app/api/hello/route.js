export async function GET() {
    const message = { greeting: 'Hello, World!' };
  
    return new Response(JSON.stringify(message), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  