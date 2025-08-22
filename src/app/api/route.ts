import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ message: "Hello from api" });
}

export async function POST(request: Request) {
  const data = await request.json();
  const { name } = data;
  return NextResponse.json({ message: `Hello ${name} from api` });
}

// export async function HEAD(request: Request) {}
// export async function PUT(request: Request) {}
// export async function DELETE(request: Request) {}
// export async function PATCH(request: Request) {}
