import { NextResponse } from 'next/server';
import { Pool } from '@neondatabase/serverless'

export const runtime = 'edge';

export async function GET(request) {
  const client = new Pool({ connectionString: process.env.DATABASE_URL })
  const result = await client.query('SELECT * FROM User')

  return NextResponse.json(result, { status: 200 })
}