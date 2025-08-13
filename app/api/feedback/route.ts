// app/api/feedback/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const type = (searchParams.get('type') || 'image') as 'image' | 'video'

    const assets = await prisma.mediaAsset.findMany({
      where: { page: 'aib', section: 'feedback', type },
    })

    return NextResponse.json(assets)
  } catch (err) {
    console.error('GET /api/feedback failed:', err)
    return NextResponse.json({ error: 'DB unavailable' }, { status: 500 })
  }
}
