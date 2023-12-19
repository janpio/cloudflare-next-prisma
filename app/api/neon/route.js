import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client/edge'
import { PrismaNeon } from '@prisma/adapter-neon'
import { Pool } from '@neondatabase/serverless'

export const runtime = 'edge';

export async function GET(request) {
  const client = new Pool({ connectionString: process.env.DATABASE_URL })
  const adapter = new PrismaNeon(client)
  const prisma = new PrismaClient({ adapter })

  const users = await prisma.user.findMany()
  // const users = []

  return NextResponse.json(users, { status: 200 })
}