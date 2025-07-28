import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const type = searchParams.get('type') || 'image'

  const assets = await prisma.mediaAsset.findMany({
    where: {
      page: 'aib',
      section: 'feedback',
      type: type as 'image' | 'video',
    },
  })

  return NextResponse.json(assets)
}
