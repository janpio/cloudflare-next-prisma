import { Pool } from 'pg'

export const runtime = 'edge'

export async function GET(request) {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })

  const result = await pool.query('SELECT $1::text as name', ['brianc'])

  const json = JSON.stringify(result.rows[0].name)
  return new Response(json);
}