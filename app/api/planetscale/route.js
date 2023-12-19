import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client/edge'
import { PrismaPlanetScale } from '@prisma/adapter-planetscale'
import { Client } from '@planetscale/database'

export const runtime = 'edge';
 
export async function GET(request) {
  const client = new Client({ url: process.env.DATABASE_URL })
  const adapter = new PrismaPlanetScale(client)
  const prisma = new PrismaClient({ adapter })

  const users = await prisma.user.findMany()

  return NextResponse.json(users, { status: 200 })
}